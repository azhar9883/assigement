import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import mapimg1 from '../Image/map.jpg';
import { useParams } from 'react-router-dom';
import Post from './Post';
import Profile from './Profile';
import Gallery from './Gallery';
import Todo from './Todo';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

import Navbar from './Navbar';





const Discription = (props) => {

    
 
    const [secondData, setSecondData] = useState([]);
    const [select, setSelected] = useState()
    const [particularData, setParticularData] = useState([]);

    const { name } = useParams()


    useEffect(() => {
        axios.get('https://panorbit.in/api/users.json')
            .then((v) => {
                // console.log(v.data)
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
            <div className="proMain">


                <Navbar data={particularData} />
                

                {
                    particularData.map((v) => {
                        return (
                            <div className="main">


                                <div className="profile">
                                    <div className="proTitle">
                                        <h1>Profile</h1>
                                        <div
                                            className="proLogin">

                                        
                                            <img src={v.profilepicture} alt="log img" />
                                            <span>{v.name}</span>

                                        </div>
                                    </div>

                                    <div className="proMain">
                                        <div className="userDetail">

                                            <div className="image">
                                                <img src={v.profilepicture} alt="" />
                                                <h2>{v.name}</h2>
                                            </div>

                                            <div className="detail1">
                                                <ul>
                                                    <li>Username :</li>
                                                    <li>e-mail :</li>
                                                    <li>phone :</li>
                                                    <li>website :</li>
                                                </ul>
                                                <ul className='deright'>
                                                    <li>{v.username}</li>
                                                    <li>{v.email}</li>
                                                    <li>{v.phone}</li>
                                                    <li>{v.website}</li>
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
                                                    <li>{v.address.street}</li>
                                                    <li>{v.address.suite}</li>
                                                    <li>{v.address.city}</li>
                                                    <li>{v.address.zipcode}</li>
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
            



            </div>




        </>
    )
}

export default Discription;