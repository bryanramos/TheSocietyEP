import React, { Component } from 'react';
import styled from 'styled-components';
import BackgroundSlider from 'react-background-slider';
import widgets from "../widgets";

const HomepageSection = styled.section`
    padding: 0 1rem 0 1rem;
`;

const AboveFold = styled.div`

`;

const Slider = styled.div`
    position: relative;
    height: 600px;
    margin-bottom: -120px;
`;

const AboveFoldWidgets = styled.div`
    position: relative;
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 25px 60px 25px;
    display: grid;
    grid-gap: 36px;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-grap: 36px;
    }
`;

const Widget = styled.div`
    background: #fff;
    border: 1px solid #dadce0;
    padding: 30px 24px;
    text-align: center;
    h4 {
        font-size: 22px;
        text-transform: uppercase;
        margin: 0.75rem 0 0.75rem 0;
    }
`;

const WidgetLink = styled.a`
    text-decoration: none;
    color: #333;
    margin-bottom: 30px;
    display: block;
`;

const Icon = styled.div`
    margin: 1.0rem 0;
    svg {
        height: 40px;
    }
`;

const WidgetButton = styled.a`
    background: #dda4a3;
    border-radius: 50px;
    font-size: 16px;
    color: #fff;
    padding: 0.875rem 0.75rem;
    display: block;
    -webkit-text-decoration: none;
    text-decoration: none;
    text-align: center;
    line-height: 1.5;
    text-transform: uppercase;
    margin-top: 30px;
`;

export default class Home extends Component {

    constructor(props) {
        super();
        this.state = {
            image1: 'http://www.threesistersep.com/wp-content/uploads/2019/05/el_paso_weddings_208.jpg',
            image2: 'http://www.threesistersep.com/wp-content/uploads/2019/09/Mr-Mrs-Hamil-113.jpg',
            image3: 'http://www.threesistersep.com/wp-content/uploads/2019/05/Alisha-Kelley-Favorites-0040.jpg',
            image4: 'http://www.threesistersep.com/wp-content/uploads/2019/09/loftus_268.jpg',
        }
    }

    loadIcon(i) {
        if (i === 0) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
            );
        } else if (i === 1) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="store" class="svg-inline--fa fa-store fa-w-20" role="img" viewBox="0 0 616 512"><path fill="currentColor" d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"/></svg>
            );
        } else if (i === 2) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-friends" class="svg-inline--fa fa-user-friends fa-w-20" role="img" viewBox="0 0 640 512"><path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"/></svg>
            );
        }
    }

    render() {
        return (
            <HomepageSection>
                <AboveFold>
                <Slider>
                    <BackgroundSlider
                    images={[this.state.image1, this.state.image2, this.state.image3, this.state.image4]}
                    duration={10} transition={2} />
                </Slider>

                    <AboveFoldWidgets>
                        {
                            widgets.map((widget, i) => {
                                return (
                                    <Widget>
                                        <WidgetLink href={widget.widgetURL}>
                                            <Icon>
                                                {this.loadIcon(i)}
                                            </Icon>
                                            <h4>{widget.widgetTitle}</h4>
                                            <p>{widget.widgetDescription}</p>
                                        </WidgetLink>
                                        <WidgetButton href={widget.widgetURL}>{widget.widgetButtonText}</WidgetButton>
                                    </Widget>
                                );
                            })
                        }
                    </AboveFoldWidgets>
                </AboveFold>
            </HomepageSection>
        );
    }
}