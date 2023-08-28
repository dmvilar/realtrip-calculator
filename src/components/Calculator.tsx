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
import React, { useEffect } from "react";

type CalculatorProps = {
  titulo: string;
  setVooProps: any;
  setValorTotal: any;
  qtdMilhas: number;
  valorMilheiro: number;
  valorTaxa: number;
  qtdCpf: number;
};

const Calculator: React.FC<CalculatorProps> = (props) => {
  const [valorMilheiro, setValorMilheiro] = React.useState(props.valorMilheiro);
  const [valorTaxa, setValorTaxa] = React.useState(props.valorTaxa);
  const [qtdMilhas, setQtdMilhas] = React.useState(props.qtdMilhas);
  const [qtdCpfs, setQtdCpfs] = React.useState(props.qtdCpf);

  useEffect(() => {
    const newObj = {
      ...props,
      qtdMilhas: qtdMilhas,
      valorMilheiro: valorMilheiro,
      valorTaxa: valorTaxa,
      qtdCpfs: qtdCpfs,
    };
    props.setVooProps(newObj);

    const total = (qtdMilhas * valorMilheiro + valorTaxa) * qtdCpfs;

    props.setValorTotal(total);
  }, [valorMilheiro, valorTaxa, qtdMilhas, qtdCpfs]);

  const limparCampos = () => {
    setQtdMilhas(0);
    setValorMilheiro(0);
    setValorTaxa(0);
    setQtdCpfs(1);
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
            setValue={setQtdMilhas}
            value={qtdMilhas}
          ></FormNumberInputWithRange>
        </Box>
        <Box>
          <FormCurrencyInput
            label="Valor Milheiro"
            setValue={setValorMilheiro}
            value={valorMilheiro}
          ></FormCurrencyInput>
        </Box>
        <Box>
          <FormCurrencyInput
            label="Valor Taxa"
            setValue={setValorTaxa}
            value={valorTaxa}
          ></FormCurrencyInput>
        </Box>
        <Box>
          <FormNumberInput
            label="Quantidade CPF"
            setValue={setQtdCpfs}
            value={qtdCpfs}
          ></FormNumberInput>
        </Box>
      </Stack>
    </>
  );
};

export default Calculator;
