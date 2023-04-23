import React from "react";
import Banner from "../images/banner.jpg";


function Home() {
    return(
        <section id="Home">
            <div>
            <img className="w-full h-[550px] object-cover" src={Banner}></img>

            </div>
        </section>
    );
}
export default Home;