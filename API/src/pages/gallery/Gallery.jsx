import React, {Component} from "react";
import './gallery.css'

export default class Gallery extends Component {
    render() {
        return (
            <div className="w3-content home">
                <title>Тунел | Галерия</title>
                <div className="w3-padding-large w3-col m12" style={{background:'white'}} id="gallery">
                    <h1 className="paddingTop50">Среща с читателите</h1>
                    <div className="w3-col m6 w3-padding-small">
                        <img src={require('../../images/gallery/gallery6.webp')} className="w3-round w3-image hover-shadow cursor" alt="Gallery 6"/>
                    </div>
                    <div className="w3-col m6 w3-padding-small">
                        <img src={require('../../images/gallery/gallery7.webp')} className="w3-round w3-image hover-shadow cursor" alt="Gallery 7"/>
                    </div>
                    <div className="w3-col m6 w3-padding-small">
                        <img src={require('../../images/gallery/gallery8.webp')} className="w3-round w3-image hover-shadow cursor" alt="Gallery 8"/>
                    </div>
                    <div className="w3-col m6 w3-padding-small">
                        <img src={require('../../images/gallery/gallery9.webp')} className="w3-round w3-image hover-shadow cursor" alt="Gallery 9"/>
                    </div>
                    <div className="w3-col m6 w3-padding-small">
                        <img src={require('../../images/gallery/gallery10.webp')} className="w3-round w3-image hover-shadow cursor" alt="Gallery 10"/>
                    </div>
                </div>

                <div className="w3-padding-large w3-col m12" id="bookGallery" >
                    <h1 className="paddingTop50">Илюстрации към книгата</h1>
                    <div className="w3-col m6 w3-padding-small">
                        <img src={require('../../images/gallery/gallery1.webp')} className="w3-round w3-image hover-shadow cursor" alt="Gallery 1"/>
                    </div>
                    <div className="w3-col m6 w3-padding-small">
                        <img src={require('../../images/gallery/gallery2.webp')} className="w3-round w3-image hover-shadow cursor" alt="Gallery 2"/>
                    </div>
                    <div className="w3-col m6 w3-padding-small">
                        <img src={require('../../images/gallery/gallery3.webp')} className="w3-round w3-image hover-shadow cursor" alt="Gallery 3"/>
                    </div>
                    <div className="w3-col m6 w3-padding-small">
                        <img src={require('../../images/gallery/gallery4.webp')} className="w3-round w3-image hover-shadow cursor" alt="Gallery 4"/>
                    </div>
                    <div className="w3-col m6 w3-padding-small">
                        <img src={require('../../images/gallery/gallery5.webp')} className="w3-round w3-image hover-shadow cursor" alt="Gallery 5"/>
                    </div>
                </div>

                <br/>
            </div>
        );
    }
}