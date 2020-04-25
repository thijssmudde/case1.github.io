import React from 'react'
import {Button, Typography} from '@material-ui/core'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'

const Downloads = () => <div>
  <Typography variant='h5' className='mb-4' gutterBottom>
    Downloads
  </Typography>
  <Button variant='contained' color='primary' startIcon={<CloudDownloadIcon />} className='mr-2'>
    Privacy Policy
  </Button>
  <Button variant='contained' color='primary' startIcon={<CloudDownloadIcon />}>
    Scientific Report
  </Button>
</div>

export default Downloads