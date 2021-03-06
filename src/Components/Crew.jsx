import {useEffect, useState} from 'react'
import CrewList from './CrewList'
import Nav from './Nav'
import { One, Two, Three, Four } from './CrewData'
import '../desktop.css'

const Crew = () => {
    const [selected, setSelected] = useState("one")
    const [crew, setCrew] = useState([])
    const List = [
        {
            id:"one",
            text:""
        },
        {
            id:"two",
            text:""
        },
        {
            id:"three",
            text:""
        },
        {
            id:"four",
            text:""
        },
    ]
    useEffect(()=>{
        switch (selected) {
            case "one":
                setCrew(One)
                break;

            case "two":
                setCrew(Two)
                break;

            case "three":
                setCrew(Three)
                break;

            case "four":
                setCrew(Four)
                break;
                
        
            default:
                setCrew(One)
                break;
        }

    },[selected])
    return (
        <div className='crew'>
            <Nav/>
            <div className="meet"><p><span className='one'>01</span>MEET YOUR CREW</p></div>
            {crew.map((d)=>(<div className="crew-container">
                <img src={d.pic} alt='' />
            </div>))}
            <div className="whiteDot">
                {List.map((d)=>(<CrewList text={d.text} id={d.id} active={selected === d.id} setSelected={setSelected} />))}
            </div>

            {crew.map((d)=>(<div className="rank">
                <p>{d.rank}</p>
                <h1>{d.name}</h1>
            </div>))}
            {crew.map((d)=>(<div className="about">
                <p>{d.word}</p>
            </div>))}

            {/* tablet view */}
            <div className="flex">
                <div className="flex-top">
                {crew.map((d)=>(<div className="flex-rank">
                <p>{d.rank}</p>
                <h1>{d.name}</h1>
                </div>))}


                {crew.map((d)=>(<div className="flex-about">
                <p>{d.word}</p>
                </div>))}

                <div className=" flex-whiteDot">
                {List.map((d)=>(<CrewList text={d.text} id={d.id} active={selected === d.id} setSelected={setSelected} />))}
                </div>
                </div>
            </div>

            <div className="desktopcrew">
                <div className="desk-right">
                    {crew.map((d)=>(<div className="desk-rank">
                    <p>{d.rank}</p>
                    <h1>{d.name}</h1>
                    </div>))}
                    {crew.map((d)=>(<div className="desk-about">
                    <p>{d.word}</p>
                    </div>))}
                    <div className="desk-whiteDot">
                    {List.map((d)=>(<CrewList text={d.text} id={d.id} active={selected === d.id} setSelected={setSelected} />))}
                    </div>

                   
                </div>

                <div className="desk-left">
                        {crew.map((d)=>(<div className="desk-crew-container">
                        <img src={d.pic} alt='' />
                        </div>))}
                </div>
            </div>

            


        </div>
    )
}

export default Crew
