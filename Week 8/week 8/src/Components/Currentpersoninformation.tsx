import { FaNapster, FaMailBulk, FaGetPocket, FaMapMarkedAlt, FaPhone, FaLock } from "react-icons/fa";
import { useState } from 'react';
interface DataProps {
    name: string,
    mail: string,
    specialty: string,
    location: string,
    phone: string,
    passwd: string,
    img: string
  }
const Currentperson = ({name, mail, specialty, location, phone, passwd, img}:DataProps) => {

    const [alfaInformation, setInfo] = useState({
        title: "Name",
        info: name,
    });
    
    return(
        <>
        <img className="img" src={img}></img>
        <h2 className="info">{alfaInformation.title}</h2>
        <h1 className="infotitle">{alfaInformation.info}</h1>
        <div className="triggers">
            <button><FaNapster onMouseEnter={() => setInfo({title: "Name", info: name})}/></button>
            <button><FaMailBulk onMouseEnter={() => setInfo({title: "Mail", info: mail})} /></button>
            <button><FaGetPocket onMouseEnter={() => setInfo({title: "Specialty", info: specialty})} /></button>
            <button><FaMapMarkedAlt onMouseEnter={() => setInfo({title: "Location", info: location})} /></button>
            <button><FaPhone onMouseEnter={() => setInfo({title: "Phone", info: phone})} /></button>
            <button><FaLock onMouseEnter={() => setInfo({title: "Passwd", info: passwd})} /></button>
        </div>
        </>
    )
}

export default Currentperson;