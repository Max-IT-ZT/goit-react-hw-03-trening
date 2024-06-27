import css from "./App.module.css";
import contactBase from "../../data/contactBase.json";
import { useEffect, useState } from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";

const getInitialContact = () => {
  const saveContacts = localStorage.getItem("contact-test-project");
  return saveContacts ? JSON.parse(saveContacts) : contactBase;
};

export default function App() {
  const [contacts, setContacts] = useState(getInitialContact);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    localStorage.setItem("contact-test-project", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContacts = (contactId) =>
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  // visibleContact  -назва змінної яку ми передаємо як пропр в компонент ContactList
  // contacts.filter  - беремо масив який зберігається contacts і робимофільтрацію по ньому тобто створюємо новий масив який має тількі ті данні які в нас співпали по умові.
  // contact.name.toLowerCase().includes(filter.toLowerCase()) робимо перевірку і порівняння contact.name.toLowerCase() беремо наш масив йдемо до значення name приводимо його до всіх маленький літер toLowerCase() потім робимо перевірку чи співпадає значення в інпуті зі значенням в нашому name за допомоги includes(filter.toLowerCase()) filter це вже є значення яке ми вводимо в самому інпуті і приводимо його також до маленький літер за допомоги тогож самого toLowerCase()
  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContact} onDelete={deleteContacts} />
    </div>
  );
}
