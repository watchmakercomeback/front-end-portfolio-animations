import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I'm a passionate full-stack developer with a strong focus on
crafting high-quality web applications. My expertise spans a wide
spectrum of technologies, including JavaScript, Node.js, TypeScript,
Python, and React, enabling me to efficiently and precisely execute
end-to-end projects.
          </p>
          <p align="LEFT">
          I have extensive experience working with American
and international companies, providing me with a global
perspective and a solid understanding of the needs and
expectations of a diverse market.
          </p>
          <p>
          I have a track record of successfully building websites from the
            ground up, showcasing my ability to create compelling online
            platforms.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={ faPython } color="#EFD81D" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={ faNodeJs } color="#3C873A" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={ faCss3 } color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={ faReact } color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About