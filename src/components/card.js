// const Card =({name, description, language})=>{
import "./card.css";

  const Card =(props)=>{
    const { name, description, language } = props;
    // Destructuring
  return(
    <div>
      <div className="title">Title: {name}</div>
      <div className="description">Description: {description}</div>
      <div className="language">Language: {language}</div>
    </div>
  )
}

export default Card;