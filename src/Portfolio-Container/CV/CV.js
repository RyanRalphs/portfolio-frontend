import React, { useState } from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/scrollService";
import animations from "../../utils/animations";
import "./CV.css"

export default function CV(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== screen) {
            return
        }
        animations.animations.fadeInScreen(props.id)
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const CVHeading = (props) => {
        return (
            <div className="cv-heading">
                <div className="cv-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="cv-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className="cv-heading-description">
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        )
    }

    const cvBullets = [
        { label: "Current Role", logo: "work-history.svg" },
        { label: "Previous Roles", logo: "projects.svg" },
        { label: "Skills", logo: "programming-skills.svg" },
        { label: "Tech Obsessions", logo: "interests.svg" }
    ]

    const programmingSkillDetails = [
        { skill: "JS", ratingPercentage: 90 },
        { skill: "Node.js", ratingPercentage: 80 },
        { skill: "TS", ratingPercentage: 90 },
        { skill: "Golang", ratingPercentage: 80 },
        { skill: "Laravel", ratingPercentage: 80 },
        { skill: "PHP", ratingPercentage: 85 },
        { skill: "noSQL", ratingPercentage: 75 },
        { skill: "MySQL", ratingPercentage: 80 },
        { skill: "Socket.io", ratingPercentage: 80 },
        { skill: "Python", ratingPercentage: 95 },
        { skill: "Docker", ratingPercentage: 80 },
        { skill: "AWS", ratingPercentage: 60 },
    ]

    const CVDetails = [

        <div className="cv-screen-container" key="work-history">
            <CVHeading heading={"Iceland Foods"} subHeading={"Senior Software Engineer"} fromDate={"March 2023"} toDate={"Present"} />
            <div className="history-description"><span class="cv-description-text">
                Automation focused Polyglot Engineer, working with a variety of languages and frameworks to deliver solutions.
                <br />
            </span>
            </div>
        </div>,


        <div className="cv-screen-container" key="work-past">
            <CVHeading heading={"Iceland Foods"} subHeading={"Software Engineer"} fromDate={"Sept 2022"} toDate={"March 2023"} />
            <CVHeading heading={"Iceland Foods"} subHeading={"Software Engineer in Test"} fromDate={"May 2022"} toDate={"Sept 2022"} />
            <CVHeading heading={"CityFibre"} subHeading={"Software Engineer in Test"} fromDate={"Oct 2021"} toDate={"May 2022"} />


            
        </div>,
        <div className="cv-screen-container programming-skills-container" key="programming-skills">
            {programmingSkillDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                </div>
            ))}
        </div>,

        <div className="cv-screen-container" key="interests">
            <br />  <br />
            <CVHeading heading="BDD" description="The hidden benefits of BDD are more valuable than you can imagine. Inspiring collaboration, providing living documentation and allowing reusability."/>
            <CVHeading heading="Webdriver.io" description="Webkit browsers are fantastic, but there's nothing better than the real thing. Webdriver is a fantastic framework for testing on real browsers using Gecko and Chromedriver."/>
            <CVHeading heading="Golang" description="Being a backend person at heart, Golang has found a place in my toolkit as THE backend language to use. It's 'batteries included' standard library, concurrency model and type safety are incredible and provde confidence when building microservices." />
        </div>,
    ]

    const handleCarousel = (index) => {
        let offsetHeight = 360
        let newCarouselOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" }
        }
        setCarouselOffsetStyle(newCarouselOffset)
        setSelectedBulletIndex(index)
    }

    const getBullets = () => {
        return cvBullets.map((bullet, index) => (
            <div onClick={() => handleCarousel(index)} className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"} key={index}>
                <img className="bullet-logo" src={require(`../../assets/CV/${bullet.logo}`)} alt="Ooops!" />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ))
    }

    const getCVScreen = () => {
        return (
            <div style={carouselOffsetStyle.style} className="cv-details-carousel">
                {CVDetails.map((CVDetail) => CVDetail)}
            </div>
        )
    }


    return (
        <div className="cv-main screen-container" id={props.id || ""}>
            <div className="cv-content">
                <ScreenHeading title={"Professional"} subHeading={"A more formal insight"} />
                <div className="cv-card">
                    <div className="cv-bullets">
                        <div className="bullets-container">
                            <div className="bullet-icons"> </div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="cv-bullet-details">{getCVScreen()}</div>
                </div>
            </div>
        </div>
    )
}