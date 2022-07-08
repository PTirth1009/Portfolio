import React from "react";
import './style.css';
const Homepage = () => {
    return (
        <>
            <div className="main">
                <h1>Hi, I am <span className="name text-primary">Patel Tirth</span></h1>
                <h4 className=" mt-3"> A Fronted & Backend Engineer</h4>
                <p className="desc">I'm a freelance devloper, speciallzing in web-devlopment. I'm creating interactive application on the Web.
                    I have Backend Skill NodeJs.
                </p>
                <div className="button">
                    <a href="" className="link"><span typeof="button" className="btn btn-info">Resume</span></a>
                    <a href="https://github.com/" target="_blank" className="link">Github</a>
                    <a href="https://in.linkedin.com/" target="_blank" className="link">LinkedIn</a>
                </div>
                       
            </div>
            
        </>
    );
}

export default Homepage;