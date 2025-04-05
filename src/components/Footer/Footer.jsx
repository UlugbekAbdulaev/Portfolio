import React from 'react'

function Footer() {
    return (
        <div id='Footer' className='container mx-auto text-white text-center pt-12'>
            <div>
                <p className='text-4xl font-medium'>Contact me</p>
                <p className='text-4xl pt-5 font-medium bg-gradient-to-r from-fuchsia-600 to-cyan-400  bg-clip-text text-transparent'>Feel free to contact me if you have any suggestions or questions.</p>
            </div>
            <div className='flex justify-center gap-5 py-10'>
            <a
            href="https://instagram.com/ulug_lucky" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer hover:text-amber-500"
          >
         <img src="/icon/instagram.png" alt="" className='w-[50px] h-[50px]' />
          </a>
                
                
                <a
            href="https://t.me/Ulug0900" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer hover:text-amber-500"
          >
          <img src="/icon/telegram.png" alt="" className='w-[50px] h-[50px]'/>
          </a>

         <div className='bg-white rounded-full'>
         <a
            href="mailto:ulu235032@gmail.com"
            className="hover:cursor-pointer hover:text-amber-500"
          >
           <img src="/icon/email.png" alt="" className='w-[50px] h-[50px]'/>
          </a>
         </div>

          
               
            </div>
            <p className='text-2xl'>Designet & Developed by Abdullayev Ulugbek</p>
            <p className='text-gray-500 pb-5'>2025 | A.Ulugbek All rigth reserved.</p>
        </div>
    )
}

export default Footer