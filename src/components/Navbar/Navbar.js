import React, { Component } from 'react'
import { MenuItems } from './MeniItems'
import Container from '@material-ui/core/Container';
import { Button } from '../Button'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import './Navbar.css' 


class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render(){
        return (
            <main className="bgmain">
                <Container maxWidth="xxl">
                    <nav className="NavbarItem">
                        {/* <h1 className="navbar-logo">DODO <i className="fab fa-react"></i></h1> */}
                        <img className="navbar-logo" src="./images/logo.png" width="220px" />
                        <div className="menu-icon" onClick={this.handleClick} >
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-bars'}>
                            {MenuItems.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <a className={item.cName} href={item.url}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul> 
                        <Button>Conect</Button> &nbsp;
                        <Button>Disconect</Button>
                    </nav> 
                </Container>
            </main>
        )
    }
}

export default Navbar;