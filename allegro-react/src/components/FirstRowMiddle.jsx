import '../styles/FirstRowMiddle.css';
import Carousel from './Carousel';
import { useEffect } from 'react';
import $ from 'jquery';
import { Fragment } from 'react';


function FirstRowMiddle() {

    let allEventsMounted = false;

    useEffect(() => {
        if(!allEventsMounted){
            
            window.addEventListener("resize", adjustMiddle);
            timer = setTimeout(switchAd, 3000);

            allEventsMounted = true;
        }

        adjustMiddle();

    }, []);

    const adjustMiddle = () => {
        const firstRowInnerWidth = parseInt($(".firstRow__inner").css("width").replace("px", ""), 10);

        // media breakpoint where navbar__signin is not visible
        if(firstRowInnerWidth <= 1250){
            $(".firstRow__middleAds").css("width", (firstRowInnerWidth - 292 - 16) + "px");
            $(".firstRow__middleWorth").css("width", (firstRowInnerWidth - 292 - 16) + "px");
        }
        else {
            $(".firstRow__middleAds").css("width", (firstRowInnerWidth - 368 - 292 - 2 * 16) + "px");
            $(".firstRow__middleWorth").css("width", (firstRowInnerWidth - 368 - 292 - 2 * 16) + "px");
        }
        
    }

    let adsVisibleIndex = 1;
    let timer;

    const switchAdTo = (number) => {

        
        clearTimeout(timer);

        $("#firstRowMiddleAdsImg-" + adsVisibleIndex).removeClass("adsChosen");
        $("#firstRowMiddleAdsOptionsItem-" + adsVisibleIndex).removeClass("adsChosen");

        $("#firstRowMiddleAdsOptionsDot-" + adsVisibleIndex).removeClass("adsChosen");

        adsVisibleIndex = number;

        $("#firstRowMiddleAdsImg-" + adsVisibleIndex).addClass("adsChosen");
        $("#firstRowMiddleAdsOptionsItem-" + adsVisibleIndex).addClass("adsChosen");

        $("#firstRowMiddleAdsOptionsDot-" + adsVisibleIndex).addClass("adsChosen");

        timer = setTimeout(switchAd, 7000);
    }

    const switchAd = () => {
        switchAdTo((adsVisibleIndex % 5) + 1);
    }

    const carouselLinks = [
        "https://a.allegroimg.com/original/12e33c/78403a71499387bad97424b41cbf", "https://a.allegroimg.com/original/127691/6eace0094a379a210653e8fde78e",
        "https://a.allegroimg.com/original/12d8ef/c80ce8b24ad4a4f62f03af20117a", "https://a.allegroimg.com/original/120c12/ac22c1844613a31976262a84f38c",
        "https://a.allegroimg.com/original/127836/fa990d4f4ab7a9f1a476e5107166", "https://a.allegroimg.com/original/1216ca/6cb3dac34d6d988930a170bbebae",
        "https://a.allegroimg.com/original/12a5d2/967ce8d44c80bdddbd0f05c46481", "https://a.allegroimg.com/original/12a594/eae6120245b1bfa539c62359fd07",
        "https://a.allegroimg.com/original/122cc2/f40542db4b6186da0123fb8d48e7", "https://a.allegroimg.com/original/12dc35/abaf45694b9ea454f515d492a763",
        "https://a.allegroimg.com/original/123d70/8c6becdf4af4bc6aaac65f3de76b", "https://a.allegroimg.com/original/128f8d/822077d3402da78d626ec3b466e5",
        "https://a.allegroimg.com/original/12fcee/3a8829684a308b9ff734214e658e", "https://a.allegroimg.com/original/1284ec/d3aa005d453d957d746f3d34bd90"
    ]

    const carouselTexts = [
        "Wszystko do szkoły", "Darmowe dostawy", "Superoferty od Durex", "Zgarnij monety",
        "Sprzedawaj i zarabiaj", "Nawadnianie ogrodu", "Gorąco polecamy", "Як купувати на Allegro?", "Pomóż Ukrainie", 
        "Supercena!", "Ogłoszenia motoryzacyjne", "Apka lokalnie", "Polecane wydarzenia", "Z kuponami taniej!"
    ]

    const carouselItems = carouselLinks.map((e, i) => {
        return {link: e, text: carouselTexts[i]};
    });

    return (
        <>
            <div className="firstRow__middleAds">
                <a href="#">
                        {
                            ["https://a.allegroimg.com/original/12bfa3/6850daf54d81a2b2426343dcc5bc",
                            "https://a.allegroimg.com/original/126221/2286688e49e9a5f0d9e10288c493",
                            "https://a.allegroimg.com/original/12f493/7c9f33414b74bd8d3b6a31bf1a6b",
                            "https://a.allegroimg.com/original/127733/7702cb694339a20c44a83ed7cdf8",
                            "https://a.allegroimg.com/original/123969/ab5944bf43eb93bf79d06914af07"].map((item, i) => {
                                
                                const classname = i == 0 ? "adsChosen" : "";

                                return (
                                    <div className="firstRow__middleAdsImage" key={i}>
                                        <img id={"firstRowMiddleAdsImg-" + (i + 1)} src={item} className={classname}/>
                                    </div>
                                );
                                
                            })
                        }
                </a>

                <div>
                    <ul className="firstRow__middleAdsOptions">

                        {["Raty 0%", "Powrót do szkoły", "Monety na Lokalnie", "Punkty paczkowe", "Kuchenka przenośna"].map((item, index) => {

                            const classname = index == 0 ? "adsChosen" : ""; 
                            
                            return (
                                <Fragment key={index}>
                                <li id={"firstRowMiddleAdsOptionsItem-" + (index + 1)} className={classname + " firstRow__middleAdsOptionsItem"}>
                                    <a href="#" onClick={() => {switchAdTo(index + 1)}}><span>{item}</span></a>
                                </li>
                                
                                {/* dots are equivalents of items on specific media breakpoint*/}
                                <li id={"firstRowMiddleAdsOptionsDot-" + (index + 1)} className={classname + " firstRow__middleAdsOptionsDot"}>
                                    <a href="#" onClick={() => {switchAdTo(index + 1)}}><span></span></a>
                                </li>
                                </Fragment>
                            );
                            
                        })}

                    </ul>
                </div>

            </div>

            <div className="firstRow__middleWorth">

                <div className="firstRow__middleWorthHeader">
                    <span>Warto zobaczyć</span>
                </div>

                <div className="firstRow__middleWorthCarousel">
                    <Carousel carouselId={1} shiftValue={176 * 3}>

                        <ul className="firstRow__middleWorthLinks">
                        {
                            carouselItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#">
                                            <div className="firstRow__middleWorthLinksItem">
                                                <img src={item.link}  />
                                                <span>{item.text}</span>
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
        </>
    );
}

export default FirstRowMiddle;