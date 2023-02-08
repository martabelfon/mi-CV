import React from 'react'
import { useSelector } from 'react-redux';

const Hero = () => {
    const {hero} = useSelector((state) => state.cv.CV);
  return (
    <div>
        {hero.map(her => (
            <ul key={JSON.stringify(her)}>
                <li>{her.name}</li>
            </ul>
        ))}
    </div>
  )
}

export default Hero;