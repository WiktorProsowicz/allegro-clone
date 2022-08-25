import '../styles/Navbar.css';
import $ from 'jquery';
import { useEffect } from 'react';

function Navbar() {

    let eventsMounted = false;
    // let oldActive = null;


    useEffect(() => {
        $(".navbar__myAllegroPopup").hide();
        $(".navbar__searchCategoriesList").hide();
        $(".navbar__myAllegroArrow-up").hide();
        
        if(!eventsMounted){
            window.addEventListener("click", hidePopupIfOutside);
            window.addEventListener("click", hideCategoriesIfOutside);
            // document.addEventListener("keydown", handleUserTab);
            eventsMounted = true;
        }

    }, []);

    // const handleUserTab = (event) => {
    //     if(oldActive != null) oldActive.removeAttribute("-user-tab")

    //     active = document.activeElement;
    //     if(event.key == "Tab" && active.){
    //         active.classList.add()
    //     }
    // }

    // nav_cat and nav_pop classes are used to indicate that click event took place i.e. inside popup so it shouldn't disappear

    const hidePopupIfOutside = (event) => {
        let target = event.target;

        if(!target.classList.contains("nav_pop") && document.querySelector(".navbar__myAllegroPopup").style.display != "none"){
            myAllegroClick();
        }
    }

    const hideCategoriesIfOutside = (event) => {
        let target = event.target;

        if(!target.classList.contains("nav_cat") && document.querySelector(".navbar__searchCategoriesList").style.display != "none"){
            $(".navbar__searchCategoriesList").hide();
        }
    }

    const chooseCategory = (item) => {
        document.querySelector("#searchCategoriesChosen").innerHTML = item;
    }

    const toggleCategories = () => {
        $(".navbar__searchCategoriesList").toggle();
    }

    const myAllegroClick = () => {
        
        if(document.querySelector(".navbar__myAllegroPopup").style.display == "none"){
            // now showing the popup
            $(".navbar__myAllegroArrow-up").css("display", "flex");
            $(".navbar__myAllegroArrow-down").css("display", "none");
        }
        else {
            $(".navbar__myAllegroArrow-up").css("display", "none");
            $(".navbar__myAllegroArrow-down").css("display", "flex");
        }

        $(".navbar__myAllegroPopup").toggle();
    }

    const search_categories = ["Wszystkie kategorie", "Kategorie","Dom i Ogród", "Dziecko", "Elektronika", "Firma i usługi", 
                            "Kolekcje i sztuka", "Kultura i rorywka", "Moda", "Motoryzacja", "Nieruchomości", "Sport i turystyka", 
                            "Supermarket", "Uroda", "Zdrowie", "Inne opcje", "Cele charytatywne", "Organizacje charytatywne", "Sprzedawcy", "Zakończone"];

    const list_items = search_categories.map((item) => {
        if(item == "Kategorie" || item == "Inne opcje") return <li key={item} className="navbar__searchCategoriesHeader nav_cat">{item}</li>
        else return <li onClick={() => {chooseCategory(item)}} key={item} className="navbar__searchCategoriesItem nav_cat"><span>{item}</span></li>
    });

    return (
        <div className="navbar">
            <header className="navbar__inner">

                <div className="navbar__logoHolder">
                    <a href="#" className="navbar__logoLink" tabIndex="1" ><img src="https://a.allegroimg.com/original/1201da/b8806483460d99ec3739941289ab" className="navbar__logo" /></a>
                </div>

                <div className="navbar__search">

                    <input className="navbar__searchInput" placeholder="czego szukasz?" type="text" tabIndex="2"/>

                    <span className="navbar__searchMany" tabIndex="3"><a href="#">szukaj&nbsp;wielu</a></span>

                    <span className="navbar__searchCategories nav_cat" onClick={toggleCategories} tabIndex="4">

                        <span id="searchCategoriesChosen" className="nav_cat">Wszystkie&nbsp;kategorie</span> 
                        <span><img className="nav_cat"src="https://assets.allegrostatic.com/metrum/icon/arrowhead-9148b8f39c.svg"/></span>
                        
                        <ul className="navbar__searchCategoriesList nav_cat">

                            {list_items}

                        </ul>

                    </span>

                    <button className="navbar__searchBtn" tabIndex="5" type="submit">SZUKAJ</button>

                </div>

                <nav className="navbar__icons">

                    <a href="#" tabIndex="6" className='navbar__iconsIcon navbar__iconsFlag'><img src="https://a.allegroimg.com/original/12f062/2fe911ce48a0834185423b139ac6" /></a>

                    <a href="#" tabIndex="7" className='navbar__iconsIcon'><img src="https://assets.allegrostatic.com/metrum/icon/star-empty-2c3f1d6b0f.svg" /></a>

                    <a href="#" tabIndex="8" className='navbar__iconsIcon'><img src="https://assets.allegrostatic.com/metrum/icon/chat-8dd2f8c308.svg" /></a>

                    <a href="#" tabIndex="9" className='navbar__iconsIcon'><img src="https://assets.allegrostatic.com/metrum/icon/bell-034065f63b.svg" /></a>

                    <a href="#" tabIndex="10" className='navbar__iconsIcon'><img src="https://assets.allegrostatic.com/metrum/icon/bag-c9f42da6df.svg" /></a>

                    <a id="navbarIconsPopupTrigger" href="#" tabIndex="11" className="navbar__iconsIcon" onClick={myAllegroClick} >
                        <img className="nav_pop" src="https://assets.allegrostatic.com/metrum/icon/user-0135502fa4.svg"/>
                    </a>

                </nav>

                <div className="navbar__myAllegro">

                    <div className="navbar__myAllegroBeSmart">
                        <a href="#" tabIndex="11">
                            <span>bądź</span>
                            <span><img src="https://assets.allegrostatic.com/metrum/icon/smart-098a60541f.svg"/></span>
                        </a>
                    </div>

                    <div tabIndex="12" onClick={myAllegroClick} className="navbar__myAllegroPopupTrigger nav_pop">
                        <span className="nav_pop">Moje&nbsp;Allegro</span>
                        <span className="navbar__myAllegroArrow-down"><img className="nav_pop" src="https://assets.allegrostatic.com/metrum/icon/arrowhead-9148b8f39c.svg"/></span>
                        <span className="navbar__myAllegroArrow-up"><img className="nav_pop" src="https://assets.allegrostatic.com/metrum/icon/arrowhead-9148b8f39c.svg"/></span>
                    </div>

                </div> 

                <div className="navbar__myAllegroPopupHolder">
                    <div className="navbar__myAllegroPopup nav_pop">
                        <img src="https://a.allegroimg.com/original/122180/20799df0408198ded7d97a1c0167" className="nav_pop"/>

                        <h3 className="nav_pop">Witaj w allegro!</h3>

                        <span className="navbar__myAllegroPopupInfo nav_pop">Zaloguj się i zobacz swoje zakupy, obserwowane oferty i powiadomienia. W Allegro jesteś u siebie!</span>

                        <button type="button" className="navbar__myAllegroPopupBtn nav_pop">ZALOGUJ SIĘ</button>

                        <span className="navbar__myAllegroPopupSignup nav_pop">Nie masz konta?<a href="#" className="nav_pop">Zarejestruj się</a></span>
                    </div>
                </div>

                

            </header>
        </div>  
    );
}

export default Navbar;