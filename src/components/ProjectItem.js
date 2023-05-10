import React from "react";

function ProjectItem({ image, name, id }) {
    // const navigate = useNavigate();
    // return (
    // <div className="projectITem"
    // onClick={() => {
    //     navigate("/project/" + id);
    // }}>
    //     <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
    //     <h2> {name} </h2>
    // </div>
    // );
    return (
        <div className="projectItem">
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h2> {name} </h2>            
        </div>
    )
}

export default ProjectItem;