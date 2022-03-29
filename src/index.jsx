import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MovieSelection from './components/movie-selection'
import SessionSelection from './components/session-selection'
import GlobalStyle from './theme/globalStyles'

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MovieSelection/>}/>
                    <Route path='/sessoes/:idFilme' element={<SessionSelection/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

const root = document.querySelector('.root')
ReactDOM.render(<App />, root)

