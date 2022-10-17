import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';


class BookOption extends React.Component {
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
            () => { this.validate(name, value) })
    }

    validate = (name, value) => {

        let fields = this.state.fields;
        let errors = {};
        let optionIsValid = true;

        if (!fields["weight"]) {
            optionIsValid = false;
            errors["weight"] = "*Please, submit required data";
        }
        else
            if (fields["weight"] < 0 || fields["weight"].match(/[^0-9]/)) { 
                optionIsValid = false;
                errors["weight"] = "*Please, provide the data of indicated type";
            }

        this.setState({
            errors: errors
        });
        this.props.inform();
        this.props.changeHandlerOption(name, value);
        this.props.validateOption(optionIsValid);
    }

    render() {
        return (
            <div>
                <p> Please, provide weight:</p>
                <Form.Group className="mb-3" >
                    <div>
                        <Form.Label>Weight (KG)</Form.Label>
                        <Form.Control id='weight' name='weight' placeholder="Enter weight "
                            onChange={this.change} />
                    </div>
                    <div className="errorMsg">{this.state.errors.weight}</div>
                </Form.Group>
            </div>
        )
    }
};

export default BookOption;
