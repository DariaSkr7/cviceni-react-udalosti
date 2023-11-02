import hradUrl from './hrad.svg';

const msg = () => {
  alert('Na hradě je myš!');
};

// Zadání: Po najetí myši, `onMouseEnter` na obrázek zobrazte alert s textem „Na hradě je myš!“

export const Uloha2 = () => {
  return (
    <img onMouseEnter={msg} src={hradUrl} width={60} height={60} alt="hrad" />
  );
};
