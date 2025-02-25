import React from 'react'
import Banner from '../componets/Banner/Banner'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Fade } from 'react-reveal';
import { SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player'

const University = () => {
    return (
        <div className='w-full'>
            <div className='w-full h-screen'>
            <Fade>
                <ReactPlayer loop width="100%" height="50%" playing muted url='https://sanskaramuniversity.ac.in/frontend/assets/images/banner_video1.mp4' />
            </Fade>
            </div>
            <div className="ml-2 lg:ml-11 mb-11 lg:mb-4 RowContainer mt-32">
                <h1 className="text-white pb-4 xl:pb-0 font-normal text-base sm:text-2xl md:text-4xl mb-6">
                    Programs
                </h1>
                <div className='flex w-full h-[200px]'>
                    <div className='w-[300px] h-[200px] rounded-lg mr-3 '>
                        <a href='https://sanskaramuniversity.ac.in/under-graduate-programs' target='_blank'><img className='w-full h-full rounded object-cover mb-2' src="https://sanskaramuniversity.ac.in/uploads/all/1127/program_img1.png" alt="" /></a>
                        <h3 className='text-white text-xl'>Under Graduate Programs</h3>
                    </div>
                    <div className='w-[300px] h-[200px] rounded-lg mr-3 '>
                        <a href='https://sanskaramuniversity.ac.in/post-graduate' target='_blank'><img className='w-full h-full rounded object-cover mb-2' src="https://sanskaramuniversity.ac.in/uploads/all/1126/program_img.png" alt="" /></a>
                        <h3 className='text-white text-xl'>Post Graduate Programs</h3>
                    </div>
                    <div className='w-[300px] h-[200px] rounded-lg mr-3 '>
                        <a href='https://sanskaramuniversity.ac.in/doctorate' target='_blank'><img className='w-full h-full rounded object-cover mb-2' src="https://sanskaramuniversity.ac.in/uploads/all/1128/program_img3.png" alt="" /></a>
                        <h3 className='text-white text-xl'>Doctorate</h3>
                    </div>
                    <div className='w-[300px] h-[200px] rounded-lg mr-3 '>
                        <a href='https://sanskaramuniversity.ac.in/diploma' target='_blank'><img className='w-full h-full rounded object-cover mb-2' src="https://sanskaramuniversity.ac.in/uploads/all/1129/program_img4.png" alt="" /></a>
                        <h3 className='text-white text-xl'>Diploma</h3>
                    </div>
                </div>
            </div>


            <div className="ml-2 lg:ml-11 mb-11 lg:mb-4 RowContainer mt-32">
                <h1 className="text-white pb-4 xl:pb-0 font-normal text-base sm:text-2xl md:text-4xl mb-6">
                    Events
                </h1>
                <div className='flex w-full h-[200px]'>
                    <div className='w-[300px] h-[200px] rounded-lg mr-3 '>
                        <a href='https://sanskaramuniversity.ac.in/sanskaram-freshers-party-15-11-2024' target='_blank'><img className='w-full h-full rounded object-cover mb-2' src="https://sanskaramuniversity.ac.in/uploads/all/1323/conversions/IMG_0933-full-full.webp" alt="" /></a>
                        <h3 className='text-white text-xl'>Freshers Party</h3>
                    </div>
                    <div className='w-[300px] h-[200px] rounded-lg mr-3 '>
                        <a href='https://sanskaramuniversity.ac.in/poster-presentation-competition-1' target='_blank'><img className='w-full h-full rounded object-cover mb-2' src="https://sanskaramuniversity.ac.in/uploads/all/930/conversions/IMG_8669-full.webp" alt="" /></a>
                        <h3 className='text-white text-xl'>Poster Presentation Competiton</h3>
                    </div>
                    <div className='w-[300px] h-[200px] rounded-lg mr-3 '>
                        <a href='https://sanskaramuniversity.ac.in/pharmacist-day-celebration-1' target='_blank'><img className='w-full h-full rounded object-cover mb-2' src="https://sanskaramuniversity.ac.in/uploads/all/925/conversions/IMG_9200-full.webp" alt="" /></a>
                        <h3 className='text-white text-xl'>Pharmacist Day Celebration</h3>
                    </div>
                    <div className='w-[300px] h-[200px] rounded-lg mr-3 '>
                        <a href='https://sanskaramuniversity.ac.in/teacher%27s-day-celebration-1' target='_blank'><img className='w-full h-full rounded object-cover mb-2' src="https://sanskaramuniversity.ac.in/uploads/all/865/conversions/IMG-20240909-WA0029-full.webp" alt="" /></a>
                        <h3 className='text-white text-xl'>Teachers Day</h3>
                    </div>
                </div>
            </div>



            <div className="ml-2 lg:ml-11 mb-11 lg:mb-4 RowContainer mt-32 pb-20">
                <h1 className="text-white pb-4 xl:pb-0 font-normal text-base sm:text-2xl md:text-4xl mb-6">
                    Workshops
                </h1>
                <div className='flex w-full h-[200px]'>
                    <div className='w-[300px] h-[200px] rounded-lg mr-3 '>
                        <a href='https://sanskaramuniversity.ac.in/under-graduate-programs' target='_blank'><img className='w-full h-full rounded object-cover mb-2' src="https://images.stockcake.com/public/0/2/8/0285366f-a0ec-4173-9913-09e1c7f2c90d_large/drone-assembly-workshop-stockcake.jpg" alt="" /></a>
                        <h3 className='text-white text-xl'>Drone Workshop</h3>
                    </div>
                    <div className='w-[300px] h-[200px] rounded-lg mr-3 '>
                        <a href='https://sanskaramuniversity.ac.in/post-graduate' target='_blank'><img className='w-full h-full rounded object-cover mb-2' src="https://i.ytimg.com/vi/B-ytMSuwbf8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBaZqfhf4UpUEqKsNepU9r1NhL-jA" alt="" /></a>
                        <h3 className='text-white text-xl'>Web Designing Workshop</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default University