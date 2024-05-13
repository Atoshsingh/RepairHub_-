import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import style from "./Appliances.module.css"
import Header from '../Header.jsx';
import { useAuth } from '../context/AuthContext.jsx';
function Appliances() {
  const navigate = useNavigate();
  const  { authUser , setAutheUser , isLoggedIn , setIsLoggedIn } = useAuth();
  const params = useParams();
  const [currUser, setCurrUser] = useState("User");
  const [currValue , setCurrValue] = useState('intial value');
  const [currTextBox , setCurrTextBox] =useState('');
  const intNumber = parseInt(params.imageNumebr);

  const config ={
    // Username:'toshkumrt@gmail.com',
    // Password:'BBA2FCC845EB56CADEF3D927F837FB09777B',
    // Host : "smtp.elasticemail.com",
    // Port:2525,
    SecureToken:'402538b6-ffc4-43fc-88a1-d9dc0a3518fb',
    To : `toshkumrt@gmail.com`,
    From : 'toshkumrt@gmail.com',
    Subject :'RepairPro order confirmed',
    Body : `hey ${currUser}. you want to reapir your watch of  ${currValue} brand with the massage ${currTextBox} . Our team will get in touch with u soon.  `
  }
  
  useEffect(() => {
    const curruser = JSON.parse(localStorage.getItem("setUser"));
    if (curruser) {
      setCurrUser(curruser.name);
    }

  }, [])
  const [appli, setAppli] = useState({
    1: [
      "~ select the brand ~",
      "Boat",
      "Noise",
      "Fire-Boltt",
      "Amazfit (by Huami)",
      "Realme",
      "Xiaomi",
      "OnePlus",
      "Crossbeats",
      "Fitbit",
      "Fossil",
      "Garmin",
      "Samsung",
      "Apple"
    ],

    2: ["~ select the brand ~",
      "Micromax",
      "Lava",
      "Xiaomi",
      "Realme",
      "OnePlus",
      "Samsung",
      "Apple",
      "Huawei ",
      "Oppo",
      "Vivo",
      "Motorola ",
      "Poco ",
      "Asus ",
      "Infinix",
      "Honor",
      "Lenovo ",
      "Nokia",
      "iQOO ",
      "Google"
    ],
    3: ["~ select the brand ~","Blue Star", "Voltas", "Daikin", "Hitachi", "LG", "Samsung", "Whirlpool", "Godrej"],
    4: ["~ select the brand ~","Samsung", "Apple", "Lenovo", "Micromax", "iBall"],
    5: ["~ select the brand ~",
      "Samsung ",
      "LG ",
      "Sony ",
      "Panasonic ",
      "TCL",
      "Realme ",
      "Mi",
      "Philips "
    ],
    6: ["~ select the brand ~",
      "Microwave Oven",
      "Refrigerator",
      "Washing Machine",
      "Air Conditioner",
      "Induction Cooktop",
      "Water Purifier",
      "Electric Kettle",
      "Mixer Grinder",
      "Juicer",
      "Toaster",
      "Food Processor",
      "Television"]
  });

  function orderPlaced(){
    console.log(currValue);
    console.log("are baba")
    console.log(currTextBox);

    if(window.Email){
      event.preventDefault();
      Email.send(config).then(()=>{
        alert("Emails sends successfully.. ")
      });
    }
  }
  function sendToLogin(){
    navigate("/login");
  }
  function setSelectBoxValue(e){
    setCurrValue(e.target.value);
  }
  function setTextBoxValue(e){
    setCurrTextBox(event.target.value)
  }
  // so finally i am getting the value and now i am going to send the email to the user's email 
  // so for that i am going to use the elastic email 
//blank things 
  return (
    <>
      <Header />
      <div className={style.divMain}>
        <div className={style.divInner1}>
          <h1>Hey {currUser} </h1>
        </div>

        <div className={style.divInner2}>
          <div className={style.mostInnerDiv}>
            <label> Select Brand : </label>
            <select className={style.selectBox}
            value={currValue} onChange={setSelectBoxValue}
            >
              {appli[intNumber].map((item, id) => (
                <option key={id}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* //-------------------------- */}
          <div className={style.mostInnerDiv} >
            <label> The Problem : </label>
            <textarea value={currTextBox}  onChange={setTextBoxValue} placeholder='Write Somthing... '></textarea>
          </div>
        </div>
        <div className={style.divInner1}>
         {isLoggedIn?<button onClick={orderPlaced}>place the service </button>:<button onClick={sendToLogin}>login to continue</button>}
        </div>
      </div>
    </>
  );
}

export default Appliances;
