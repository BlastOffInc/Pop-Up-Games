import React from 'react';

var FieldBasicDetails = (props) => (
  <div>
    <h3>{props.data.fieldName}</h3>
    {props.data.notes}
  </div>)


export default FieldBasicDetails;