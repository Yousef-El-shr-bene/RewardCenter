import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGem} from '@fortawesome/free-solid-svg-icons'

export const RewardCenterBoxofdays = ({day,dimends,isit})=>{
    if (isit) {
        return (<>
            <div className="Body-div2">
                 <h5 className='h5 h5-'>day {day}</h5> 
                 <FontAwesomeIcon icon={faGem} className="faGem-black" ></FontAwesomeIcon>
                <h4 className='h5-'>{dimends}</h4>
                </div>
            </>)

    }else{ 
           return (<>
        <div className="Body-div">
             <h5 className='h5'>day {day}</h5> 
             <FontAwesomeIcon icon={faGem} ></FontAwesomeIcon>
            <h4>{dimends}</h4>
            </div>
        </>)}

}