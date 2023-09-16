import React from 'react'

function Cart({selectedCourses,totalMoney,totalCostHr}) {
    return (
        <>
        <div className='mb-4 text-[#2F80ED]'>
            Credit Hours Remaining <span>{20-totalCostHr}</span> hrs  
        </div>
         <hr />

         <div>
            <h3>Courses Name</h3>
            <ol className='list-decimal text-sm px-4'>
            {
             selectedCourses.map(course=>(
             <li key={course.id}>{course.title}</li>
            ))
         }
            </ol>
         </div>
         <hr />
         <div className='my-4 text-base font-semibold'><p>Total Credit Hours : <span>{totalCostHr}</span></p></div>
         <hr />
         <div><p>Total Price : <span>{totalMoney}</span>$ USD</p></div>
        </>
    )
}

export default Cart
