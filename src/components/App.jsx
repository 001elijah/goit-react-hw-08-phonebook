import { useSelector } from 'react-redux';

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { getError, getIsLoading } from 'redux/contactsSelectors';

const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

return (
    <>
    <h1>☎️ Phonebook ☎️</h1>
    <ContactForm />
    
    <h2>Contacts</h2>
    <Filter />
    {isLoading && <p>Loading contacts...</p>}
    {error && <p>😤 {error} 😤</p>}
    <ContactList/>
    </>
);
};

export default App;