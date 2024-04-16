import { useState, useEffect } from "react"
import initialContact from "../../contacts.json"
import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"
import "./App.css"

export default function App() {
  const [contacts, setContact] = useState(() => {
    const saveContactLocal = localStorage.getItem("saveContact")
    return saveContactLocal !== null
      ? JSON.parse(saveContactLocal)
      : initialContact
  })

  const [filter, setFilter] = useState("")
  useEffect(() => {
    localStorage.setItem("saveContact", JSON.stringify(contacts))
  }, [contacts])

  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }

  const deleteContats = (contactId) => {
    setContact((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })
  }

  const visibleContacts = contacts.filter((contact) => {
    return (
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  })

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContats} />
      </div>
    </>
  )
}
