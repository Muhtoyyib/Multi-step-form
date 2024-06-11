import { Link } from "react-router-dom";

function Button(props) {
    // eslint-disable-next-line react/prop-types
    const { type, className, children, link, ...rest } = props;
  
    if (type === "b") {
      return (
        <button className={className} {...rest}>
          {children}
        </button>
      );
    }

    if(type === "a"){
        return (
            <Link to={link} className={className} {...rest}>
              {children}
            </Link>
          );
    }
  }
  
  export default Button;