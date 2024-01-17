import React from 'react'
import { Menubar } from 'primereact/menubar'
import { InputText } from 'primereact/inputtext'
import { Avatar } from 'primereact/avatar'

function NavBar(props) {
  // nav bar items:
  // 1. home
  // 2. profile page || login
  // 3. search bar (input field)


  const items = [
    { label: 'home', icon: 'pi pi-home', page: 'home' },
    { label: 'profile', icon: 'pi pi-home', page: 'profile' },
  ]
  const logoURL = 'https://png.pngtree.com/png-clipart/20210418/original/pngtree-red-blue-separation-line-musical-music-logo-png-image_6244544.jpg'

  const start = <img alt="logo" src={logoURL} height="40" className="mr-2"></img>

  // ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
  const loginAvatar = props.isLoggedIn
    ? <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
    : <Avatar icon="pi pi-user" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />


  const end = (
      <div className="flex align-items-center gap-2">
          <InputText placeholder="search" type="text" className="w-8rem sm:w-auto" />
          { loginAvatar }
      </div>
  )

  return (
      <div className="card">
          <Menubar model={items} start={start} end={end} />
      </div>
  )


}

export default NavBar