import React from 'react'

const About = () => {
    return (
      <div name='about' className='w-full h-screen bg-[#1a2238] text-[#ff6a3d]' >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8' >
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#f4db7d]' >About the Country App</p>
          </div>
          <div></div>  </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6'>
            <div className='sm:text-right text-4xl font-bold text-[#f4db7d]'>
              <p>Country App is an app that gives us clear and importantant details of a country. </p> 
            </div>
            <div>
              <p className= 'text-[#9daaf2]' >
                This is a Country App which is an educative and can be <br></br>used by anyone to get information of any country<br></br> he or she is interested in .There are many<br></br> featutes in it eg the flag,the population of the country etc.
              </p>
            </div>
            </div>
         </div>
    </div>

    )
}

export default About