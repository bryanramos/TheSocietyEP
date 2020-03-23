import React, { Component } from 'react';
import VendorCards from '../components/VendorCards';
import styled from 'styled-components';

const Banner = styled.div`
    height: 400px;
    display: flex;
    align-items: center;
    background: #eee url(http://thesocietyep.com/wp-content/uploads/2020/02/vendors-header.jpg);
    background-size: cover;
    background-position: center bottom;
`;

const BannerBounds = styled.div`
    max-width: 1200px;
    padding: 0 0.25rem;
    margin: 0 auto;
    width: 100%;
`;

const Title = styled.h1`
    text-transform: uppercase;
    font-weight:500;
    color: #fff;
    display: inline-block;
    text-shadow: 0px 0px 10px rgba(0,0,0,.5);
`;

export default class Vendors extends Component {
    render() {
        return (
            <div>
                <Banner>
                    <BannerBounds>
                        <Title>Local<br></br>Vendors</Title>
                    </BannerBounds>
                </Banner>
                <VendorCards />
            </div>
        );
    }
}