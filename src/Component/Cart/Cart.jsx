/* eslint-disable react/jsx-key */
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Course from "../Course/Course";
import swal from 'sweetalert';


const Cart = () => {
    
    const [courses, setCourse] = useState([]);
    const [selectCart, setSelectCart] =useState([]);
    const [renaining, setRemaining] = useState(0);
    const [totalCredits, setTotalCredits] = useState(0);
    const [price , setPrice] = useState(0);
    

    useEffect(()=>{
        fetch('./cart_data.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])

   const handleAddSelect = (course) => {
    const isExist = selectCart.find((cartTitle) => cartTitle.id == course.id);
    let count = course.credits;
    let totalPrice = course.price;
    
    if (isExist) {
       return;
    } 
    else { 
        selectCart.forEach((cartTitle) => {
            count = count + cartTitle.credits;
            totalPrice = totalPrice + cartTitle.price;
        });
        const totalRemaining = 20 - count;
        if (count > 20){
            
            swal("Oppss!", "You can't add any more Course!", "warning");
        }
        else{
            setPrice(totalPrice);
            setTotalCredits(count);
            setRemaining(totalRemaining);
            setSelectCart([...selectCart, course]);
        }
        
    }
     
   };
   
    return (
        <div className="flex" >
           
           <div className="md: w-3/4 grid grid-cols-3 gap-4 ">
           {
                courses.map(course => <Course key={course.id} handleAddSelect={handleAddSelect} course={course}></Course>)
            }
           </div>
           
           <div className="md: w-1/4 bg-slate-100 mt-8 rounded-xl ml-3 h-fit shadow-xl sticky top-0">
                <h3 className="m-6 pb-4 text-[#2F80ED] text-[18px] font-bold border-b-2 border-indigo-500">Credit Hour Remaining {renaining} hr</h3>
                <h2 className="text-xl font-bold pl-6 pb-5">Course Name:</h2>
                {
                    selectCart.map((course) =>(
                    
                        <li className="text-[16px] font-normal text-[#1C1B1B99] pl-6 list-decimal pb-1">{course.title}</li>
                    
                    ))
                }
               <h4 className="border-y-2 border-indigo-500 font-medium text-[16px] m-6 py-4">Total Credit Hour : {totalCredits} </h4>
                <h4 className="font-semibold text-[16px] mx-6  mb-5">Total Price : {price} USD</h4>
            </div>
        </div>
    );
};

export default Cart;