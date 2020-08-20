import React, { Component } from 'react'
import CompanyForm from '../components/CompanyForm'
import CompanyList from '../components/CompanyList'

const listItems = []
const listClosed = []

listItems.push(
    {index:1, companyname:'dinda', address:'alamat dinda', revenue:'revenue dinda', phone:'08989900272', done: false},
    {index:0, companyname:'eka', address:'alamat eka', revenue:'revenue eka', phone:'085728274906', done: false}
)

export default class Tracker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listItems: listItems,
            fields: {
                company: ['companyname', 'address', 'revenue', 'phone'],
            },
            listClosed: listClosed,
            alert: false,
        }
    }

    handleChange = (e) => {
        let fields = this.state.fields
        let field = e.target.name
        
        fields.company[field] = e.target.value;
        
        this.setState({fields})
    }

    addItem = (listItem) => {
        listItems.unshift({
            index: listItems.length+1,

            companyname: listItem.newItemName,
            address: listItem.newItemAddress,
            revenue: listItem.newItemRevenue,
            code: listItem.newItemCode,
            phone: listItem.newItemPhone,

            done: false
        });

        this.setState({listItems: listItems, alert:true});
    }

    removeItem = (itemIndex) => {
        listItems.splice(itemIndex, 1);

        listClosed.unshift({
            index: listClosed.length+1,
            clicked: "close button is clicked"
        });
        
        this.setState({listItems: listItems, listClosed: listClosed});
    }

    render(){

        const listTrack = this.state.listItems.map((list) => {
            return (
                <ul key={list.index} className="mt-0 mb-0 liTrack">
                {"{"}
                    <li>id : {list.index},</li>
                    <li>companyname : {list.companyname},</li>
                    <li>address : {list.address},</li>
                    <li>revenue : {list.revenue},</li>
                    <li>phone : {list.phone}</li>
                    {"},"}
                </ul>
            )
        })

        const btnClosed = this.state.listClosed.map((closed) => {
            return (
                <ul key={closed.index} className="mt-0 mb-0 liTrack">
                {"{"}
                    <li>id : {closed.index},</li>
                    <li>msg : {closed.clicked},</li>
                {"},"}
                </ul>
            )
        })

        return (
            <div className="container-fluid pt-4">
                <h2 className="h2-responsive text-center">Simple Loging (Tracking)</h2>
                <hr/>
                <div className="container">
                    <div className="row">
                    
                        <div className="col-md-8">
                            <div className="jumbotron bg-white pt-4">
                                <div className="row">
                                    <div className="borderRightLG col">
                                        <CompanyForm 
                                            items={this.state.fields.company}
                                            addItem={this.addItem}
                                            setChange={this.handleChange}
                                            errChild={this.state.errors}
                                        />
                                    </div>
                                </div>

                                <hr/>

                                <CompanyList
                                    items={this.state.listItems}
                                    removeItem={this.removeItem}
                                />
                            </div>

                        </div>

                        <div className="col-md-4 text-align-center">
                            <div className="jumbotron bg-dark yellow-text parTrack">
                                <p>{"{"}</p>  
                                <p style={{paddingLeft: "20px"}}>formInsert:</p>
                                {listTrack}
                                <p style={{paddingLeft: "20px"}}>{btnClosed !== '' ? 'closeButton:' : ''} {}</p>
                                {btnClosed}
                                <p>{"}"}</p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}
