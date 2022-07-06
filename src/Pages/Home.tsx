import { Box, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import BotaoHome from '../Components/BotaoHome'
import ContainerFlex from '../Components/ContainerFlex'
function Home() {

    return (
        <>
            <ContainerFlex>

                <BotaoHome to='play'>Jogar</BotaoHome>

                <BotaoHome to='ranking'>Classificação</BotaoHome>

                <BotaoHome to='options'>Opções</BotaoHome>

            </ContainerFlex>
        </>
    )
}

export default Home