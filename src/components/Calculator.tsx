/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import FormCurrencyInput from "./formComponents/FormCurrencyInput";
import FormNumberInput from "./formComponents/FormNumberInput";
import FormNumberInputWithRange from "./formComponents/FormNumberInputWithRange";
import React from "react";

type CalculatorProps = {
  titulo: string;
  qtdMilhas: any;
  setQtdMilhas: any;
  valorMilheiro: number;
  setValorMilheiro: any;
  valorTaxa: number;
  setValorTaxa: any;
  qtdCpf: number;
  setQtdCpf: any;
};

const Calculator: React.FC<CalculatorProps> = (props) => {

  const limparCampos = () => {
    props.setQtdMilhas(0);
    props.setValorMilheiro(0);
    props.setValorTaxa(0);
    props.setQtdCpf(1);
  };

  return (
    <>
      <Flex>
        <Box p="4">
          <Heading lineHeight="tall" size={"md"}>
            <Highlight
              query={["Voo Ida", "Voo Volta"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "orange.100" }}
            >
              {props.titulo}
            </Highlight>
          </Heading>
        </Box>
        <Spacer />
        <Box p="4">
          <Button colorScheme="teal" size="xs" onClick={limparCampos}>
            Limpar
          </Button>
        </Box>
      </Flex>
      <Stack direction={["column", "row"]} spacing="24px">
        <Box>
          <FormNumberInputWithRange
            label="Quantidade Milhas"
            step={0.01}
            precision={2}
            setValue={props.setQtdMilhas}
            value={props.qtdMilhas}
          ></FormNumberInputWithRange>
        </Box>
        <Box>
          <FormCurrencyInput
            label="Valor Milheiro"
            setValue={props.setValorMilheiro}
            value={props.valorMilheiro}
          ></FormCurrencyInput>
        </Box>
        <Box>
          <FormCurrencyInput
            label="Valor Taxa"
            setValue={props.setValorTaxa}
            value={props.valorTaxa}
          ></FormCurrencyInput>
        </Box>
        <Box>
          <FormNumberInput
            label="Quantidade CPF"
            setValue={props.setQtdCpf}
            value={props.qtdCpf}
          ></FormNumberInput>
        </Box>
      </Stack>
    </>
  );
};

export default Calculator;
