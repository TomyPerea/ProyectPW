
import {useEffect, useState} from "react";
import {httpGet} from "../../Utils/httpFunctions";
import './Profile.css';



const Profile = () => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    httpGet('api/me/').then((res) => setUserData(res.data))
  }, [])

  const fetchUser = () => {
    httpGet('api/signin/')
        .then((res) => setUserData(res.data))
  }

  useEffect(fetchUser, [])

  return (
      <div className="backgroundColor profile-buttons">
        <h2 className="profile-title">Hola! Este es mi perfil</h2>
        <div className="profile-container contenedor centrar">
            <h3 className="profile-data">Mi nombre y apellido es {userData.first_name} {userData.last_name}</h3>
            <h3 className="profile-data">Mi correo es {userData.email}</h3>
            <h3 className="profile-data">Mi nombre de usuario es {userData.username}</h3>
        </div>
      </div>
  )
}

export default Profile
