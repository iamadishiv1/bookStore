import React from 'react'
import banner from '/Banner.png';

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl coontainer mx:auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                <div className="w-full md:w-1/2 ml-0 mt-20 md:ml-10 md:mt-20 order-1">
                    <img src={banner} className='w-100 h-100 rounded-3xl cursor-pointer' alt="Collections of book image" />
                </div>
                <div className="w-full md:w-1/2 mt-5 md:mt-16 md:ml-10 order-2 md:order-1">
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>
                            Hello, welcomes here to learning something <span className='text-orange-500'>new everyday!!!</span>
                        </h1>
                        <p className='text-xl'>
                        Explore a world of endless stories and boundless adventures at our bookstore. Discover captivating reads and embark on literary journeys that ignite your imagination. Start your next chapter with us today!
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <button className="btn mt-10 btn-primary">Send Email</button>
                </div>
            </div>
        </>
    )
}

export default Banner;
