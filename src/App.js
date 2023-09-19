import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import ResultTable from './components/ResultTable/ResultTable';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState(null);
  // userInput을 객체로 받음
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // 연간 결과

  // userInput이 true일 때 실행
  if(userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // 연간 결과(총 저축액, 이자 등) 계산
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }



  return (
    <div className="App">
      <Header />
      <UserInput onCalculate={calculateHandler} />
      <ResultTable />
    </div>
  );
}

export default App;
