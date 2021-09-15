import React from 'react';
import { Table, Container } from 'react-bootstrap';

import contactService from '../../services/http-requests/category.service';

export default function ContactsList() {
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    const find = async () => {
      try {
        const resp = await contactService.getContacts();
        setContacts(resp.data);
      } catch (e) {
        console.log(e);
      }
    };
    find();
  }, []);

  return (
    <Container w='70%' m='2rem' p='2rem'>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>{contact.comments}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
