import React, { Component} from 'react';
import styled from 'styled-components';
import vendors from "../vendors";
import './vendors.css';

const Bounds = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 0.25rem;
`;

// Sorting options wrapper
const LocalNav = styled.div` 
    background: #fff;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: 550px) {
        justify-content: flex-end;
    }
`;

const SortingOptions = styled.div`
    display: flex;
    button {
        background: transparent;
        border: none;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    button:hover {
        background-color: rgba(95,99,104,0.157);
        opacity: .87;
    } 
    button:hover svg {
        opacity: .87;
    }
    @media (max-width: 550px) {
        button span {
            display: none;
        }   
    }
    select {
        background-color: #e7e7e8;
        border-color: #e7e7e8;
        color: #1c1d1f;
        font-size: 11px;
        font-weight: 500;
        font-family: "Montserrat", Arial, Helvetica, sans-serif;
        letter-spacing: 1px;
        padding: 13px 20px 12px;
        border-radius: 25px;
        text-transform: uppercase;
        position: relative;
        z-index: 9;
        padding-right: 40px;
        height: auto;
    }
`;

const OrderButtons = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 500px) {
        button {
            width: 40px;
            height: 40px;
        }
        button svg {
            width: 42px;
            height: 42px;
        }
    }
`;

const GridLayoutButtons = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 550px) {
        display: none !Important;
    }
`;

const Selection = styled.div`
    margin-left: 20px;
    position: relative;
    @media (max-width: 767px) {
        margin-right: 8px;
    }
    ::after {
        content: "+";
        font-size: 13px;
        line-height: 1em;
        width: 30px;
        text-align: left;
        color: inherit;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        z-index: 55;
    }
    select {
        box-shadow: none;
        -webkit-appearance: none;
    }
`;

const NumberOfResults = styled.p`
    @media (max-width: 550px) {
        display: none;
    }
    color: #797979;
    font-size: 13px;
`;

const CurrentResults = styled.span`
    color: rgba(0,0,0,.87);
    font-weight: 600;
`;

const CardsGrid = styled.div`
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 850px) {
        grid-template-columns: 1fr 1fr;
        grid-grap: 36px;
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-grap: 36px;
    }
`;

const Card = styled.div`
    border: 1px solid #dadce0;
    display: flex;
    background-clip: border-box;
    word-wrap: break-word;
    min-width: 0;
    flex-direction: column;
    border-radius: 10px;
`;

const CardImage = styled.div`
    display: block;
    position: relative;
    overflow: hidden;
    padding-top: 200px;
    background-position: center center;
    transition: 500ms padding ease;
    border-radius: 10px 10px 0px 0px;
    @media (max-width: 550px) {
        padding-top: 300px;
    }
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
`;

const CardTag = styled.p`
    color: #adadad;
    font-size: 13px;
    letter-spacing: 1px;
    margin-bottom: 13px;
    text-transform: uppercase;
`;

const CardTitle = styled.h5`
    font-size: 22px;
    text-transform: uppercase;
    margin: 0 0 0.75rem 0;
    a {
        color: #000;
        text-decoration: none;
    }
`;

const CardDescription = styled.p`
    flex-grow: 1;
    font-size: 16px;
    color: #696c6d;
    margin-top: 0;
`;

const CardLinks = styled.div`
    margin-bottom: 20px;
    a {
        color: #222;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 48px;
        border-radius: 50%;
    }
    a svg {
        fill: #222;
    }
    a:hover svg {
        opacity: .87;
    }
    a:hover {
        background-color: rgba(95,99,104,0.157);
        opacity: .87;
    }
`;

// visit website button
const CardURL = styled.a`
    background: #dda4a3;
    border-radius: 50px;
    font-size: 16px;
    color: #fff;
    padding: 0.875rem 0.75rem;  
    display: inline-block;
    text-decoration: none;
    text-align: center;
    line-height: 1.5;
    text-transform: uppercase;
