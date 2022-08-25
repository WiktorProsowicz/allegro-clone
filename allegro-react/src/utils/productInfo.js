// simple functions set that can be used by variety of product types i.e. short horizontal, extended vertical
// classes are universal like product__ but can be customosed by i.e. .productHorizontalShort .product__productInfo {display: flex}


export const discountInfo = (discount, discount_percent, old_price, top_occasion) => {
    if(discount){

        let fraction = old_price % 100;
        const integer = (old_price - fraction) / 100;

        const badgeContent = top_occasion ? "top okazja" : "-" + discount_percent + "%";

        return (
            <li className="product__discountInfoLItem">
                <div className="product__discountInfo">
                    <span className="product__discountBadge">{badgeContent}</span>
                    <span className="product__crossedPrice">{integer},{fraction}<small>zł</small></span>
                </div>
            </li>
        );
    }
}

export const smartOnly = (smart) => {
    if(smart){
        return (
            <li className="product__smartOnlyBadgeLItem">
                <span className="product__smartOnlyBadge">smart! only</span>
            </li>
        );
    }
}

export const productName = (name) => {
    return (
        <li className="product__productNameLItem">
            <div className="product__productName">
                    <span>{name}</span>
            </div>
        </li>
    );
}

export const currentPrice = (price, currency, allegro_smart, is_horizontal) => {
    const suffix = currency === "PLN" ? "zł" : "€";

    let fraction = price % 100;
    const integer = (price - fraction) / 100;

    if(fraction === 0){
        fraction = "00";
    }

    if(is_horizontal){
        return (
            <li className="product__currentPriceLItem">
                <div className="product__currentPrice">
                    <span>{integer},</span>
                    <small>{fraction}</small>
                    <small className="product__currentPriceSuffix">{suffix}</small>
                    {allegro_smart && <img alt="" src="https://assets.allegrostatic.com/metrum/icon/smart-098a60541f.svg"/>}
                </div>
            </li>
        );
    }
    else {
        return (
            <>
                <li className="product__currentPriceLItem">
                    <div className="product__currentPrice">
                        <span>{integer},</span>
                        <small>{fraction}</small>
                        <small className="product__currentPriceSuffix">{suffix}</small>
                    </div>
                </li>

                <li className="product__currentPriceSmartLItem">
                    <div className="product__currentPriceSmart">
                        {allegro_smart && <img alt="" src="https://assets.allegrostatic.com/metrum/icon/smart-098a60541f.svg"/>}
                    </div>
                </li>
            </>
        );
    }
    
}

export const numberBought = (number, hit) => {

    let suffix;
    if(number === 1) suffix = "osoba kupiła";
    else if(number % 10 === 2 || number % 10 === 3 || number % 10 === 4) suffix = "osoby kupiły";
    else suffix = "osób kupiło";

    return (
        <li className="product__numberBoughtLItem">
            <div className="product__numberBought">
                {hit && <span className="product__hitBadge">hit</span>}
                <span>{number}</span>
                <span>{suffix}</span>
            </div>
        </li>
    );
}

export const productImage = (link) => {
    return (
        <div className="product__productImage">
            <img alt="" src={link}/>
        </div>
    );
}

export const payLater = (later) => {
    if(later){
        return (
            <li className="product__payLaterLItem">
                <div className="product__payLater">
                    <span>zapłać później z</span>
                    <img alt="" src="https://assets.allegrostatic.com/metrum/icon/pay-badge-473bd255d2.svg" />
                </div>
            </li>
        );
    }
}

export const superPrice = (isSuper) => {
    if(isSuper){
        return (
            <span className="product__superPrice">SUPERCENA</span>
        );
    }
}

export const newProduct = (isNew) => {
    if(isNew){
        return (
            <span className="product__newProduct">nowość</span>
        );
    } 
}
