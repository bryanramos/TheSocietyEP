import React, { Component } from 'react';
import styled from 'styled-components';

const SiteFooter = styled.footer`
    background: #222;
    padding: 2rem 0;
    color: #fff;
`;

const Bounds = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`;

export default class Footer extends Component {

    showCurrentYear() {
        return new Date().getFullYear();
    }

    getSiteName() {
        return 'The Society El Paso';
    }

    render() {
        return (
            <SiteFooter>
                <Bounds>
                    <p>Made with ❤️ and ☕ in El Paso, Texas 🌵</p>
                    <p>Copyright &copy; 2019 - {this.showCurrentYear()} {this.getSiteName()} All content on this site including but not limited to images, text and logos are property of Three Sisters El Paso and/or its respective owners and is protected under U.S. copyright law and may not be used, altered, or modified without written consent. Proudly Handcrafted By: Bryan Ramos</p>
                </Bounds>
            </SiteFooter>
        );
    }
}