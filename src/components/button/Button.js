import React from 'react';
import {useState, useEffect} from "react";
import './index.css'
import  Users from './users/index'

function Button(){
    const users = ([
        {name:'Nazar',age:17,id:1},
        {name:'Eva',age:20,id:2},
        {name:'Vitaliy',age:43,id:3},
    ])


    return <div >
        <Users users={users}  />
        <Users users={users.filter((user)=> user.name == "Nazar")}/>

    </div>

}

export default Button;