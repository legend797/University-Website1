import React from "react";
import Banner from "../images/banner2.webp";
import Banner1 from "../images/C1_icon.webp";
import Banner2 from "../images/C2_icon.webp";
import Banner3 from "../images/C3_icon.webp";

const Iuc= () => {
    return(
        
        <section id="IUC" className=" w-full">
        <div className="container w-full h-[500px] 
            flex justify-between items-center mx-auto pt-24 ">
                {/* Text Section */}
                <div className="w-[650px] h-full   flex flex-col justify-center items-ceter">
                <h1 className="w-full font-bold text-[40px] pb-[20px] ">INTERIM UNIVERSITY COUNCIL</h1>
                <p className=" w-full text-lg font-medium mb-[8px] text-justify">&nbsp;&nbsp;&nbsp;As for University of Computer Studies (Maubin), Interim University Council was founded to
become the one which actually represents students, teachers and staffs of this
university; to strive against military dictator with the collaboration of students, teachers and staffs
in harmony; to implement interim education plan so that the CDM students do not pass up their
educational opportunities; and to cooperate with the National Unity Government more effectively.</p>

               
                </div>
                {/* Image Section */}
                <div className="w-[650px] h-full flex justify-end items-center object-cover "> 
                 <img className="w-[579px] h-[288px] " src={Banner}  />
                 </div>
            </div>
            {/* THE CORE COMMITTEE OF IUC */}
            <div className="parentContainer w-full h-[712px] border-t">
                <h1 className="text-[36px] pt-8 font-bold text-center text-[#5415b9]">THE CORE COMMITTEE OF IUC</h1>
                <div className="container  w-[1333px] h-[615px] p-5 mx-auto  flex justify-between items-center">
                    <div className="card w-[350px] h-[470px] p-[20px] bg-white rounded-lg border border-slate-400 shadow-slate-200 shadow-[0_2px_10px_10px] ;">
                        <div className="flex justify-center ">
                        <img className="w-[60px] h-[60px] " src={Banner1} />
                        </div>
                        <h1 className="text-[16px] font-bold text-[#5415b9] my-[6px]">THE ACADEMIC COMMITTEE</h1>
                        <p className="text-[14px]" >The Academic Committee is implementing academic programs for teachers and students. The academic programs include</p>
                        <ul className="list-disc text-[14px] pl-[15px]">
                            <li className="">Capacity building/knowledge sharing programs for teachers</li>
                            <li>Creating courses for undergraduate students</li>
                            <li>Creating extracurricular courses for personal and professional development</li>
                        </ul>
                        <p className="text-[14px]" >The academic committee manages the academic affairs of the students. The academic committee also develops the academic policies to be applied for the interim as well as future academic programs.</p>
                    </div>
                    <div className="card  w-[350px] h-[430px] p-[20px]  rounded-lg border border-slate-400 shadow-slate-200 shadow-[0_2px_10px_10px] ;">
                        
                        <img className=" w-[80px] mx-auto -translate-y-16" src={Banner2} />
                        <div className="-translate-y-12">
                        <h1 className="text-[20px]  font-bold text-[#5415b9] mb-4  text-center">THE ACADEMIC COMMITTEE</h1>
                        <p className="text-[16px]" >The Academic Committee is implementing academic programs for teachers and students. The academic programs include</p>
                        <ul className="list-disc text-[14px] pl-[15px]">
                            <li className="">Capacity building/knowledge sharing programs for teachers</li>
                            <li>Creating courses for undergraduate students</li>
                            <li>Creating extracurricular courses for personal and professional development</li>
                        </ul>
                        <p className="text-[14px]" >The academic committee manages the academic affairs of the students. The academic committee also develops the academic policies to be applied for the interim as well as future academic programs.</p>
                    
                        </div>
                       </div>
                    <div className="card w-[350px] h-[470px] p-[20px] bg-white rounded-lg border border-slate-400 shadow-slate-200 shadow-[0_2px_10px_10px] ;">
                        <div className="flex justify-center ">
                        <img className="w-[60px] h-[60px] " src={Banner3} />
                        </div>
                        <h1 className="text-[16px] font-bold text-[#5415b9] my-[6px]">THE ACADEMIC COMMITTEE</h1>
                        <p className="text-[14px]" >The Academic Committee is implementing academic programs for teachers and students. The academic programs include</p>
                        <ul className="list-disc text-[14px] pl-[15px]">
                            <li className="">Capacity building/knowledge sharing programs for teachers</li>
                            <li>Creating courses for undergraduate students</li>
                            <li>Creating extracurricular courses for personal and professional development</li>
                        </ul>
                        <p className="text-[14px]" >The academic committee manages the academic affairs of the students. The academic committee also develops the academic policies to be applied for the interim as well as future academic programs.</p>
                    </div>
                   
                </div>
            </div>
        </section>
        
    )
}
export default Iuc;