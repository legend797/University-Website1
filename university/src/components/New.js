import React from "react";
import Banner from "../images/new.jpg";
import Banner2 from "../images/new2.jpg";


const New= () =>{
    return(
        
        <section  id="New" className=" mb-[50px] ">
            
                <h1  className=" w-full text-[36px] text-[#5415b9] font-bold text-center pt-20 mb-8">NEWS & EVENTS</h1>
                {/* <div className="parentContainer w-full h-[1283px] "> */}
                    <div className="container  w-full h-[1243px] flex mx-auto">
                    <div className="w-2/3 box-border h-full  flex flex-wrap justify-between p-5">
                        <div className="w-[47%] border border-slate-400 shadow-[0_5px_5px_5px] shadow-slate-200 mb-6 rounded-xl flex flex-col bg-white relative ">
                            <img className=" rounded-t-xl" src={Banner} />
                            <h1 className="font-bold text-[20px] p-[16px]">Registration Process Timeline</h1>
                            <p className="p-[16px]">Registration ပြုလုပ်ထားသော ကျောင်းသား၊ကျောင်းသူများအနေဖြင့် ၂၀၂၃ ခုနှစ်၊ ဇန်နဝါရီလ(၁၁)ရက်နေ့မှစ၍ သက်ဆိုင်ရာစာသင်နှစ်များတွင် စတင်လေ့လာနိုင်မည်ဖြစ်သည်။</p>
                            <div className="flex justify-end absolute bottom-[16px] right-[16px]">
                            <button className="bg-violet-600 w-[125px] h-[44px] px-4 font-bold text-white rounded-xl ">More Detail</button>
                            </div>
                        </div>
                        <div className="w-[47%] border border-slate-400 shadow-[0_5px_5px_5px] shadow-slate-200 mb-6 rounded-xl flex flex-col bg-white relative">
                            <img className="h-[250px] rounded-t-xl  " src={Banner2} />
                            <h1 className="font-bold text-[20px] p-[16px]">Formal Education အတွက် registration ပြုလုပ်နိုင်ပြီ</h1>
                            <p className="p-[16px]">ဆေးတက္ကသိုလ် - မကွေး ယာယီတက္ကသိုလ်ကောင်စီသည် ကြားကာလ ပုံမှန်အတန်းတင်ပညာရေးကို (၂၀၂၃)ခုနှစ်၊ ဇန်နဝါရီလတွင်စ‌တင်တော့မည်ဖြစ်သည်။ ပုံမှန်အတန်းတင်ပညာရေးတွင် ပါဝင်သင်ကြားလိုသော ကျောင်းသား၊ကျောင်းသူများသည်</p>
                            <div className="flex justify-end absolute bottom-[16px] right-[16px]">
                            <button className="bg-violet-600 w-[125px] h-[44px] px-4 font-bold text-white rounded-xl ">More Detail</button>
                            </div>
                        </div>
                        <div className="w-[47%] border border-slate-400 shadow-[0_5px_5px_5px] shadow-slate-200 mb-6 rounded-xl flex flex-col bg-white relative">
                            <img className=" rounded-t-xl" src={Banner} />
                            <h1 className="font-bold text-[20px] p-[16px]">Registration Process Timeline</h1>
                            <p className="p-[16px]">Registration ပြုလုပ်ထားသော ကျောင်းသား၊ကျောင်းသူများအနေဖြင့် ၂၀၂၃ ခုနှစ်၊ ဇန်နဝါရီလ(၁၁)ရက်နေ့မှစ၍ သက်ဆိုင်ရာစာသင်နှစ်များတွင် စတင်လေ့လာနိုင်မည်ဖြစ်သည်။</p>
                            <div className="flex justify-end absolute bottom-[16px] right-[16px]">
                            <button className="bg-violet-600 w-[125px] h-[44px] px-4 font-bold text-white rounded-xl ">More Detail</button>
                            </div>
                        </div>
                        <div className="w-[47%] border border-slate-400 shadow-[0_5px_5px_5px] shadow-slate-200 mb-6 rounded-xl flex flex-col bg-white relative">
                            <img className="h-[250px] rounded-t-xl  " src={Banner2} />
                            <h1 className="font-bold text-[20px] p-[16px]">Formal Education အတွက် registration ပြုလုပ်နိုင်ပြီ</h1>
                            <p className="p-[16px]">ဆေးတက္ကသိုလ် - မကွေး ယာယီတက္ကသိုလ်ကောင်စီသည် ကြားကာလ ပုံမှန်အတန်းတင်ပညာရေးကို (၂၀၂၃)ခုနှစ်၊ ဇန်နဝါရီလတွင်စ‌တင်တော့မည်ဖြစ်သည်။ ပုံမှန်အတန်းတင်ပညာရေးတွင် ပါဝင်သင်ကြားလိုသော ကျောင်းသား၊ကျောင်းသူများသည်</p>
                            <div className="flex justify-end absolute bottom-[16px] right-[16px]">
                            <button className="bg-violet-600 w-[125px] h-[44px] px-4 font-bold text-white rounded-xl ">More Detail</button>
                            </div>
                        </div>
                       
                       
                    </div>
                    <div className="w-1/3 box-border h-full pl-[40px] pr-[16px]">
                        <h1 className="text-2xl bg-slate-200 mt-[40px] p-[16px] border-b-2 border-violet-500 text-violet-700 font-medium">POPULAR NEWS</h1>
                        <p className="p-[16px] border-b-[1px] border-violet-500 text-violet-700">Formal Education အတွက် registration ပြုလုပ်နိုင်ပြီ</p>
                        <p className="p-[16px] border-b-[1px] border-violet-500 text-violet-700"> Registration Process Timeline</p>
                        <p className="p-[16px] border-b-[1px] border-violet-500 text-violet-700"> Academic Credit System & Framework</p>
                        <p className="p-[16px] border-b-[1px] border-violet-500 text-violet-700"> ဆေးတက္ကသိုလ် - မကွေး၊ ယာယီတက္ကသိုလ်ကောင်စီနှင့် ကျောင်းသား၊ကျောင်းသူများတွေဆုံဆွေးနွေးခဲ့</p>
                    </div>
                </div>
              
        </section>
        

    )
}
export default New;