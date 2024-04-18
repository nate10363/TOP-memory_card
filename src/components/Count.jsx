/* eslint-disable react/prop-types */
import '../styles/Score.css'

function Count({ count }) {
    return (
        <div>
            <p className="score">your count is <span className='bolden'>{count}</span></p>
        </div>
    )
}

export default Count