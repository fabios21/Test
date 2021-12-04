import React from "react";;

//import { Link } from "react-router-dom";

const Person = ({info}) => {
  return (
    <div class="row align-items-center w-100 my-1">
        <div class="col-3">
            <div class="row" style={{ textAlign: "center"}}>
                <span class="avatar avatar-32 bg-light text-white rounded mr-3"><img class="" src={info.img} style={{borderRadius: "38%", padding: "5%"}}></img></span>
                <p class="m-0"><small>{info.name} <small><i class="bi bi-star-fill"></i></small></small></p>
            </div>
        </div>
        <div class="col-1 text-secondary"><small>{info.test}</small></div>
        <div class="col-2 text-secondary"><small>{info.date}</small></div>
        <div class="col-1 text-secondary"><small>{info.amount}</small></div>
        <div class="col-1 text-secondary"><small>{info.age}</small></div>
        <div class="col-2 text-secondary"><small>{info.status} <small><small><i class="bi bi-circle-fill"></i></small></small></small></div>
        <div class="col-2 btn-group p-0" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-outline-secondary p-0"><small>{info.action}</small></button>
                <button type="button" class="btn btn-outline-secondary p-0"><i class="bi bi-chevron-down bi-xs"></i></button>
        </div>
     
    </div>
  );
};

export default Person;