import React from 'react'
import {Button, Typography} from '@material-ui/core'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'

const Landing = () => <div>
  <Typography variant='h4' gutterBottom>
    About the Think Tank
  </Typography>
  <Typography paragraph>
    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
  </Typography>
  <Button variant='contained' color='primary' startIcon={<CloudDownloadIcon />} className='mr-2'>
    Privacy Policy
  </Button>
  <Button variant='contained' color='primary' startIcon={<CloudDownloadIcon />}>
    Scientific Report
  </Button>
</div>

export default Landing