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
export default Input;
Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
