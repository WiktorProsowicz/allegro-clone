import { useStateValue } from '../StateProvider';
import '../styles/ProductSmart.css';
import {productImage, productName, smartOnly, currentPrice, superPrice, newProduct} from '../utils/productInfo';


function ProductSmart({product}) {

    const [{usedCurrency}, dispatch] = useStateValue();

    return (
        <div className="productS">
            <a href="#">

                <div className="product__image">
                    {productImage(product.image_link)}
                </div>

                <div className="product__info">
                    <ul className="product__infoList">

                        {smartOnly(product.smart_only)}

                        {currentPrice(product.price, usedCurrency, product.allegro_smart)}

                        {productName(product.name)}

                    </ul>
                </div>

                {superPrice(product.super_price)}

                {newProduct(product.new_product)}

            </a>
        </div>
    );
}


export default ProductSmart;