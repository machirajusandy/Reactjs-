import React from 'react'

export default class CompanyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneCode: [
                {country:'India', code: '59980'}, 
                {country:'Netherlands', code: '01'}
            ]
        }

        // this.formRef = React.createRef();
        this.formRef = null;
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        var item = e.target
        
        var newItemName = item.companyname.value;
        var newItemAddress = item.address.value;
        var newItemRevenue = item.revenue.value;
        var newItemCode    = item.code.value;
        var newItemPhone = item.phone.value;
        
        this.props.addItem({newItemName, newItemAddress, newItemRevenue, newItemCode, newItemPhone});

        this.formRef.reset();
    }

    
    ucWord(str){
        return str.replace (/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        })
    }

    render() {
        
        let type, formComponent
        var listForm = this.props.items.map((input, index) => {

            if(input === 'phone'){
                type = 'number'

                formComponent = (
                    <div className="form-group" key={index}>
                        <label>{this.ucWord(input)} No:</label>
                        <div className="row">
                            <div className="col-md-3 col-sm-4 col-xs-4">
                                <select
                                    id="code"
                                    as="select"
                                    name="code"
                                    type="select"
                                    onChange={ this.props.setChange } 
                                    className="form-control"
                                >
                                    {this.state.phoneCode.map((opt) => {
                                        return <option key={opt.code} value={opt.code}>{'+' + opt.code}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-md-9 col-sm-8 col-xs-9">
                                <input
                                    id={input}
                                    type={type}
                                    placeholder={input}
                                    name={input}
                                    onChange={ this.props.setChange } 
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                )
            }else{
                type = 'text'

                formComponent = (
                    <div className="form-group" key={index}>
                        <label>{this.ucWord(input)}:</label>
                        <input 
                            type={type}
                            placeholder={input === 'companyname' ? 'name' : input}
                            name={input === 'companyname' ? 'companyname' : input}
                            onChange={ this.props.setChange } 
                            className="form-control"
                        />
                    </div>
                )
            }

            return formComponent
        })

        return (
            <form ref={(ref) => this.formRef = ref} onSubmit={this.onSubmit} >
                {listForm}

                <button
                    type="submit" 
                    className="btn btn-secondary btn-lg invalid-feedback block"
                >
                    Create
                </button>
            </form>
        )
    }
}