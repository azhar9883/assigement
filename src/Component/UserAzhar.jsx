import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import mapimg1 from '../Image/map.jpg'
import './UserAzhar.css'
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserAzhar() {

  const [particularData, setParticularData] = useState([]);
  const { name } = useParams()

  const [secondData, setSecondData] = useState([]);
  const [select, setSelected] = useState()
  useEffect(() => {
    axios.get('https://panorbit.in/api/users.json')
      .then((v) => {
        console.log(v.data)
        setSecondData(v.data.users)
        setSelected()
      })
  }, [])

  useEffect(() => {
    let result = secondData.filter(function (data) {
        return data.name == name;

    });
    // console.log("arrayReturn", result)
    setParticularData(result)
}, [secondData])
  
  
  return (
    <>

      {
        particularData.map((mysecondData) => {
          return (
            <div className="main">
               <Navbar/>
              <div className="profile">
                <div className="proTitle">
                  <h1>Profile</h1>
                  <div>
                    <Link to='NavBar' className="proLogin">
                      <img src={mysecondData.profilepicture} alt="log img" />
                      <span>{mysecondData.name}</span>
                    </Link>
                  </div>
                </div>

                <div className="proMain">
                  <div className="userDetail">
                    <div className="image">
                      <img src={mysecondData.profilepicture} alt="" />
                      <h2>{mysecondData.name}</h2>
                    </div>

                    <div className="detail1">
                      <ul>
                        <li>Username :</li>
                        <li>e-mail :</li>
                        <li>phone :</li>
                        <li>website :</li>
                      </ul>
                      <ul className='deright'>
                        <li>{mysecondData.username}</li>
                        <li>{mysecondData.email}</li>
                        <li>{mysecondData.phone}</li>
                        <li>{mysecondData.website}</li>
                      </ul>
                    </div>

                    <div className="company">
                      <h3>Company</h3>
                      <div className="detail2">
                        <ul>
                          <li>Name :</li>
                          <li>catchphrase :</li>
                          <li>bs :</li>
                        </ul>
                        <ul className='deright'>
                          <li>Azhar</li>
                          <li>Multi-layerd</li>
                          <li>Real time e-market</li>
                        </ul>
                      </div>
                    </div>
                  </div>


                  <div className="address">
                    <h3>Address</h3>
                    <div className="add2">
                      <ul>
                        <li>street :</li>
                        <li>suite :</li>
                        <li>city :</li>
                        <li>zipcode :</li>
                      </ul>

                      <ul className='deright'>
                        <li>{mysecondData.address.street}</li>
                        <li>{mysecondData.address.suite}</li>
                        <li>{mysecondData.address.city}</li>
                        <li>{mysecondData.address.zipcode}</li>
                      </ul>
                    </div>

                    <img src={mapimg1} alt="" />
                    <div className="addLatitude">
                      <div className="lat">
                        <span>Lat: </span>
                        <span className='strong'>37.3149</span>
                      </div>
                      <div className="long">
                        <span>Long: </span>
                        <span className='strong'>21.8739</span>
                      </div>
                    </div>

                   
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default UserAzhar