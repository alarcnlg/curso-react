import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
    
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
          setSincronizedItem(true);
  
        } catch(error) {
          setError(true);
        }
      }, 2000);
    }, [sincronizedItem]);
  
    const saveItem = (newItem) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      } catch(error) {
        setError(true); 
      }
    };
    
    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    };

    return {
        item,
        saveItem,
        loading,
        error,
        sincronizeItem,
    };
  
};

export { useLocalStorage };