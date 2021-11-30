import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import {httpGet, httpPut, httpDelete} from "../../Utils/httpFunctions";
import './Profile.css';
import {findByDisplayValue} from "@testing-library/react";


const Profile = () => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    httpGet('api/me/').then((res) => setUserData(res.data))
  }, [])



  const handleIdBorrar = (event) => {
    setUserData({ ...userData, id: event.target.value });
  };

  const fetchUser = () => {
    httpGet('api/signin/')
        .then((res) => setUserData(res.data))
  }

  useEffect(fetchUser, [])

  return (
      <div>
        <h2 className="profile-title">Hola! Este es mi perfil</h2>
        <div className="profile-container contenedor">
            <h3 className="profile-data">Mi nombre y apellido es {userData.first_name} {userData.last_name}</h3>
            <h3 className="profile-data">Mi correo es {userData.email}</h3>
            <h3 className="profile-data">Mi nombre de usuario es {userData.username}</h3>
        </div>
        <div>
          <form action="">
            <input type="number" onChange={handleIdBorrar} defaultValue={userData?.id}/>
            <button onClick={(e)=>{
              e.preventDefault();
              httpGet('api/profile/'+userData.id+"/")
                  .then((res) => setUserData(res.data))
            }}>Buscar</button>
            <button onClick={(e)=>{
              e.preventDefault();
              httpDelete('api/profile/'+userData.id+"/")
                  .then(fetchUser)
            }}>Eliminar</button>
          </form>
        </div>
      </div>
  )
}

export default Profile
