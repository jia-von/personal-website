import React, { Component } from "react";
import './Contact.css';
 
class Contact extends Component {
  render() {
    return (
        <>
        <h2>Contact</h2>
        <form className="contact-form">
            <ul>
            <li><label htmlFor="name">Name:</label></li>
            <li><input type="text" id="name" name="name"></input></li>
            <li><label htmlFor="email">Email:</label></li>
            <li><input type="email" id="email" name="email"></input></li>
            <li><label htmlFor="message">Message:</label></li>
            <li><textarea id="message" name="message" rows="5" cols="33"></textarea></li>
            <li><input type="submit" value="Send"></input></li>
            </ul>
        </form>
        </>

    );
  }
}
 
export default Contact;