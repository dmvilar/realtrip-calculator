import {
  Box,
  Stack,
} from "@chakra-ui/react";
import FormCurrencyInput from "./formComponents/FormCurrencyInput";
import FormNumberInput from "./formComponents/FormNumberInput";
import FormNumberInputWithRange from "./formComponents/FormNumberInputWithRange";
import React, { useEffect } from "react";

type CalculatorProps = {
  setVooProps: any;
  setValorTotal: any;
  qtdMilhas: number,
  valorMilheiro: number,
  valorTaxa: number,
  qtdCpf: number
}

const Calculator: React.FC<CalculatorProps> = (props) => {
  const [valorMilheiro, setValorMilheiro] = React.useState(props.valorMilheiro);
  const [valorTaxa, setValorTaxa] = React.useState(props.valorTaxa);
  const [qtdMilhas, setQtdMilhas] = React.useState(props.qtdMilhas);
  const [qtdCpfs, setQtdCpfs] = React.useState(props.qtdCpf);

  useEffect(() => {
    console.log('<><><><><><><><> XXXXXX');
    
    // console.log('valorMilheiro', valorMilheiro);
    // console.log('valorTaxa', valorTaxa);
    // console.log('qtdMilhas', qtdMilhas);
    const newObj = {...props, qtdMilhas: qtdMilhas, valorMilheiro: valorMilheiro, valorTaxa: valorTaxa, qtdCpfs: qtdCpfs};
    props.setVooProps(newObj);
    
    const total = ((qtdMilhas*valorMilheiro)+(valorTaxa))*qtdCpfs;
    
    props.setValorTotal(total)
  }, [valorMilheiro, valorTaxa, qtdMilhas, qtdCpfs]);

  return (
    <>
      <Stack direction={["column", "row"]} spacing="24px">
        <Box>
          <FormNumberInputWithRange
            label="Quantidade Milhas"
            step={0.01}
            precision={2}
            setValue={setQtdMilhas} value={qtdMilhas}
          ></FormNumberInputWithRange>
        </Box>
        <Box>
          <FormCurrencyInput label="Valor Milheiro" setValue={setValorMilheiro} value={valorMilheiro}></FormCurrencyInput>
        </Box>
        <Box>
          <FormCurrencyInput label="Valor Taxa" setValue={setValorTaxa} value={valorTaxa}></FormCurrencyInput>
        </Box>
        <Box>
          <FormNumberInput label="Quantidade CPF"   setValue={setQtdCpfs} value={qtdCpfs}></FormNumberInput>
        </Box>
      </Stack>
    </>
  );
};

export default Calculator;
