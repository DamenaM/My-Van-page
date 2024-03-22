import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./footer"
import { Link } from 'react-router-dom';

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function Layout() {

    return (
        <div className="site-wrapper">
            <Header />
            <main>
                 <Sidebar >
            <Menu
                  menuItemStyles={{
                    button: {
                      [`&.active`]: {
                        backgroundColor: '#e27',
                        fontWeight: "bold",
                       
                        textDecoration: "underline",
                        color: "#161616" },   },  }}  >
                  <SubMenu label="Home">
                    <MenuItem component={<Link to="/about" />}> About</MenuItem>
                    <MenuItem component={<Link to="/" />}> Home </MenuItem>
                  </SubMenu>
                  <SubMenu label="Graduates">
                  <MenuItem component={<Link to="/Graduats" />}> Graduates</MenuItem>
                  <MenuItem component={<Link to="/GraduatsFilter" />}> GraduatsFilter</MenuItem>
                  <MenuItem component={<Link to="/host" />}> list</MenuItem>
                  </SubMenu>
  </Menu>
</Sidebar>
            <Outlet />
                
            </main>
            <Footer />
        </div>
    )
}