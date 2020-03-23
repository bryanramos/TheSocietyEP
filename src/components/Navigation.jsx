import React, { Component } from 'react';
import styled from 'styled-components';
import SocietyLogo from '../SocietyLogo.png';

const SiteHeader = styled.div`
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 500;
    padding: 1.0rem 0.25rem;
`;


const Navbar = styled.nav`;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
`;

const NavbarBrand = styled.a`
    color: #333;
    text-decoration: none;
    h1 {
        font-weight: 400;
        font-size: 17px;
        position: absolute !important;
        overflow: hidden !important;
        clip: rect(1px,1px,1px,1px) !important;
        width: 1px !important;
        height: 1px !important;
        border: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
    }
    img {
        height: 50px;
    }
`;

const NavigationLinks = styled.ul`
    list-style: none;
    flex-wrap: wrap;
    display: flex;
`;

const NavigationItem = styled.li`
    margin-right: 8px;
    @media (min-width: 992px) {
        margin-right: 12px;
    }
`;

const NavigationLink = styled.a`
    color: #333;
    text-decoration: none;
`;

export default class Navigation extends Component {
    constructor(props) {
        super();
        this.state = {
            name: 'The Society El Paso'
        }
    }
    render() {
        return (
            <SiteHeader>
                <Navbar>
                    <NavbarBrand href="/" title={this.state.name} aria-label={this.state.name}>
                        <h1>{this.state.name}</h1>
                        <img src={SocietyLogo}></img>
                    </NavbarBrand>
                    <NavigationLinks>
                        <NavigationItem>
                            <NavigationLink href="/">Home</NavigationLink>
                        </NavigationItem>
                        <NavigationItem>
                            <NavigationLink href="/vendors">Vendors</NavigationLink>
                        </NavigationItem>
                    </NavigationLinks>
                </Navbar>
            </SiteHeader>
        );
    }
}