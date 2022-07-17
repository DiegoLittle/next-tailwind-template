import {  useRouter } from 'next/router'
import React from 'react'
import { colors } from '../lib/utils'
import PageNavigation from './dashboard/PageNavigation'
import DashboardIcon from './icons/DashboardIcon'
import FolderIcon from './icons/FolderIcon'
import SettingsIcon from './icons/SettingsIcon'
import LogoutIcon from './icons/LogoutIcon'


const navigation = [
  {
    name: 'Dashboard',
    icon: DashboardIcon as React.FunctionComponent,
    href: '/dashboard'
  },
  {
    name: 'Documents',
    icon: FolderIcon as React.FunctionComponent,
    href: '/dashboard/documents'
  }
]


const Sidebar = (): JSX.Element => {
  const router = useRouter()
  return (
    <div className="hidden font-inter md:flex rounded-[20px] w-[249px] h-full bg-[#1E1F25] md:flex-col md:inset-y-0 box-border">
      <div className='flex p-[26px] border-b border-gray-600'>
        <img src="../images/logo.svg" ></img>
        <span className='ml-[10px] text-white text-lg font-semibold'>Dashcube</span>
      </div>
      <PageNavigation navigation={navigation} router={router}></PageNavigation>

      <div className='my-[15px] pl-[26px] h-[134px] mt-auto'>
        <div className={` font-semibold text-[14px] text-[#3C4254] tracking-[0.04em]`}>
        ACCOUNT
        </div>
        <div className='flex pt-[19px]'>
          <SettingsIcon color={"#757B8C"}></SettingsIcon>
          <span className={`ml-[15px] text-[${colors.primary_gray_40}]`}>Settings</span>
        </div>
        <div className='flex pt-[19px]'>
          <LogoutIcon color={"#757B8C"}></LogoutIcon>
          <span className={`ml-[15px] text-[${colors.primary_gray_40}]`}>Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar





