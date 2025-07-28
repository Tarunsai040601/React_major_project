// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './PData.css';
// import { BsBookmarkHeartFill } from "react-icons/bs";
// import { FaPhone } from "react-icons/fa";
// import { arrayUnion, updateDoc } from 'firebase/firestore';
// import { doc } from 'firebase/firestore';
// import { dataBase } from '../../../../FireBase/FireBase';

// const PData = () => {
//   const User=JSON.parse(localStorage.getItem("logginuser"))
//   console.log(User);
  


//   const [profiles, setProfiles] = useState([]);

//   useEffect(() => {
//     fetchProfiles();
//   }, []);

//   const fetchProfiles = async () => {
//     try {
//       const res = await axios.get('https://684a93b0165d05c5d3595dea.mockapi.io/marriages');
//       setProfiles(res.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handlerSave=async(profile)=>{

//     const docref=doc(dataBase,"user",User.user.displayName)
//     console.log(docref);
    
//     await updateDoc(docref,{
//       savedPosts:arrayUnion(profile)
//     })
//     alert("data saved")

//   }



//   return (

//     <div className="pdata-container">
//       <h1>Marriage Profiles</h1>
//       <div className="profiles-grid">
//         {profiles.map((profile) => (
//           <div className="profile-card" key={profile.id}>
//             <img src={profile.image} alt={profile.name} className="profile-img" />
//             <h3>{profile.name}</h3>
//             <p><strong>About:</strong> {profile.about}</p>
//             <p><strong>Caste:</strong> {profile.caste}</p>
//             <p><strong>Religion:</strong> {profile.religion}</p>
//             <p><strong>Age:</strong> {profile.age}</p>
//             <p><strong>City:</strong> {profile.city}</p>
//             <p><strong>Profession:</strong> {profile.profession}</p>
//             <p><strong>Education:</strong> {profile.education}</p>
//             <div className="profile-buttons">
//               <button className="save-btn" onClick={()=>handlerSave(profile)}>Save <BsBookmarkHeartFill /></button>
//               <button className="contact-btn" type='tel'>Contact <FaPhone /></button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PData;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PData.css';
import { BsBookmarkHeartFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { arrayUnion, updateDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { dataBase } from '../../../../FireBase/FireBase';

const PData = () => {
  const User = JSON.parse(localStorage.getItem("logginuser"));
  console.log(User);

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const res = await axios.get('https://684a93b0165d05c5d3595dea.mockapi.io/marriages');
      setProfiles(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlerSave = async (profile) => {
    const docref = doc(dataBase, "user", User.user.displayName);
    console.log(docref

      
    );

    await updateDoc(docref, {
      savedPosts: arrayUnion(profile)
    });
    alert("data saved");
  }

  return (
    <div className="pdata-container">
      <h1>Marriage Profiles</h1>
      <div className="profiles-grid">
        {profiles.map((profile) => {
          const phone = `9${Math.floor(100000000 + Math.random() * 900000000)}`; 
          return (
            <div className="profile-card" key={profile.id}>
              <img src={profile.image} alt={profile.name} className="profile-img" />
              <h3>{profile.name}</h3>
              <p><strong>About:</strong> {profile.about}</p>
              <p><strong>Caste:</strong> {profile.caste}</p>
              <p><strong>Religion:</strong> {profile.religion}</p>
              <p><strong>Age:</strong> {profile.age}</p>
              <p><strong>City:</strong> {profile.city}</p>
              <p><strong>Profession:</strong> {profile.profession}</p>
              <p><strong>Education:</strong> {profile.education}</p>
              <div className="profile-buttons">
                <button className="save-btn" onClick={() => handlerSave(profile)}>
                  Save <BsBookmarkHeartFill />
                </button>
                <a className="contact-btn" href={`tel:${phone}`}>
                  Contact <FaPhone />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PData;
