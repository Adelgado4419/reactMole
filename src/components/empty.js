import React, {useEffect} from 'react'
import MoleHillImg from '../images/molehill.png'

const EmptyContainer = (props) => {

    useEffect (() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHillImg}/>
        </div>
    )
}

export default EmptyContainer