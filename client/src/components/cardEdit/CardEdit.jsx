import React, { useState } from "react";
import DropDown from "../dropDown/DropDown.jsx";
import "./CardEdit.css";
import { updateTask } from "../../services/ApiServices.jsx";

const CardEdit = ({id, closeModal, setTasks}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(formData);
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    console.log("submitting form");
    try {
        const data = await updateTask(id,formData);
        setTasks(data);
        setFormData({
            title: "",
            description: "",
            status: "",
        });
    } catch (error) {
        console.log("Error submitting card form", error);
    }
    closeModal();
  }

  return (
    <div className="editCardBody">
      <form className="cardEditForm" onSubmit={submitHandler}>
        <div className="formGroup">
          <label htmlFor="title" className="formLabel">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="formInput"
            placeholder="Enter the title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="description" className="formLabel">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="formTextArea"
            placeholder="Enter the description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="status" className="formLabel">
            Status
          </label>
          <DropDown value={formData.status} onChange={handleInputChange} />
        </div>
        <button type="submit" className="submitButton">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default CardEdit;
