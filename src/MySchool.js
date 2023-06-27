import React from 'react'
import SchoolDetails from './SchoolDetails';

const MySchool = () => {
  return (
    <div>
      <h3>SCHOOLING:</h3>
      <dl>
        <dt>Pragathi School</dt>
        <dd>
            - <SchoolDetails/>
        </dd>
      </dl>
    </div>
  );
}

export default MySchool