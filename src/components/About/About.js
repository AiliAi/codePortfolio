import "./about.scss";
import React from "react";
import DataFetch from "../DataFetch/DataFetch";
import { BsDot } from 'react-icons/bs';
import { AiOutlineSmile } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import Gradient from '../Gradient/Gradient';
import FadeInSection from '../FadeInSection/FadeInSection';


const About = () => {
    const url = "/data/about.json";
    const aboutData = DataFetch(url);

    //icons object
    let shape = {
        about: <AiOutlineInfoCircle className="icon" />,
        me: <AiOutlineSmile className="icon" />,
        keywords: <BiCodeAlt className="icon" />,
        plans: <AiOutlineStar className="icon" />
    }

    /**
     * Goes trough about.json data
     */
    const aboutResult = aboutData?.data.map((about, index) => {
        let aboutTitle = about.title;
        let aboutContent = about.content;
        let aboutShape = about.shape;
        let aboutLinkName = about.linkName;
        let aboutLink = about.link;

        /**
         * Prints out right icon that corresponds with json data
         */
        let myShape = Object.keys(shape).map(key => {
            if (key !== aboutShape) {
                return shape[key.aboutShape];
            }
            return shape[key];
        });

        /**
         * if json text contains "/", splits from "/" and adds dot or else add empty row
         */
        if (index === 2) {
            aboutContent = aboutContent.split('/').map((step, index) => index === 0 ? <div className="card-dots">{step}</div> : <div className="card-dots"> <BsDot className="icon-dot" />{step}</div>);
        } else {
            aboutContent = aboutContent.split('/').map((step, index) => index === 0 ? <div>{step}</div> : <div className="next-line"> <br />{step}</div>);
        }

        return (
            <FadeInSection key={aboutTitle}>
                <div className="header-container">
                    <div className="icon-wrapper">
                        {myShape}
                        <Gradient />
                    </div>
                    <div id="title-wrapper">
                        <h2 className="card-title">{aboutTitle}</h2>
                    </div>
                </div>
                <div className="card-content paragraph">
                    {aboutContent}
                    {aboutLink &&
                        <a href={aboutLink} alt={aboutTitle} className="git-link" rel="noreferrer" target="_blank">{aboutLinkName}</a>
                    }
                </div>
            </FadeInSection>
        );
    });

    return (
        <div className="about cards-container">
            {aboutResult}
        </div>
    )
};

export default About;