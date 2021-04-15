import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e) => {
      setValues((vals) => ({ ...vals, [e.target.name]: e.target.value }));
    },
  ];
};

export default useForm;
