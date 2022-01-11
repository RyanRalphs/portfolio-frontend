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

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const screenConstants = {
        description: "Test desc",
        highlights: {
            bullets: [
                "Test Test Test",
                "Test Test Test",
                "Test Test Test",
                "Test Test Test",
                "Test Test Test",
                "Test Test Test"
            ],
            heading: "test Heading"
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
                <ScreenHeading title={'About Me'} subHeading={'An average Engineer'}/>
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