import React from "react";
import './style.css';

const Contact = () =>{
    return (
        <>
         <div className="cn">
             <h1 className="text-primary">Contact</h1>
             <div className="dev">
             <a href="mailto:tirth1082@gmail.com" target={"_blank"} className="lk"><span typeof="button" className="btnn btnn-outline bg-info text-dark"> Email</span></a>
             <a href="whatsappto: 7698065402" target={"_blank"}  className="lk"><span typeof="button" className="btnn btnn-outline bg-info text-dark">msg</span></a>
             </div>
             
         </div>
        </>
    );
}


export default Contact;