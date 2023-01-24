import styled from 'styled-components'
import MinhasHoras from '../MinhasHoras';

const BarraLateral = styled.div`
    display: flex;
    align-items: center;
    width: 260px ;
    height: 100vh;
    background-color: #1E8976;
    
`;

const Texto = styled.div`
    color: #FFFFFF;
    text-align: center;
    transform: rotate(-90deg);
    p{
        font-size: 36px;
    }
    h1{
        font-size: 44px;
    }
`;

const ContainerMinhasHoras = styled.div`
    background-color: #E5E5E5;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    display: inline-flex;
    width: 100%;
`;

const GestaoDeHoras = () => {

    return(
        <Container>
            <BarraLateral>
                <Texto>
                    <p>GESTÃO</p>
                    <h1>DE HORAS</h1>
                </Texto>
            </BarraLateral>

            <ContainerMinhasHoras>
                <MinhasHoras/>
            </ContainerMinhasHoras>
        </Container>

    );
}

export default GestaoDeHoras