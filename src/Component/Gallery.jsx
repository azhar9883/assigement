import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Gallery = () => {
    return (
        <>

            <>
                <div className="main">
                   <Navbar/>

                    <div className="profile">
                        <div className="proTitle">
                            <h1>Profile</h1>
                            <div>
                                <Link to='NavBar' className="proLogin">
                                    {/* <img src={mysecondData.profilepicture} alt="log img" />
                       <span>{mysecondData.name}</span> */}
                                </Link>
                            </div>
                        </div>

                        <div className="proMain">
                            <div className="userDetail">
                                <div className="image">
                                    {/* <img src={mysecondData.profilepicture} alt="" />
                       <h2>{mysecondData.name}</h2> */}
                                </div>

                                <div className="detail1">

                                    <h1 style={{ fontSize: '6rem' }}>Comming Soon</h1>
                                    
                                    {/* <ul className='deright'>
                         <li>{mysecondData.username}</li>
                         <li>{mysecondData.email}</li>
                         <li>{mysecondData.phone}</li>
                         <li>{mysecondData.website}</li>
                       </ul> */}
                                </div>

                                <div className="company">
                                    {/* <h3>Company</h3> */}
                                    <div className="detail2">
                                        {/* <ul>
                           <li>Name :</li>
                           <li>catchphrase :</li>
                           <li>bs :</li>
                         </ul> */}
                                        <ul className='deright'>
                                            {/* <li>Azhar</li>
                           <li>Multi-layerd</li>
                           <li>Real time e-market</li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="address">
                                {/* <h3>Address</h3> */}
                                <div className="add2">
                                    {/* <ul>
                         <li>street :</li>
                         <li>suite :</li>
                         <li>city :</li>
                         <li>zipcode :</li>
                       </ul> */}

                                    {/* <ul className='deright'>
                         <li>{mysecondData.address.street}</li>
                         <li>{mysecondData.address.suite}</li>
                         <li>{mysecondData.address.city}</li>
                         <li>{mysecondData.address.zipcode}</li>
                       </ul> */}
                                </div>

                                <div className="addLatitude">
                                    {/* <div className="lat">
                         <span>Lat: </span>
                         <span className='strong'>37.3149</span>
                       </div> */}
                                    <div className="long">
                                        {/* <span>Long: </span>
                         <span className='strong'>21.8739</span> */}
                                    </div>
                                </div>

                                <div class="dropup">
                                    {/* <button class="dropbtn">Dropup</button> */}
                                    <div class="dropup-content">
                                        {/* <a href="#">Link 1</a>
                         <a href="#">Link 2</a>
                         <a href="#">Link 3</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </>

        </>
    )
}

export default Gallery