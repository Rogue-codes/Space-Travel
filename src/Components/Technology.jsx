import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import TechList from './TechList'
import { launchVechile,SPACEPORT,SPACECAPSULE} from './TechnoData'

const Technology = () => {
    const [selected, setSelected] = useState('a')
    const [tech, setTech] = useState([])
    const List = [{
        id:"a",
        text:"1"
    },
    {
        id:"b",
        text:"2"
    },
    {
        id:"c",
        text:"3",
    },

    ]

    useEffect(()=>{
        switch (selected) {
            case "a":
                setTech(launchVechile)
                break;
                case "b":
                    setTech(SPACEPORT)
                    break;
                    case "c":
                        setTech(SPACECAPSULE)
                        break;
        
            default:
                setTech(launchVechile)
                break;
        }

    },[selected])
    return (
        <div className='technology'>
            <Nav/>
            <div className="meet"><p><span className='one'>01</span>MEET YOUR CREW</p></div>
            {tech.map((d)=>(<div className="tech-container">
                <img src={d.photo} alt={d.h1} />
            </div>))}
            <div className="techList">
                {List.map((d)=>(<TechList text={d.text} id={d.id} active={selected === d.id} setSelected={setSelected} set />))}
            </div>
            {tech.map((d)=>(<div className="rank">
                <p>{d.h3}</p>
                <h1>{d.h1}</h1>
            </div>))}
            {tech.map((d)=>(<div className="about">
                <p>{d.p}</p>
            </div>))}

            {/* <div className="tech-list">
                <div className="desk-techList">
                    {List.map((d)=>(<TechList text={d.text} id={d.id} active={selected === d.id} setSelected={setSelected} set />))}
                </div>
            </div> */}

            {tech.map((d)=>(<div className="tab-tech-container">
                <img src={d.photo} alt={d.h1} />
                    </div>))}
                <div className="tab-techList">
                {List.map((d)=>(<TechList text={d.text} id={d.id} active={selected === d.id} setSelected={setSelected} set />))}
                </div>
                {tech.map((d)=>(<div className="tab-rank">
                <p>{d.h3}</p>
                <h1>{d.h1}</h1>
                </div>))}
                {tech.map((d)=>(<div className="tab-about">
                <p>{d.p}</p>
            </div>))}

            <div className="desktop-tech">
                <div className="desk-left">
                    <div className="desk-techList">
                    {List.map((d)=>(<TechList text={d.text} id={d.id} active={selected === d.id} setSelected={setSelected} set />))}
                    </div>
                    <div className="cont">
                    {tech.map((d)=>(<div className="desktech-rank">
                    <p>{d.h3}</p>
                    <h1>{d.h1}</h1>
                    </div>))}
                    {tech.map((d)=>(<div className="desktech-about">
                    <p>{d.p}</p>
                    </div>))}
                    </div>
                </div>

                <div className="desk-right">
                    {tech.map((d)=>(<div className="desktech-container">
                    <img src={d.photo2} alt={d.h1} />
                    </div>))}
                </div>
            </div>

        

        </div>
    )
}

export default Technology
