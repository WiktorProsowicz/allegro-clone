import '../styles/TopAd.css'
import { useEffect } from 'react';
import $ from 'jquery';
import hide from 'jquery';

function TopAd() {

    // useEffect(() => {
    //     document.addEventListener('scroll', () => {
            
    //     })
    // });

    const showShort = () => {

        $(".topAd__imageExpand").slideUp(200);

        $(".topAd__imageShort").slideDown(400);

        $(".topAd__btn-fold").hide()
        $(".topAd__btn-unfold").show()
    }

    const showExpand = () => {

        $(".topAd__imageExpand").slideDown(400);

        $(".topAd__imageShort").slideUp(200);

        $(".topAd__btn-fold").show()
        $(".topAd__btn-unfold").hide()

    }

    return (
        <div className="topAd">     
            <div className="topAd__inner">
                
                <a href="#">
                    <div className="topAd__imageShortHolder" >
                            
                        <img className="topAd__imageShort" src="https://a.allegroimg.com/original/124a0d/7536b16c4e6a977033ef5e442674"/>
                            
                    </div>

                    <div className="topAd__imageExpandHolder" >

                        <img className="topAd__imageExpand hidden" src="https://a.allegroimg.com/original/128140/3ab4483f4d6fa5476f4c23d58d5f"/>

                    </div>
                </a>

                <button className="topAd__btn-unfold" type="button" onClick={showExpand}>ROZWIŃ</button>

                <button className="topAd__btn-fold hidden" type="button" onClick={showShort}>ZWIŃ</button>

            </div>
        </div>
    );
}

export default TopAd;