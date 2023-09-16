import React from 'react'

function Cart() {
    return (
        <>
        <div className='mb-4 text-[#2F80ED]'>
            Credit Hours Remaining <span id='credit-hrs'></span> hrs  
        </div>
         <hr />

         <div>
            <h3>Courses Name</h3>
            <ol className='list-decimal text-sm px-4'>
            {
            
         }
            </ol>
         </div>
         <hr />
         <div className='my-4 text-base font-semibold'><p>Total Credit Hours :<span></span></p></div>
         <hr />
         <div><p>Total Price :<span></span>$ USD</p></div>
        </>
    )
}

export default Cart
