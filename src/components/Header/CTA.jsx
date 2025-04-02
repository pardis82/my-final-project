import React from 'react'
<<<<<<< HEAD
import CV from '../../assets/MyResume.pdf'
=======
import CV from '../../assets/cv.pdf'
>>>>>>> c431386c96ee1a11643d6c6d47bb5bd52930b78b

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Donwload CV</a>
            <a href="#contact" className='btn btn-primary'>Wanna chat</a>
        </div>
    )
}

export default CTA