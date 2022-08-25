import '../styles/AllegroHave.css';
import Carousel from './Carousel';
import SeeMore from './SeeMore';
import ProductVertical from './ProductVertical';
import { Fragment } from 'react';
import { generateProductsArray } from '../utils/temporaryProducts';
import { useEffect } from 'react';
import $ from 'jquery';
import ControlledCarousel from './ControlledCarousel';


function AllegroHave() {

    let allEventsMounted = false;

    useEffect(() => {

        if(!allEventsMounted){

            window.addEventListener("resize", adjustCarousels);
        }

        adjustCarousels();
    },[]);

    const linkCarouselImgs = ["https://a.allegroimg.com/original/121f67/47055e8b4321928e2601afe80147",
                            "https://a.allegroimg.com/original/128fd7/6b2b91c744579472650625edfb2e",
                            "https://a.allegroimg.com/original/12f33a/86a067b84b4796fe2e0bc22b7d04",
                            "https://a.allegroimg.com/original/124431/fd1c46dc45d1b2ea91631f48eda1",
                            "https://a.allegroimg.com/original/120646/cebc45454da792b665247559130a",
                            "https://a.allegroimg.com/original/124a5b/730eea184a49991cb3c06f8a0826",
                            "https://a.allegroimg.com/original/121fa2/4c3b69b149fcaab0742177e13f80",
                            "https://a.allegroimg.com/original/12b276/079da24f42ad8cb56eff16783ec1",
                            "https://a.allegroimg.com/original/127e86/5716039542e79484ad79c59a6488",
                            "https://a.allegroimg.com/original/12cf2e/99996f8d46f79f8545c6879d3409",
                            "https://a.allegroimg.com/original/1281ac/f2087ebc4a4faf735d2a589da656",
                            "https://a.allegroimg.com/original/12918e/819fd0fe4f4fb8139b534643b2d6",
                            "https://a.allegroimg.com/original/12ea75/27fe15a340058e4f1aed499de7a9",
                            "https://a.allegroimg.com/original/1203c1/be4750dc470ea7c98c82e460d460",
                            "https://a.allegroimg.com/original/12b040/94ad79ea4d49bb214c996dcdb5b0",
                            "https://a.allegroimg.com/original/12434b/c9eb266348a0988edb465e2800a8",
                            "https://a.allegroimg.com/original/12ac49/90eb9615480fb0d069e11984b0a7",
                            "https://a.allegroimg.com/original/12048f/0cac3b594d5e9741dea4c9b95189",
                            "https://a.allegroimg.com/original/12d1a6/334347e2479e91f89631b2d1674f",
                            "https://a.allegroimg.com/original/12485a/f8489e0a43d595bcde734a39a609"];

    const linkCarouselLabels = ["Śniadaniówki", "Piórniki", "Plecaki", "Zeszyty", "Odzież dla nastolatka", "Obuwie sportowe",
                                "Regały", "Krzesła biurkowe", "Smartfony", "Laptopy", "Artykuły piśmiennicze", "Zabawki edukacyjne",
                                "Artykuły papiernicze", "Artykuły plastyczne", "Obuwie dziecięce", "Odzież dziecięca", "Biurka",
                                "Lampki", "Tablety", "Komputery stacjonarne"];

    const linkCarouselItems = linkCarouselImgs.map((item, index) => ({link: item, label: linkCarouselLabels[index]}));

    const adjustCarousels = () => {
        const innerWidth = parseInt($(".allegroHave__inner").css("width").replace("px", ""), 10);
        let leftMax;
        let rightMax;
        
        // media breakpoints with 10px margin so that everything doesn't go beyond inner
        if(innerWidth >= 1250){
            rightMax = 500;
            leftMax = innerWidth - rightMax - 16;
        }
        else if(innerWidth >= 750){
            rightMax = innerWidth / 2;
            leftMax = innerWidth - rightMax - 16;
        }
        else{
            leftMax = innerWidth;
            rightMax = innerWidth;
        }

        $(".allegroHave .seeMore").css("max-width", leftMax + "px");
        $(".allegroHave__linkCarousel").css("max-width", rightMax + "px");
    }

    return (
        <div className="allegroHave">
            <div className="allegroHave__inner">

                <div className="allegroHave__header">
                    <h2>Wszystko do szkoły mają</h2>
                </div>

                <div className="allegroHave__main">
                    
                    <SeeMore>
                        <div className="allegroHave__carousel">
                            <Carousel carouselId={2} shiftValue={224 * 4}>
                                {generateProductsArray(15).map((product, index) => (
                                    <Fragment key={index}>
                                        <ProductVertical product={product}/>
                                    </Fragment>
                                ))}
                            </Carousel>
                        </div>
                    </SeeMore>

                    <div className="allegroHave__linkCarousel">

                        {/* <ControlledCarousel>
                            <ul className="allegroHave__linkCarouselContent">
                                {
                                    linkCarouselItems.map((item, index) => {
                                        return (
                                            <li className="allegroHave__linkCarouselItem" key={index}>
                                                <a href="#">
                                                    <img src={item.link} />
                                                    <div className="allegroHave__linkCarouselItemLabel">
                                                        <div>
                                                            <span>{item.label}</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </ControlledCarousel> */}
                        
                        <Carousel carouselId={3} shiftValue={250 * 2}>
                            <ul className="allegroHave__linkCarouselContent">
                                {
                                    linkCarouselItems.map((item, index) => {
                                        return (
                                            <li className="allegroHave__linkCarouselItem" key={index}>
                                                <a href="#">
                                                    <img src={item.link} />
                                                    <div className="allegroHave__linkCarouselItemLabel">
                                                        <div>
                                                            <span>{item.label}</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </Carousel>
                    </div>

                </div>

            </div>
        </div>
    );
}


export default AllegroHave;