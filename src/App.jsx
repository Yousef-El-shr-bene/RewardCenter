import './App.css';
import {Route,Routes} from "react-router-dom"
import {Menapp} from "./Menapp"
import {Login} from "./Login"
import { useEffect, useState } from 'react';
import {git,POST,allid} from "./API"
function App() {

  const [inputvalue,setinputvalue] = useState(["",""])
  const [rong,setrong] = useState("")
  const [apidata1,setapidata1] = useState([])
  const [username,setusername] = useState("")
  const [loging,setloging] = useState(false)
  const  [bodylenth,setbodylenth] = useState("")

   function data(Yourname,paswrd) {
    
    git(`http://localhost:3000/users?Yourname=${Yourname}&paswrd=${paswrd}`).then((d)=>{ setapidata1(d) })
  }



   function submiting(v) {
    if ( v.target.textContent === "log in") {

      if (  inputvalue[0] !== "" && inputvalue[1] !== "" ) {
          data(inputvalue[0],inputvalue[1])
      }else{
        setrong("Your name or paswrd is Empty") 
      }
       
    }else{
      //
      if (  inputvalue[0] !== "" && inputvalue[1] !== "" ) {
        allid().then((d)=> {setbodylenth(d)})


    }else{
      setrong("Your name or paswrd is Empty") 
    }
      

    }
  }   

  useEffect(() => {
    if (apidata1[0] !== undefined) {
      setusername(apidata1[0].Yourname)
      setloging(true)
      window.localStorage.setItem("id",[apidata1[0].id])
      window.localStorage.setItem("Yourname",[apidata1[0].Yourname])
      window.localStorage.setItem("dimends",[apidata1[0].dimends])
      window.localStorage.setItem("onday",[apidata1[0].onday])
      window.localStorage.setItem("colictingin",[apidata1[0].colictingin])

    }else{
      setrong("Your name or paswrd is rong") 
      setloging(false)
    }
  }, [apidata1])
  //
  useEffect(() => {

    if (bodylenth === "") {
      
    }else{
    let newuser = {id: bodylenth.length +1 ,Yourname: `${inputvalue[0]}`,paswrd:`${inputvalue[1]}`,dimends:0,onday:1};
    let newuser1 = JSON.stringify(newuser)
    POST(newuser1,"http://localhost:3000/users")
    window.localStorage.setItem("id",[bodylenth.length +1])
    window.localStorage.setItem("Yourname",[`${inputvalue[0]}`])
    window.localStorage.setItem("dimends",[0])
    window.localStorage.setItem("onday",[1])
    window.localStorage.setItem("colictingin",0)
    setusername(`${inputvalue[0]}`)
    setloging(true)
    }

  },[bodylenth])
  
  
  return (
  <>
  <Routes> 

  <Route path="/" element={<><Login inputvalue={inputvalue} setinputvalue={setinputvalue} submiting={submiting} rong={rong} setrong={setrong} username={username} loging={loging} /></>} />
  <Route path="/RewardCenter" element={<Menapp/>} />

  </Routes>
  </>
  );
}

export default App;
