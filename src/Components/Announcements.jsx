import React from 'react'

const Announcements = () => {
  return (
    <div className=' w-100 h-100 text-primary text-center p-3'>
      <h3>Announcements</h3>
      <marquee direction="up"  scrolldelay="100" height="300px" className="text-center" >

        <h5>On the occasion of christmas holidays will be declared from 22-4-2022 to 2-1-2023.</h5><br />
        <h5>On the occasion of christmas holidays will be declared from 22-4-2022 to 2-1-2023.</h5><br />
        <h5>On the occasion of christmas holidays will be declared from 22-4-2022 to 2-1-2023.</h5><br />
        <h5>On the occasion of christmas holidays will be declared from 22-4-2022 to 2-1-2023.</h5><br />

      </marquee>
    </div>
  )
}

export default Announcements