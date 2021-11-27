import React from 'react'

import { Box, Avatar, Typography, Divider, List } from '@mui/material'
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather'

// import NavItem from './NavItem'

const ENV_PUBLIC_URL = process.env.PUBLIC_URL

const items = [
  { href: `${ENV_PUBLIC_URL}/app/dashboard`, icon: BarChartIcon, title: 'Dashboard' },
  { href: `${ENV_PUBLIC_URL}/app/customers`, icon: UsersIcon, title: 'Customers' },
  { href: `${ENV_PUBLIC_URL}/app/products`, icon: ShoppingBagIcon, title: 'Products' },
  { href: `${ENV_PUBLIC_URL}/app/account`, icon: UserIcon, title: 'Account' },
  { href: `${ENV_PUBLIC_URL}/app/settings`, icon: SettingsIcon, title: 'Settings' },
  { href: `${ENV_PUBLIC_URL}/login`, icon: LockIcon, title: 'Login' },
  { href: `${ENV_PUBLIC_URL}/register`, icon: UserPlusIcon, title: 'Register' },
  { href: `${ENV_PUBLIC_URL}/404`, icon: AlertCircleIcon, title: 'Error' }
]

const user = {
  avatar: 'https://source.unsplash.com/user/erondu/1600x900',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
}

const NavBar: React.FC = () => {
  return (
    <>
      <Box height='100%' display='flex' flexDirection='column'>
        <Box alignItems='center' display='flex' flexDirection='column' p={2}>
          <Avatar alt='Remy Sharp' src={user.avatar} />
          <Typography color='textPrimary' variant='h5'>
            {user.name}
          </Typography>
          <Typography color='textSecondary' variant='body2'>
            {user.jobTitle}
          </Typography>
        </Box>
        <Divider />
        <Box p={2}>
          <List>
            {items.map(i => (
              <></>
            ))}
          </List>
        </Box>
      </Box>
    </>
  )
}

export default NavBar
