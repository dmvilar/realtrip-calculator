/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";
import { CurrencyInput } from 'react-currency-mask';
type CurrencyInputProps = {
  label: string;
  setValue: any;
  value: number;
};
const FormCurrencyInput: React.FC<CurrencyInputProps> = (props) => {
  const handleChange = (_event: any, originalValue: any) => {
    props.setValue(originalValue)
  };
  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <CurrencyInput
      value={props.value}
      onChangeValue={(event, originalValue) => {handleChange(event, originalValue)}}
      InputElement={<input inputMode="decimal" type="text" pattern="[0-9]*(.[0-9]+)?" role="spinbutton" aria-valuemin={0} aria-valuemax={9007199254740991} aria-valuenow={0} aria-valuetext="0.00" autoComplete="off" autoCorrect="off" className="chakra-input css-1wty6e9" value={props.value}/>}
    />
    </FormControl>
  );
};

export default FormCurrencyInput;
