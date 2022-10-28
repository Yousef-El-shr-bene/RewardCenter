import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDharmachakra,faGift} from '@fortawesome/free-solid-svg-icons'

export const GiftsAndfaDharmachakra = ()=>{

    return (<>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='svg-w' >
  <path fill="#3a99ff" fill-opacity="1" d="M0,96L24,112C48,128,96,160,144,144C192,128,240,64,288,74.7C336,85,384,171,432,186.7C480,203,528,149,576,149.3C624,149,672,203,720,224C768,245,816,235,864,245.3C912,256,960,288,1008,261.3C1056,235,1104,149,1152,117.3C1200,85,1248,107,1296,106.7C1344,107,1392,85,1416,74.7L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
    </svg>
    <div className="contener1" >
        <div className="grid-contener">
        <div className="grid-contener-div border4">
            <FontAwesomeIcon icon={faGift} className="icon-" ></FontAwesomeIcon>
            <p>lucky gifts</p>
        </div>
        <div className="grid-contener-div border3" >
                <FontAwesomeIcon icon={faDharmachakra} className="icon-" ></FontAwesomeIcon>
               <p>wheels of luck</p> 
        </div>
        <div className="grid-contener-div big" >
            <p className='p-p'>small gift</p>
            <p className='pay-btn'>20</p>
        </div>
        <div className="grid-contener-div big" >
        <p className='p-p' >small wheel</p>
            <p className='pay-btn'>20</p>
        </div>
        <div className="grid-contener-div big" >
        <p className='p-p' >big gift</p>
        <p className='pay-btn'>200</p>
        </div>
        <div className="grid-contener-div big" >
        <p className='p-p' >big wheel</p>
        <p className='pay-btn'>200</p>
        </div>
        <div className="grid-contener-div big" >
        <p className='p-p' >big bang gift</p>
            <p className='pay-btn'>2000</p>
        </div>
        <div className="grid-contener-div big" >
        <p className='p-p' >big bang wheel</p>
            <p className='pay-btn'>2000</p>
        </div>
        <div className="grid-contener-div big border1" >
        <p className='p-p' >legendary gift</p>
            <p className='pay-btn'>20000</p>
        </div>
        <div className="grid-contener-div big border2" >
        <p className='p-p' >legendary wheel</p>
            <p className='pay-btn'>20000</p>
        </div>
        </div>
    </div>
    </>)
}