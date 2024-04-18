/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';

function Characters({ count, bestScore, characterName, handleCount, handleBestScore, isGameOver, handleIsGameOver }) {
    const [data, setData] = useState("");
    const [isFound, setIsFound] = useState(false);

    useEffect(() => {
        if (count >= JSON.parse(localStorage.getItem('bestScore')) ) {
            handleBestScore(count);
            localStorage.setItem('bestScore', JSON.stringify(bestScore));
        }
    }, [bestScore, count, handleBestScore])

    function handleIsFound() {
        if (!isFound) {
            handleCount();
            return setIsFound(true);
        }
        
        handleBestScore(JSON.parse(localStorage.getItem('bestScore')))
        return handleIsGameOver();
    }

    const getData = async () => {
        const resp = await fetch(`https://api.sampleapis.com/avatar/characters`);
        const json = await resp.json();
        const name = json.find(item => item.name == characterName);
        setData(name.image);
    }

    useEffect(() => {
        getData();
    }, []);


    const index = data.indexOf('revision');
    const strippedImg = data.slice(0, index);

    return (
        <pre onClick={isGameOver ? null : handleIsFound}>
            <img src={strippedImg} alt="" />
        </pre>
        
  )
}

export default Characters