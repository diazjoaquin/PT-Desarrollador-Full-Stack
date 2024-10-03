import { ErrorMessage, Field } from "formik";
import { InputType } from "../../types/input.type";

type FormFieldProps = {
  type: InputType;
  name: string;
  label: string;
  id: string;
  placeHolder: string;
  required: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  type,
  name,
  label,
  id,
  placeHolder,
  required
}) => { 
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900 px-2" htmlFor={id}>
        {label}
      </label>
      <Field
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        required={required}
        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <ErrorMessage 
        name={name}
        component="span"
        className="text-red-600 text-xs"
      />
    </div>
  )
}