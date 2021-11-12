import logo from '../assets/logo.svg'
import { FiMenu } from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai'
import { useTransition, animated } from 'react-spring'
import { useState } from 'react'
import {NavLink} from "react-router-dom";
import { Link } from 'react-router-dom';

const Nav = () => {
    const [menu,setMenu] = useState(false)
    const maskTransitions = useTransition(menu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: menu,
        delay: 200,
        // config: config.molasses,
        // onRest: () => set(!show),
      })

      const menuTransitions = useTransition(menu, {
        from: { opacity: 0, transform: "translateX(100%)"},
        enter: { opacity: 1, transform: "translateX(20%)" },
        leave: { opacity: 0, transform: "translateX(100%)" },
        reverse: menu,
        delay: 200,
        // config: config.molasses,
        // onRest: () => set(!show),
      })
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <span className='line'></span>
            <div className="navItems">
                <ul>
                    <li><NavLink to="/"><span className='number'>00 </span>HOME</NavLink></li>
                    <li><NavLink to="/destination"><span className='number'>01  </span>DESTINATION</NavLink></li>
                    <li><NavLink to="/crew"><span className='number'>02 </span>CREW</NavLink></li>
                    <li><NavLink to="/technology"><span className='number'>03 </span>TECHNOLGY</NavLink></li>
                </ul>
            </div>

            <span><FiMenu className='icon' onClick={()=>setMenu(!menu)} /></span>

            {maskTransitions(
                    (styles, item) => item && <animated.div style={styles} className="firstAnimate" onClick = {()=>setMenu(false)}>
                        
                    </animated.div>
                  )
            }

            {
                menuTransitions(
                    (styles, item) => item && <animated.div style={styles} className="animate">
                        <span><AiOutlineClose className='close' onClick={()=>setMenu(false)}/></span>
                                      
            
                                <li onClick={()=>setMenu(false)}>
                                    <Link to="/"><span>00</span> HOME</Link>
                                </li>

                                <li>
                                    <Link to="/destination"><span>01</span>DESTINATION</Link>
                                </li>

                                <li>
                                    <Link to="/crew"><span>02</span>CREW</Link>
                                </li>

                                <li>
                                    <Link to="/technology"><span>03</span>TECHOLOGY</Link>
                                </li>   
                        
                    </animated.div>
                )
            }
        </nav>
    )      
}

export default Nav
