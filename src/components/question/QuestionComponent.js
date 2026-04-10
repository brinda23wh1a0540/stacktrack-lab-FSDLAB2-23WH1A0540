
import React, { useState } from 'react';
// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';
import { postTask } from '../../api/client';
import { useNavigate } from "react-router-dom";
function QuestionComponent() {
  // TODO: Define state variables needed for your question set
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  // TODO: Implement data fetching inside a useEffect hook
  // (Not required for create task — leave empty)

  // TODO: Implement any event handlers required by your question set
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      description: description,
      status: "pending"
    };

    await postTask(data);

    setTitle("");
    setDescription("");

    navigate("/");
  };


  return (
    <div style={{ width: "400px" }}>
      {/* TODO: Replace this placeholder with your question set UI */}
      <h2>Add Task</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        <button type="submit">
          Add Task
        </button>

      </form>

      {/* TODO: Render fetched data or form elements as required */}
    </div>
  );
}

export default QuestionComponent;
