// eslint-disable-next-line react/prop-types
const Checkbox = ({ label, checked, onChange, id }) => {
  return (
    <>
    <div className="form__group">
    <label className="form__label" htmlFor={id}> {label} </label>
    <input type="checkbox" checked={checked} onChange={onChange} id={id}/>
    </div>
    </>
    
  );
};

export default Checkbox;
