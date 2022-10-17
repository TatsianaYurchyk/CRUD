
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import UserService from '../../services/UserService';
import DisplayOptions from './DisplayOptions';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            checkedBoxes: [],
        };
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }

    componentDidMount() {
        UserService.getProducts().then((res) => {
            this.setState({ products: res.data });
        });
        
    }

    toggleCheckbox = (e, item) => {
        if (e.target.checked) {
            let arr = this.state.checkedBoxes;
            arr.push(item);
            this.setState = { checkedBoxes: arr };
           
        } else {
            let items = this.state.checkedBoxes.splice(this.state.checkedBoxes.indexOf(item), 1);

            this.setState = {
                checkedBoxes: items
            }
        }
        console.log(item)
    }

    deleteProduct = (item) => {
        {
            this.state.checkedBoxes.map(item => (
                UserService.deleteProduct(item)
                    .then(res => {
                        console.log("done")
                    }                
                    )))            
        }
    }
   
    render() {

        return (
            <Container>
                <Row className="gx-3 ">

                    {this.state.products.map(item => (
                        <div key={item.id} className="col-lg-3 col-md-4">

                            <Card className=' mt-4 text-center' key={item.id}>

                                <input type="checkbox" className="delete-checkbox" value='{item.id}' checked={this.state.checkedBoxes.find((p) => p.id === item.id)} onChange={(e) => this.toggleCheckbox(e, item)} />

                                <p >SKU: {item.sku}</p>
                                <p >Name: {item.name}</p>
                                <p >Price: {item.price} $</p>

                                <DisplayOptions category_id={item.category_id} weight={item.weight} size={item.size} height={item.height} width={item.width} length={item.length} />
                             
                            </Card>

                        </div>

                    ))}

                </Row>

            </Container>
        )
    }
}

export default ProductItem;