`;

export default class VendorCards extends Component {
    constructor(props) {
        super();
        this.state2 = {
            activeButtonId: 1
        }
        this.setActiveButton = this.setActiveButton.bind(this);
    }
    setActiveButton(id){
        this.setState({activeButtonId: id});
        if (id == 1) {
            document.body.classList.add('columns-3');
            document.body.classList.remove('columns-2');
        } else {
            document.body.classList.add('columns-2');
            document.body.classList.remove('columns-3');
        }
    }
    state = {
        sortType : 'asc',
        selectedCardType: 'show-all',
        vendorsList : [...vendors.map(vendor => { return { ...vendor }})]
    }
    onSort = sortType => {
        this.setState({sortType});
    }
    render() {
        const {vendorsList, sortType} = this.state;
        const sorted = vendorsList.sort((a, b) => { 
            const isReversed = (sortType === 'asc') ? 1 : -1;
            return isReversed * a.vendorName.localeCompare(b.vendorName);
        });

        return (
            <div>
                <Bounds>
                <LocalNav>
                    {this.numberOfResults()}
                    {this.sortingOptions()}
                </LocalNav>
                <CardsGrid className="vendors-grid">
                    {
                        sorted.map((vendor, i) => {
                            if (vendor.vendorCategory === this.state.selectedCardType || this.state.selectedCardType === 'show-all') {
                                var imgUrl = vendor.vendorImage;
                                var divStyle = { 
                                    backgroundImage: "url(" + imgUrl + ")",
                                    backgroundSize: 'cover',
                                    backgroundColor: '#f2f2f2'
                                };
                                return (
                                    <Card id={vendor.vendorCategory} key={i} className={vendor.id + " card"}>
                                        <CardImage className="card-image" style={divStyle}>
                                        </CardImage>
                                        <CardBody>
                                            <CardTag>{vendor.vendorType}</CardTag>
                                            <CardTitle>
                                                <a href={vendor.vendorURL}>{vendor.vendorName}</a>
                                            </CardTitle>
                                            <CardDescription>{vendor.vendorDescription}</CardDescription>
                                            <CardLinks>
                                                {
                                                    vendor.vendorEmails.map(function (vendorEmail, i) {
                                                        return (
                                                            <a aria-label={"Email " + vendor.vendorName} href={"mailto:" + vendorEmail.url} key={i}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" width="22px" height="22px" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg>
                                                            </a>
                                                        )
                                                    })
                                                }
                                                {
                                                    vendor.vendorPhones.map(function (vendorPhone, i) {
                                                        return (
                                                            <a aria-label={"Call " + vendor.vendorName} href={"tel:" + vendorPhone.phone} key={i}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" className="svg-inline--fa fa-phone-alt fa-w-16" role="img" width="22px" height="22px" viewBox="0 0 512 512"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/></svg>
                                                            </a>
                                                        )
                                                    })
                                                }
                                            </CardLinks>
                                            <CardURL aria-label={"Visit " + vendor.vendorName + " website"} title={"Visit " + vendor.vendorName + " website"} href={vendor.vendorURL}>Visit Website</CardURL>
                                        </CardBody>
                                    </Card>
                                );
                            }
                        })
                    }
                </CardsGrid>
                </Bounds>

            </div>
        );

    }

    numberOfResults() {
        var len = 0;
        var final = 0;
        for (var vendor in vendors) {
            len++;
        }
        vendors.map((vendor, i) => {
            if (vendor.vendorCategory === this.state.selectedCardType || this.state.selectedCardType === 'show-all') {
                final = final + 1;
                return;
            }
        })

        return (
            <NumberOfResults><CurrentResults>{final}</CurrentResults> of {len} vendors</NumberOfResults>
        );
    }

    sortingOptions() { // sorting options: show by vendor type, ascending order, descending order, grid type
        return (
            <SortingOptions>
                <OrderButtons>
                    <button aria-label="Sort In Ascending Order" onClick={()=>this.onSort('asc')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" height="32px" width="32px" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>
                    </button>
                    <button aria-label="Sort In Descending Order" onClick={()=>this.onSort('desc')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"  height="32px" width="32px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>
                    </button>
                </OrderButtons>
                <GridLayoutButtons>
                    <button className={this.state.activeButtonId === 1? "button1 active" : "button1"} onClick={() => this.setActiveButton(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 0 24 24" fill="black"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 5v13h17V5H4zm10 2v3.5h-3V7h3zM6 7h3v3.5H6V7zm0 9v-3.5h3V16H6zm5 0v-3.5h3V16h-3zm8 0h-3v-3.5h3V16zm-3-5.5V7h3v3.5h-3z"/></svg>
                        <span>Grid</span>
                    </button>
                    <button className={this.state.activeButtonId === 2? "button2 active" : "button2"} onClick={() => this.setActiveButton(2)} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 0 24 24" fill="black"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 5v14h17V5H3zm4 2v2H5V7h2zm-2 6v-2h2v2H5zm0 2h2v2H5v-2zm13 2H9v-2h9v2zm0-4H9v-2h9v2zm0-4H9V7h9v2z"/></svg>
                        <span>List</span>
                    </button>
                </GridLayoutButtons>
                <Selection>
                    <select id="vendors-type" onChange={(e) => this.setState({ selectedCardType: e.target.value })}>
                        <option value="show-all">Show All</option>
                        <option value="bakery">Bakery</option>
                        <option value="bridal-boutiques">Bridal Boutiques</option>
                        <option value="dj">DJ</option>
                        <option value="florists">Florists</option>
                        <option value="hair-makeup">Hair &amp; Makeup</option>
                        <option value="photobooths">Photobooths</option>
                        <option value="photographers">Photographers</option>
                        <option value="planners">Planners</option>
                        <option value="venues">Venues</option>
                        <option value="other-specialty">Other/Specialty</option>
                    </select>
                </Selection>
            </SortingOptions>
        );
    }
}