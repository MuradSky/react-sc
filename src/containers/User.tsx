import React from 'react';

interface UserObject {
    id: number;
}

interface UserType {
    user: UserObject;
}

const User: React.FC<UserType> = ({ user }) => {
    console.log(user);
    return (
        <div>
            <p>{user.id}</p>
        </div>
    );
};

export default User;
