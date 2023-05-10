import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeLine lineColoe="#3e497a">
                <VerticalTimeLineElement 
                    className="vertical-timeline-element--education" 
                    date=""
                    iconStyle={{background: "#3e497a", color: "#fff"}}>

                    </VerticalTimeLineElement>
            </VerticalTimeLine>
        </div>
    );
}

export default Experience