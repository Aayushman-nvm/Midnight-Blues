import { useState } from 'react'
import { Links, NavLink } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import Logo from '../assets/Logo.png'

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
  <div>
    {links.map((item) => (
      <NavLink key={item.name} to={item.to} onClick={handleClick}>
        <item.icon className="w-6 h-6" />
        {item.name}</NavLink>
    ))}
  </div>
);

function SideBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <div>
        <img src={Logo} alt="Logo" />
        <NavLinks handleClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      </div>
      <div>
        {mobileMenuOpen ? (
          <RiCloseLine onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-6 h-6" />
        ) : (<HiOutlineMenu onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-6 h-6" />)}
      </div>
      <div>
        <img src={Logo} alt="Logo" />
        <NavLinks handleClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      </div>
    </div>
  )
}

export default SideBar