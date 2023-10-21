import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-c.png'
import { Link } from 'react-router-dom'
import  AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss';
import Loader from 'react-loaders'
const Home = () =>{
    const [ letterClass, setLetterClass ] = useState('text-animate')
    const nameArray = [ 'a', 'r', 'l', 'o', 's' ]
    const jobArray = ['S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r','.']
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    
    return(
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1> 
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span> 
                        <br />
                        <span className={`${letterClass} _13`}>I</span> 
                        <span className={`${letterClass} _14`}>'m</span> 
                        <img src= { LogoTitle } alt='developer'/>
                        <AnimatedLetters letterClass={letterClass}  strArray={nameArray} idx={15}/>
                        <br />
                        <AnimatedLetters letterClass={letterClass}  strArray={jobArray} idx={20}/>
                    </h1>
                    <h2> FullStack Developer / React / NodeJS / Python / Java</h2>
                    <Link className='flat-button' to='/contact'>CONTACT ME</Link>
                </div>
                <Logo/>
            </div>
            <Loader type="pacman" />
        </>

    )
}

export default Home