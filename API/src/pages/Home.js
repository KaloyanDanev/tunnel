import React from "react";
import ContactPage from "../components/ContactPage";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Home() {

    const { t } = useTranslation();

    return (
    <div>
        <title>Тунел</title>
        <div className="page">
        <div className="home" id="book">
            <Link to="book">
                <div className="w3-col m4 w3-padding-large zoom">
                    <img src={require('../images/bookPicture.jpg')} className="w3-round w3-image" alt="Book"/>
                </div>
                <div className="w3-col m8 w3-padding-large">
                    <h1 className="w3-center w3-padding-large">{t('Nav.2')}</h1>
                    <hr/>
                        <h1 className="w3-center">{t('Translate.1')}</h1>
                        <p className="w3-large">{t('Translate.2')}</p>
                </div>
            </Link>
                <Link to="book#excerpt"><p className="w3-large w3-padding-large w3-right">{t('Translate.3')}</p></Link>
        </div>
        <hr/>
            <div className="home" id="author">
                <div className="w3-col m6 w3-padding-large">
                    <h1 className="w3-center w3-padding-large">{t('Nav.3')}</h1>
                    <hr/>
                        <h1 className="w3-center">Маргарита Плинер</h1>
                        <p className="w3-large">{t('Translate.4')}</p>
                </div>
                <div className="w3-col m6 w3-padding-large zoom">
                    <img src={require('../images/authorPicture.jpg')} className="w3-round w3-image" alt="Author"/>
                </div>
            </div>
        </div>
        <ContactPage/>
    </div>
 )
}

export default Home;