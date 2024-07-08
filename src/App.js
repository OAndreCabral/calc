import { useState } from "react";
import ButtonComponent from "./components/Button";
import InputField from "./components/Input";
import { Container, Content, Row } from "./styles";


function App() {

  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')

  }

  const handleSumNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const minus = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(minus))
      setOperation('')
    }
  }

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(multiply))
      setOperation('')
    }
  }

  const handleDividedNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const divided = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(divided))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (!firstNumber === '0' && operation !== '' && currentNumber !== 0){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        default: 
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <InputField value={currentNumber}/>
        <Row>
          <ButtonComponent label="x" onClick={handleMultiplyNumbers} />
          <ButtonComponent label="/" onClick={handleDividedNumbers} />
          <ButtonComponent label="C" onClick={() => handleOnClear()} />
          <ButtonComponent label="." />
        </Row>
        <Row>
          <ButtonComponent label="7" onClick={() => handleAddNumber('7')} />
          <ButtonComponent label="8" onClick={() => handleAddNumber('8')} />
          <ButtonComponent label="9" onClick={() => handleAddNumber('9')} />
          <ButtonComponent label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <ButtonComponent label="4" onClick={() => handleAddNumber('4')} />
          <ButtonComponent label="5" onClick={() => handleAddNumber('5')} />
          <ButtonComponent label="6" onClick={() => handleAddNumber('6')} />
          <ButtonComponent label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <ButtonComponent label="1" onClick={() => handleAddNumber('1')} />
          <ButtonComponent label="2" onClick={() => handleAddNumber('2')} />
          <ButtonComponent label="3" onClick={() => handleAddNumber('3')} />
          <ButtonComponent label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
