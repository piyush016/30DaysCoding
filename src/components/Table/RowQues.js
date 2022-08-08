import React from "react";


const RowQues = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td> </td>
      <td>{props.ques}</td>
      <td>{props.url}</td>
      <td> </td>
    </tr>
  );
};

export default RowQues;
