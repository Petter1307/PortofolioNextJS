/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

type InputProp = {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: () => void;
};

export const Input: React.FC<InputProp> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

type LabelInputProps = {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: () => void;
  label: string;
};

export const LabelInput: React.FC<LabelInputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  label,
}) => {
  return (
    <label>
      {label}
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
// export const LabelInput
// type InputProp = {
//     type: string;
//     name: string;
//     value: string;
//     placeholder: string;
//     onChange: () => void;
//   };

//   export const Input: React.FC<InputProp> = ({
//     type,
//     name,
//     value,
//     placeholder,
//     onChange,
//   }) => {
//     return (
//       <input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//       />
//     );
//   };

//   type LabelInputProps = {
//     props: InputProp;
//     label: string;
//   };

//   export const LabelInput: React.FC<LabelInputProps> = ({ props, label }) => {
//     return (
//       <label>
//         {label}
//         <Input
//           value={props.value}
//           name={props.name}
//           placeholder={props.placeholder}
//           type={props.type}
//           onChange={props.onChange}
//         />
//       </label>
//     );
//   };
