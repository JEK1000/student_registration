import React, { useEffect, useState } from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import { profile } from './pro_api';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';



export default function Profile() {

  const [response, setResponse] = useState('');
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const studentID = Cookies.get('user_id');
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://nodeserv-production.up.railway.app/api/${studentID}`);
        setData(response.data);
        setFname(response.data[0].first_name);
        setEmail(response.data[0].email);
        setPassword(response.data[0].password);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await profile({ fname, email, password }, `${studentID}`);
      if (response)
          setResponse(response);
    } catch (error) {
      console.log(error); // handle the error
    }
  };

    return (
      <div className="profile-container">
        <div className="profile-form">
          <h4>Profile</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder={data.first_name} value={fname} onChange={(e) => setFname(e.target.value)} required/>
            <input type="email" placeholder={data.email} value={email} onChange={(e) => setEmail(e.target.value)}  required/>
            <input type="password" placeholder={data.password} value={password} onChange={(e) => setPassword(e.target.value)}  required/>
            <button class="btn btn-primary" type="submit">Update</button>
          </form>
         <p>{response}</p>
        </div>
      </div>
    );

}
