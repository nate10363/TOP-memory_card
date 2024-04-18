/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/CardContainer.css'
import Characters from './Characters';

const names = [
    'Aang',
    'Katara',
    'Sokka',
    'Toph Beifong',
    'Iroh',
    'Appa', 
    'Momo',
    'Ozai',
    'Zhao',
    'Long Feng'
]

function generateRandomNumber(length) {
    return Math.floor(Math.random() * length)
}

function CardContainer({ count, bestScore, handleCount, handleBestScore }) {
    const [isGameOver, setIsGameOver] = useState(false);

    function handleIsGameOver() {
        setIsGameOver(true);
    }

    let namesArr = [...names];

    return (
        <>
            <div>
            {
                isGameOver 
                    ? 
                        <div id='completion-div'>
                            <div id='completion-msg'>game set finish</div>
                            <button
                                id='replay-btn'
                                onClick={() => location.reload()}
                            >Replay</button>
                        </div>
                    : null
            }
            </div>
            <div id='card-container'>

                {names.map(() => {
                    const findName = namesArr.splice(generateRandomNumber(namesArr.length), 1)
                    return <div key={findName}>
                            <div className='card'>
                                <Characters 
                                    count={count} 
                                    bestScore={bestScore} 
                                    handleCount={handleCount} 
                                    handleBestScore={handleBestScore} 
                                    isGameOver={isGameOver} 
                                    handleIsGameOver={handleIsGameOver} 
                                    characterName={findName} 
                                    key={findName}
                                />
                            </div>
                        </div>
                })}
            </div>
        </>
    )
}

export default CardContainer