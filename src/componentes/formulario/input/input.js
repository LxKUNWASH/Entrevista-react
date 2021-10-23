import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./input.css";

export function Input(props) {
  const {
    value,
    as,
    handleOnChange,
    type = "texto",
    validationE,
    label = "Nombre",
    placeholder,
    state,
    stateValidation,
    setStateValidation,
    children,
    name,
  } = props;

  const validation = () => {
    if (validationE) {
      if (validationE.test(state[name])) {
        setStateValidation({ ...stateValidation, [name]: true });
      } else {
        setStateValidation({ ...stateValidation, [name]: false });
      }
    }
  };
  return (
    <div>
      {stateValidation[name] ? (
        <Form.Label>
          {label} <FontAwesomeIcon className="success" icon={faCheckCircle} />{" "}
        </Form.Label>
      ) : (
        <Form.Label>{label} </Form.Label>
      )}
      <Form.Control
        name={name}
        children={children}
        as={as}
        onChange={handleOnChange}
        value={value}
        type={type}
        placeholder={placeholder}
        onKeyUp={validation}
        
      />
    </div>
  );
}
