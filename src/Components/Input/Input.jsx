import PropTypes from "prop-types";
const Input = ({ value, type, name, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

const LabelInput = ({ label, value, type, name, placeholder, onChange }) => {
  return (
    <label>
      {label}
      <Input
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

export default LabelInput;
