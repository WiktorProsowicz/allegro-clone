function asideContent(index) {
    return generateContent(index);
}

const makeSipleList = (array) => {
    return (
        <ul className="firstRow__navAsideSimpleList">
            {array.map((item, index) => {
                if(index == 0){
                    return <li className="firstRow__navAsideListHeader"><a href="#">{item}</a></li>;
                }
                else{
                    return <li><a href="#">{item}</a></li>;
                }
            })}
        </ul>
    );
}

const makeShortList = (array) => {
    return (
        <ul className="firstRow__navAsideShortList">
            {array.map((item, index) => {
                if(index == 0){
                    return <li className="firstRow__navAsideListHeader"><a href="#">{item}</a></li>;
                }
                else{
                    return <li><a href="#">{item}</a></li>;
                }
            })}
        </ul>
    );
}

const makeImageList = (heading, array) => {
    return (
        <ul className="firstRow__navAsideShortList">
            <li className="firstRow__navAsideListHeader"><a href="#">{heading}</a></li>
            <li>
                <div className="firstRow__navAsideSimpleListImgs">
                    {array.map((item) => <a href="#"><img src={item} /></a>)}
                </div>
            </li>
        </ul>
    );
}

function generateContent(index){

    if(index == 13) {

        const simpleOne = ["Telefony i Akcesoria", "Smartfony", "Smartwatche", "Tablety", "Akcesoria GSM", "Etui, pokrowce i obudowy"];
        const simpleTwo = ["Komputery", "Laptopy", "Częsci do laptopów", "Komputery stacjonarne", "Podzespoły komputerowe", "Drukarki i skanery"];
        const simpleThree = ["Telewizory i akcesoria", "Telewizory", "Projektory", "Słuchawki", "Audio do domu", "Kino domowe"];
        const simpleFour = ["Konsole i automaty", "Konsole PlayStation 5", "Konsole Xbox Series X/S", "Konsole Playstation 4", "Konsole Xbox One", "Konsole Nintendo Switch"];
        const simpleFive = ["AGD małe", "Kuchnia, gotowanie", "Higiena i pielęgnacja", "Do domu", "Odkurzacze"];
        const simpleSix = ["AGD", "Lodówki", "Pralki", "Suszarki do ubrań", "Kuchnie wolnostojące"];
        const simpleSeven = ["AGD do zabudowy", "Płyty grzewcze", "Piekarniki do zabudowy", "Zmywarki do zabudowy", "Okapy"];
        const simpleEight = ["Fotografia", "Aparaty cyfrowe", "Obiektywy", "Akcesoria fotograficzne", "Aparaty natychmiastowe (Instax, Polaroid)"];

        const shortOne = ["Nowości", "iPhone 13", "iPhone 13 Pro Max"];
        const shortTwo = ["Okazje", "Ekspresy do kawy", "Karty graficzne"];
        const shortThree = ["Trendy", "Oczyszczacze powietrza", "Monitory"];

        const imageOne = [ 
            "https://a.allegroimg.com/original/1295d6/36a90af849d39df15c8df410e437", 
            "https://a.allegroimg.com/s512/12edd6/f3bb65864673a3e0f516315cb65f", 
            "https://a.allegroimg.com/original/126d1f/a08e3011409280aae09fc650f3a1"
        ]

        return (
            <>
                <div className="firstRow__navAside-inner">
                    {makeSipleList(simpleOne)}
                    {makeSipleList(simpleTwo)}
                    {makeSipleList(simpleThree)}
                    {makeSipleList(simpleFour)}
                    {makeSipleList(simpleFive)}
                    {makeSipleList(simpleSix)}
                    {makeSipleList(simpleSeven)}
                    {makeSipleList(simpleEight)}
                </div>

                <div className="firstRow__navAside-inner">
                    {makeShortList(shortOne)}
                    {makeShortList(shortTwo)}
                    {makeShortList(shortThree)}
                    {makeImageList("Markowe sklepy", imageOne)}
                </div>
            </>
        );
        }

    }
    
    

export default asideContent;