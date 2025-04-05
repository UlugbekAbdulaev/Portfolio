import React from 'react'

function page() {
    return (
        <div className='text-white container mx-auto'>
            <div className='grid grid-cols-3 gap-10'>
                <div className='border border-cyan-300 rounded-2xl overflow-hidden text-center px-4 py-5'>
                    <img src="/milliy.jpg" alt="" />
                    <p className='text-2xl pt-3'>Getting orders from customers</p>
                    <p className='pt-2 text-gray-400'>This project is built using React.js as a Single Page Application (SPA). It features a login system where users are redirected either to the chef (oshpaz) or waiter (girgitton) section depending on the entered password.
                        Key tools and libraries used: <br />
                        Vite – Fast build and dev server <br />
                        Tailwind CSS – Utility-first CSS framework <br />
                        Ant Design (Antd) – UI component library <br />
                        React Redux – State management <br />
                        Redux Toolkit – Simplified Redux logic</p> <br />
                    <div className='flex gap-5 justify-center'>
                        <button className='bg-gradient-to-r to-cyan-400 from-fuchsia-600 px-4 py-2 rounded-lg shadow transition-transform duration-300 hover:scale-110'><a href="https://milliy-taomlar-pi.vercel.app
">Live preview</a></button>
                        <button className='border px-4 py-2 rounded-lg transition-transform duration-300 hover:scale-110'><a href="https://github.com/UlugbekAbdulaev/milliy-taomlar.git">Check on GitHub</a></button>
                    </div>
                </div>


                <div className='border border-cyan-300 rounded-2xl overflow-hidden text-center px-4 py-5'>
                    <img src="/shop.jpg" alt="" />
                    <p className='text-2xl pt-3'>Online Store for E-commerce</p>
                    <p className='pt-2 text-gray-400'>This project is built using only HTML, CSS with Tailwind CSS, and vanilla JavaScript, without any additional libraries. It is developed based on an API.
                        The project represents an online shopping store, where users can: <br />
                        - Browse products -
                        - Place orders - <br />
                        - Filter and view products by categories - <br />
                        It is a fully functional frontend interface for an e-commerce platform, designed to be responsive and user-friendly.</p><br />

                    <div className='flex gap-5 justify-center'>
                        <button className='bg-gradient-to-r to-cyan-400 from-fuchsia-600 px-4 py-2 rounded-lg shadow transition-transform duration-300 hover:scale-110'><a href="https://5-imtihon-two.vercel.app
">Live preview</a></button>
                        <button className='border px-4 py-2 rounded-lg transition-transform duration-300 hover:scale-110'><a href="https://github.com/UlugbekAbdulaev/5-imtihon.git">Check on GitHub</a></button>
                    </div>
                </div>



                <div className='border border-cyan-300 rounded-2xl overflow-hidden text-center px-4 py-5'>bu yerda xam xuddi shundat projectlar bo'ladi</div>
            </div>
        </div>
    )
}

export default page