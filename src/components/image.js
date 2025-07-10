import "./image.css";

const Image = ({src, alt, height, width, ...props}) => {
    console.log("props: " + props.property2);
    // Takes source, alternate, height & width as input. 
    return(
    <div className="image-wrapper">
        <img
            className="image-component" 
            src={src} 
            alt={alt} 
            height={height} 
            width={width} 
        />
    </div>
    )
}

export default Image;