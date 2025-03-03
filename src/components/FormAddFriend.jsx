import React, { useState } from 'react'
import Button from './Button'

const FormAddFriend = ({onAddFriend}) => {
	const [name, setName] = useState("");
	const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

	const onChangeNameHandler = (e) => {
		setName(e.target.value);
	}

	const onChangeImageHandler = (e) => {
		setImage(e.target.value);
	}

	const onSubmitHandler = (e) => {
		e.preventDefault();

		if(!name || !image) return;

		const id =  crypto.randomUUID;
		const newFriend = {
			id,
			name,
			image: `${image}=${id}`,
			balance: 0,
		};

		setName('');
		setImage('');

		onAddFriend(newFriend);
	}

  return (
	<form className="form-add-friend" onSubmit={onSubmitHandler}>
		<label>Friend name</label>
		<input value={name} onChange={onChangeNameHandler} type="text" />

		<label>Image URL</label>
		<input type="text" value={image} onChange={onChangeImageHandler} />

		<Button type="submit">Add</Button>
	</form>
  )
}

export default FormAddFriend