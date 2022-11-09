import React, { useEffect, useState } from "react";
import TaskList from "../taskList/TaskList";
import AddTask from "../addTask/AddTask";
import { Button } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState([]);
  const url = "https://636b84c17f47ef51e132af59.mockapi.io/api/task";

  // CRUD read from the API
  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setTask(data);
      // console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(task);
  return (
    <div>
      <Button
        variant="danger"
        onClick={() => setIsOpen(!isOpen)}
        className="w-100"
      >
        {isOpen ? "Hide" : "Show"} task bar
      </Button>

      {isOpen && <AddTask getData={getData} />}
      <TaskList task={task} getData={getData} />
    </div>
  );
};

export default Home;
