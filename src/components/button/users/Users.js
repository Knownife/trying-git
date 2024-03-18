import React from "react";

function Users({ users }) {

    
    return (
        <div>
            {users.map((user)=>(
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.age}</p>
                    <p>{user.id}</p>

                </div>
            ))}
        </div>
    );
}

export default Users;