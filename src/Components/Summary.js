import React from "react";
import "../css/Summary.css";
import mem from "../assets/icon-memory.svg";
import reac from "../assets/icon-reaction.svg";
import vis from "../assets/icon-visual.svg";
import ver from "../assets/icon-verbal.svg";
function Summary()
{
    return(
        <div className="full-card">
            <div className="result">
                <h2 className="result_heading">Your Result</h2>
                <div className="result_circle">
                    <h1 className="result_number">76</h1>
                    <p className="result_outof">of 100</p>
                </div>
                <h2 className="result_status">Great</h2>
                <div className="result_comparison">
                    <p>You scored higher than 65% of</p>
                    <p>the people who have taken</p>
                    <p>these tests.</p>
                </div>
            </div>



            <div className="summary">
                <h3 className="summary_heading">Summary</h3>
                 <div className="summary_cont">
                    <div className="reaction">
                    <div className="r">
                    <img src={reac}  alt="reaction"></img>
                    <p>&ensp;Reaction</p>
                    </div>

                        <p className="y_sc">80 <span className="byhund">&nbsp;/100</span></p>

                    </div>
                    <div className="memory"> 
                    <div className="r">
                    <img src={mem}  alt="memory"></img>               
                    <p>&ensp;Memory</p>
                    </div>
  
                        <p className="y_sc">92 <span className="byhund">&nbsp;/100</span></p>
                    </div>

                    <div className="verbal">     
                    <div className="r">
                    <img src={ver}  alt="verbal"></img>       
                    <p>&ensp;Verbal</p>
                    </div>
 
                        <p className="y_sc">61 <span className="byhund">&nbsp;/100</span></p>

                    </div>
                    <div className="visual">     
                    <div className="r">
                    <img src={vis}  alt="visual"></img>       
                    <p>&ensp;Visual</p>
                    </div>
                    
                        <p className="y_sc">72 <span className="byhund">&nbsp;/100</span></p>
                    </div>
                    <button className="continue">Continue</button>
                 </div>
            </div>
        </div>
    )
}

export default Summary;