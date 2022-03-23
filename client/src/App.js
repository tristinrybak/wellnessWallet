import React from 'react';
import './App.css';
import { Button, Form, Row, Col, CloseButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import Axios from "axios";


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    Axios.post('http://localhost:3001/create', {
      username: username, password: password,
    }).then(()=> {
      console.log("success");
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id='form'>
        <Row>
          <Col>
        <Form>
        <Form.Group>
        <Form.Text classname="text-muted">
          Username
          </Form.Text>
          <Form.Control type="username" placeholder="Username" onChange={(event)=>{setUsername(event.target.value)}} />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group>
        <Form.Text classname="text-muted">
           Password
          </Form.Text>
          <Form.Control type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}} />
        </Form.Group>
      </Form>
  </Col>
</Row>
</div>
<div id='loginButton'>
<>
   <Button onClick={addUser} variant="primary" type='submit' style= {{width: 120, height: 45, fontSize: 35, paddingBottom: 53}}active>
    Login
    </Button>{' '}
</>
</div>
<div id='createAccountButton'>
<label>
  Don't have an account? 
  </label>
   <Button variant="outline-primary">Create Account</Button>{' '} 
   </div>
<div id='closeButton'>
<CloseButton />
</div>
<div id='logo'>
        <img src="logo.png" width={800} height={700} alt=''/>
      </div>
      </header>
    </div>
  );
}

export default App;