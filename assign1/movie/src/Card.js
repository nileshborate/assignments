
import "./Card.css"


export const Card = (props) => {
   
  return (
    <div className='cards'>
        <div className='card'>
            <img src={props.imgsrc} alt="" className='card_img' />
            <div className='card_info'>
                <div className='card_title'>Movie Name : {props.title}</div>
                <div className='card_rating'>Rating : {props.rating}</div>
                <div className='card_releasedate'>Release Date : {props.releaseDate}</div>
            </div>
        </div>
    </div>
  )
}
