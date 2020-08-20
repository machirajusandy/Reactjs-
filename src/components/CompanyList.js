import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CompanyList extends Component {
    constructor(props){
        super(props)
        this.state = {
            alert: this.props.alert,
            indexVal:''
        }
    }
    
    CallOffice = () => {
        return <Link to="/"></Link>
    }

    onDelete = (index) => {
        var id = parseInt(index);

        this.props.removeItem(id);
        this.setState({indexVal:index});
    }

    render() {
        var title = this.props.items.length > 0

        var card = this.props.items.map((item, index) => {

            return (
                <div className="col-lg-6 card-list" key={index}>
                    <div className="card mt-3 mb-3">
                        <div className="card-body">
                            <div className="row border-bottom mb-3">
                                <div className="col-md-6">
                                    <div className="card-title font-weight-bold">{item.companyname}</div>
                                </div>

                                <div className="col-md-6">
                                    <button className="close btn" onClick={this.onDelete.bind(this, index)}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>

                            <h6 className="mb-0">Adrress: </h6>
                            <div className="card-text mt-0 text-muted">
                                {item.address}
                            </div>

                            <h6 className="mb-0">Revenue: </h6>
                            <div className="card-text mt-0 text-muted">
                                {item.revenue}
                            </div>

                            <h6 className="mb-0">Phone: </h6>
                            <div className="card-text mt-0 text-muted">
                                (+{item.code}) &nbsp; {item.phone}
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        
        return (
            <div className="container">
                {title ? <h2>Companies</h2> : ''}

                <div className="row">
                    {card}
                </div>
            </div>
        )
    }
}
