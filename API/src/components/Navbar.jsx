import React  from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

 function Navbar() {
     const { t, i18n } = useTranslation();

         function handleClick(lang) {
         i18n.changeLanguage(lang)
     }

     return (
                <nav className="w3-top">
                    <img className="navimg" src={require('../images/nav.webp')} alt="nav"/>
                    <div className="w3-bar w3-white w3-padding w3-card nav">
                        <a href="/" className="w3-bar-item w3-button">{t('Nav.1')}</a>
                        <div className="w3-center">
                            <a href="/#book" className="w3-bar-item w3-button">{t('Nav.2')}</a>
                            <a href="/#author" className="w3-bar-item w3-button">{t('Nav.3')}</a>
                            <Link to="gallery" className="w3-bar-item w3-button">{t('Nav.4')}</Link>
                            <Link to="interview" className="w3-bar-item w3-button">{t('Nav.5')}</Link>
                            <a href="/#contact" className="w3-bar-item w3-button">{t('Nav.6')}</a>
                        </div>
                        <div className="w3-right">
                        <Link to="book" className="w3-bar-item w3-button">{t('Nav.7')}</Link>
                            <img onClick={()=>handleClick('bg-BG')} className="w3-bar-item flag w3-button" src={require('../images/bg.webp')} alt="bg"/>
                            <img onClick={()=>handleClick('ru')} className="w3-bar-item flag w3-button" src={require('../images/ru.webp')} alt="ru"/>
                        </div>
                    </div>
                </nav>
        );
}
export default Navbar;