// using children props instead of the conventional attribute approach

// export default function TabButton({name}){
//     return <li><button>{name}</button></li>
// }

export default function TabButton({ children, onSelect }) {
    
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
