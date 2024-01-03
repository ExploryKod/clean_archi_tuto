import { useState } from 'react';

import './search.css';

// This holds a list of some fiction people
// Some  have the same name but different age and id

export const useSearchBar = (USERS:Array<any>) => {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e:any) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  
  return { 
    name,
    foundUsers,
    filter
  }
}


export default useSearchBar;