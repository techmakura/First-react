// const Card =({name, description, language})=>{
const Card =(props)=>{
    const { name, description, language } = props;
    // Destructuring
  return(
    <div>
      <div>Title: {name}</div>
      <div>Description: {description}</div>
      <div>Language: {language}</div>
    </div>
  )
}

export default Card;