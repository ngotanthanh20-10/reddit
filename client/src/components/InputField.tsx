import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  textarea?: boolean;
}

const InputField = ({ textarea, ...props }: InputFieldProps) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
      {textarea ? (
        <Textarea {...field} id={field.name} {...props} /> // field.onchange + field.value = {...field}
      ) : (
        <Input {...field} id={field.name} {...props} /> // props.type + props.placeholder = {...props}
      )}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;
