import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGem} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import {Link} from "react-router-dom"

export const Login = ({inputvalue,setinputvalue,submiting,rong,setrong,username,loging})=>{
    
    function Links() {
        if (loging) {
            return  <Link className='login-btn idonutnow' to={"/RewardCenter"} >join as {username}</Link>
        }

    }
    
    const [btn,setbtn] = useState(["log in","Create an account"])
    function btns() {
        if (btn[0] === "log in") {
            setbtn(["Create an account","log in"])
        }else{
            setbtn(["log in","Create an account"])  
        }

    }
    return (<>
    <div className="login-contener" >
    <FontAwesomeIcon icon={faGem} className="login-dimend" ></FontAwesomeIcon>
        <div className="login-child" >
    <input type="text" className="input-text" placeholder="Your name" value={inputvalue[0]} onChange={(e)=>{setinputvalue([e.target.value,inputvalue[1]]); setrong("")}} />
    <input type="password" className="input-text" placeholder="paswrd" value={inputvalue[1]} onChange={(e)=>{setinputvalue([inputvalue[0],e.target.value]); setrong("")}} />
    <button className={`login-btn`} onClick={(v)=>{submiting(v)}} >{btn[0]}</button>
    <div className='login-div' >
    <button className='login-btn' onClick={btns}  >{btn[1]}</button>
    <button className='login-btn' >visit as a ghost</button>
    </div>
    <p className='red-banal'>{rong}</p>
    <Links/>
    </div>
    </div>
    </>)
}