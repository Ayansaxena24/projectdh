import React from 'react'
import ReactPlayer from 'react-player'

const Videos = () => {
    return (
        <div className='rounded-sm border-2 border-gray-100 p-2 justify-center items-center pb-16'>
            <h1 className="font-bold text-3xl text-center py-12">Videos</h1>
            <div className='flex flex-col sm:flex-row lg:gap-16 gap-6 w-full justify-center items-center'>
                <div className='flex flex-col gap-4 rounded-md overflow-hidden'>
                    <div className='relative py-36 px-44 md:py-36 md:px-40 lg:px-56 lg:py-52 xl:px-64 xl:py-52'>
                     <div className='rounded-3xl'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=3_g2un5M350'
                            playing='true'
                            controls='true'
                            width='100%'
                            height='100%'
                            style={{ position: 'absolute', top: 0, left: 0 }}
                        />
                        </div>
                    </div>
                    <p className='text-center font-semibold text-lg'>Why hire an Architect</p>
                </div>
                <div className='flex flex-col gap-4 rounded-md overflow-hidden'>
                    <div className='relative py-36 px-44 md:py-36 md:px-40 lg:px-56 lg:py-52 xl:px-64 xl:py-52'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=3_g2un5M350'
                            playing='true'
                            controls='true'
                            width='100%'
                            height='100%'
                            style={{ position: 'absolute', top: 0, left: 0 }}
                        />
                    </div>
                    <p className='text-center font-semibold text-lg'>What does an Architect do?</p>
                </div>
            </div>
        </div>
    )
}

export default Videos
