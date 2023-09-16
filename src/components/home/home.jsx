import React, { useEffect, useState } from 'react'
import Cart from '../cart/cart'

function Home() {
    const [courses, setCourses]=useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0);
    const [totalCostHr, setTotalCostHr] = useState(0);

useEffect(()=>{
    fetch('courses.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
},[]);

const selectCourse=(course)=>{
    const isSelected=selectedCourses.find((item)=>item.id==course.id);
    let hours=course.reading_time
    let money=course.price
    if(isSelected){
        alert("You have already added the Course")
    }
    else{
        selectedCourses.forEach((item)=>{
            hours=hours+item.reading_time
            money=money+item.price
        });
        if(hours>20){
            alert("Sorry! You've run out of Credit hours");
        }
        else{
            setTotalMoney(money)
            setTotalCostHr(hours)
            setSelectedCourses([...selectedCourses,course])
        }
    }

}
    return (
        <>
        <div className='flex w-11/12 gap-2 mx-auto'>
        <div className='w-2/3 grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center text-2xl font-bold mx-4'> 
            {
                courses.map(course=> <div key={course.id} className='bg-slate-100 shadow-xl p-3 rounded-xl mb-8 grid'>
                <div>
                <div><img src={course.img} alt="" /></div>
                <h3 className='text-xl font-bold text-center'>{course.title}</h3>
                <p className='text-sm font-normal'>{course.description}</p>
                <div className='flex justify-between items-center my-4 px-3'>
                    <div><p className='text-sm'>price:<span>{course.price}</span>$</p></div>
                    <div className='flex justify-between items-center'>
                        <div className='ml-2 w-4 h-4'><img src="/Frame.png" alt="" /></div>
                        <div><p className='text-sm'>Credit:<span id='creditTime'>{course.reading_time}</span>hrs</p></div>
                    </div>
                </div>
                <div className='flex-grow'></div>
                </div>
                <div onClick={()=>selectCourse(course)} className='mb-0 w-full flex mx-auto justify-center items-end'><button className='w-full flex mx-auto justify-center items-end text-white text-center bg-[#2F80ED]'>Select</button></div>
            </div>)
            }
            </div>
            <div className='w-1/4 text-center text-xl font-bold bg-slate-100 shadow-xl p-3 rounded-xl'>
                <Cart
                    selectedCourses={selectedCourses}
                    totalMoney={totalMoney}
                    totalCostHr={totalCostHr}
                ></Cart>
            </div>

        </div>
        </>
    )
}

export default Home
