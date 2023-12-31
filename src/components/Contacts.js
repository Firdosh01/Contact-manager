import React, { useEffect } from "react";
import { useState } from "react";
import AddContactModal from "./AddContactModal";
import ContactLists from "./ContactLists";
import {v4 as uuidv4} from 'uuid'

export default function Contacts() {
  const [addContactModal, setAddContactModal] = useState(false);

  const [addContacts, setAddContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contact"))
  || [] });

  
  useEffect(() => {
    localStorage.setItem("contact",JSON.stringify(addContacts))
  }, [addContacts])

  const handleContacts = (data) => {
    if(addContacts.findIndex((contacts) => contacts.data.email === data.email) === -1){
      setAddContacts([...addContacts, {data, id:uuidv4()}]);
    }
  };

  const handleDeleteContact = (contact) => {
    setAddContacts(addContacts.filter((id) => id !== contact ))
  }


  return (
    <div>
      <div className="bg-[#B554D7] h-[100px]">
        <div className="flex items-center justify-center">
          <button
            className="flex gap-1 outline-none bg-btn hover:text-[#B554D7] py-4 w-[60%] text-center text-[#121D2B] hover:bg-[#121D2B] rounded duration-500 font-semibold text-xl justify-center items-center mt-8"
            onClick={() => setAddContactModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                fill="#B554D7"
              />
            </svg>
            Add contact
          </button>
        </div>
      </div>
      <div className="bg-[#121D2B] py-10">
        <div className="flex flex-col items-center justify-center">
          <p className="pb-2 text-lg text-gray-500">Search name & email</p>
          <div className="flex gap-2">
            <input
              type="text"
              className="rounded-full outline-none bg-slate-700 md:w-[400px] w-[300px] px-2 text-white"
            />
            <div className="bg-[#B554D7] w-fit p-2 rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.7099 20.29L17.9999 16.61C19.44 14.8144 20.1374 12.5353 19.9487 10.2413C19.76 7.9473 18.6996 5.81278 16.9854 4.27664C15.2713 2.7405 13.0337 1.91951 10.7328 1.98247C8.43194 2.04543 6.24263 2.98756 4.61505 4.61514C2.98747 6.24272 2.04534 8.43203 1.98237 10.7329C1.91941 13.0338 2.74041 15.2714 4.27655 16.9855C5.81269 18.6997 7.94721 19.7601 10.2412 19.9488C12.5352 20.1375 14.8143 19.4401 16.6099 18L20.2899 21.68C20.3829 21.7737 20.4935 21.8481 20.6153 21.8989C20.7372 21.9497 20.8679 21.9758 20.9999 21.9758C21.1319 21.9758 21.2626 21.9497 21.3845 21.8989C21.5063 21.8481 21.6169 21.7737 21.7099 21.68C21.8901 21.4935 21.9909 21.2443 21.9909 20.985C21.9909 20.7257 21.8901 20.4765 21.7099 20.29ZM10.9999 18C9.61544 18 8.26206 17.5895 7.11091 16.8203C5.95977 16.0511 5.06256 14.9579 4.53275 13.6788C4.00293 12.3997 3.86431 10.9922 4.13441 9.63436C4.4045 8.2765 5.07119 7.02922 6.05016 6.05025C7.02912 5.07128 8.27641 4.4046 9.63427 4.1345C10.9921 3.8644 12.3996 4.00303 13.6787 4.53284C14.9578 5.06265 16.051 5.95986 16.8202 7.111C17.5894 8.26215 17.9999 9.61553 17.9999 11C17.9999 12.8565 17.2624 14.637 15.9497 15.9497C14.6369 17.2625 12.8564 18 10.9999 18Z"
                  fill="#121D2B"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch gap-3 lg:px-[200px] md:px-[40px] px-[10px] mt-5">
          {addContacts.map((contactLists, index) => (
           <ContactLists 
           contactLists={contactLists}
           handleDeleteContact={handleDeleteContact}
           />
          ))}
        </div>
      </div>

      <div>
        {addContactModal  && ( <AddContactModal setAddContactModal={setAddContactModal} handleContacts={handleContacts} /> )}
      </div>
    </div>
  );
}
