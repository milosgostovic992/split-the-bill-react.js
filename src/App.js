import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FriendsList from "./components/FriendsList";
import FormSplittBill from "./components/FormSplitBill";
import { useState } from "react";

function App() {

	const initialFriends = [
		{
			id: 118836,
			name: "Clark",
			image: "https://i.pravatar.cc/48?u=118836",
			balance: -7,
		},
		{
			id: 933372,
			name: "Sarah",
			image: "https://i.pravatar.cc/48?u=933372",
			balance: 20,
		},
		{
			id: 499476,
			name: "Anthony",
			image: "https://i.pravatar.cc/48?u=499476",
			balance: 0,
		},
	];

	const [showAddFriends, setShowAddFriend] = useState(false);
	const [friends, setFriends] = useState(initialFriends);
	const [selectedFriend, setSelectedFriend] = useState(null);

	const handleShowAddFriend = () => {
		setShowAddFriend(show => !show);
	}

	const handleAddFriend = (friend) => {
		setFriends(friends => [...friends, friend]);
		setShowAddFriend(false);
	};

	const handleSelection = (friend) => {
		setSelectedFriend(selected => selected?.id === friend.id ? null : friend);
		setShowAddFriend(false);
	};

	const handleSplitBill = (value) => {
		setFriends(friends => 
			friends.map(friend => friend.id === selectedFriend.id ? 
				{...friend, 
					balance: friend.balance + value} 
				: friend));

		setSelectedFriend(null);
	};

	return (
		<div className="app">
			<div className="sidebar">
				<FriendsList friends={friends} selectedFriend={selectedFriend} onSelectedFriend={handleSelection}/>
				{showAddFriends && <FormAddFriend onAddFriend={handleAddFriend}/>}
				<Button onClick={handleShowAddFriend}>{showAddFriends ? 'Close' : 'Add Friend'}</Button>
			</div>
			{selectedFriend && <FormSplittBill key={selectedFriend.id} selectedFriend={selectedFriend} onSplittFill={handleSplitBill}/>}
		</div>
	);
}

export default App;
