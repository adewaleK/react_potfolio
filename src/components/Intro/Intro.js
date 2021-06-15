import React from 'react'
import './Intro.css'


function Intro() {
    return (
        <div className="introduction">
            <div className="my-pic">
                <img src="https://lh3.googleusercontent.com/proxy/RsyHXd9LliJzO8Mz7mRN6ytUSAQaSwLEGasG1VQlLwPj674l4CILUGUfo_MtxULxEvx8HuPG21flLL6lLLyAZz2boD4Ek8StD_RnAu0lyzZFa0x_4A" />  
            </div>
            <div className="intro-text">
                <h3>Hello there, I'm</h3>
                <h1>Kamilu Adewale</h1>
                <p><span>Fullstack </span>Developer</p>
            </div>
        </div>
    )
}

export default Intro
