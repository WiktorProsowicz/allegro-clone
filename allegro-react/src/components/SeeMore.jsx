import '../styles/SeeMore.css';


function SeeMore({children, label}){
    return (
        <div className="seeMore">
            {label !== "" && <div className="seeMore__header"><h2>{label}</h2></div>}

            <div className="seeMore__inner">
                {children}
            </div>

            <div className="seeMore__bottom">
                <span>
                    <a href="#">ZOBACZ WIĘCEJ</a>
                </span>
            </div>
        </div>
    );
}


export default SeeMore;