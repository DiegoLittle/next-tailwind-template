import Link from "next/link"
import { NextRouter } from "next/router"



function PageNavigation({navigation,router}:Props) {
    return (
      <nav className='mt-[10px]'>
      {navigation.map((item, index) => (
        <Link key={index} href={item.href} >
        <a 
        className={`${router.pathname==item.href ? "bg-[#282C38] text-white":"text-[#757B8C]"}  font-normal flex pl-[26px] my-[10px] py-[6px]`}>
          <item.icon color={router.pathname==item.href?"#246CF9":"#757B8C"}></item.icon>
          <span className='ml-[15px] '>{item.name}</span>
        </a>
        </Link>
      ))}
    </nav>
    )
  }
export default PageNavigation
  
  type Props = {
    navigation: NavigationItem[],
    router: NextRouter
  }
  
  type NavigationItem = {
    name: string
    icon: React.ComponentType,
    href: string
  }