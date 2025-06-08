import {
  createContext,
  ReactNode,
  useState,
  useReducer,
  useEffect,
} from "react";
import { Cycle, cycleReducer } from "../reducer/cycle/Reducer";
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentAsFinishedAction,
} from "../reducer/cycle/Action";
import { differenceInSeconds } from "date-fns";

interface CreateCycleDate {
  task: string;
  minutesAmount: number;
}

interface CycleContextType {
  cycle: [];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  createNewCycle: (data: CreateCycleDate) => void;
  interruptCurrentCycle: () => void;
  markCurrentCycleAsFinished: () => void;
  setSecondPassed: (seconds: number) => void;
}

export const CycleContext = createContext({} as CycleContextType);

interface CycleContextProviderProps {
  children: ReactNode;
}

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cycleState, dispatch] = useReducer(
    cycleReducer,
    {
      cycle: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@Ignite-Timer:cycle-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );

  const { cycle, activeCycleId } = cycleState;
  const activeCycle = cycle.find((cycle) => cycle.id == activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cycleState);

    localStorage.setItem("@Ignite-Timer:cycle-state-1.0.0", stateJSON);
  }, [cycleState]);

  function setSecondPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentAsFinishedAction());
  }

  function createNewCycle(data: CreateCycleDate) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    dispatch(addNewCycleAction(newCycle));

    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction());
  }

  return (
    <CycleContext.Provider
      value={{
        cycle,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  );
}
