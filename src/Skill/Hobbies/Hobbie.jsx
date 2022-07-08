import React from "react";
import './style.css';

const Hobbies = () =>{
    return(<>
          <h1 className=" heading text-primary">Hobbies</h1>
            <ul class="skills__listn">
                <li class="skills__list-itemn  btn btn--plain bg-info">Cricket</li>
                <li class="skills__list-itemn  btn btn--plain bg-info">Reading</li>
                <li class="skills__list-itemn  btn btn--plain bg-info">Travelling</li>
                <li class="skills__list-itemn  btn btn--plain bg-info">Music</li>
                
            </ul>
    </>); 
} 

export default Hobbies;