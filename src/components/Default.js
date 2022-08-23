import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Default extends Component {
    static propTypes = { 
        location: PropTypes.any
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>page not found</h2>
                        <h3>the requested URL:&quot 
                            <span 
                                className="text-danger"
                            >
                                {this.props.location.pathname}
                            </span>
                            &quot was not found</h3>
                    </div>
                </div>
            </div>
        )
    }
}
