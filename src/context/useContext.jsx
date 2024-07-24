
import React, {  createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('service.json');
          const result = await res.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);


    // category data fetch 
    useEffect(() => {
        fetch('service.json')
          .then(res => res.json())
          .then(data => {
            setNewsData(data);
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);
    
      const getFilteredData = category => {
        return NewData.filter(item => item.category === category);
      };
  
  const authInfo = {
    getFilteredData,
    data 
  };




    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;