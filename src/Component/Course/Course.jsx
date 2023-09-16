import { data } from "autoprefixer";
import {FaDollarSign, FaBookOpen} from 'react-icons/fa';


const Course = ({course, handleAddSelect}) => {
    const {title, image, paragraph, price, credits } = course;
    

    return (
        <div >
            
          
            
               <div className="mt-8 bg-slate-100 rounded-xl shadow-xl h-[402px] ">
                 <div className="p-4">
                  <img src={image} alt="" />
                    <h1 className="mt-4 text-[18px] font-semibold text-[#1C1B1B]"> {title}</h1>
                    <p className="text-[#1C1B1B99] text-[14px] font-normal mt-3">{paragraph}</p>

                    <div className="flex mt-4">
                        <div className="flex">
                            <button ><FaDollarSign></FaDollarSign></button>
                            <p className="text-[16px] font-medium text-[#1C1B1B99] mx-4">Price : {price}</p>
                        </div>

                        <div className="flex">
                            <button ><FaBookOpen></FaBookOpen></button>
                            <p  className="text-[16px] font-medium text-[#1C1B1B99] ml-4">Credit : {credits}hr</p>
                        </div>

                    </div>
                    <button onClick={()=>handleAddSelect(course)} className="bg-[#2F80ED] hover:bg-[#38639b] w-full mt-6 p-2 text-center text-white font-semibold text-[18px] rounded-[8px]">Select</button>
                  </div>
                 </div>
               
                    
           
        </div>
         
    );
};

export default Course;