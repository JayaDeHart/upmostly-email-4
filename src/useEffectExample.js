import { useEffect, useState } from 'react';

function useEffectExample() {
  const names = [
    'Aaron',
    'Abel',
    'Bobby',
    'Drew',
    'Dennis',
    'Frank',
    'Joseph',
    'Tyler',
    'Tamara',
    'Zachary',
  ];

  const [letter, setLetter] = useState('A');

  function handleLetter(e) {
    setLetter(e.target.value);
  }

  const [filteredList, setFilteredList] = useState(names);

  useEffect(() => {
    const newList = list.filter((name) => name[0] === letter);
    setFilteredList(newList);
  }, [letter]);

  return (
    <div>
      <p>Select filter letter:</p>
      <input type="text" onChange={handleLetter}></input>
      <p>Filtered list:</p>
      {filteredList.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
}

export default useEffectExample;

['Aaron', 'Abel'];
