import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div className="App">
                <h2>
                    Chi tiết sản phẩm: {this.props.match.params.slug}
                </h2>
            </div>
        );
    }
}

export default ProductItem;
