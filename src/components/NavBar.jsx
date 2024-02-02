import React from 'react'
import { NavbarContainer,NavbarBrand,NavbarLink,NavbarLinks} from './NavBarElements'
import {  NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <NavbarContainer>
    <NavbarBrand></NavbarBrand>
    <NavbarLinks>
      <NavbarLink>
        <NavLink to="/">Formulario</NavLink>
      </NavbarLink>
      <NavbarLink>
        <NavLink to="tables">Lista formulario</NavLink>
      </NavbarLink>
    </NavbarLinks>
  </NavbarContainer>
  )
}
