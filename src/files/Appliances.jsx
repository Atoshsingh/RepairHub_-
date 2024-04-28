import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import style from "./Appliances.module.css"
import Header from '../Header.jsx';

function Appliances() {
  const params = useParams();
  const [appli, setAppli] = useState({
    1: [
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

    2: [
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

    3: ["Blue Star", "Voltas", "Daikin", "Hitachi", "LG", "Samsung", "Whirlpool", "Godrej"],
    4: ["Samsung", "Apple", "Lenovo", "Micromax", "iBall"],
    5: [
      "Samsung ",
      "LG ",
      "Sony ",
      "Panasonic ",
      "TCL",
      "Realme ",
      "Mi",
      "Philips "
    ],
    6: ["Microwave Oven",
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






  // console.log(params.imageNumber)
  // /*
  //  1 - watch 
  //  2 - phone
  //  3 - ac 
  //  4 - tab 
  //  5 - tv
  //  6 - other
  //  */
  const intNumber = parseInt(params.imageNumebr);

//   return (

//     <div className={style.mainDiv}>
//       {/* <Headers/> */}
//       <h1> {intNumber}</h1>
//       <ul>
//         {

//           appli[intNumber].map((item, id) => (
//             <li key={id}>{item}</li>
//           ))
//         }
//       </ul>
//     </div>
//   );
// }

// doing all changes here 

  return (

    <div className={style.mainDiv}>

      <Header/>
      <h1> {intNumber}</h1>
      <h1> Select the brand name of yout device</h1>
      {/* <ul> */}
        <div className={style.innerDiv}>
        {

            appli[intNumber].map((item, id) => (
              <div className={style.miniDivs} key={id}>{item}</div>
              
            ))
            }

        </div>
      {/* </ul> */}
    </div>
  );
}

export default Appliances;
