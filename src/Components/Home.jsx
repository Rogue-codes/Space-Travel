import React from 'react'
import Nav from './Nav'
import '../mobile.css'
import '../tablet.css'
import '../desktop.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main>
            <Nav/>
            <div className="content">
                <p className='first'>
                SO, YOU WANT TO TRAVEL TO
                </p>

                <h1>SPACE</h1>

                <p className='last'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>


            <div className="circle-container">
                <Link to="/destination">
                    <div className="circle">
                        <h1 className='explore'>EXPLORE</h1> 
                    </div>
                </Link>
            </div>

            <div className="desktop">
                <div className="desk-content">
                    <p className='desk-first'>
                        SO, YOU WANT TO TRAVEL TO
                    </p>

                    <h1>SPACE</h1>

                    <p className='desk-last'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
             </div>

                <Link to="/destination">
                        <div className="desk-circle">
                            <h1 className='desk-explore'>EXPLORE</h1> 
                        </div>
                </Link>
                

            </div>
            
        </main>
    )
} 

export default Home
