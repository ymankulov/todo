import React, { useEffect, useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState([]);
  const [name, setName] = useState("");
  console.log(task);

  function addTask() {
    if (name.trim() === "") {
      alert(404);
    } else {
      let obj = {
        id: task.length ? task[task.length - 1].id + 1 : 1,
        title: name,
      };
      let data = JSON.parse(localStorage.getItem("todo")) || [];
      data.push(obj);
      localStorage.setItem("todo", JSON.stringify(data));
      read();
    }
    setName("");
  }

  function read() {
    let newTask = JSON.parse(localStorage.getItem("todo")) || [];
    setTask(newTask);
  }
  function delTask(btnId) {
    localStorage.setItem(
      "todo",
      JSON.stringify([...task.filter((el) => el.id !== btnId)])
    );
    read();
  }

  function enter(e) {
    if (e.key === "Enter") {
      return addTask();
    } else {
      return null;
    }
  }
  useEffect(() => {
    read();
  }, []);
  return (
    <div className="container flex items-center justify-center flex-col">
      <div className="flex items-center justify-center my-[100px]">
        <input
          type="text"
          id="base-input"
          value={name}
          onKeyDown={enter}
          //   defaultValue="veafr"
          onChange={(e) => setName(e.target.value)}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          type="button"
          onClick={() => addTask()}
          class="text-white bg-gradient-to-r ml-2 from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Add
        </button>
      </div>
      {task.length ? (
        <ul class="w-[350px] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {task.map((el) => (
            <li class="w-full flex items-center justify-between px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              {el.title}
              <button
                type="button"
                onClick={() => delTask(el.id)}
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ToDo;
