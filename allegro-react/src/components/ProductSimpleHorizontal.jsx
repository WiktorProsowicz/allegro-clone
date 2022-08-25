import { useStateValue } from '../StateProvider';
import '../styles/ProductSimpleHorizontal.css';
import {productImage, discountInfo, smartOnly, currentPrice, productName, payLater, numberBought, superPrice, newProduct} from '../utils/productInfo'

function ProductSimpleHorizontal({product}){

    const [{usedCurrency, dispatch}] = useStateValue();

    return (
        <div className="productSimpleH">
            <a href="#">
                <div className="product__image">
                    {productImage(product.image_link)}
                </div>

                <div className="product__info">
                    <ul className="product__infoList">

                        {/* {discountInfo(product.discount, product.discount_percent, product.old_price, product.top_occasion)} */}

                        {smartOnly(product.smart_only)}

                        {currentPrice(product.price, usedCurrency, product.allegro_smart, true)}

                        {productName(product.name)}

                        {payLater(product.pay_later)}

                        {numberBought(product.bought, product.hit)}
                    </ul>
                </div>

                {superPrice(product.super_price)}

                {newProduct(product.new_product)}
            </a>
        </div>
    );
}

export default ProductSimpleHorizontal;