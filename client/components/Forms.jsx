import React from "react";

export function Radio({ selected, name, value, label, onChange }) {
  return (
    <label className="mr-4 text-gray-600 font-medium">
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={onChange}
        className="mr-2"
      />
      {label}
    </label>
  );
}

export function Label({ text, htmlFor }) {
  return (
    <label
      className="block mt-6 mb-2 text-gray-600 font-medium"
      htmlFor={htmlFor}
    >
      {text}
    </label>
  );
}

export function Input({ ...rest }) {
  return (
    <input className="w-6/12 border py-1 px-3 w-3/12 rounded-sm" {...rest} />
  );
}

export function Textarea({ ...rest }) {
  return (
    <textarea className="w-96 w-6/12 h-40 resize border rounded-sm" {...rest} />
  );
}
