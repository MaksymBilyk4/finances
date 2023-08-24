import {Link} from "react-router-dom";
import {PATH} from "../routes/PATH";

export const employerTableColumns = [
    {
        title: "Ім'я",
        dataIndex: "name",
        width: "50%",
        render: (name) => <Link to={PATH.employer(name)}>{name}</Link>
    }
]