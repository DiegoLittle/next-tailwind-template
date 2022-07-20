import { useRouter } from 'next/router'
import React from 'react'
import Sidebar from './Sidebar'
import FolderIcon from './icons/FolderIcon'
import { colors } from '../lib/utils'

type Props = {
    children: JSX.Element
}

function getPath(pathname){
  if(pathname=="/dashboard"){
    return "Dashboard"
  }
  else{
  const path = pathname.split("/dashboard/")[1].split("/").map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  return path
}
}

const DashboardLayout = ({children}:Props) => {
  const router = useRouter()
  const path = getPath(router.pathname)


  return (
    <div className='flex font-inter h-screen w-screen bg-[#141518] p-5'>
        <Sidebar />
        <div className="flex flex-col ml-[26px] w-full h-full">
        <div className='  h-[80px] bg-primary-dark-gray rounded-[20px] flex w-full'>
          <div className=' px-5 my-auto text-[24px]  text-white b'>
            {path}
          </div>
          <div className='my-auto w-[2px] h-[23px] bg-[#282C38] rounded-[23px]'>
          </div>
          <div className='my-auto pl-[20px]'>
            <FolderIcon color={colors.blue} />
          </div>
          <div>
            
          </div>
        </div>
        {children}
        </div>

        
    </div>
  )
}

export default DashboardLayout