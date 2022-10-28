import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faMoneyCheckDollar,faBell,faRightToBracket,faGem} from '@fortawesome/free-solid-svg-icons'
import './App.css';
<FontAwesomeIcon icon="fa-solid fa-gem" />

export const Header = ()=>{
    return(<>
    <div className="Heder" >
    <FontAwesomeIcon icon={faUser} className="faUser " ></FontAwesomeIcon>
    <FontAwesomeIcon icon={faBell} className="faBell icon" ></FontAwesomeIcon>
    <div className="contener2">
    <FontAwesomeIcon icon={faMoneyCheckDollar} className="faMoneyCheckDollar" ></FontAwesomeIcon>
    <h3 className='h3' >$ 10</h3>
    </div>
    {/* <FontAwesomeIcon icon={faGift} className="faGift icon" ></FontAwesomeIcon> */}
    <FontAwesomeIcon icon={faGem} className="faGem icon" ></FontAwesomeIcon>
    {/* <FontAwesomeIcon icon={faDharmachakra} className="faDharmachakra icon" ></FontAwesomeIcon> */}
    <FontAwesomeIcon icon={faRightToBracket} className="faRightToBracket icon" ></FontAwesomeIcon>

    </div>
    </>)
}