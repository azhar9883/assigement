import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Home.css';
import Axios from 'axios';

function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        Axios.get('https://panorbit.in/api/users.json')
            .then((v) => {
                console.log(v.data)
                setData(v.data.users)
            })
    }, [])



    const clickHandler = (name) => {
        console.log(name);
        navigate(`Profile/${name}`);

    };
    const navigate = useNavigate()


    return (


        <>
            <div className="main">
                <div className="account">
                    <div className="acc-tittle">
                        <h2>Select an account</h2>
                    </div>
                    <div className="acc-users">




                        {
                            data.map((mydata) => {
                                return (
                                    <div>
                                        <form className="user" onClick={(e) => clickHandler(mydata.name)}>
                                            <img src={mydata.profilepicture} />
                                            <p>{mydata.name}</p>
                                        </form>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default Home