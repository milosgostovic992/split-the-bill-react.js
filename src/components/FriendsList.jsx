import React from 'react'
import Friend from './Friend';

const FriendsList = ({friends, onSelectedFriend, selectedFriend}) => {

  return (
	<ul>
		{friends.map(friend => 
		<Friend friend={friend}selectedFriend={selectedFriend} onSelectedFriend={onSelectedFriend} key={friend.id}/>)}
	</ul>
  )
}

export default FriendsList