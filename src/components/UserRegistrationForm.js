import axios from 'axios';
import '../App.css';
import { validateUserInputData } from "../validations/Validations";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

export default function UserRegistrationForm() {
    const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumbr] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const {
        isValidName,
        isValidEmail,
        isValidMobileNumber
      } = validateUserInputData(
        fullName,
        email,
        mobileNumber,
      )
      if(!selectedEvent) {
        toast.error("Please select any event");
      }
      if(!isValidName || !isValidEmail || !isValidMobileNumber || !selectedEvent) {
        return;
      } else {
        const body = {
          fullName,
          email,
          phoneNumber: mobileNumber,
          eventSelected: selectedEvent
        };
  
        const response = await axios.post("http://localhost:14050/user-registration", body);
        if(response.data.success) {
            console.log(response.data.response._id);
            navigate(`/success/${response.data.response._id}`)
        } else {
          toast.error(response.data.message);
        }
      }
    } catch(error) {
      console.log("Found the error", error);
    }
  }
  return (
    <div className='mainWrapperDiv'>
      <div className='HeaderContainer'>
      <p className='HeaderLabel'>Event Registration Form</p>
      </div>
      <div className='InputContainer'>
        <label className='InputLabel'>Full Name</label>
        <br></br>
        <input 
          className='Input' 
          placeholder="Please enter full name"
          onChange={(e) => {setFullName(e.target.value)}}
          value={fullName}
        />
      </div>
      <div className='InputContainer'>
        <label className='InputLabel'>Email Id</label>
        <br></br>
        <input 
          className='Input' 
          type={"text"} 
          placeholder="Please enter email id"
          value={email}
          onChange={(e) => {setEmail(e.target.value)} }
          />
      </div>
      <div className='InputContainer'>
        <label className='InputLabel'>Mobile No</label>
        <br></br>
        <input 
          className='Input' 
          type={"text"} 
          placeholder="Please enter mobile number"
          value={mobileNumber}
          onChange={(e) => {setMobileNumbr(e.target.value)}}
          />
      </div>
      <div className='InputContainer'>
      <label className='InputLabel'>Select Event</label>
      <select
        className="SelectInput"
        style={{ cursor: "pointer" }}
        label= "Please Select Agent"
        value={selectedEvent}
        onChange={(e) => { setSelectedEvent(e.target.value)}}
      >
        <option disabled value=''>
          Please Select Event
        </option>
        <option>
            Event - 1
          </option>
          <option>
            Event - 2
          </option>
          <option>
            Event - 3
          </option>
      </select>
      </div>
      <div className='InputContainer'>
        <button
          className='SubmitButton'
          onClick={handleSubmit}
            >
            S U B M I T
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    
  );
}