import React from 'react'
import ReactPlayer from 'react-player'

// Render a YouTube video player
const Videos = () => {
    return (
        <div className='rounded-sm border-2 border-gray-100 p-2 justify-center items-center pb-12'>
            <h1 className="font-bold text-3xl text-center py-12">Videos</h1>
            <div className='flex flex-row gap-4 w-full justify-center items-center'>
            <div className='flex flex-col gap-4'>
               <ReactPlayer 
               url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
               playing='true'
               controls='true'
            //    width={400}
            //    light='true'
                             />
               <p className='text-center font-semibold text-lg'>Why hire an Architect</p>
            </div>
            <div className='flex flex-col gap-4'>
               <ReactPlayer 
               url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
               playing='true'
               controls='true'
            //    width={400}
            //    light='true'
               style={{borderradius:25}}
                             />
               <p className='text-center font-semibold text-lg'>What does an Architect do?</p>
            </div>
               
            </div>
        </div>
    )
}
export default Videos
