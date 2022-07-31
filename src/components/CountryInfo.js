import React from "react";

function CountryInfo({ population,flags, capital, name }) {
  return (<>
    <div className="foodcontainer">
    <img className="foodimage" src={flags} alt="" />
      <h4 className="">Country Name:-{name}</h4>
      <p>Country capital:-{capital}</p>
      <h4 className="">Country's population:-{population}</h4>
    </div>
  </>
);
//Mark as read
}

export default CountryInfo;