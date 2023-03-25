import React from "react";
import "./Country.css";
const Country = (props) => {
    //console.log(props.country);
    const {population,flags,name} = props.country;
  return (
    <div className="country">
        <p><b>Name : {name.common}</b></p>
        <p>{population}</p>
        <img src={flags.png} style={{ width: "100px" }} alt="" />
    </div>
  );
};

export default Country;
