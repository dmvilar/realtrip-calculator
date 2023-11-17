import {
  AbsoluteCenter,
  Box,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Switch,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import "./App.css";
import Calculator from "./components/Calculator";
import { useEffect, useState } from "react";

function App() {
  const [mostrarVolta, setMostrarVolta] = useState(false);

  const [listaValoresDeVenda, setListaValoresDeVenda] = useState([]);

  const [valorTotalIda, setValorTotalIda] = useState(0);
  const [valorTotalVolta, setValorTotalVolta] = useState(0);
  const [valorTotalTaxa, setValorTotalTaxa] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  const [qtdTotalMilhas, setQtdTotalMilhas] = useState(0);

  const [valorMilheiroIda, setValorMilheiroIda] = useState(0);
  const [valorTaxaIda, setValorTaxaIda] = useState(0);
  const [qtdCpfIda, setQtdCpfIda] = useState(1);
  const [qtdMilhasIda, setQtdMilhasIda] = useState();

  const [valorMilheiroVolta, setValorMilheiroVolta] = useState(0);
  const [valorTaxaVolta, setValorTaxaVolta] = useState(0);
  const [qtdCpfVolta, setQtdCpfVolta] = useState(1);
  const [qtdMilhasVolta, setQtdMilhasVolta] = useState();

  useEffect(() => {
    if (mostrarVolta) {
      setQtdCpfVolta(Number(qtdCpfIda));

      setQtdTotalMilhas(
        (Number(qtdMilhasIda) + Number(qtdMilhasVolta)) * qtdCpfIda
      );
      setValorTotalTaxa(
        (Number(valorTaxaIda) + Number(valorTaxaVolta)) * qtdCpfIda
      );

      setValorTotal(Number(valorTotalIda) + Number(valorTotalVolta));
    } else {
      setQtdTotalMilhas(Number(qtdMilhasIda));
      setValorTotalTaxa(Number(valorTaxaIda));

      setValorTotal(Number(valorTotalIda));
    }
  }, [mostrarVolta, valorTotalIda, valorTotalVolta]);

  useEffect(() => {
    const qtdMilhas = qtdMilhasIda === undefined ? 0 : qtdMilhasIda;

    const valorTotal =
      (qtdMilhas * valorMilheiroIda + valorTaxaIda) * qtdCpfIda;
    setValorTotalIda(valorTotal);
  }, [qtdCpfIda, qtdMilhasIda, valorMilheiroIda, valorTaxaIda]);

  useEffect(() => {
    const qtdMilhas = qtdMilhasVolta === undefined ? 0 : qtdMilhasVolta;
    
    const valorTotal =
      (qtdMilhas * valorMilheiroVolta + valorTaxaVolta) * qtdCpfVolta;
    setValorTotalVolta(valorTotal);
  }, [qtdCpfVolta, qtdMilhasVolta, valorMilheiroVolta, valorTaxaVolta]);

  useEffect(() => {
    gerarTabelaValoresVenda();
  }, [valorTotal]);

  const handleSwitchChange = () => {
    setMostrarVolta(!mostrarVolta);
  };

  type ListaValores = {ValorVenda: number, Lucro: number, Porcentagem: number}

  const gerarTabelaValoresVenda = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lista: any = [];
    const porcentagemLucros = [0.08, 0.10, 0.15, 0.20, 0.25, 0.30];

    porcentagemLucros.forEach((porcentagem) => {
      const valorVenda = valorTotal * (1+porcentagem);
      const lucro = valorVenda - valorTotal;

      lista.push({ ValorVenda: valorVenda, Lucro: lucro, Porcentagem: porcentagem});

      setListaValoresDeVenda(lista);
    });
  };
  return (
    <>
      <Heading marginBottom={"1rem"}>{"Calculadora RealTrip"}</Heading>
      <Heading marginBottom={"1rem"} fontSize={"2xl"}>{"v1.2.1"}</Heading>
      <Calculator
        titulo="Voo Ida"
        qtdMilhas={qtdMilhasIda}
        setQtdMilhas={setQtdMilhasIda}
        valorMilheiro={valorMilheiroIda}
        setValorMilheiro={setValorMilheiroIda}
        valorTaxa={valorTaxaIda}
        setValorTaxa={setValorTaxaIda}
        qtdCpf={qtdCpfIda}
        setQtdCpf={setQtdCpfIda}
      ></Calculator>

      <FormControl display="flex" alignItems="center" marginTop={"1rem"}>
        <FormLabel htmlFor="possuiVolta" mb="0">
          Possui voo de volta?
        </FormLabel>
        <Switch id="possuiVolta" onChange={handleSwitchChange} />
      </FormControl>

      {mostrarVolta && (
        <Box id="boxVolta">
          <Calculator
            titulo="Voo Volta"
            qtdMilhas={qtdMilhasVolta}
            setQtdMilhas={setQtdMilhasVolta}
            valorMilheiro={valorMilheiroVolta}
            setValorMilheiro={setValorMilheiroVolta}
            valorTaxa={valorTaxaVolta}
            setValorTaxa={setValorTaxaVolta}
            qtdCpf={qtdCpfVolta}
            setQtdCpf={setQtdCpfVolta}
          ></Calculator>
        </Box>
      )}

      <Box
        display={'block'}
        position="relative"
        marginTop={mostrarVolta ? "6rem" : "3rem"}
        marginBottom={"8rem"}
      >
        <Divider borderColor="green" width={"100%"} />
        <AbsoluteCenter bg="white" border={"solid 1px green"} px="4">
          <Text>{"Custo total:"}</Text>
          <Text fontSize="xl" as={"b"}>
            {"R$" + valorTotal.toFixed(2)}
          </Text>
          {mostrarVolta && (
            <>
              <Text>
                {"Quantidade de milhas: " + qtdTotalMilhas.toFixed(2) + "K"}
              </Text>
              <Text>{"Valor taxa:"}</Text>
              <Text>{"R$" + valorTotalTaxa.toFixed(2)}</Text>
            </>
          )}
        </AbsoluteCenter>
      </Box>
      <Box position="relative" marginTop={"16rem"}>
        <AbsoluteCenter bg="white" px="4">
          <TableContainer display={"block"}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th textAlign={'center'}>Valor Venda</Th>
                  <Th textAlign={'center'}>Lucro</Th>
                  <Th textAlign={'center'}>Porcentagem</Th>
                </Tr>
              </Thead>
              <Tbody>
                {listaValoresDeVenda.map((item: ListaValores, index) => (
                  <Tr key={index}>
                    <Td textAlign={'center'}>R${item.ValorVenda.toFixed(2)}</Td>
                    <Td textAlign={'center'}>R${(item.Lucro).toFixed(2)}</Td>
                    <Td textAlign={'center'}>{item.Porcentagem * 100}%</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </AbsoluteCenter>
      </Box>
    </>
  );
}

export default App;
