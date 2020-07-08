import React from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CardSection from './CardSection';
import Axios from "axios";
import {FormGroup, Button} from "react-bootstrap";


const stripe = useStripe();
const elements = useElements();

class CheckoutForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            email: '',
            disabled: false,
            emailSent: null,
        }
    }

     handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    };


     handleSubmit2 = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:8080/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true,
                        name: '',
                        email: '',
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    };

    async stripeTokenHandler(token) {
        const paymentData = {token: token.id};
        const response = await fetch('http://localhost:8080/checkout2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentData),
        });
        return response.json();
    }



     handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);

        if (result.error) {
            console.log(result.error.message);
        } else {
            await this.stripeTokenHandler(result.token);
        }
    };

render(){
    return (
        <form onSubmit={this.handleSubmit2}>
        <div className='w3-container'>
            <div className="cell example example5" id="example-5">
                <form onSubmit={this.handleSubmit}>
                    <div id="example5-paymentRequest"/>
                    <fieldset>
                        <legend className="card-only">Поръчка</legend>
                        <div className="row">
                            <div className="field">
                                <label>Име</label>
                                <input className="input" value={this.state.name}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="field">
                                <label>Email</label>
                                <input className="input" id="email" name="email" type="email" placeholder="Имейл" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="field">
                                <label>Телефон</label>
                                <input className="input"/>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="field">
                                    <label>Адрес</label>
                                    <input className="input"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="field">
                                    <label>Държава</label>
                                    <input className="input"/>
                                </div>
                                <div className="field">
                                    <label>Град</label>
                                    <input className="input empty"/>
                                </div>
                                <div className="field">
                                    <label>ZIP</label>
                                    <input className="input empty"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="field">
                                <label>
                                    <CardSection/>
                                </label>
                                <div className="input"/>
                            </div>
                        </div>
                        <button type="submit">Плати</button>
                        <Button className="w3-button  w3-section" variant="primary" type="submit" style={{fontSize: '22px'}} disabled={this.state.disabled}>Изпрати</Button>

                    </fieldset>
                </form>
            </div>
        </div>
        </form>
    );
}
}
export default CheckoutForm;