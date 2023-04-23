import React from "react";
import Banner from "../images/banner.jpg"
 

function About() {
    return(
        <section id="About">
            <div className="container bg-red-500 w-full h-[500px] flex justify-between items-center mx-auto ">
                {/* Text Section */}
                <div className="w-[60%] p-9 bg-blue-600">
                <h1 className="font-bold text-[40px] pb-[20px] ">About University Of Computer Studies Maubin</h1>
                <p>University of Computer Studies Maubin (UCSMUB) is one of the computer universities in Myanmar. It is located  Maubin Township, Ayeyarwady Division, Myanmar. UCSMUB is reputed as the Union University as many students from different places of the country come to attend. After the coup de ’tat, along with the establishment of federalism, we are in a transitional period to be an autonomous university.</p>
                </div>
                {/* Logo Section */}
                <div className="w-[400px] h-[300px] flex justify-center items-center object-cover bg-lime-400"> 
                 <img className="w-full h-full" src={Banner} />
                 </div>
            </div>
            <div className="w-full h-auto">
                {/* Vision Statement */}
                <div>
                <h1>VISION STATEMENT</h1>
                </div>
                {/* Mission Statement */}
                <div>
                <h1>MISSION STATEMENT</h1>
                </div>
            </div>
        </section>

    );
}

export default About;