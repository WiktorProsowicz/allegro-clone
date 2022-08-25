import { Fragment } from "react";
import Carousel from "./Carousel";
import '../styles/ControlledCarousel.css';

class ControlledCarousel extends Carousel {

    state = {
        ...super.state
    }

    constructor(props){
        super(props);
    }



    componentDidMount() {
        if(!this.state.allEventsMounted){
            window.addEventListener("resize", this.adjustContentSize);
        }

        super.componentDidMount();
        
    }

    adjustContentSize = () => {
        
    }

    render() {
        return (
            <>
                {super.render()}
                <div className="controlledCarousel__dots">

                </div>
            </>
        );
    }
}

export default ControlledCarousel;