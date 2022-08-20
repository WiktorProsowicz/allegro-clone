import { useStateValue } from '../StateProvider';
import '../styles/FirstRow.css';
import { useEffect } from 'react';
import $ from 'jquery';


function FirstRow() {

    const [{currentAsideContent}, dispatch] = useStateValue();

    let allEventsMounted = false;

    useEffect(() => {
        if(!allEventsMounted){
            // setTimeout(checkHovered, 100);
            setInterval(checkHovered, 50);
            allEventsMounted = true;

            currentlyOnDepartments = false;
            switchToBenefits(false);

            $(".firstRow__navAside").hide();
        }
        
    },[]);

    let globalCatMarked = undefined; // element that is marked and styled
    let globalReadyToStyle = undefined; // element that is hovered over
    let timeoutIsSet = false;

    const checkHovered = () => {

        // getting all hovered items and extracting aside -- if the user hovers over the aside, don't switch marked li
        let hoveredItems = $(":hover").filter((index, item) => {
            return item.classList.contains("firstRow__navAside");
        });

        if(hoveredItems.length != 0) return;


        // getting all hovered items and extracting li with proper class
        hoveredItems = $(":hover").filter((index, item) => {
            return item.classList.contains("departmentsItemsItem");
        });
        
        // getting new item that is currently hovered over
        let newItem = undefined;
        if(hoveredItems.length != 0) newItem = hoveredItems[0];

        if(newItem === globalCatMarked) return;

        if(newItem !== globalReadyToStyle){
            if(timeoutIsSet){
                clearTimeout(styleHovered);
                timeoutIsSet = false;
            }
            
            globalReadyToStyle = newItem;
            return;
        }

        if(!timeoutIsSet){
            setTimeout(styleHovered, 300);
            timeoutIsSet = true;
        }
        
    }

    const styleHovered = () => {
        if(globalCatMarked !== undefined) {
            globalCatMarked.classList.remove("departmentsItemsHovered");
        }
        globalCatMarked = globalReadyToStyle;

        if(globalCatMarked !== undefined) {
            globalCatMarked.classList.add("departmentsItemsHovered");
            $(".firstRow__navAside").show()
            // loadAside(globalCatMarked.getAttribute("data-order"));

            

            dispatch({
                type: "CHANGE_DEPARTMENTS_ASIDE",
                args: [globalCatMarked.getAttribute("data-order")]
            });

            $(".departmentsItemsBorder").show()
            $(".departmentsItemsBorder").animate({bottom: (globalCatMarked.getAttribute("data-order") * 35) + "px"}, 150);
        }
        else{
            $(".departmentsItemsBorder").hide()
            $(".firstRow__navAside").hide()
        }
        
    }

    let currentlyOnDepartments = true;
    const switchToBenefits = (toBenefits) => {

        // do nothing if the user clicked disabled button
        if(toBenefits && !currentlyOnDepartments) return;
        if(!toBenefits && currentlyOnDepartments) return;

        currentlyOnDepartments = !currentlyOnDepartments;

        if(toBenefits){
            document.querySelector("#firstRowDepartments").classList.remove("firstRow__navHeadingMarked");
            $("#firstRowDepartmentsBorder").animate({width: "0px"}, 100);

            document.querySelector("#firstRowBenefits").classList.add("firstRow__navHeadingMarked");
            $("#firstRowBenefitsBorder").animate({width: "100%"}, 100);
        }

        else {
            document.querySelector("#firstRowDepartments").classList.add("firstRow__navHeadingMarked");
            $("#firstRowDepartmentsBorder").animate({width: "100%"}, 100);

            document.querySelector("#firstRowBenefits").classList.remove("firstRow__navHeadingMarked");
            $("#firstRowBenefitsBorder").animate({width: "0px"}, 100);
        }
    }

    const links = [
        "https://assets.allegrostatic.com/metrum/icon/laptop-a4c88ba8c9.svg",
        "https://assets.allegrostatic.com/metrum/icon/dress-c001e8d7f1.svg",
        "https://assets.allegrostatic.com/metrum/icon/basket-f6c9c75c2a.svg",
        "https://assets.allegrostatic.com/metrum/icon/baby-58992b9d89.svg",
        "https://assets.allegrostatic.com/metrum/icon/lipstick-974cf1db4e.svg",
        "https://assets.allegrostatic.com/metrum/icon/first-aid-0c601a56cb.svg",
        "https://assets.allegrostatic.com/metrum/icon/book-58344d0822.svg",
        "https://assets.allegrostatic.com/metrum/icon/ball-f1f0883cc6.svg",
        "https://assets.allegrostatic.com/metrum/icon/car-0b4e0bbc3b.svg",
        "https://assets.allegrostatic.com/metrum/icon/house-and-magnifying-glass-7d24599ece.svg",
        "https://assets.allegrostatic.com/metrum/icon/stamp-d912af3b1c.svg",
        "https://assets.allegrostatic.com/metrum/icon/skyscraper-1989b66d12.svg",
        "https://assets.allegrostatic.com/metrum/icon/tickets-b3e077f330.svg",
        "https://assets.allegrostatic.com/metrum/icon/allegrolokalnie-3f1c3e7a0f.svg"
    ];

    const texts = [
        "Elektronika",
        "Moda",
        "Dom i Ogród",
        "Supermarket",
        "Dziecko",
        "Uroda",
        "Zdrowie",
        "Kultura i rozrywka",
        "Sport i turystyka",
        "Motoryzacja",
        "Nieruchumości",
        "Kolekcje i sztuka",
        "Firma i usługi",
        "eBilet.pl",
        "Allegro Lokalnie"
    ];

    const mergedLinksTexts = links.map((e, i) => ({link: e, text: texts[i], index: links.length - i - 1}));

    const navContentDepartments = (
        <>
            <ul className="departmentsItems">
                <span className="departmentsItemsBorder"></span>

                {mergedLinksTexts.map((item) => (
                    <li className="departmentsItemsItem" key={item.index} data-order={item.index}>

                        <a className="departmentsItemsLink">
                            <span className="departmentsItemsLinkImage" >
                                <svg width="40px" height="28px">
                                    <image href={item.link}></image>
                                    <filter id="m-color-filter-teal">

                                        <feColorMatrix
                                        type="matrix"
                                        values=" 1.000  0.000  0.000  0.046  0.000 
                                                0.000  1.000  0.000  0.271  0.047 
                                                0.000  0.000  1.000  0.234  0.045 
                                                0.000  0.000  0.000  1.000  0.000">
                                        </feColorMatrix>
  
                                    </filter>
                                </svg>
                            </span>

                            <span>
                                <span className="departmentsItemsLinkText">{item.text}</span>
                            </span>
                        </a>

                    </li>
                ))}
            </ul>

            <div>
                <a className="departmentsItemsAll">WSZYSTKIE KATEGORIE</a>
            </div>
        </>
    );
    
    
    return (
        <div className="firstRow">
            <div className="firstRow__inner">

                <nav className="firstRow__nav">

                    <ul className="firstRow__navHeading">
                        <li id="firstRowDepartments">
                            <a onClick={() => {switchToBenefits(false)}} href="#" className="firstRow__navHeadingItem">DZIAŁY</a>
                            <span id="firstRowDepartmentsBorder" className="firstRow__navHeadingBorder"></span>
                        </li>

                        <li id="firstRowBenefits">
                            <a onClick={() => {switchToBenefits(true)}} href="#" className="firstRow__navHeadingItem">KORZYŚCI</a>
                            <span id="firstRowBenefitsBorder" className="firstRow__navHeadingBorder"></span>
                        </li>
                    </ul>

                    <div className="firstRow__navContent">
                        
                        {navContentDepartments}

                    </div>

                    <div className="firstRow__navAside">
                        {currentAsideContent}
                    </div>

                </nav>

            </div>
        </div>
    );
}

export default FirstRow;