import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { useEffect } from 'react';

function Navbar() {

    let popupEventMounted = false;

    useEffect(() => {
        // $(".navbar__myAllegroPopup").hide();
        
        // if(!popupEventMounted){
        //     window.addEventListener("click", hideIfOutside);
        //     popupEventMounted = true;
        // }

    }, []);

    const hideIfOutside = (event) => {
        let target = event.target;

        console.log(document.querySelector(".navbar__myAllegroPopup").style.display);

        // if(!target.classList.contains("nav_pop") && document.querySelector(".navbar__myAllegroPopup").style.display != "none"){
        //     myAllegroClick();
        //     console.log("aaa");
        // }
        // else{
        //     console.log("ddd");
        // }
    }

    const myAllegroClick = () => {

        console.log("2222");

        $(".navbar__myAllegroArrow-down").toggle();
        $(".navbar__myAllegroArrow-up").toggle();
        $(".navbar__myAllegroPopup").toggle();
    }

    return (
        <div className="navbar">
            <div className="navbar__inner">

                <div className="navbar__logoHolder">
                    <a href=""><img src="https://a.allegroimg.com/original/1201da/b8806483460d99ec3739941289ab" className="navbar__logo" /></a>
                </div>

                <div className="navbar__search">

                    <input className="navbar__searchInput" placeholder="czego szukasz?"/>

                    <span className="navbar__searchMany"><a href="#">szukaj&nbsp;wielu</a></span>

                    <span className="navbar__searchCategories">
                        <span>Wszystkie&nbsp;kategorie <FontAwesomeIcon icon={faChevronDown}/></span>
                    </span>

                    <button className="navbar__searchBtn">SZUKAJ</button>

                </div>

                <div className="navbar__icons">

                    <a href="#" className='navbar__iconsIcon navbar__iconsFlag'><img src="https://a.allegroimg.com/original/12f062/2fe911ce48a0834185423b139ac6" /></a>

                    <a href="#" className='navbar__iconsIcon'><img src="https://assets.allegrostatic.com/metrum/icon/star-empty-2c3f1d6b0f.svg" /></a>

                    <a href="#" className='navbar__iconsIcon'><img src="https://assets.allegrostatic.com/metrum/icon/chat-8dd2f8c308.svg" /></a>

                    <a href="#" className='navbar__iconsIcon'><img src="https://assets.allegrostatic.com/metrum/icon/bell-034065f63b.svg" /></a>

                    <a href="#" className='navbar__iconsIcon'><img src="https://assets.allegrostatic.com/metrum/icon/bag-c9f42da6df.svg" /></a>

                </div>

                <div className="navbar__myAllegro">

                    <a href="#">
                        <span>
                            bądź<img src="https://assets.allegrostatic.com/metrum/icon/smart-098a60541f.svg"/>
                        </span>
                    </a>

                    <span onClick={myAllegroClick}>
                        Moje&nbsp;Allegro 
                        <span className="navbar__myAllegroArrow-down"><FontAwesomeIcon icon={faChevronDown}/></span>
                        <span className="navbar__myAllegroArrow-up hidden"><FontAwesomeIcon icon={faChevronUp}/></span>
                    </span>

                    <div className="navbar__myAllegroPopup nav_pop">
                        <img src="https://a.allegroimg.com/original/122180/20799df0408198ded7d97a1c0167" className="nav_pop"/>

                        <h3 className="nav_pop">Witaj w allegro!</h3>

                        <span className="navbar__myAllegroPopupInfo nav_pop">Zaloguj się i zobacz swoje zakupy, obserwowane oferty i powiadomienia. W Allegro jesteś u siebie!</span>

                        <button type="button" className="navbar__myAllegroPopupBtn nav_pop">ZALOGUJ SIĘ</button>

                        <span className="navbar__myAllegroPopupSignup nav_pop">Nie masz konta?<a href="#" className="nav_pop">Zarejestruj się</a></span>
                    </div>

                </div> 

            </div>
        </div>  
    );
}

export default Navbar;