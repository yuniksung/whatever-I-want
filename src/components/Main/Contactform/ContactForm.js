import React from 'react'

import {
    ContactFormContainer
} from './ContactFormElement'

import ContactOne from './Design1/ContactOne'
import ContactTwo from './Design2/ContactTwo'

const ContactForm = () => {
    return (
        <ContactFormContainer>
            <ContactOne />
            <ContactTwo />
        </ContactFormContainer>
    )
}

export default ContactForm
