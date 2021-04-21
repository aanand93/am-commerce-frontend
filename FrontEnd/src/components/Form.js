import React, { useState } from 'react';

import APIurl from '../config';
// import axios from 'axios';

function Form({ token }) {
	//  const [token, setToken] = useState(null);
	const [apparel, setApparel] = useState({ apparel: '', quantity: 0 });

	const handleChange = (event) => {
		setApparel({ ...apparel, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch(`${APIurl}/clients`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(apparel),
		})
			.then((res) => {
				setApparel({ apparel: '', quantity: 0 });
			})
			.catch(console.error);
	};

	return (
		<div>
			<div>
				<form onSubmit={handleSubmit} className='create-form'>
					<label for='apparel'>apparel</label>
					<input
						onChange={handleChange}
						name='apparel'
						value={apparel.apparel}
						placeholder='apparel_type'
					/>
					<label for='quantity'>quantity </label>
					<input
						onChange={handleChange}
						name='quantity'
						value={apparel.quantity}
						placeholder='quantity'
					/>
					<button id='button' type='submit'>
						{' '}
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Form;
