import React, {Component, Profiler, useEffect, useState} from 'react';
import Profile from './Profile'

const FetchApiHook = props => {
  const [data, setData] = useState([]);

  
  // const loadProfiles = () =>
  // {
  //   fetch('http://localhost:39635/Profile')
  //   .then(response => response.json())
  //   .then(data => setData(data))

  // }

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch('http://localhost:39635/Profile');
      const data = await response.json();
      setData(data);
      // ...
    }
    fetchData();
  }, []);


  return (
    <div>
    {data && <Profile user={data} />}
    </div>
  )

}

export default FetchApiHook;
