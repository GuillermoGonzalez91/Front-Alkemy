import React from 'react';
import { useHistory } from 'react-router';
import userService from '../../services/http-requests/user.service';
import { Table, Container, Button} from 'react-bootstrap'; 

/*let usersArray = [
    {
        id: 1,
        firstName:"cesar",
        lastName:"ramon",
        email: "email@email.com",
    },
    {
        id: 2,
        firstName:"jere",
        lastName:"cordoba",
        email: "email@email.com",
    },
    {
        id: 3,
        firstName:"aye",
        lastName:"conte",
        email: "email@email.com",
    },        
  ];*/

const Users = () => {
    const [users, setUsers] = React.useState([]);

    let history = useHistory();


    const handleDelete = userId => {
        userService.deleteUser(userId);
    };

    React.useEffect(() => {
        userService.getUsers()
          .then(data => setUsers(data))
          .catch(err => console.error(err));
      }, [setUsers]);
          
    return(
        <Container w='90%' m='2rem' p='2rem'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user=>(
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td className="text-center">
                                <Button variant="info" onClick={()=>history.push(`/backoffice/users/${user.id}`)}>Edit</Button>
                            </td>
                            <td className="text-center">
                                <Button variant="danger" onClick={()=>handleDelete(user.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table> 
        </Container>
        
    )  
}

export default Users;