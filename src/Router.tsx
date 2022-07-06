import { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Options from './Pages/Options'
import Play from './Pages/Play'
import Ranking from './Pages/Ranking'

type RouterProps = {
    children: ReactElement
}

function Router(props: RouterProps) {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            {props.children}
                            <Home />
                        </>
                    } />
                <Route
                    path='/ranking'
                    element={
                        <>
                            {props.children}
                            <Ranking />
                        </>
                    } />
                <Route path='/Play'
                    element={
                        <>
                            {props.children}
                            <Play />
                        </>
                    } />
                <Route path='/Options' element={
                    <>
                        {props.children}
                        <Options />
                    </>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router