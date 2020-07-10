import React  from "react";
import bookPicture from "../images/bookPicture.webp";
import StripeCheckout from "react-stripe-checkout";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";
import { useTranslation } from "react-i18next";
import excerpt1Picture from "../images/nav.webp";
import excerpt2Picture from "../images/gallery/gallery2.webp";
import excerpt3Picture from "../images/gallery/gallery1.webp";

function Book()  {
    const [product] = React.useState({
        name: "Тунел",
        price: 20,
    });

    async function handleToken(token) {
        const response = await axios.post(
            "http://localhost:8080/checkout",
            { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Успешно заплащане!", { type: "success" });
        } else {
            toast("Възникна грешка при заплащане.", { type: "error" });
        }
    }
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    function myFunction2() {
        document.getElementById("myDropdown2").classList.toggle("show");
    }
    function myFunction3() {
        document.getElementById("myDropdown3").classList.toggle("show");
    }
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
    const { t } = useTranslation();

    return (
        <>
        <div className="w3-content page paddingTop150">
            <title>Тунел | Книга</title>
            <div className="w3-row w3-padding-64 " id="book">
                <div className="w3-col m4 w3-padding-large">
                    <img src={bookPicture} className="w3-round w3-image" alt="Book"/>
                </div>
                <div className="w3-col m7 w3-padding-large">
                    <h1>{product.name}</h1>
                    <p className="w3-large">SKU: 000-0-0000000-0-0</p>
                    <p className="w3-large">{(product.price).toFixed(2)}лв</p>
                    <StripeCheckout
                        stripeKey={`pk_test_ShDxkioNVID3TyxCbolAiXSE00vODaXzp9`}
                        token={handleToken}
                        amount={product.price * 100}
                        currency={"BGN"}
                        allowRememberMe={false}
                        label="Поръчай"
                        shippingAddress
                        billingAddress
                    />
                    <ToastContainer />
                </div>
            </div>
            <div id="excerpt" className="w3-content">
                <h1 className="w3-center">Откъси от Тунел</h1>
                <hr/>
                <div className="w3-center bottom50">
                    <div className="dropdown w3-content">
                        <a href="#myDropdown"><button onClick={myFunction} className="w3-bar-item w3-button w3-margin dropbtn">Откъс 1</button></a>
                        <a href="#myDropdown2"><button onClick={myFunction2} className="w3-bar-item w3-button w3-margin dropbtn">Откъс 2</button></a>
                        <a href="#myDropdown3"><button onClick={myFunction3} className="w3-bar-item w3-button w3-margin dropbtn">Откъс 3</button></a>
                        <div id="myDropdown" className="dropdown-content">
                            <div className="excerpt w3-padding-large" id="excerpt1">
                                <img className="excerptImg" src={excerpt1Picture} alt="excerpt1"/>
                                <p className="w3-large">Ева гледаше разсеяно през прозореца, бягащите със скоростта на влака дървета. Нямаше желание дори да чете. Ръцете и лежаха отчаяно отпуснати върху Книгата. </p>
                                <p className="w3-large">Вратата на купето се отвори. Погледът на момчето опря в Книгата и застина. Навлязоха в тунел. Аварийната лампа мъглееше глуха светлина. Тъмнината в купето наметна тишина. И по-рано беше забелязала, че на тъмно хората преставаха да говорят. Или говореха, но тихо. Тъмнината беше като побратим на тишината. Чуваше се само ритмичното тракане на колелата на влака.</p>
                                <p className="w3-large">- Интересна ли е? - посочи с поглед към Книгата, когато излязоха на светло.</p>
                                <p className="w3-large">Ева долови насмешка във въпроса му, сякаш се опитваше да каже “Това не ти е някаква сълзлива мелодрама или криминале”. Продължи да гледа през прозореца така, като че ли въпросът му не се отнасяше до нея.</p>
                                <p className="w3-large">- Еврейка ли сте? – попита на иврит, като леко се наведе към Ева.</p>
                                <p className="w3-large">Обърна очите си към него. Не бързаше да отговори.</p>
                                <p className="w3-large">- Зависи – Ева присви леко рамене.</p>
                                <p className="w3-large">Остави Книгата на поставката пред себе си и пресегна за шала. Усещаше усилието му да не посегне към Книгата.</p>
                                <p className="w3-large">- Далече ли отивате? – той не питаше само за посоката.</p>
                                <p className="w3-large">Гледаше спокойно, без каквото и да е напрежение. Между въпроса и отговора легна вечност.</p>
                                <p className="w3-large">- Далече - гласът и заглъхна като ехо.</p>
                                <p className="w3-large">Очите му дишаха жадно. Ева не реагира на състоянието му и не измени нищо, нито външно, нито вътрешно. Някаква част от нея запечатваше всичко като с фотокамера. Очите му я гледаха така, сякаш се опитваше да си спомни откъде я познава.</p>
                                <p className="w3-large">- Филип– протегна ръката си към нея.</p>
                                <p className="w3-large">Тя не бързаше... Погледът и беше като утроба на спокойствието. Можеше да остане така завинаги. Или да не остане. Желанието нямаше власт над нея.</p>
                                <p className="w3-large">- Евелина – казa без да помръдне. Остави го да преглътне неудобството от протегнатата ръка.</p>
                                <p className="w3-large">- Евелина...Ева... Ева – той опита да повиши глас – И отдавна ли четете Книгата, Ева?</p>
                                <p className="w3-large">Гласът му отново се плъзна иронично. Думите му увиснаха във въздуха, после се разпаднаха на прах от липса на реакция. Ева се надигна бавно и затвори прозореца на купето. Приседна на ръба на седалката, издаде брадичката си малко напред и леко отвори и затвори уста, сякаш преглътна онова, което искаше да каже. Спомни си думите на монаха “Не става за четене”. Усмихна се с крайчеца на устните...</p>
                                <p className="w3-large">- Книгата е жива. Може да те отблъсне, за да събуди по-голям интерес. А може и да потисне спонтанно предизвиканото очарование. Губиш желание и край... Мислиш си, че книгата вече не ти е интересна. Дори не се досещаш, че тя е тази, която те е отхвърлила. Ще те чака да съзрееш и тогава ще ти предаде обаянието си.</p>
                            </div>
                        </div>
                        <div id="myDropdown2" className="dropdown-content">
                            <div className="excerpt w3-padding-large" id="excerpt2">
                                <img className="excerptImg" src={excerpt2Picture} alt="excerpt2"/>
                                <p className="w3-large">{t('Excerpt2.1')}</p>
                                <p className="w3-large">{t('Excerpt2.2')}</p>
                                <p className="w3-large">{t('Excerpt2.3')}</p>
                                <p className="w3-large">{t('Excerpt2.4')}</p>
                            </div>
                        </div>
                        <div id="myDropdown3" className="dropdown-content">
                            <div className="excerpt w3-padding-large" id="excerpt3">
                                <img className="excerptImg" src={excerpt3Picture} alt="excerpt3"/>
                                <p className="w3-large">{t('Excerpt3.1')}</p>
                                <p className="w3-large">{t('Excerpt3.2')}</p>
                                <p className="w3-large">{t('Excerpt3.3')}</p>
                                <p className="w3-large">{t('Excerpt3.4')}</p>
                                <p className="w3-large">{t('Excerpt3.5')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>
    );
}
export default Book;