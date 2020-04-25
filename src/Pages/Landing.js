import React from 'react'
import {Typography} from '@material-ui/core'

const Landing = () => <div>
  <Typography variant='h5' className='mb-4' gutterBottom>
    About the Think Tank
  </Typography>

  <Typography paragraph>
    Somebody should write something about our think tank and what readers can expect to find on this website.
  </Typography>

  <div className='mt-3'>
    <iframe
      title='infographic'
      width='560'
      height='315'
      src='https://www.youtube-nocookie.com/embed/LrzahfJoNSc'
      frameborder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen/>
    </div>
</div>

export default Landing