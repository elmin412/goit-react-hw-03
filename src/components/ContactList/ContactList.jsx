import Contact from "../ContactList/Contact"
import style from "./ContactList.module.css"

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={style.tottalList}>
      {contacts.map((contact) => (
        <li
          className={style.contactBorder}
          key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  )
}
