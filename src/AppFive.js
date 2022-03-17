import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [person, setPerson] = useState();

  useEffect(() => {
    async function getData() {
      const results = await axios.get('https://swapi.dev/api/people/1');
      setPerson(results.data.name);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      axios.get('https://swapi.dev/api/people/1').then((data) => {
        setPerson(data.data.name);
      });
    }
    getData();
  }, []);

  return <div>{person}</div>;
}

export default App;

useEffect(
  () => {
    //function logic
  },
  [
    /*dependency array*/
  ]
);
