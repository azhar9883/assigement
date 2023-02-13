import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './UserAzhar.css'

const Post = () => {
  return (
    <>
      <>
        <div className="main">
           <Navbar/>

          <div className="profile">
            <div className="proTitle">
              <h1>Profile</h1>
              <div>
                <Link to='NavBar'className="proLogin">
                
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


                </div>

                <div className="company">

                  <div className="detail2">

                    <ul className='deright'>

                    </ul>
                  </div>
                </div>
              </div>


              <div className="address">
                {/* <h3>Address</h3> */}
                <div className="add2">

                </div>

                <div className="addLatitude">

                  <div className="long">

                  </div>
                </div>

                <div class="dropup">

                  <div class="dropup-content">

                  </div>
                </div>
              </div>
            </div>
          </div>            </div>



      </>


    </>
  )
}

export default Post
