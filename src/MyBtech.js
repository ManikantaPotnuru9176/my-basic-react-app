import React from 'react'
import MyBtechDetails from './MyBtechDetails';

const MyBtech = () => {
  return (
    <div>
      <h3>Graduation:</h3>
      <dl>
        <dt>GMR Institute of Technology</dt>
        <dd>
          - <MyBtechDetails />
        </dd>
      </dl>
    </div>
  );
}

export default MyBtech