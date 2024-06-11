// eslint-disable-next-line react/prop-types
export default function Input({ id, children, ...props }) {
  return (
    <div className="form__group">
      <label className="form__label" htmlFor={id}>{children}</label>
      <input className="form__input" id={id} {...props} />
    </div>
  );
}

