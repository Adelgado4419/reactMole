import Mole from './mole'
import React, {useState} from 'react'
import EmptyContainer from './empty'

const MoleContainer = (props) => {

    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole}
    handleClick={handleClick} /> : <EmptyContainer toggle={setTheMole} />

    return (
    
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer