import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AiFillVideoCamera } from "react-icons/ai";

const AddTask = ({ getData }) => {
  const [task, setTask] = useState();
  const [date, setDate] = useState();
  console.log(task);

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { task, date };
    console.log("gelen task" + task);
    console.log("gelen date" + date);
    addNewTask(newTask);
    // The below function set them null but it doesn't display the change;
    // setTask("");
    // setDate("");
  }

  async function addNewTask(newtask) {
    const url = "https://636b84c17f47ef51e132af59.mockapi.io/api/task";
    try {
      await axios.post(url, newtask);
    } catch (error) {
      console.log(error);
    }
    getData();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task"
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="danger w-50" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
