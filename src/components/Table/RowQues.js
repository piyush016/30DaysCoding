import React from "react";
// import Table from "react-bootstrap/Table";

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
