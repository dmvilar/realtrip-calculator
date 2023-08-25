/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  useNumberInput,
} from "@chakra-ui/react";
import React from "react";

type NumberInputProps = {
  label: string;
  step?: number;
  precision?: number;
  setValue: any;
  value: number;
};
const FormNumberInput: React.FC<NumberInputProps> = (props) => {
  const { getInputProps} =
    useNumberInput({
      step: props.step || 1,
      defaultValue: 1,
      min: 1,
      precision: props.precision || 0,
    })

    const inc = () => {
      if(props.value < 300)
        props.setValue(props.value + 1);
    };
    const dec = () => {
      if(props.value > 1)
        props.setValue(props.value - 1);
    };
  const input = getInputProps()
  
  const handleChange = (value:any) => {
    if(typeof(value) === typeof(0)){
      props.setValue(value);
    }
    else if(value?.target?.value !== ""){
      props.setValue(value?.target?.value);
    }
    else{
      props.setValue(null)
    }
  };

  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <HStack maxW='320px'>
      <Button onClick={dec}>-</Button>
      <Input {...input} bg={'white'} value={props.value} onChange={handleChange} />
      <Button onClick={inc}>+</Button>
    </HStack>
    </FormControl>
  );
};

export default FormNumberInput;
