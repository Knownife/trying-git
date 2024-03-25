import React from 'react';

import './index.css'

import UserList from './userList/index'

function Main(){
    let buyList = [{id:1,name:'Apple',price:5},{id:2,name:'Orange juice',price:20}];
    let checkList = [{id:1,name:'Dune',price:20},{id:2,name:'ChainSaw',price:30}];


    return <div >

        <UserList userList={buyList} category={'Food'} />
        <UserList userList={checkList} category={'Film'} />
    </div>

}

export default Main;