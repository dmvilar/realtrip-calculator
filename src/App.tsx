import {
  AbsoluteCenter,
  Box,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Switch,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import Calculator from "./components/Calculator";
import { useEffect, useState } from "react";

function App() {
  const [mostrarVolta, setMostrarVolta] = useState(false);
  const [valorTotalIda, setValorTotalIda] = useState(0);
  const [valorTotalVolta, setValorTotalVolta] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);
  const [qtdTotalMilhas, setQtdTotalMilhas] = useState(0);
  const [valorTotalTaxa, setValorTotalTaxa] = useState(0);

  const [vooIdaProps, setVooIdaProps] = useState({
    qtdMilhas: 0,
    valorMilheiro: 0,
    valorTaxa: 0,
    qtdCpf: 1,
    setValorTotal: setValorTotalIda,
  });
  const [vooVoltaProps, setVooVoltaProps] = useState({
    qtdMilhas: 0,
    valorMilheiro: 0,
    valorTaxa: 0,
    qtdCpf: 1,
    setValorTotal: setValorTotalVolta,
  });

  useEffect(() => {
    if (mostrarVolta) {
      setValorTotal(valorTotalIda + valorTotalVolta);

      const totalMilhas =
        Number.parseFloat(vooIdaProps.qtdMilhas.toString()) +
        Number.parseFloat(vooVoltaProps.qtdMilhas.toString());
      const totalTaxa =
        Number.parseFloat(vooIdaProps.valorTaxa.toString()) +
        Number.parseFloat(vooVoltaProps.valorTaxa.toString());
      setQtdTotalMilhas(totalMilhas);
      setValorTotalTaxa(totalTaxa);
    } else {
      setValorTotal(valorTotalIda);
    }
  }, [
    valorTotalIda,
    valorTotalVolta,
    mostrarVolta,
    vooIdaProps.qtdMilhas,
    vooVoltaProps.qtdMilhas,
  ]);

  const handleSwitchChange = () => {
    setMostrarVolta(!mostrarVolta);
  };

  return (
    <>
      <Heading marginBottom={"1rem"}>{"Calculadora RealTrip"}</Heading>
      <Calculator
        titulo="Voo Ida"
        qtdMilhas={vooIdaProps.qtdMilhas}
        valorMilheiro={vooIdaProps.valorMilheiro}
        valorTaxa={vooIdaProps.valorTaxa}
        qtdCpf={vooIdaProps.qtdCpf}
        setValorTotal={vooIdaProps.setValorTotal}
        setVooProps={setVooIdaProps}
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
            qtdMilhas={vooVoltaProps.qtdMilhas}
            valorMilheiro={vooVoltaProps.valorMilheiro}
            valorTaxa={vooVoltaProps.valorTaxa}
            qtdCpf={vooVoltaProps.qtdCpf}
            setValorTotal={vooVoltaProps.setValorTotal}
            setVooProps={setVooVoltaProps}
          ></Calculator>
        </Box>
      )}

      <Box position="relative" marginTop={mostrarVolta ? "6rem" : "3rem"} marginBottom={"8rem"}>
        <Divider borderColor="green" width={"100%"} />
        <AbsoluteCenter bg="white" border={"solid 1px green"} px="4">
          <Text>{"Custo total:"}</Text>
          <Text fontSize="xl" as={"b"}>{"R$" + valorTotal.toFixed(2)}</Text>
          {mostrarVolta && (
            <>
              <Text>
                {"Quantidade de milhas: " + qtdTotalMilhas.toFixed(2) + "K"}
              </Text>
              <Text>{"Valor taxa: R$" + valorTotalTaxa.toFixed(2)}</Text>
            </>
          )}
        </AbsoluteCenter>
      </Box>
    </>
  );
}

export default App;
