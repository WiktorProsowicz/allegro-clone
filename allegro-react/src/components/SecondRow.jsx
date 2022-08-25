import '../styles/SecondRow.css';
import ProductTimer from './ProductTimer';
import VertCont from './VertCont';
import SeeMore from './SeeMore';
import ProductSimpleHorizontal from './ProductSimpleHorizontal';
import { generateProductsArray, product_secondRow_timer } from '../utils/temporaryProducts';
import { Fragment } from 'react';

function SecondRow() {

    const timerProduct = product_secondRow_timer;


    const timerDeadline = new Date(2022, 7, 25, 22, 13, 13);

    const tilesLinks = ["https://a.allegroimg.com/original/12b1d5/fcdf70c648b197e221de9b362625", "https://a.allegroimg.com/original/12bf69/0084cfd8461aa66263dd4fdc8d4f",
                        "https://a.allegroimg.com/original/12e661/f2ab0ec243d49b3449741ef1df11", "https://a.allegroimg.com/original/121cd4/d1c0858a4030b6fd9ecd0916639e"];

    return (
        <div className="secondRow">
            <div className="secondRow__inner">

                <div className="secondRow__innerFirst">
                    <ProductTimer product={timerProduct} deadline={timerDeadline}/>

                    <SeeMore label="Trendy na lato">
                        <VertCont>
                            {/* <ProductSimpleHorizontal product={seeMorePr1}/>

                            <ProductSimpleHorizontal product={seeMorePr2}/>

                            <ProductSimpleHorizontal product={seeMorePr3}/> */}

                            {
                                generateProductsArray(3).map((product, index) => (
                                    <Fragment key={index}>
                                        <ProductSimpleHorizontal product={product}/>
                                    </Fragment>
                                ))
                            }
                        </VertCont>
                    </SeeMore>
                </div>

                
                <div className="secondRow__categoriesTiles">

                    {tilesLinks.map((link, i) => {
                        return (
                            <div className="secondRow__categoriesTile" key={i}>
                                <a href="#">
                                    <img src={link} />
                                </a>
                            </div>
                        );
                    })}

                </div>

            </div>
        </div>
    );
}

export default SecondRow;