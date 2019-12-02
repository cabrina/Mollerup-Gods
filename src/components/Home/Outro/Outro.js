import React from 'react';

export default function Outro() {
    return (
        <div className="outro">
            <div className="outrotop">
                <img src="assets/DKC.png" alt="Danske Konferencecentre autoriseret partner"/>
                <h1>Møllerup Gods er autoriseret partner hos Danske Konferencecentre</h1>
            </div>
            <div className="insta">
                <img src="imgs/Udklip.PNG" alt=""/>
            </div>
            <div className="newsletter">
                <form action="/">
                    <p className="tilmeld">Tilmeld nyhedsbrev</p>
                    <p className="req"><span>*  </span>skal udfyldes</p>
                    <label htmlFor="email">Email Address <span>*</span></label>
                    <input type="text" name="email" id="email"/>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" id="firstname"/>
                    <label htmlFor="lastname">Efternavn</label>
                    <input type="text" name="lastname" id="lastname"/>

                    <p className="picknews">Vælg nyhedsbrev</p>

                    <div className="checkboxes">
                        <input type="checkbox" name="nlall" id="nlall" className="checkinp"/>
                        <label htmlFor="nlall" className="check">Møllerup - alle</label>
                    </div>
                    <div className="checkboxes">
                        <input type="checkbox" name="ballet" id="ballet" className="checkinp"/>
                        <label htmlFor="ballet" className="check">Verdensballetten</label>
                    </div>
                   <div className="checkboxes">
                        <input type="checkbox" name="hamp" id="hamp" className="checkinp"/>
                        <label htmlFor="hamp" className="check">Møllerup Hamp</label>
                   </div>
                    
                    <input type="submit" value="Tilmeld" className="sub"/>
                </form>
            </div>
        </div>
    )
}
