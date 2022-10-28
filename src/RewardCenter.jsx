import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGem} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import {RewardCenterBoxofdays} from "./RewardCenterBoxofdays"
import { useState } from 'react';
import {patchBYid} from "./API"
export const RewardCenter = ()=>{
    const daysReword = [5,5,5,5,10,5,5,5,5,15,5,5,5,5,5,10,5,10,5,30,5,10,5,20,20,10,20,30,40,50]
    const [todayRewrd,settodayRewrd] = useState(parseInt(window.localStorage.onday))
    const [dimends,setdimends] = useState(parseInt(window.localStorage.dimends))
    //
    function naDateme() {
        function datenaw() {
            return Date.now()
        }
        if (window.localStorage.colictingin > datenaw()) {
                console.log("yasss");
            setdimends(dimends + daysReword[todayRewrd-1])
            window.localStorage.dimends = dimends + daysReword[todayRewrd-1]
            patchBYid({dimends:parseInt(window.localStorage.dimends)},`http://localhost:3000/users/${window.localStorage.id}`)
            
            window.localStorage.colictingin = datenaw()
            patchBYid({colictingin:parseInt(window.localStorage.colictingin)},`http://localhost:3000/users/${window.localStorage.id}`)
            if (todayRewrd === 30) {
                settodayRewrd(1)
                window.localStorage.onday = 1
            patchBYid({onday:parseInt(window.localStorage.onday)},`http://localhost:3000/users/${window.localStorage.id}`)

            }else{
            settodayRewrd(todayRewrd + 1) 
            window.localStorage.onday = todayRewrd + 1
            patchBYid({onday:parseInt(window.localStorage.onday)},`http://localhost:3000/users/${window.localStorage.id}`)

            }
        }else{

            console.log("nooo");
        }
    }
    // console.log(Date.now() + 86400000);
    // console.log(Date.now() / 1000 );
    // console.log(Date.now() / 1000 / 60 );
    // console.log(Date.now() / 1000 / 60 / 60);
    // console.log(Date.now() / 1000 / 60 / 60 / 24);
    // console.log(Date.now() / 1000 / 60 / 60 / 24 / 365);
    // console.log(86400000);
    //
    return (
        <>
        <div className='RewardCenter-body' >
                {/* <div className='floting_btn' onClick={()=>{console.log("aaaaaaaaa");}} >collect diamonds</div> */}
                <div className="main-dimend-banal">
                <div className='floting_btn' onClick={()=>{naDateme()}} >collect diamonds</div>

                <h3 className="h3-Body" >Reward Center</h3>
                <FontAwesomeIcon icon={faGem} className="Body-icon" ></FontAwesomeIcon>
                <h2 className="h2-Body" >{dimends}</h2>
                </div>
        <div className="Body" dir='ltr' >
              {daysReword.map((e,i)=>{
                i=i +1
                if (todayRewrd === i) {
                    return (<RewardCenterBoxofdays  day={i} dimends={e} isit={true} key={i} />)
                }else{
                    return (<RewardCenterBoxofdays  day={i} dimends={e} isit={false} key={i} />)
                }
                  })}
        </div>

        </div>
        </>
    )
}