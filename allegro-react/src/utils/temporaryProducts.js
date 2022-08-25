
const arrayToObject = (keys, values) => {
    const obj = {};

    keys.forEach((item, index) => {
        obj[item] = values[index];
    });

    return obj;
}

const objProps = ["name", "price", "discount", "discount_percent", "top_occasion", "old_price", "allegro_smart", 
    "image_link", "bought", "hit", "pay_later", "smart_only", "super_price", "new_product"];

const randomWordsForNames = `BUTY Nike DAMSKIE AIR MAX 270 CN9575-001 CZARNE OKULARY PRZECIWSŁONECZNE POLARYZACYJNE DAMSKIE UV 
Sandały damskie 4F Sportowe Na Rzep Trekkingowe BAMBINO DUŻA WYPRAWKA SZKOLNA ZESTAW DO SZKOŁY XXL 
Zeszyt A5/60 Interdruk Mix 10szt. Tematycznych BUTY PUMA DAMSKIE ST RUNNER V3 384901 03 RÓŻOWE 
CICHY Mini PC Lenovo M600 4GB 128SSD RS-232 WIN10 PLECAK SPORTOWY ADIDAS miejski SZKOLNY POWER VI 
Xiaomi Redmi Note 10 Pro 6/128 GB szary ADIDAS SPODENKI SPORTOWE SZORTY Parma AJ5880 M 
ZESTAW TABLET Z KLAWIATURA 10 CALI PREZENT 6w1 Smartfon Xiaomi Redmi 9A 2/32GB Zielony IPS LTE 
Buty damskie sportowe Kappa Ambient 243175-1017 BIURKO KOMPUTEROWE STOLIK PIKSEL PRAWE 90cm BIAŁE 
Buty sportowe Puma ST Runner v3 NL Jr 384901 01 Buty damskie sportowe Kappa Ambient 243175 1145 
SZAFA GARDEROBA S 90cm 2D 2SZ BIAŁA NOWOCZESNA Multicolor szybkie suche sportowe z krótkim rękawem T 
Shirt siłownia koszulki koszulka treningowa trener T-Shirt do biegania męska oddychająca odzież sportowa 
Sportowe spodenki męskie 2022 letnie sportowe i sportowe rekreacyjne sprzęt szybkoschnący męskie spodnie 
do biegania sportowy strój dla mężczyzny 10/30/50 sztuk Sexy Waifu dorosłych Anime Hentai naklejki kalkomanie 
na bagaż Laptop telefon deskorolka gitara samochód naklejki wodoszczelne zabawki 3 rodzaje Hentai Anime Sexy 
naklejki Cartoon Bunny kalkomanie Graffiti walizka Laptop samochód naklejki dorosłych dziewcząt Otaku zabawki`.split(" ");

// console.log(randomWordsForNames);

const makeProductFromArray = (values) => {
    return arrayToObject(objProps, values);
}

export const generateProductsArray = (howMany) => {
    let ret = [];
    
    for(let i = 0; i < howMany; i++){
        let name = "";

        for(let j = 0; j < Math.floor(Math.random() * 20) + 10; j++){
            const ind = Math.floor(Math.random() * randomWordsForNames.length);
            name += randomWordsForNames[ind] + " ";
        }

        const old_price = Math.round(Math.random() * 10000);
        const discount = Math.random() <= 0.4;
        const discount_percent = Math.round(Math.random() * 20);
        const top_occasion = !discount ? false : Math.random() <= 0.2;
        const price = !discount ? old_price : Math.round(old_price - (discount_percent / 100 * old_price)) ;
        const allegro_smart = Math.random() <= 0.5;
        const image_link = "https://source.unsplash.com/random/300x300/?sig=" + Math.round(Math.random() * 1000);
        const bought = Math.round(Math.random() * 300);
        const hit = Math.random() <= 0.5;
        const pay_later = Math.random() <= 0.5;
        const super_price = Math.random() <= 0.2;
        const smart_only = false;
        const new_product = super_price ? false : Math.random() <= 0.3;

        ret.push(makeProductFromArray([name, price, discount, discount_percent, top_occasion, old_price, allegro_smart, 
            image_link, bought, hit, pay_later, smart_only, super_price, new_product]));
    }

    return ret;
}

const secondRow_timer = ["SPAWARKA INWERTOROWA PÓŁAUTOMAT MIGOMAT MIG 250", 51900, false, 0, 0, true,
"https://a.allegroimg.com/s480/11700e/a83fcecf423b8416efd5e4cbe83a/SPAWARKA-INWERTOROWA-POLAUTOMAT-MIGOMAT-MIG-250",
0, false, false, true, true];


export const product_secondRow_timer = makeProductFromArray(secondRow_timer);

