import React from "react";
import './style.css';
import Hobbies from "./Hobbies/Hobbie";
import Contact from "./Conatact/Contact";
const Skill = () => {
    return (
        <>
            <h1 className="text-primary">skills</h1>
            <ul class="skills__list">
                <li class="skills__list-item btn btn--plain bg-info">HTML</li>
                <li class="skills__list-item btn btn--plain bg-info">CSS</li>
                <li class="skills__list-item btn btn--plain bg-info">JavaScript</li>
                <li class="skills__list-item btn btn--plain bg-info">TypeScript</li>
                <li class="skills__list-item btn btn--plain bg-info">React</li>
                <li class="skills__list-item btn btn--plain bg-info">Redux</li>
                <li class="skills__list-item btn btn--plain bg-info">SASS</li>
                <li class="skills__list-item btn btn--plain bg-info">Material UI</li>
                <li class="skills__list-item btn btn--plain bg-info">Git</li>
                <li class="skills__list-item btn btn--plain bg-info">Node</li>
                <li class="skills__list-item btn btn--plain bg-info">Dart</li>
                <li class="skills__list-item btn btn--plain bg-info">Java</li>
                <li class="skills__list-item btn btn--plain bg-info">Flutter</li>
            </ul>
            <Hobbies />
            <Contact />
        </>
    );
}

export default Skill
