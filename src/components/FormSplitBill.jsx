import React, { useState } from 'react'
import Button from './Button'

const FormSplitBill = ({selectedFriend, onSplittFill}) => {

const [bill, setBill] = useState('');
const [paidByUser, setPaidByUser] = useState('');
const paidByFriend = bill ? bill - paidByUser : '';
const [whoIsPaying, setWhoIsPayingl] = useState('user');

const onChangeBillHandler = (e) => {
	setBill(Number(e.target.value));
};
const paidByUserHandler = (e) => {
	setPaidByUser(Number(e.target.value) > bill ?paidByUser : Number(e.target.value));
};
const whoisPayingHandler = (e) => {
	setWhoIsPayingl(e.target.value);
};

const handleSubmit = (e) => {
	e.preventDefault();

	if( !bill || !paidByUser) return;
	onSplittFill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);

};

  return (
	<form action="" className="form-split-bill" onSubmit={handleSubmit}>
		<h2>Split a bill with {selectedFriend.name}</h2>
		<label >Bill value</label>
		<input type="text" value={bill} onChange={onChangeBillHandler}/>
		
		<label>Your expense?</label>
		<input type="text" value={paidByUser} onChange={paidByUserHandler}/>

		<label >{selectedFriend.name} expense</label>
		<input type="text" value={paidByFriend} disabled/>

		<label>Who is paying the bill</label>
		<select value={whoIsPaying} onChange={whoisPayingHandler}>
			<option value="user">You</option>
			<option value="friend">{selectedFriend.name}</option>
		</select>

		<Button type="submit">Split bill</Button>
	</form>
  )
}

export default FormSplitBill