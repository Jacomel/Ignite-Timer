import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./Styles";

export function Home() {

    function handleSubmit(event) {
       event.target.task.value
    }
    
    return (
        <HomeContainer>
            <form onSubmit={handleSubmit} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                     id="task" 
                     name="task"
                     list="task-suggestions"
                     placeholder="Dê um nome para seu projeto"
                    />

                    <datalist id="task-suggestions">
                        <option value="Pojeto 1" />
                        <option value="Projeto 2" />
                        <option value="Projeto 3" />
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput 
                      type="number" 
                      id="minutesAmount"
                      placeholder="00"
                      step={5}
                      min={5}
                      max={60}
                    />

                    <span>minutos.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton  type="submit">
                 <Play size={24}/>
                 Começar 
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}