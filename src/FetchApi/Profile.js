import React, {Component} from 'react';

const Profile = (props) => {
  console.log(props)

  return (
    <div>
      <div>
        <h1>Profile: </h1>
        <h2>{props.user.name}</h2>
      </div>
      <div>
        <img src={props.user.image} />
      </div>
      <p>
        {props.user.age}
      </p>

    </div>)

}
export default Profile
