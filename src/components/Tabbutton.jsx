export default function Tabbutton({label , onSelect , isactivetab }) {
  return (
    <>
      <div className="tab-button">
        <button onClick={onSelect} className={`tab-button-item ${isactivetab ? 'active' : ''}`}>{ label}</button>
      </div>
    </>
  );
}
// export default function Tabbutton({children}) {
//   return (
//     <>
//       <div className="tab-button">
//         <button onClick={() => onSelect(children)} className="tab-button-item">{ children}</button>
//       </div>
//     </>
//   );
// }