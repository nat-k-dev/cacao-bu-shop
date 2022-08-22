import React, { Component } from 'react';
import styled from 'styled-components';
import author1 from '../author/author-1.jpg';
import author2 from '../author/author-2.jpg';
import author3 from '../author/author-3.jpg';

export default class Carousel extends Component {
    render() {
        return (
            <CarouselStyles>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={author1} className="d-block w-100" alt="chocolate author 1st" />
                        </div>
                        <div className="carousel-item">
                            <img src={author2} className="d-block w-100" alt="chocolate author 2nd" />
                        </div>
                        <div className="carousel-item">
                        <img src={author3} className="d-block w-100" alt="chocolate author 3rd" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </CarouselStyles>

        )
    }
}

const CarouselStyles = styled.div`
    .carousel {
        max-height: 400px;
        max-width: 500px;
        overflow: hidden;
        margin: auto;
        border-radius: 1%;
    }
    .carousel-control-prev,
    .carousel-control-next {
        background-color: var(--logoBlue);
    }

`