import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
	<ul>
		{contacts.map(contact => {
			const {id, name, number} = contact
			return (
                <li key={id}>
                    <p>{`${name}: ${number}`}</p>
                    <button type= "button" onClick = {() => onDeleteContact(id)} >Delete</button>
                </li>
            )
		})}
	</ul>
)

export default ContactList;
