/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
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
      InputElement={<Input bg={'white'}/>}
    />
    </FormControl>
  );
};

export default FormCurrencyInput;
