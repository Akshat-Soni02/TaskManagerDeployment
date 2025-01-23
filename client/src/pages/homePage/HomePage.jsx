import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Card from "../../components/card/Card.jsx";
import CardEdit from "../../components/cardEdit/CardEdit.jsx";
import Modal from "../../components/modal/Modal.jsx";
import { fetchTasks, getUser } from "../../services/ApiServices.jsx";
import CardCreate from "../../components/cardCreate/CardCreate.jsx";
import { IoAdd } from "react-icons/io5";
import { useAuth } from "../../AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTaskCreated, setIsTaskCreated] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const { isAuthenticated, setIsAuthenticated, setUser, logout } = useAuth();
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openCreate = () => setIsTaskCreated(true);
  const closeCreate = () => setIsTaskCreated(false);

  const fetching = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
      setTimeout(() => {
        console.log("Fetched data:", data);
      }, 2000);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  const fetchMyProfile = async () => {
    try {
      const UserData = await getUser();
      setUser(UserData);
      console.log("successfully fetched user details");
      setIsAuthenticated(true);
    } catch (error) {
      console.log("fail to fetch user details");
      setIsAuthenticated(false);
      navigate("/login");
      setUser(null);
    }
  };

  const logoutAction = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log("error here cmmon even in logout");
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      await fetchMyProfile();
    };
    checkAuth();
    fetching();
    console.log(isAuthenticated);
  }, []);

  return (
    <>
      <div className="homePage">
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <CardEdit
              id={editTaskId}
              closeModal={closeModal}
              setTasks={setTasks}
            />
          </Modal>
        )}
        {isTaskCreated && (
          <Modal onClose={closeCreate}>
            <CardCreate closeCreate={closeCreate} setTasks={setTasks} />
          </Modal>
        )}
        <div className="homePageHeader">
          <div className="homeHeaderContent">
            <h1 className="homeTitle">Task Manager</h1>
            <div className="logoutButton" onClick={logoutAction}>
              Logout
            </div>
          </div>
        </div>

        <div className="homePageBody">
          <div className="taskCards">
            {tasks.map((cur) => (
              <Card
                key={cur._id}
                id={cur._id}
                openModal={openModal}
                title={cur.title}
                description={cur.description}
                status={cur.status}
                setEditTaskId={setEditTaskId}
                fetching={fetching}
              />
            ))}
          </div>
          <div className="createTaskButton" onClick={openCreate}>
            <IoAdd />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
