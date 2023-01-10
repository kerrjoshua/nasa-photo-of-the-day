import { getByTitle } from "@testing-library/react";

function Info(props) {
/**
 * title
 * desc
 * copyright
 * date
 */
const {title, desc, copyright, date } = props;



    return (
        <div>
            <div><h2>{title}</h2></div>
            <div>{desc}</div>
            <div>{date}</div>
            <div>{copyright}</div>
        </div>
    );
};

export default Info;