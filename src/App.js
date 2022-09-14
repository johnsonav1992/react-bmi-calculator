import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
	const [bmi, setBMI] = useState(0)

	function receiveInput(weight, height, age) {
		calculate(weight, height, age)
	}

	function calculate(weight, height, age) {
		const result = 703 * weight / (height*height)
		setBMI(result.toFixed(2))
	}

  let bmiCategory = null

  if (bmi > 30) {
    bmiCategory = 'obese'
  } else if (bmi >= 25) {
    bmiCategory = 'overweight'
  } else if (bmi >= 18.5) {
    bmiCategory = 'normal'
  } else if (bmi < 18.5 && bmi > 0) {
    bmiCategory = 'underweight'
  }

	return (
		<main className="container">
			<h1>BMI Calculator</h1>
			<Form receiveInput={receiveInput} />
			{bmi > 0 ? <h1 className={`output ${bmiCategory}`}>{bmi} %</h1> : ''}
      {bmiCategory ? <p>Your BMI is considered to be {bmiCategory}</p> : ''}
		</main>
	)
}

export default App
