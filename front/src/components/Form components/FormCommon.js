import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import UserService from '../../services/UserService';
import withRouter from '../WithRouter'
import FormOptions from './FormOptions';


class FormCommon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sku: '',
      name: '',
      price: '',
      category: [],
      fields: {},
      errors: {},
      info: "",
      optionValid: '',
    }
  }
  
  componentDidMount() {
    UserService.getCategories().then((res) => {
      this.setState({ category: res.data });
    })
  }

  saveProduct = (e) => {
    e.preventDefault();
    if (this.validateForm() && this.state.optionValid) {
      let product = {
        sku: this.state.sku,
        name: this.state.name,
        price: this.state.price,
        category_id: this.state.category_id,
        weight: this.state.weight,
        size: this.state.size,
        height: this.state.height,
        width: this.state.width,
        length: this.state.length,
      };

      console.log('product => ' + JSON.stringify(product));

      UserService.createProduct(product).then(res => {
        res.data=="Created"?this.props.navigate("/"):this.setState({info:"SKU already exists"})
      });
      
    }
    else
      this.setState({ info: "*Please, submit all required data" })

  }

  inform = () => {
    this.setState({ info: "" })
  }

  validateForm = () => {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"] || !this.state.fields["name"].replace(/\s/g, '')) {
      formIsValid = false;
      errors["name"] = "*Please, submit required data";
    }
    if (!fields["price"]) {
      formIsValid = false;
      errors["price"] = "*Please, submit required data";
    }
    if (fields["price"] < 0) {
      formIsValid = false;
      errors["price"] = "*Please, provide the data of indicated type";
    }
    if (fields["price"] && !fields["price"].match(/^[0-9]*[.]?[0-9]+$/)) {
      formIsValid = false;
      errors["price"] = "*Please, provide the data of indicated type";
    }
    if (!fields["category_id"]) {
      formIsValid = false;
      errors["category_id"] = "*Please, submit required data";
    }
    if (!fields["sku"] || !this.state.fields["sku"].replace(/\s/g, '')) {
      formIsValid = false;
      errors["sku"] = "*Please, submit required data";
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;

    this.setState({ [name]: value },
      () => {
        this.setState({
          fields
        });
      });
  }

  changeHandlerOption = (name, value) => {
    this.setState({ [name]: value });
  }

  validateOption = (option) => {
    this.setState({ optionValid: option })
  }

  render() {
    return (

      <Container>
        <div className="errorMsg">{this.state.info}</div>

        <Form id='product_form' onSubmit={this.saveProduct}>

          <Form.Group className="mb-3 mt-5" >
            <Form.Label>SKU</Form.Label>
            <Form.Control id='sku' name='sku' placeholder="Enter unique SKU" value={this.state.sku} onChange={this.changeHandler} />
            <div className="errorMsg">{this.state.errors.sku}</div>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control id='name' name='name' placeholder="Enter the product name" value={this.state.name} onChange={this.changeHandler} />
            <div className="errorMsg">{this.state.errors.name}</div>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Price ($)</Form.Label>
            <Form.Control id='price' name='price' placeholder="Enter the price" value={this.state.price} onChange={this.changeHandler} />
            <div className="errorMsg">{this.state.errors.price}</div>
          </Form.Group>

          <Form.Group controlId="formGridProductTyp">
            <Form.Label> Type switcher</Form.Label>
            <Form.Select id='productType' name='category_id' defaultValue="Choose the Poduct Type" value={this.state.category_id} onChange={this.changeHandler}>
              <option className="d-none" value="">
                Select Product Type
              </option>
              {this.state.category.map(category => (
                <option key={category.id} value={category.id} >{category.name}</option>
              ))}
            </Form.Select>
            <div className="errorMsg">{this.state.errors.category_id}</div>
          </Form.Group>

          <FormOptions category={this.state.category_id} changeHandlerOption={this.changeHandlerOption} validateOption={this.validateOption}
            inform={this.inform} />

        </Form>
      </Container>
    )
  }
};


export default withRouter(FormCommon);
