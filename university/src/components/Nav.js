import React from "react";


function NavBar() {
    return(
        <nav>
            <div className="bg-[#f3f3f3] fixed flex justify-between items-center w-full h-[80px]  border-b-1 border-gray-600 border-solid">
                <div className="ml-[40px] font-bold text-blue-950 text-[30px]">Logo</div>
                <div className="navLinkCon mr-[70px] ">
                <a className="px-4 font-[500]  text-[18px]" href="#Home">HOME</a>
                <a className="px-4 font-[500] text-[18px]" href="#About">ABOUT</a>
                <a className="px-4 font-[500] text-[18px]" href="#">COURSES</a>
                <a className="px-4 font-[500] text-[18px]" href="#" >IUC</a>
                <a className="px-4 font-[500] text-[18px]" href="#" >NEW&EVENTS</a>
                </div>

            </div>
        </nav>
    );
    }
    export default NavBar;