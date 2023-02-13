import React, { useState, useEffect } from 'react'
import './UserAzhar.css'
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import  Axios  from 'axios'




const Navbar = () => {

    let navigate = useNavigate();
    const [data, setData] = useState([])
    useEffect(() => {
        Axios.get('https://panorbit.in/api/users.json')
            .then((v) => {
                console.log(v.data)
                setData(v.data.users);
            })
    }, [])

    // const clickHandler = () => {
    //    // console.log()
    //     navigate(`/UserAzhar`)
      
    // };
    // const navigate = useNavigate()

    
    return (
        <>

            <div className="aside">
                <ul>
                     
                    <li onClick={() => navigate("/")}>profile</li>
                    <Link to='/post'> <li>post</li></Link>
                    <Link to='/gallery'> <li>Gallery</li></Link>
                    <Link to='/todo'> <li>To Do</li></Link>
                </ul>
            </div>

        </>
    )
}

export default Navbar
