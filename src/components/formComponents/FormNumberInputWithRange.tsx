import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
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
const FormNumberInputWithRange: React.FC<NumberInputProps> = (props) => {
  const { getInputProps } = useNumberInput({
    step: props.step || 1,
    defaultValue: 1,
    min: 0,
    precision: props.precision || 0,
  });

  const inc = () => {
    if(props.value < 300)
      props.setValue(props.value + 1);
  };
  const dec = () => {
    if(props.value > 1)
      props.setValue(props.value - 1);
  };

  const input = getInputProps();
  const handleChange = (value) => {
    console.log('value',value);
    
    if(typeof(value) === typeof(0)){
      console.log('aq');
      
      props.setValue(value);
    }
    else if(value?.target?.value !== ""){
      props.setValue(value?.target?.value.replace(',', '.'));
    }
    else{
      props.setValue(null)
    }
  };

  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <HStack maxW="320px">
        <Button onClick={dec}>-</Button>
        <input inputmode="decimal" type="text" pattern="[0-9]*(.[0-9]+)?" role="spinbutton" aria-valuemin="0" aria-valuemax="9007199254740991" aria-valuenow="0" aria-valuetext="0.00" autocomplete="off" autocorrect="off" class="chakra-input css-1wty6e9" value={props.value} onChange={handleChange}/>
        <Button onClick={inc}>+</Button>
      </HStack>
      <Flex>
        <Slider
          flex="1"
          focusThumbOnChange={false}
          value={props.value}
          onChange={handleChange}
          step={props.step}
          max={300}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb fontSize="sm" boxSize="32px" children={props.value} />
        </Slider>
      </Flex>
    </FormControl>
  );
};

export default FormNumberInputWithRange;
