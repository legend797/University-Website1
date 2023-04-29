import React from "react";

const Course= () =>{
    return(
      
        <section id="Course" className="
         w-full h-[500px] flex flex-col justify-center items-center " >
            
                <h1 className="w-full pt-20 mb-8 text-[36px] text-[#5415b9] text-center font-bold">Course Section</h1>
                <div className=" w-4/5 h-[80%] flex justify-between items-center ">
                {/* Vision Statement */}
                    <div className="w-[45%] h-[312px] bg-blue-400 rounded-lg text-left flex flex-col justify-center items-center p-[40px]">
                    
                        <h1 className="w-full text-[30px] mb-[20px] font-bold text-[#5415b9] ">Course</h1>
                        <p className=" w-full text-[16px] font-medium">Coming Soon</p>
                    </div>    
                {/* Mission Statement */}
                    <div className="w-[45%] h-[312px] bg-blue-400 rounded-lg text-left flex flex-col justify-center items-center p-[40px]">
                        <h1 className="w-full text-[30px] mb-[20px] font-bold text-[#5415b9] ">Course</h1>
                        <p className=" w-full text-[16px] font-medium">Coming Soon</p>
                     </div>   
                </div>
            
                
            
        
        </section>
       
        

    )
}
export default Course;