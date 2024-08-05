import React from 'react'
import './index.css'

import car1 from '../../assets/images/1.png'
import car2 from '../../assets/images/2.png'
import car3 from '../../assets/images/3.png'
import car4 from '../../assets/images/4.png'
import car5 from '../../assets/images/5.png'

const data = {
  listofvehicletype: [{ name: 'CAR' }, { name: 'TRUCK' }],
}

const Home = () => {
  return (
    <div className="container __homecontainer">
      <div className="__carcontainer">
        <div className="carselection">
          <h2>CAR DETAILS</h2>
          <h5>
            Vehicle Type: <span>CAR</span>
          </h5>
          <h5>
            Type: <span>Sedan</span>
          </h5>
          <h5>
            Make: <span>Toyota</span>
          </h5>
          <h5>
            Year: <span>2019</span>
          </h5>
          <h5>
            Model: <span>Innova</span>
          </h5>
          <h5>
            Transmission: <span>Automatic</span>
          </h5>
        </div>
        <div className="carselected">
          <img src={car1} alt="" />
          <h4>
            PRICE RANGE: <span>₱1,000,000.00 - ₱2,000,000.00</span>
          </h4>
        </div>
      </div>
      <div className="carlist">
        <div className="cars">
          <img src={car2} alt="" />
          <h6>Toyota Vios 2019</h6>
        </div>
        <div className="cars">
          <img src={car3} alt="" />
          <h6>Toyota Vios 2019</h6>
        </div>
        <div className="cars">
          <img src={car4} alt="" />
          <h6>Toyota Vios 2019</h6>
        </div>
        <div className="cars">
          <img src={car5} alt="" />
          <h6>Toyota Vios 2019</h6>
        </div>
      </div>
    </div>
  )
}

export default Home
