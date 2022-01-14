import "./works.scss";
import React from "react";
import DataFetch from "../DataFetch/DataFetch";
import { FaLink } from 'react-icons/fa';
import EnterLeftSection from '../EnterLeftSection/EnterLeftSection';
import EnterRightSection from '../EnterRightSection/EnterRightSection';

const Works = () => {
    const url = "/data/works.json";
    const worksData = DataFetch(url);

    /**
     * Goes trough works.json data
     */
    const worksResult = worksData?.data.map((works, index) => {
        let worksTitle = works.title;
        let worksContent = works.content;
        let worksImg = works.image;
        let workslinkToPage = works.linkToPage;
        let worksLinkName = works.linkName;
        let worksLink = works.link;

        /**
         * if json text contains "/", splits from "/" and adds empty row
         */
        worksContent = worksContent.split('/').map(step => <div> <br />{step}</div>);

        /**
         * adds different layout pattern to the work-cards: layout1 or layout2
         */
        if (index % 2 === 0) {
            return (
                <div key={worksTitle} className="layout1">
                    <div className="works-img">
                        <a href={workslinkToPage} alt={worksTitle} rel="noreferrer" target="_blank">
                            <img src={worksImg} alt={worksTitle}></img>
                            <div className="overlay">
                                <div className="text"><FaLink /></div>
                            </div>
                        </a>
                    </div>
                    <div className="works-card">
                        <div className="works-inside">
                            <EnterRightSection key={index}>
                                <h3>{worksTitle}</h3>
                            </EnterRightSection>
                            <div className="paragraph">{worksContent}</div>
                            {worksLink &&
                                <a href={worksLink} alt={worksTitle} rel="noreferrer" target="_blank" className="paragraph">{worksLinkName}</a>
                            }
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div key={worksTitle} className="layout2">
                    <div className="works-card">
                        <div className="works-inside">
                            <EnterLeftSection key={index}>
                                <h3>{worksTitle}</h3>
                            </EnterLeftSection>
                            <div className="paragraph">{worksContent}</div>
                            {worksLink &&
                                <a href={worksLink} alt={worksTitle} rel="noreferrer" target="_blank" className="paragraph">{worksLinkName}</a>
                            }
                        </div>
                    </div>
                    <div className="works-img">
                        <a href={workslinkToPage} alt={worksTitle} rel="noreferrer" target="_blank">
                            <img src={worksImg} alt={worksTitle}></img>
                            <div className="overlay">
                                <div className="text"><FaLink /></div>
                            </div>
                        </a>
                    </div>
                </div>
            );
        }
    });

    return (
        <div className="works">
            <h2>WORKS</h2>
            <div className="works-container">
                {worksResult}
            </div>
        </div>
    )
};

export default Works;