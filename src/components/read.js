import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                console.log(response.data);
                setAPIData(response.data);
            });
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox);
    };

    const getData = () => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            });
    };

    const onDelete = (id) => {
        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
            .then(() => {
                getData();
            });
    };

    return (
        <div>
            <Container>
            <Col lg={12}>

            
<Table striped bordered hover>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Checkbox Value</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {APIData.map((data) => (
            <tr key={data.id}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                <td>
                    <Link to='/update'>
                        <Button variant="primary" className='mx-3' onClick={() => setData(data)}>
                            Update
                        </Button>
                    </Link>
                    <Button variant="danger" onClick={() => onDelete(data.id)}>
                        Delete
                    </Button>
                </td>
            </tr>
        ))}
    </tbody>
</Table>
</Col>
            </Container>
        </div>
    );
}
