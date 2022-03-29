import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import GlobalStyle from './theme/globalStyles'
import MovieSelection from './components/movie-selection'
import SessionSelection from './components/session-selection'
import SeatSelection from './components/seat-selection'
import Success from './components/success'

function App() {
    const [purchaseData, setPurchaseData] = useState({
        ids: []
    })
 
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MovieSelection/>}/>
                    <Route path='/sessoes/:idFilme' element={<SessionSelection/>}/>
                    <Route path='assentos/:idSessao' element={<SeatSelection {...{purchaseData, setPurchaseData}}/>}/>
                    <Route path='sucesso' element={<Success {...purchaseData}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

const root = document.querySelector('.root')
ReactDOM.render(<App />, root)

