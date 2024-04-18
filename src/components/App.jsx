import '../styles/App.css'
import { useEffect, useState } from 'react'
import Count from './Count'
import CardContainer from './CardContainer'
import BestScore from './BestScore'

function App() {
    const [count, setCount] = useState(0);
    const [bestScore, setBestScore] = useState(JSON.parse(localStorage.getItem('bestScore')));

    function handleCount() {
        setCount(count + 1);
    }

    function handleBestScore(newValue) {
        setBestScore(newValue);
    }

    useEffect(() => {
        handleBestScore(JSON.parse(localStorage.getItem('bestScore')))
    }, [bestScore])
   
    return (
        <div id='app-container'>
            <h1 id='header-title'>Memri Card</h1>
            <div id='scores-container'>
                <Count count={count} handleCount={handleCount} />
                <BestScore bestScore={bestScore}/>
            </div>

            <CardContainer count={count} bestScore={bestScore} handleCount={handleCount} handleBestScore={handleBestScore} />

            <button 
                className="bn632-hover bn27"
                onClick={() => {
                    setBestScore(0);
                    handleBestScore(0);
                    localStorage.setItem('bestScore', 0);
                    location.reload();
                }}
            >
                Reset Best Score
            </button>

        </div>
    )
}

export default App