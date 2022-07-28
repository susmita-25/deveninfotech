import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Footer from 'react-bootstrap/Footer';

export default function SignInPage() {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        firstName: "",
        password: ""
    })
    const login = () => {
        if (localStorage.getItem("allUser") != null) {
            const tempArr = JSON.parse(localStorage.getItem("allUser"));
            if (tempArr && tempArr.length > 0) {
                const user = tempArr.filter(ele => {
                    return ele.email === loginForm.firstName && ele.password === loginForm.password
                })
                if (user.length > 0) {
                    navigate('/home');
                } else {
                    alert("Check your credentials")
                }
            }
        }
    }
    const handleChange = (event) => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Login Page</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleChange} value={loginForm.firstName} name="firstName" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={handleChange} value={loginForm.password} name="password" required placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={login}>
                    Submit
                </Button>
            </Form>
            {/* <Footer> */}
                <p><Link to="/register">Create an account</Link>.</p>
                {/* <p><Link to="/">Back button </Link>.</p> */}
            {/* </Footer> */}
            {/* <form >
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" onChange={handleChange} value={loginForm.firstName} name="firstName" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" onChange={handleChange} value={loginForm.password} name="password" required />
                </p>
                <p>
                    <button id="sub_btn" onClick={login}>Login</button>
                </p>
            </form>
            <footer>
                <p><Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back button </Link>.</p>
            </footer> */}
        </div>
    )
}
