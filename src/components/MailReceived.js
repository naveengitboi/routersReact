import React from "react";
import { useNavigate } from "react-router-dom";

function MailReceived() {
    let navigate = useNavigate()
  return (
    <section>
      <h1 style={{textAlign :'center'}} className="mainHeading">I got you dude!</h1>
     <div className="btn">
         <button onClick={() => navigate(-1)}>Omkee :-)</button>
     </div>
    </section>
  );
}

export default MailReceived;
