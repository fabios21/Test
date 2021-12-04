import React, {useEffect, useState} from "react";
import axios from "axios";
import Person from "./Person";
import './Panel.css';

const Panel = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const getUsers = async () => {
          const users = await axios.get("http://localhost:3001/users");
          setUsers(users.data)
        };
        getUsers();
      }, []);

    const arr = users;

  return (
    <div class="col-12" className="div-panel">
        <div class="row my-1">
            <div class="col-1.5 mx-2 text-black">All plans</div>
            <div class="col-1.5 mx-2  text-secondary">Recently sent</div>
            <div class="col-1.5 mx-2  text-secondary">Previously sent</div>
            <div class="col-1.5 mx-2  text-secondary">Last approved</div>
            <div class="col-1.5 mx-2  text-secondary">Finish soon</div>
            <div class="col-1.5 mx-2 text-secondary">Group plants</div>
            <div class="col-3 mx-2 text-right  text-secondary"> Buscar <i class="bi bi-search mx-2"></i></div>
        </div>
        
        <div class="row text-secondary my-2">
            <div class="col-6">
                <div class="row">
                    <div class="col rounded-pill bg-light text-primary text-center mr-1">Service <small><small><i class="bi bi-chevron-down bi-xs"></i></small></small></div>
                    <div class="col rounded-pill bg-light text-primary text-center mr-1">Topics <small><small><i class="bi bi-chevron-down bi-xs"></i></small></small></div>
                    <div class="col rounded-pill bg-light text-primary text-center mr-1">Test date <small><small><i class="bi bi-chevron-down bi-xs"></i></small></small></div>
                    <div class="col rounded-pill bg-light text-primary text-center mr-1">Status <small><small><i class="bi bi-chevron-down bi-xs"></i></small></small></div>
                    <div class="col rounded-pill bg-light text-primary text-center"><small><small><i class="bi bi-funnel"></i></small></small> Filters</div>
                </div>
            </div>
            <div class="col-6">
                <div class="row pl-5 text-right">
                    <small class="col px-0">Columns <small><i class="bi bi-chevron-down bi-xs"></i></small></small>
                    <small class="col px-0">GROUP: None <small><i class="bi bi-chevron-down bi-xs"></i></small></small>
                    <small class="col px-0">ORDER: Status <small><i class="bi bi-chevron-down bi-xs"></i></small></small>
                </div>
            </div>
        </div>

        <div class="row-12">
            {arr.map((info) => {
            return (
              <Person info={info} />
            )
          })}
        </div>
        
    </div>
  );
};

export default Panel;