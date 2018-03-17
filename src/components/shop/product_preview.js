import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'
import BtnMain from 'components/form/buttons/main_button.js'
import style from './style.css'

class ProductPreview extends Component {

    goToProduct = () => {

    }

    addToCart = () => {

    }

    render() {
        const product = this.props.product
    	
        return (
            <div className={style.prodWrap}>
                <img className={style.img} src={product.image} alt="" />
                <div className={style.info}>
                    <div className="font-bebas"><strong>{product.name}</strong></div>
                    <div className="font-bebas"><strong className={style.price}>{product.price}</strong></div>
                </div>
                <div className={style.btnWrap}>
                    <div className={style.btnInner}>
                        <FormGroup>
                            <BtnMain
                                type="button"
                                bsStyle="success"
                                text="Preview"
                                onClick={this.goToProduct}
                            />
                        </FormGroup>
                        <FormGroup>
                            <BtnMain
                                type="button"
                                bsStyle="success"
                                text="Add to cart"
                                onClick={this.addToCart}
                            />
                        </FormGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductPreview