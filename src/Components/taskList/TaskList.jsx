import axios from "axios";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const TaskList = ({ task, getData }) => {
  const [finished, setFinished] = useState(false);

  async function deleteTask(id) {
    const url = "https://636b84c17f47ef51e132af59.mockapi.io/api/task";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (e) {
      console.log(e);
    }
    getData();
  }

  function isFinished() {
    setFinished(!finished);
    // Line through might can be added.
  }
  return (
    <div>
      {task?.map((item) => {
        const { id, task, Date } = item;
        return (
          <div
            key={id}
            onClick={isFinished}
            className="tasks mt-2 d-flex justify-content-between bg-secondary rounded-2 p-2 align-items-center"
          >
            <div>
              <h4>{task}</h4>
              <p>{Date}</p>
            </div>
            <AiFillDelete
              style={{ cursor: "pointer", fontSize: "1.5rem" }}
              className="mx-2"
              onClick={() => deleteTask(id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
