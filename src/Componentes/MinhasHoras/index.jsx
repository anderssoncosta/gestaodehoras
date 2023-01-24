import styled from "styled-components"
import ContainerHorasTrabalhadas from "../HorasTrabalhadas";

const Informacoes = styled.div`
    position: absolute;
    background-color: #FFF;
    height: 90%;
    width: 85%;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);

    P{
        font-weight: 700;
        margin: 20px 10px 0;
        font-size: 16px;
    }
    
`;

const InputHoras = styled.div`
    display: flex;
    align-items: center;

    input{
        border-radius: 5px;
        padding: 10px 20px;
        text-decoration: none;
        text-align: center;
        font-size: 16px;
        width: 135px;
        border: none;
        background-color: #EEEEEE;
        margin: 10px 10px;
    }
    button{
        border: none;
        width: 40px;
        height: 40px;
        background-color: #FFF;
        font-size: 30px;
        text-align: center;
    }
`;

const MinhasHoras = () => {
    return(
        <Informacoes>
        
            <p>MINHAS HORAS</p>
           
            <InputHoras>
                <input type="date" name="" id="" />
                <input type="time" name="Entrada" id=""  />
                <input type="time" name="Saída" id=""  />
                <input type="time" name="Entrada" id=""  />
                <input type="time" name="Saída" id=""  />
                <button>+</button>
            </InputHoras>

            <ContainerHorasTrabalhadas/>
        
        </Informacoes>
    )
}

export default MinhasHoras