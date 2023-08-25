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
  const handleChange = (originalValue:any) => {
    props.setValue(originalValue)
  };

  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <CurrencyInput
      value={props.value}
      onChangeValue={(originalValue) => {handleChange(originalValue)}}
      InputElement={<Input bg={'white'}/>}
    />
    </FormControl>
  );
};

export default FormCurrencyInput;
