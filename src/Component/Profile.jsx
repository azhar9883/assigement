import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import mapimg1 from '../Image/map.jpg';
import { useParams, useNavigate } from 'react-router-dom';
import Post from './Post';
import './UserAzhar.css'
import Gallery from './Gallery';
import Todo from './Todo';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

import Navbar from './Navbar';



const Profile = (props) => {
    let navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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


                <Navbar />


                {
                    particularData.map((v) => {
                        return (
                            <div className="main">


                                <div className="profile">
                                    <div className="proTitle">
                                        <h1>Profile</h1>
                                        <div
                                            className="proLogin">

                                            <div className='col-sm-4 '>
                                                <div className="btn-group ">

                                                    <span
                                                        className="noty-manager-bubble  " data-bs-toggle="dropdown" aria-expanded="false"
                                                        style={{ marginLeft: "20px", top: 10, opacity: 1 }}
                                                    >


                                                        <img src={v.profilepicture} id="logoIMG" alt="log img" />
                                                        <span>{v.name}</span>


                                                    </span>


                                                    <ul className="dropdown-menu border border-primary ">
                                                        <section className="panel shadow p-3 mb-5 bg-white rounded">
                                                            <header className="panel-heading">
                                                                <strong className='hell'><img src={v.profilepicture} style={{ height: "83px", width: "87px" }} alt="log img" /></strong>

                                                            </header>
                                                            <div id="notification-list" className="list-group list-group-alt">
                                                                <span>{v.name}</span>
                                                                <span>{v.email}</span>



                                                            </div>
                                                            <hr style={{ border: "1px solid black" }} />
                                                            <footer className="panel-footer">
                                                                <a href="#" className="pull-right">
                                                                    <i className="fa fa-cog" />
                                                                </a>
                                                                <a href="#notes" data-toggle="class:show animated fadeInRight">
                                                                    <button className='btn btn-danger' onClick={() => navigate("/")}>Sign out</button>
                                                                </a>
                                                                <div>

                                                                </div>
                                                            </footer>

                                                        </section>
                                                    </ul>
                                                </div>
                                            </div>


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
                                                    <span className='strong'>{v.address.geo.lat}</span>
                                                </div>
                                                <div className="long">
                                                    <span>Long: </span>
                                                    <span className='strong'>{v.address.geo.lng}</span>
                                                </div>
                                            </div>

                                            <div style={{marginLeft:"90px"}}>
                                            <div className="dropup">
                                                            <button className="dropbtn">chat</button>
                                                            <div className="dropup-content">
                                                                <a href="#">{v.name}</a>
                                                            
                                                                <a href="#"></a>
                                                            </div>
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

export default Profile;