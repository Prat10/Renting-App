import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='navbar-main'>
                <div className='list-nav'>
                    <ul className='navbar'>
                        <li>Rent</li>
                        <li>Buy</li>
                        <li>Sell</li>
                        <li>Manage Property</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div className='button-login'>
                    <button className='login'>Login</button>
                    <button className='signup'>Signup</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar