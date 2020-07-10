import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Axios from 'axios';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
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

    handleSubmit = (event) => {
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
                        subject: '',
                        message: '',
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

render() {
    return(
            <footer className="w3-padding-64 w3-text-white footer">
                <div className="w3-content" id="contact">
                    <h2>Свържете се с автора:</h2>
                        <h4>Email: tunnelle@gmail.com</h4>
                     <Form onSubmit={this.handleSubmit}>
                         <Form.Group><p>
                            <Form.Control className="w3-input w3-padding-12 w3-border hover-contact" id="email" name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                         </p></Form.Group>
                         <Form.Group>
                             <p><Form.Control className="w3-input w3-padding-12 w3-border hover-contact" id="subject" name="subject" type="subject" placeholder="Тема" value={this.state.subject} onChange={this.handleChange} /></p></Form.Group>
                         <Form.Group>
                             <p><Form.Control className="w3-input w3-padding-12 w3-border hover-contact" id="message" name="message" as="textarea" placeholder="Напишете съобщенито си тук..." value={this.state.message} onChange={this.handleChange} />
                             </p></Form.Group>


                         

                        <Button className="w3-button  w3-section" variant="primary" type="submit" style={{fontSize: '22px'}} disabled={this.state.disabled}>Изпрати</Button>
                        {this.state.emailSent === true && <p className="w3-large contactMsgSuccess">Съобщението е изпратено!</p>}
                        {this.state.emailSent === false && <p className="w3-large contactMsgErr">Възникна грешка при изпращане.</p>}
                     </Form>
                </div>
            </footer>
        );
    }
}

export default ContactPage;