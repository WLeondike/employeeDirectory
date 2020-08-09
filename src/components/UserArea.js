import React from "react";

function UserArea({ nameFilter }) {
  return (
    <>
      {nameFilter.map((emp) => (
        <div className="row emp-card" key={nameFilter.indexOf(emp)}>
          <div className="col-md-1">
            <img src={emp.picture.medium} alt="Emp Img" />
          </div>
          <div className="col-md-1">{emp.name.first}</div>
          <div className="col-md-2">{emp.name.last}</div>
          <div className="col-md-2">{emp.phone}</div>
          <div className="col-md-3">{emp.email}</div>
          <div className="col-md-1">{emp.location.city}</div>
          <div className="col-md-2">{emp.dob.date.split("T")[0]}</div>
        </div>
      ))}
    </>
  );
}

export default UserArea;
