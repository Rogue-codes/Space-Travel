import React from 'react'

const CrewList = ({id,text,active,setSelected}) => {
    return (
        <div>
            <li className={active ? "dotted activate" : "dotted"} onClick={()=>{setSelected(id)}}>
                {text}
            </li>
            
        </div>
    )
}

export default CrewList
