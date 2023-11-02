import React from 'react';

const greeting = () => {
  alert('Ahoj');
};

// Zadání: Po kliku na tlačítko zobrazte alert s textem „Ahoj“.

export const Uloha1 = () => {
  return <button onClick={greeting}>Ukaž bublinu</button>;
};
