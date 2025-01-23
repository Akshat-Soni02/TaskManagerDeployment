import React from "react";
import StatusCirlce from "../statusCircle/StatusCirlce.jsx";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin4Line } from "react-icons/ri";
import { deleteTask } from "../../services/ApiServices.jsx";
import "./Card.css"

const Card = ({openModal, title, description, status, id, setEditTaskId, fetching}) => {

  const clicked = () => {
    setEditTaskId(id);
    openModal();
  }

  const deleteTheTask = async () => {
    try {
      await deleteTask(id);
      fetching();
    } catch (error) {
      console.log("Error deleting task", error);
    } 
  }

  return (
    <div className="cardBody">
      <div className="cardHeader">
        <StatusCirlce status={status}/>
        <div className="cardTitle">{title}</div>
      </div>
      <div className="cardDes">
        {description}
      </div>
      <div className="cardHandlers">
        <BiEditAlt className="editIcon icon" onClick={clicked}/>
        <RiDeleteBin4Line className="deleteIcon icon" onClick={deleteTheTask}/>
      </div>
    </div>
  );
};

export default Card;
