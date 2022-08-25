import { useStateValue } from '../StateProvider';
import '../styles/Product.css';
import '../styles/ProductShortHorizontal.css';
import { discountInfo, currentPrice, productName, productImage, numberBought, payLater, superPrice, smartOnly, newProduct } from '../utils/productInfo.js';


function ProductShortHorizontal({product}) {

    const [{ usedCurrency }, dispatch] = useStateValue();

    // console.log(product);

    return (
        <div className="productSH">
            <a href="#">
                <div className="product__image">
                    {productImage(product.image_link)}
                </div>

                <div className="product__info">
                    <ul className="product__infoList">

                        {discountInfo(product.discount, product.discount_percent, product.old_price, product.top_occasion)}

                        {smartOnly(product.smart_only)}

                        {currentPrice(product.price, usedCurrency, product.allegro_smart, true)}

                        {productName(product.name)}

                        {numberBought(product.bought, product.hit)}

                        {payLater(product.pay_later)}

                    </ul>
                </div>

                {superPrice(product.super_price)}

                {newProduct(product.new_product)}
            </a>
        </div>
        
    );
}

export default ProductShortHorizontal;