import React from 'react';
import Project from './Project';
//import './style.css'

const projectData = [{
    id: 1,
    name: "Project 1",
    description: "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    skills: ['Css', 'JavaScript', 'React'],
    github: "https://codesandbox.io/s/competent-sara-lvq2tn?file=/src/App.js",
    linkedIn: "https://www.linkedin.com/"
},
{
    id: 2,
    name: "Project 2",
    description: "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    skills: ['Css', 'JavaScript', 'React'],
    github: "https://github.com/",
    linkedIn: "https://www.linkedin.com/"
},
     {   id: 3 ,
         name:"Project 3",
         description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
         skills: ['Css','JavaScript','React'],
         github:"https://github.com/",
         linkedIn:"https://www.linkedin.com/"
     },
    //  {   id: 4 ,
    //      name:"Project 4",
    //  description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    //      skills:['Css','JavaScript','React'],
    //      github:"https://github.com/",
    //      linkedIn:"https://www.linkedin.com/"
    //  }
];

const ProjectC = () => {
    return (
        <>
            <h1 className="text-primary">Projects</h1>
            <div className="projectContainer">
                {
                    projectData.map(projectItem => {
                        return <Project projectItem={projectItem} />
                    })
                }
            </div>
        </>

    )
}

export default ProjectC;