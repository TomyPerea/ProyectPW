import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import {httpGet} from "../../Utils/httpFunctions";
import "./Profile.css"


const Profile = () => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    httpGet('api/me/').then((res) => setUserData(res.data))
  }, [])

  return <div className="container">
    <div className="container-box">
      <h2 className="box">Hola! Bienvenido a tu perfil</h2>
      <h3 className="box">Mi nombre y apellido es {userData.first_name} {userData.last_name}</h3>
      <h3 className="box">Mi correo es {userData.email}</h3>
      <h3 className="box">Mi nombre de usuario es {userData.username}</h3>
    </div>
  </div>

}

export default Profile;
