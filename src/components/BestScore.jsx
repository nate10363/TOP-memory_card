/* eslint-disable react/prop-types */
import '../styles/Score.css'

function BestScore({ bestScore }) {
    return (
        <div>
            <p className="score">your best score is <span className='bolden'>{bestScore}</span></p>
        </div>
    )
}

export default BestScore