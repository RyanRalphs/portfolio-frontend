import React, {useEffect} from 'react'
import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading'
import ScrollService from '../../utils/scrollService'
import animations from '../../utils/animations'
import "./About.css"

export default function About(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== screen)
        {
            return
        }
        animations.animations.fadeInScreen(props.id)
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const screenConstants = {
        description: "Hi! I'm Ryan. I am a proud father, reckless mountain biker, competitive gamer and a keen software engineer. Starting out as a QA tester with no experience in Software, I have spent the last 5 years learning and refining my skills. My first coding language was PHP, and while I do love Laravel, I spend a lot more of my time writing JavaScript, especially node.js. This is what all Apps featured on this website will be wrote in with a React front end.",
        highlights: {
            bullets: [
                "I have expereince with multiple Testing Frameworks and Styles",
                "I have experience with noSQL and SQL databases",
                "I have worked in Agile frameworks for over 4 years",
                "I have created and maintained PHP packages for BDD automation",
                "I have worked as a QA, a Developer, an SDET and a Developer in Test",
                "I have experience in Microservice arcitecture and with REST APIs"
            ],
            heading: "Quick Points"
        }
    }

    const renderHighlights = () => {
        return(screenConstants.highlights.bullets.map((value, i) => (
            <div className='highlight' key={i}>
                <div className='highlight-blob'></div>
                    <span>{value}</span>
            </div>
        )))
    }
    return (
        <div className='about-main screen-container' id={props.id}>
            <div className='about-parent'>
                <ScreenHeading title={'About Me'} subHeading={'PHP/Laravel Developer gone JavaScript...'}/>
                    <div className='about-card'>
                        <div className='about-profile'></div>
                        <div className='about-details'>
                            <span className='about-description'>{screenConstants.description}</span>
                            <div className='about-highlights'>
                                <div className='highlight-heading'>

                                    <span>{screenConstants.highlights.heading}</span>
                                </div>
                                {renderHighlights()}
                            </div>
                            <div className='about-options'>
                            <button className='btn primary-btn'> Contact Me
                        </button>
                        <a href="#" download="Ryan-Ralphs.pdf">
                            <button className="btn highlighted-btn">
                                Get CV
                            </button>
                            </a>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    )
}