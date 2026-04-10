const BASE_URL = "http://localhost:5000";

export const postTask = async (data) => {

  // Get existing tasks
  const tasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

  // Add new task
  tasks.push({
    _id: Date.now(),
    ...data
  });

  // Save tasks
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );

  // Return response
  return {
    _id: Date.now(),
    ...data
  };

};