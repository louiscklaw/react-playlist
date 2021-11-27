import React, { FC, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { Badge, IconButton, Box, Toolbar, AppBar, Hidden } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import InputIcon from '@mui/icons-material/Input'
import MenuIcon from '@mui/icons-material/Menu'

// import Logo from '../../components/Logo'

export interface Props {
  messages: { [locale: string]: { [id: string]: string } }
  children?: React.ReactNode
}

const TopBar: FC = () => {
  const [notifications] = useState([])

  return (
    <>
      <AppBar>
        <Toolbar>
          <RouterLink to='/'>
            <>Logo</>
          </RouterLink>
          <Box flexGrow={1} />
          <Hidden mdDown>
            <IconButton color='inherit'>
              <Badge badgeContent={notifications.length} color='primary' variant='dot'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color='inherit'>
              <InputIcon />
            </IconButton>
          </Hidden>
          <Hidden lgUp>
            <IconButton color='inherit'>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default TopBar
