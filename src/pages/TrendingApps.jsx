import React from 'react'
import useAppData from '../Hooks/useAppData'

const TrendingApps = () => {

    const {appData} = useAppData()
    console.log(appData);
    
  return (
    <div>
        <div className='flex justify-center'>
           <div className='text-center space-y-3 my-20'>
             <h1 className='text-3xl font-bold '>TrendingApps</h1>
            <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
           </div>
           <div>

           </div>
        </div>
    </div>
  )
}

export default TrendingApps