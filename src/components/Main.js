import React from 'react'

const Main = (props) => {
    return (
        <div>
            {props.list.map(el=><p>{el}</p>)}
        </div>
    )
}

export default Main
