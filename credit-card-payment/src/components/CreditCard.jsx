import React from "react";

import "./styles.css";

const CreditCard=({formData})=>{


    let {name,number,cardMonth,cardYear,cvv}=formData;
    return (
        <div>
          <div className="card_front card_part">
          <img className="card_front-square card_square" 
          src="https://cdn-icons-png.flaticon.com/512/6404/6404100.png"
          alt="card"/>
          <img className="card_front-logo card_logo"
         
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
          alt="card"/>
          <p className="card_number">{number}</p>
          <div className="nec">
              <div className="card_space-75">
                  <span className="card_label">Card holder</span>
                  <p className="card_info">{name}</p>

              </div>
              <div className="card_space-25">
                  <span className="card_label">Expires</span>
                  <p className="card_info">
                      {cardMonth}/{cardYear}
                  </p>
              </div>
              <div className="cvv">
                  <span className="card_label">CVV</span>
                  <p className="card_info">{cvv}  </p>

                     
                
                  
              </div>
          </div>

          </div> 
          <div className="back">

          </div>
        </div>
    )
};

export default CreditCard