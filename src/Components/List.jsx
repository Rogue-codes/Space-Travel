import React from 'react'

const List = ({id,title,active,setSelected}) => {
    return (
        <div>
            <li className={active ? "dot active" : "dot"} onClick={()=>{setSelected(id)}}>
                {title}
            </li>
        </div>
    )
}

export default List
