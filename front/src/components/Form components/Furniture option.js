import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class FurnitureOption extends React.Component {
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

        if (!fields["height"]) {
            optionIsValid = false;
            errors["data"] = "*Please, submit required data";
        }

        if (fields["height"] < 0 || fields["height"] && fields["height"].match(/[^0-9]/)) {
            optionIsValid = false;
            errors["type"] = "*Please, provide the data of indicated type";
        }
        if (!fields["width"]) {
            optionIsValid = false;
            errors["data"] = "*Please, submit required data";
        }
        if (fields["width"] < 0 || fields["width"] && fields["width"].match(/[^0-9]/)) {
            optionIsValid = false;
            errors["type"] = "*Please, provide the data of indicated type";
        }
        if (!fields["length"]) {
            optionIsValid = false;
            errors["data"] = "*Please, submit required data";
        }
        if (fields["length"] < 0 || fields["length"] && fields["length"].match(/[^0-9]/)) {

            optionIsValid = false;
            errors["type"] = "*Please, provide the data of indicated type";
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
                <p > Please, provide dimensions in HxWxL format:</p>
                <div className="errorMsg">{this.state.errors.type}</div>
                <Form.Group className="mb-3" >
                    <Form.Label>Height(CM)</Form.Label>
                    <Form.Control id='height' name='height' placeholder="Enter height "
                        onChange={this.change}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Width(CM)</Form.Label>
                    <Form.Control id='width' name='width' placeholder="Enter width "
                        onChange={this.change}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Length(CM)</Form.Label>
                    <Form.Control id='length' name='length' placeholder="Enter length "
                        onChange={this.change}
                    />
                </Form.Group>
            </div>
        )
    }
};


export default FurnitureOption;
