import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import List from './List'
import { Moon,Mars,Titan, Europa } from './DestinationData'

const Destination = () => {
    const [selected, setSelected] = useState('moon')
    const [planet, setPlanet] = useState([])
    const data = [{
        id:"moon",
        title:"Moon"
    },
    {
        id:"mars",
        title:"Mars"
    },
    {
        id:"europa",
        title:"Europa",
    },
    {
        id:"titan",
        title:"Titan",
    }
]
useEffect(()=>{
    switch(selected){
        case "moon":
            setPlanet(Moon)
            break
        case "mars":
            setPlanet(Mars)
            break
        case "titan":
            setPlanet(Titan)
            break 
        case "europa":
            setPlanet(Europa)
            break 
        default:
            setPlanet(Moon)  
    }

},[selected])
    return (
        <div className='destination'>
            <Nav/>
            <div className="title"><p><span className='one'>01</span>Pick your destination</p></div>

            {planet.map((t)=>(<div className="planet-container">
                <img src={t.img} alt={t.head} />
            </div>))}

            <div className="lid">
            {data.map((d)=>(<List title={d.title} active={selected === d.id} setSelected={setSelected} id={d.id} />))}
            </div>

            {planet.map((p)=>(<div className="container">
                <div className="name">
                <h1>{p.head}</h1>
                </div>

                <div className="name2">
                    <p>{p.bod}</p>
                </div>

                <div className="avg">
                    <p>AVG. DISTANCE</p>
                    <h1>{p.dist}</h1>
                </div>

                <div className="travel">
                    <p>EST. TRAVEL TIME</p>
                    <h1>{p.time}</h1>
                </div>
            </div>))}

            <div className="destination-desk">
                {planet.map((t)=>(<div className="desk-planet-container">
                    <img src={t.img} alt={t.head} />
                </div>))}

                <div className="desky">
                    <div className="desk-lid">
                        {data.map((d)=>(<List title={d.title} active={selected === d.id} setSelected={setSelected} id={d.id} />))}
                    </div>

                    {planet.map((p)=>(<div className="desk-container">
                        <div className="desk-name">
                            <h1>{p.head}</h1>
                        </div>

                        <div className="desk-name2">
                            <p>{p.bod}</p>
                        </div>
                        <div className="deskbottom">
                            <div className="desk-avg">
                                <p>AVG. DISTANCE</p>
                                <h1>{p.dist}</h1>
                            </div>

                            <div className="desk-travel">
                                <p>EST. TRAVEL TIME</p>
                                <h1>{p.time}</h1>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default Destination
