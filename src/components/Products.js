import React, { Component } from 'react';
import { NavLink, Route, Link, Switch, Redirect } from 'react-router-dom';
import ProductItem from './ProductItem';
import About from './About';

const products=[
    {
        id: 1,
        name: "Iphone X",
        price: 35000000
    },
    {
        id: 2,
        name: "Nokia N1",
        price: 20000000
    },
    {
        id: 3,
        name: "Hawei H5",
        price: 10000000
    }
]

var slugify = (text)=>{
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

class Products extends Component {


    showProducts = (products)=>{
        var res= null;
        // var url = this.props.match.url;
        res= products.map( (item, key)=>{
            var slug= slugify(item.name);
            return (

                <NavLink to={`/${slug}`} key={key}>
                    <li  className="list-group-item">
                        {item.id} - {item.name} - {item.price}
                    </li>
                </NavLink>
                
            )
        })
        
        return res;
    }

    render() {
        console.log(this.props.match);
        // var url = this.props.match.url;
        return (
            <div className="App">
                <h2>Danh Sách Sản Phẩm</h2>
                
                <div className="container">
                    
                    <div className="row">
                        
                        <ul className="list-group">
                            {this.showProducts(products)}
                        </ul>
                        
                    </div>
                    
                    <div className="row">
                        <Switch>
                            {/* <Redirect from='/:slug' to= '/about'/> */}
                            <Route path="/:slug" exact={true}  component={ProductItem}/>
                        </Switch>
                    </div>
                    
                    
                    
                </div>
                
            </div>
        );
    }
}

export default Products;
