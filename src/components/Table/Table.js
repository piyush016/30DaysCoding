import React from "react";
import Table from "react-bootstrap/Table";
import { dsatopic } from "./data";
import RowQues from "./RowQues";

const Table_view = () => {
  var temp = dsatopic.filter(function (item) {
    return item.topic === "Arrays-I";
  });
  console.log(temp);

  const ques = temp.map((item) => {
    return (
      <RowQues key={item.id} id={item.id} ques={item.problem} url={item.URL} />
    );
  });

  return (
    <>
      <Table stripped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Question</th>
            <th>Link</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{ques}</tbody>
      </Table>
    </>
  );
};

export default Table_view;
