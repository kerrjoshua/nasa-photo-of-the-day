import styled from 'styled-components';
import './App.css';

const StyledInfo = styled.div`
border: solid gainsboro 2px;
border-radius: 3px;
color: white;
    background-color: #282c34;
    & div, p{
    text-align: left;
    margin: 10px 15px;
   }
   & p {
    text-indent: 2em;
    color: dodgerblue;
   }

`

function Info(props) {


const {title, desc, copyright, date } = props;



    return (
        <StyledInfo>            
            <h2>{title}</h2>
            <p>Description: {desc}</p>
            <div>Date: {date}</div>
            <div>Copyright: {copyright}</div>
        </StyledInfo>
    );
};

export default Info;