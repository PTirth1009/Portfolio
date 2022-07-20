import React from "react";
import './style.css'



const Project = ({ projectItem }) => {
    const { name, description, skills, github } = projectItem;

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <ul className="skill">
                        {skills.map((skill) => {
                            return <li>{skill}</li>
                        })}
                    </ul>
                    <a href={github} className="btn btn-primary">GitHub</a>
                </div>
            </div>
        </>
    );
}

//<h6 className="card-skill"> {skills.map((skill)=>{return skill})}</h6>

export default Project;