import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';


class DvdOption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {},
            errors: {},       
        }
    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({ fields },
            () => { this.validate(name,value)})  
    }

    validate = (name,value) => {

        let fields = this.state.fields;
        let errors = {};
        let optionIsValid = true;

        if (!fields["size"]) {
            optionIsValid = false;
            errors["size"] = "*Please, submit required data";
        }
        else
          
            if (fields["size"] < 0 || fields["size"].match(/[^0-9]/)) {
                optionIsValid = false;
                errors["size"] = "*Please, provide the data of indicated type";
            }

        this.setState({
            errors: errors
        });
        this.props.inform();
        this.props.changeHandlerOption(name,value);
        this.props.validateOption(optionIsValid);
    }
    render() {
        return (
            <div>
                <p> Please, provide size:</p>
                <Form.Group className="mb-3" >                 
                        <div>
                            <Form.Label>Size (MB)</Form.Label>
                            <Form.Control id='size' name='size' placeholder="Enter size "  
                            onChange={this.change} 
                            />
                             <div className="errorMsg">{this.state.errors.size}</div>
                        </div>
                </Form.Group>        
            </div>
     )
    }
};


export default DvdOption;
