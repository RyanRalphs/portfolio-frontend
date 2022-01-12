import React, { useState } from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/scrollService";
import animations from "../../utils/animations";

export default function CV(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({})

    const CVHeading = (props) => {
        <div className="cv-heading">
            <div className="cv-main-heading">
                <div className="heading-bullet">
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
        </div>
    }

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== screen) {
            return
        }
        animations.animations.fadeInScreen(props.id)
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    return (
        <div className="cv-main screen-container" id={props.id}>
            <div className="cv-content">
                <ScreenHeading title={"CV"} subHeading={"A more formal insight"} />
            </div>


        </div>
    )
}