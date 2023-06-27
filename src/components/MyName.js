import React from 'react'
import MyDetails from './MyDetails';

const MyName = () => {
  return (
    <div>
      <dl>
        <dt>
          <h1>Potnuru Manikanta</h1>
        </dt>
        <dd>
          - <MyDetails />
        </dd>
      </dl>
    </div>
  );
}

export default MyName