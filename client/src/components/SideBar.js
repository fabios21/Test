import React from "react";
import logo from '../img/zinkerz.png'

const SideBar = () => {
  return (
    <div class="col-12" className="div-sidebar p-3">
        <div class="col-12 text-secondary" style={{lineHeight: 1.3}}>
            <img  src={logo}  alt="avatar" class="img-fluid mb-4"/>
            <p><i class="bi bi-speedometer ml-2"></i> Dashboard</p>
            <p><i class="bi bi-calendar-event-fill ml-2"></i> Program</p>
            <p><i class="bi bi-book-fill ml-2"></i> Workspace</p>
            <p><i class="bi bi-bookmark-fill ml-2"></i> Plans</p>
            <p><i class="bi bi-credit-card-2-front-fill ml-2"></i> Payments</p>
            <p><i class="bi bi-file-medical-fill ml-2"></i> Payslips</p>
        </div>
        <div class="col-12  mt-5 text-secondary  ml-2" style={{lineHeight: 1.3}}>
            <p><i class="bi bi-easel2"></i> Live prep</p>
            <p><i class="bi bi-star-fill"></i> Counseling</p>
            <p><i class="bi bi-check-circle-fill"></i> Self prep</p>
        </div>
        <div class="col-12  mt-5 text-secondary text-black  ml-2" style={{lineHeight: 1.3}}>
            <p><i class="bi bi-question-circle-fill"></i> Help</p>
            <p><i class="bi bi-gear-fill"></i> Settings</p>
            <div class="row align-items-center align-middle"><div class="w-25 h-25 text-center text-white p-1 mr-2" style={{ backgroundColor: '#627EDD', borderRadius: "38%"}}><small>CH</small></div><p class="mt-3" style={{ color: 'black'}}>Carlos</p></div>
        </div>
    </div>
  );
};

export default SideBar;