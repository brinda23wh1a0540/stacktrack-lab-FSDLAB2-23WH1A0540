import React from 'react';
import { Link } from "react-router-dom";
// TODO: Replace placeholder values with actual student and lab identifiers
const STUDENT_ID = '23WH1A0540';
const LAB_ID = 'FSDLAB2';

function Home() {
   return (
    <div style={{ width: "400px" }}>

      <h1>Stack Track Lab</h1>

      <p>Student ID: {STUDENT_ID}</p>
      <p>Lab ID: {LAB_ID}</p>

      <Link to="/add-task">
        <button>Add New Task</button>
      </Link>

    </div>
  );
}

export default Home;