import axios from "axios";

const BASE_URL = process.env.REACT_APP_TEST;
const TASK_URL = `${BASE_URL}/tasks`;
const USER_URL = `${BASE_URL}/user`;

//task api calls

export const fetchTasks = async () => {
  try {
    const response = await axios.get(TASK_URL, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data.tasks;
  } catch (error) {
    console.log("Error fetching all tasks", error);
    throw error;
  }
};

export const fetchTask = async (id) => {
  try {
    const response = await axios.get(`${TASK_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data.task;
  } catch (error) {
    console.log("Error fetching task", error);
    throw error;
  }
};

export const createTask = async (data) => {
  try {
    const response = await axios.post(TASK_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data.tasks;
  } catch (error) {
    console.log("Error creating task", error);
    throw error;
  }
};

export const updateTask = async (id, data) => {
  try {
    const response = await axios.put(`${TASK_URL}/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data.tasks;
  } catch (error) {
    console.log("Error updating task", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${TASK_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return;
  } catch (error) {
    console.log("Error while deleting task", error);
    throw error;
  }
};

//user api calls

export const register = async (data) => {
  try {
    const response = await axios.post(`${USER_URL}/new`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    console.log(response.data.message);
  } catch (error) {
    console.log("Error registering user", error);
    throw error;
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${USER_URL}/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    console.log(response.data.message);
  } catch (error) {
    console.log("Error log-In", error);
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${USER_URL}/me`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    console.log(response.data.message);
    return response.data.user;
  } catch (error) {
    console.log("Error log-In", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await axios.get(`${USER_URL}/logout`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  } catch (error) {
    console.log("Error log-out", error);
    throw error;
  }
};

export const updateUser = async (id, data) => {
  try {
    const response = await axios.put(`${USER_URL}/update/${id}`, data);
    console.log(response.data.message);
  } catch (error) {
    console.log("Error updating user");
    throw error;
  }
};
