import styled from "styled-components"

const HorasTrabalhadas = styled.div`
    bottom: 0;
    background-color: #EEEEEE;
    position: absolute;
    height: 80px;
    width: 100%;
    display: flex;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
`;

const QtdHoras = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`;


const ContainerHoras = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    
    .titulo{
        margin: 0 20px;
    }
    span{
        font-size: 25px;
        font-weight: 700;
    }
    `;

const ContainerQtdHoras = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    
    .titulo_qtd{
        margin: 0 10px;
    }
    
    span{
        font-size: 25px;
        font-weight: 700;
    }
    `;

const ValorHora = styled.div`
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;

    input{
        color: #000;
        border: none;
        border-radius: 5px;
        text-align: center;
        width: 197px;
        height: 46px;
    }
`;

const InfoValor = styled.div`
    display: flex;
    margin-right: 20px;
    align-items: center;
    .titulo_valor_hora{
        margin: 0 10px;
    }
    span{
        font-size: 25px;
        font-weight: 700;
    }
`;


const ContainerHorasTrabalhadas = () => {
    return(
        <HorasTrabalhadas>
                <QtdHoras>
                    <ContainerHoras>
                        <p className="titulo">Dias Trabalhados:</p>
                        <span>5</span>

                    </ContainerHoras>
                    <ContainerQtdHoras>
                         <p className="titulo_qtd">Quantidades de horas:</p>
                         <span>30h</span>
                    </ContainerQtdHoras>
                   
                </QtdHoras>
                <ValorHora>
                    <input type="text" placeholder="Valor da hora" />
                    <InfoValor>
                        <p className="titulo_valor_hora">Quantidades de horas:</p>
                        <span>R$ 300,00</span>

                    </InfoValor>
                </ValorHora>
        </HorasTrabalhadas>
    )

}

export default ContainerHorasTrabalhadas