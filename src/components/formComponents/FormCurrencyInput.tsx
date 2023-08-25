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
  const handleChange = (event: any, originalValue: any, maskedValue: any) => {
    console.log('originalValue', originalValue);
    props.setValue(originalValue)
    console.log('maskedValue', maskedValue);
    console.log(event, originalValue, maskedValue);
  };
  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <CurrencyInput
      value={props.value}
      onChangeValue={(event, originalValue, maskedValue) => {handleChange(event, originalValue, maskedValue)}}
      InputElement={<input inputMode="decimal" type="text" pattern="[0-9]*(.[0-9]+)?" role="spinbutton" aria-valuemin={0} aria-valuemax={9007199254740991} aria-valuenow={0} aria-valuetext="0.00" autoComplete="off" autoCorrect="off" className="chakra-input css-1wty6e9" value={props.value}/>}
    />
    </FormControl>
  );
};

export default FormCurrencyInput;
