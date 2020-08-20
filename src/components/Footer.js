import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <>

            <div className="container-fluid info-color">
                <div className="row d-flex align-items-center">
                    <div className="col-md-12 col-lg-12 col-xs-12">

                        <div className="text-center">
                            <ul className="list-unstyled list-inline mt-4">

                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1 white" href="tel:+91 9999876542">
                                        <i className="fa fa-phone mr-3"></i> +91 9999876542
                                    </a>
                                </li>

                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1 white" href="mailto:sandy@outlook.com">
                                        <i className="fa fa-envelope mr-3"></i> sandy@outlook.com
                                    </a>
                                </li>

                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1 white" href="https://github.com/machirajusandy">
                                        <i className="fab fa-github mr-3"></i> https://github.com/machirajusandy
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <hr style={{marginTop: "0"}} />

                <div className="row d-flex align-items-center">

                    <div className="col-md-12 col-lg-12 col-xs-12">

                        <p className="white-text text-center">
                            Copyright © 2020 &nbsp;
                            <strong>
                                <span className="white-text">
                                    Sandy
                                </span>
                            </strong>
                        </p>

                    </div>

                </div>
            </div>
            </>
        );
    }
}
