// using children props instead of the conventional attribute approach

// export default function TabButton({name}){
//     return <li><button>{name}</button></li>
// }

export default function TabButton({ children, isSelected, ...props }) {
    
  return (
    <li>
      <button className={isSelected ? 'active':''} {...props}>{children}</button>
    </li>
  );
}
