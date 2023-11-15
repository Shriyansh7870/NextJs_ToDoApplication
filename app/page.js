"use client";
import React, { useState } from "react";

const Page = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() !== "" && desc.trim() !== "") {
      setMainTask([...mainTask, { task, desc }]);
      setTask("");
      setDesc("");
    }
  };

  const deleteHandler = (index) => {
    const updatedTasks = mainTask.filter((_, i) => i !== index);
    setMainTask(updatedTasks);
  };

  const taskItems = mainTask.map((t, index) => (
    <li key={index} className="flex items-center justify-between mb-5">
      <div className="flex items-center justify-between mb-5 w-2/3">
        <h5 className="text-2xl font-semibold">{t.task}</h5>
        <h6 className="text-xl font-semibold">{t.desc}</h6>
      </div>
      <button
        onClick={() => deleteHandler(index)}
        className="bg-red-400 text-white px-4 py-2 rounded font-bold"
      >
        Delete
      </button>
    </li>
  ));

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Shriyansh Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2"
          placeholder="Enter Task Here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          disabled={task.trim() === "" || desc.trim() === ""}
          className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5"
        >
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        {mainTask.length > 0 ? (
          <ul>{taskItems}</ul>
        ) : (
          <h2>No Task Available</h2>
        )}
      </div>
    </>
  );
};

export default Page;
