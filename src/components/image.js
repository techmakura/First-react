import "./image.css";

const Image = ({src, alt, height, width, style}) => {
    // Takes source, alternate, height & width as input. 
    return(
    <div className="image-wrapper">
        <img 
            style={style}
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