import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddContactModal({
  setAddContactModal,
  handleContacts
}) {
  const [contact, setContact] = useState({
     name: "", 
     email: "" 
    });

  const changeHandler = (e) => {
    setContact((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };


  const handleAddContacts = () => {
    if (contact.name === "" || contact.email === "") {
      console.log("Please Enter contact");
    } else {
      handleContacts(contact)
      setAddContactModal(false);
    }
  };
  
  return (
    <div className="addContact_Modal">
      <div className="bg-[#121D2B] rounded-md w-[300px] m-5 p-4  relative">
        <h3 className="text-[#B554D7] text-center text-xl">Add Contact</h3>
        <div
          className="absolute cursor-pointer right-2 top-4"
          onClick={() => setAddContactModal(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M17.88 16L26.28 7.61334C26.5311 7.36227 26.6721 7.02174 26.6721 6.66667C26.6721 6.3116 26.5311 5.97107 26.28 5.72C26.0289 5.46893 25.6884 5.32788 25.3334 5.32788C24.9783 5.32788 24.6378 5.46893 24.3867 5.72L16 14.12L7.61335 5.72C7.36228 5.46893 7.02176 5.32788 6.66669 5.32788C6.31162 5.32788 5.97109 5.46893 5.72002 5.72C5.46895 5.97107 5.3279 6.3116 5.3279 6.66667C5.3279 7.02174 5.46895 7.36227 5.72002 7.61334L14.12 16L5.72002 24.3867C5.59505 24.5106 5.49586 24.6581 5.42817 24.8206C5.36047 24.983 5.32562 25.1573 5.32562 25.3333C5.32562 25.5094 5.36047 25.6836 5.42817 25.8461C5.49586 26.0086 5.59505 26.1561 5.72002 26.28C5.84397 26.405 5.99144 26.5042 6.15392 26.5719C6.3164 26.6396 6.49067 26.6744 6.66669 26.6744C6.8427 26.6744 7.01698 26.6396 7.17946 26.5719C7.34194 26.5042 7.4894 26.405 7.61335 26.28L16 17.88L24.3867 26.28C24.5106 26.405 24.6581 26.5042 24.8206 26.5719C24.9831 26.6396 25.1573 26.6744 25.3334 26.6744C25.5094 26.6744 25.6836 26.6396 25.8461 26.5719C26.0086 26.5042 26.1561 26.405 26.28 26.28C26.405 26.1561 26.5042 26.0086 26.5719 25.8461C26.6396 25.6836 26.6744 25.5094 26.6744 25.3333C26.6744 25.1573 26.6396 24.983 26.5719 24.8206C26.5042 24.6581 26.405 24.5106 26.28 24.3867L17.88 16Z"
              fill="#B554D7"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="Name" className="text-white ">
              Name
            </label>
            <input
              type="text"
              id="Name"
              name="name"
              placeholder="Enter name"
              className="p-2 text-white rounded-sm outline-none bg-slate-700"
              value={contact.name}
              onChange={changeHandler}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Email" className="text-white ">
              Email
            </label>
            <input
              type="text"
              id="Email"
              name="email"
              placeholder="Enter email"
              className="p-2 text-white rounded-sm outline-none bg-slate-700"
              value={contact.email}
              onChange={changeHandler}
            />
          </div>
          <div onClick={() => handleAddContacts()}>
            <button className="bg-[#B554D7] py-2 px-5 w-fit text-black flex rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                  fill="#121D2B"
                />
              </svg>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
