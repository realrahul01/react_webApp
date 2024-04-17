
const Card = ({image, title, description1, description2})=>{
    return(
        <div className="card_work">
            <img src={image} alt="error" />
            <div className="content">
            <h1>{title}</h1>
            <p className='val1'>{description1}</p>
            <p className='val2'>{description2}</p>
            </div>
        </div>
    )
}

export default Card;