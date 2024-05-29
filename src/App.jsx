import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaCheck, FaTimes } from "react-icons/fa";


const lists = [
  {
    users: "single",
    title: "Free",
    price: "$0/month",
    Storage: "true",
    public: "true",
    access: "true",
    private: "false",
    support: "false",
    subDomain: "false",
    status: "false"
  },
  {
    users: "5",
    title: "Plus",
    price: "$9/month",
    Storage: "true",
    public: "true",
    access: "true",
    private: "true",
    support: "true",
    subDomain: "true",
    status: "false"
  },
  {
    users: "unlimited",
    title: "Pro",
    price: "$49/month",
    Storage: "true",
    public: "true",
    access: "true",
    private: "true",
    support: "true",
    subDomain: "true",
    status: "true"
  },
]

function App() {


  return (
    <div className='row1'>

      {lists.map((item,index) => {
        return (
        <div className="card cardcontainer"  key={index}>


          <div className="card-body container">
            <h5 className='titlecolor'>{item.title}</h5>
            <h1 className="card-title">{item.price}</h1>
            <ul className="card-text lit">
              <li className="card-text "> {item.users ? <FaCheck /> : <FaTimes />} {item.users} users</li>
              <li className="card-text "> {item.Storage === "true" ? <FaCheck /> : <FaTimes />}  50GB Storage</li>
              <li className="card-text "> {item.public === "true" ? <FaCheck /> : <FaTimes />}  Unlimited Public Projects</li>
              <li className="card-text "> {item.access === "true" ? <FaCheck /> : <FaTimes />}  Community Access</li>
              <li className={`"card-text " ${ item.private==="false" ? "textblur" : ""}`}>{item.private === "true" ? <FaCheck /> : <FaTimes />}  Unlimited Private Projects</li>
              <li className={`"card-text " ${ item.support==="false" ? "textblur" : ""}`}> {item.support === "true" ? <FaCheck /> : <FaTimes />}  Dedicated Phone Support</li>
              <li className={`"card-text " ${ item.subDomain==="false" ? "textblur" : ""}`}> {item.subDomain === "true" ? <FaCheck /> : <FaTimes />}  Free Subdomain</li>
              <li className={`"card-text " ${ item.status==="false" ? "textblur" : ""}`}> {item.status === "true" ? <FaCheck /> : <FaTimes />}  Monthly Status Reports</li>
            </ul>
            <a href="#" className="btn btn-primary">Button</a>
          </div>
        </div>)

      })}


    </div>

  );
}

export default App
