import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import NavbarComponent from './Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function HomePage() {
    const [data, setData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [searchText,setSearchText] = useState('')
    useEffect(() => {
        axios.get('http://universities.hipolabs.com/search?country=India').then(response => {
            console.log(response.data)
            setData(response.data)
            setMasterData(response.data)
        })
    }, []);

    const searchCollage = ()=>{
        const temp = masterData.filter(ele=>{
            return ele.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setData(temp);
    }

    return (
        <div className="text-center">
            <NavbarComponent />
            <h1 className="main-title home-page-title">welcome to Dashboard Page</h1>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchText}
              onChange={(e)=>setSearchText(e.target.value)}
            />
            <Button variant="outline-success" onClick={searchCollage}>Search</Button>
          </Form>
            <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Domains</th>
                    <th>Country</th>
                    <th>View</th>
                </tr>
            </thead>
            <tbody>
                {data && data.length > 0 && data.map(d => (
                    <tr>
                        <td>{d.name}</td>                        
                        <td>{d["state-province"]}</td>
                        <td>{d.domains}</td>
                        <td>{d.country}</td>   
                        <Button variant="primary"><a href={d.web_pages[0]}>View Details</a></Button>
                    </tr>
                ))}
            </tbody>
        </Table>
                    
                
        </div >
    )
}
