
function Img(props) {
const {source, alt} = props;
    
    return (
        <img src={source} alt={alt} />
    )
};
export default Img