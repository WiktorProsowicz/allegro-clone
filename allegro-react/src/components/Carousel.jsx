import '../styles/Carousel.css';
import { Component, useEffect } from 'react';
import $ from 'jquery';


class Carousel extends Component {

    // props: carouselId, shiftValue

    state = {
        allEventsMounted: false,
        // unique id are set so that many carousels on the screen may work independently
        innerId: "carouselInner-" + this.props.carouselId,
        contentId: "carouselContent-" + this.props.carouselId,
        arrowLeftId: "carouselArrowLeft-" + this.props.carouselId,
        arrowRightId: "carouselArrowRight-" + this.props.carouselId,

        atRight: false,
        atLeft: false,

        // onLeft: this.props.onLeft === undefined ? () => {} : this.props.onLeft,
        // onRight: this.props.onRight === undefined ? () => {} : this.props.onRight,

        contentShorterThanCarousel: false,

        shiftValue: this.props.shiftValue
    }

    constructor(props){
        super(props);
    }


    componentDidMount(){

            if(!this.state.allEventsMounted){
                window.addEventListener("resize", () => {
                    this.checkEnds();
                    this.adjustArrows();
                });
    
                setInterval(this.checkHover, 50);
                this.state.allEventsMounted = true;
            }
    
    
            this.adjustArrows();
            
            // checking width of the content
            const carousel_width = parseInt($("#" + this.state.innerId).css("width").replace("px", ""), 10);
            const content_width = parseInt($("#" + this.state.contentId).css("width").replace("px", ""), 10);
    
            // resetting content
            $("#" + this.state.contentId).css("left", "0px");
    
            if(content_width < carousel_width){
                this.state.contentShorterThanCarousel = true;
                this.state.atLeft = true;
                this.state.atRight = true;
            }
    
            else if(content_width == carousel_width) {
                this.state.atLeft = true;
                this.state.atRight = true;
            }
            else{
                this.state.atLeft = true;
                this.state.atRight = false;
            }
    };

    adjustArrows = () => {
        // adjusting arrows position to middle
        const carouselHeight = parseInt($("#" + this.state.innerId).css("height").replace("px", ""), 10);

        $("#" + this.state.arrowLeftId).css("bottom", (carouselHeight / 2 - 20) + "px");
        $("#" + this.state.arrowRightId).css("bottom", (carouselHeight / 2 - 20) + "px");
    }

    shiftRight = () => {
        // getting carousel position
        const oldLeft = parseInt($("#" + this.state.contentId).css("left").replace("px", ""), 10);

        const carousel_width = parseInt($("#" + this.state.innerId).css("width").replace("px", ""), 10);
        const content_width = parseInt($("#" + this.state.contentId).css("width").replace("px", ""), 10);

        // console.log(this.props.carouselId);

        let newPos;

        this.state.atLeft = false;

        if(oldLeft >= -content_width + carousel_width + this.state.shiftValue){
            newPos = (oldLeft - this.state.shiftValue) + "px";
        }
        else {
            newPos = (-content_width + carousel_width) + "px";
            this.state.atRight = true;
        }

        $("#" + this.state.contentId).animate({left: newPos}, 500, "");
    }

    shiftLeft = () => {
        // getting carousel position
        const oldLeft = parseInt($("#" + this.state.contentId).css("left").replace("px", ""), 10);

        let newPos;

        if(oldLeft <= -this.state.shiftValue) {
            newPos = (oldLeft + this.state.shiftValue) + "px";
        }
        else{
            newPos = "0px";
            this.state.atLeft = true;
        }

        if(newPos == "0px") this.state.atLeft = true;

        this.state.atRight = false;

        $("#" + this.state.contentId).animate({left: newPos}, 500, "");
    }

    checkHover = () => {

        // console.log(this.props.carouselId, this.state.atLeft, this.state.atRight);

        const hoveredItems = $(":hover").filter((index, item) => {
            return item.id === this.state.innerId;
        });

        if(hoveredItems.length === 0){
            $("#" + this.state.arrowLeftId).hide();
            $("#" + this.state.arrowRightId).hide();
        }
        else{

            if(this.state.contentShorterThanCarousel) return;
            
            if(!this.state.atLeft) {
                if($("#" + this.state.arrowLeftId).css("display") === "none") $("#" + this.state.arrowLeftId).show();
            }
            else $("#" + this.state.arrowLeftId).hide();
            
            if(!this.state.atRight) {
                if($("#" + this.state.arrowRightId).css("display") === "none") $("#" + this.state.arrowRightId).show();
            }
            else $("#" + this.state.arrowRightId).hide();
            
        }

    }

    checkEnds = () => {
        // console.log(atLeft, atRight);

        if(this.state.atLeft) $("#" + this.state.contentId).css("left", "0px");
        
        if(this.state.atRight){
            const carousel_width = parseInt($("#" + this.state.innerId).css("width").replace("px", ""), 10);
            const content_width = parseInt($("#" + this.state.contentId).css("width").replace("px", ""), 10);

            $("#" + this.state.contentId).css("left", (carousel_width - content_width) + "px");
        }
    }

    render(){
        return (
            <div className="carousel">
                
    
                <div id={this.state.innerId} className="carousel-inner">
    
                    <button onClick={() => {this.shiftLeft()}} id={this.state.arrowLeftId} className="carousel__arrow carousel__arrow-left">
                        <span><img src="https://assets.allegrostatic.com/metrum/icon/arrowhead-9148b8f39c.svg"/></span>
                    </button>
    
                    <button onClick={() => {this.shiftRight()}} id={this.state.arrowRightId} className="carousel__arrow carousel__arrow-right">
                        <span><img src="https://assets.allegrostatic.com/metrum/icon/arrowhead-9148b8f39c.svg"/></span>
                    </button>
    
                    <div id={this.state.contentId} className="carousel__content">{this.props.children}</div>
                    
                </div>
    
                
            </div>
        );
    }

    
}

export default Carousel;