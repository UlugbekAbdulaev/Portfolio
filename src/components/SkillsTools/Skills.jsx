import React from 'react'

function Skills() {
    return (
        <div id='Skills' className='container mx-auto mt-10'>
            <p className='text-white text-4xl font-medium pt-20 pb-10'>Skill & Tools</p>
            <div className='grid grid-cols-2'>
                <div className='col-span-1 rounded-2xl border border-fuchsia-300 p-5 mr-3'>
                    <p className='text-white text-center text-2xl font-medium pb-6'>Programming Languages</p>
                    <div className='grid grid-cols-2 gap-7'>
                        <div className='flex flex-col justify-center items-center text-white font-medium'><img src="/skillTools/html.png" alt="" /><p>HTML5</p></div>
                        <div className='flex flex-col justify-center items-center text-white font-medium'><img src="/skillTools/css.png" alt="" /><p>CSS3</p></div>
                        <div className='flex flex-col justify-center items-center text-white font-medium'><img src="/skillTools/js.png" alt="" /><p>JavaScript</p></div>
                        <div className='flex flex-col justify-center items-center text-white font-medium'><img src="/skillTools/twcss.png" alt="" /><p>TAILWINDCSS</p></div>
                    </div>
                </div>
                <div className='col-span-1 rounded-2xl border border-cyan-300 p-5 ml-3'>
                <p className='text-white text-center text-2xl font-medium pb-6'>Skill & Tools</p>
                    <div className='grid grid-cols-2 gap-7'>
                        <div className='flex flex-col justify-center items-center text-white font-medium'><img className='bg-white rounded-full' src="/skillTools/github.png" alt="" /><p>GitHub</p></div>
                        <div className='flex flex-col justify-center items-center text-white font-medium'><img src="/skillTools/figma.png" alt="" /><p>Figma</p></div>
                        <div className='flex flex-col justify-center items-center text-white font-medium '><img src="/skillTools/vs.png" alt="" /><p>VScode</p></div>
                        <div className='flex flex-col justify-center items-center text-white font-medium '><img className='bg-white rounded-full' src="/skillTools/nextjs.png" alt="" /><p>Next</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
