import React from 'react';

export default function Outro() {
    return (
        <div className="outro">
            <div className="outrotop">
                <img src="assets/DKC.png" alt="Danske Konferencecentre autoriseret partner"/>
                <h1>Møllerup Gods er autoriseret partner hos Danske Konferencecentre</h1>
            </div>
            <div className="insta">
            <iframe title="instagram feed" className="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/BUZDt1Ilwc8/embed/captioned/?cr=1&amp;v=7&amp;wp=638&amp;rd=https%3A%2F%2Fwww.moellerupgods.dk&amp;rp=%2Fda#%7B%22ci%22%3A0%2C%22os%22%3A2401.8599999999424%7D" allowtransparency="true" allowFullScreen={true} frameBorder="0" height="948" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style={{background: 'white', maxWidth: '635px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>

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
