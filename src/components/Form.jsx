import React, { useState } from 'react'
import Button from './Button'

const Form = props => {
	const [weightInput, setWeightInput] = useState('')
	const [heightInput, setHeightInput] = useState('')
	const [ageInput, setAgeInput] = useState('')
	const [alertVisible, setAlertVisible] = useState(false)

	const submitHandler = e => {
		e.preventDefault()
		if (weightInput === '' || heightInput === '' || ageInput === '') {
			setAlertVisible(true)
            return
		} else {
            setAlertVisible(false)
        }

		props.receiveInput(weightInput, heightInput, ageInput)

		setWeightInput('')
		setHeightInput('')
		setAgeInput('')
	}

	return (
		<form className="input-form" type="submit" onSubmit={submitHandler}>
			<label htmlFor="weight">Weight (lbs)</label>
			<input
				type="text"
				id="weight"
				onChange={e => {
					setWeightInput(e.target.value)
				}}
				value={weightInput}
			/>
			<label htmlFor="height">Height (inches)</label>
			<input
				type="text"
				id="height"
				onChange={e => {
					setHeightInput(e.target.value)
				}}
				value={heightInput}
			/>
			<label htmlFor="age">Age</label>
			<input
				type="text"
				id="age"
				onChange={e => {
					setAgeInput(e.target.value)
				}}
				value={ageInput}
			/>
			<div className="alert-container">
				{!alertVisible ? (
					''
				) : (
					<p className="alert">Please fill out the entire form!</p>
				)}
			</div>
			<Button>Calculate</Button>
		</form>
	)
}

export default Form
