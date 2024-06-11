// eslint-disable-next-line react/prop-types
export default function RadioInput({ id, children,  name, ...props }) {
    return (
        <div className="form__radio-group">
        <input type="radio" className="form__radio-input" id={id} name={name} {...props} />
        <label htmlFor={id} className="form__radio-label">
            <span className="form__radio-button"></span>
            {children}
        </label>
        </div>
    );
  }
  
 
  