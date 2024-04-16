import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

export default function Contact({ contact, onDelete }) {
    const { id, name, number } = contact;
    return (
        <div>
            <p> <AiOutlineUser />{name}</p>
            <p> <AiTwotonePhone />{number}</p>
            <button onClick={() => onDelete(id)}> Delete</button>
        </div>
    );
}