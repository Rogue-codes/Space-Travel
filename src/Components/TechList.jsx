import React from 'react'

const TechList = ({text,id,active,setSelected}) => {
    return (
        <div className='listcont'>
            <li className={active ? "numb actively" : "numb"} onClick={()=>{setSelected(id)}}>
                {text}
            </li>
        </div>
    )
}

export default TechList
