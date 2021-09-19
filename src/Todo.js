import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({ todo, onRemove }) => {
	const [done, setDone] = useState(false);

	return (
		<TouchableOpacity
			onLongPress={() => onRemove(todo.id)}
			// onLongPress={onRemove.bind(null, todo.id)}
			onPress={() => setDone(!done)}
		>
			<View style={styles.todo}>
				<Text style={done == true ? styles.done : ''}>{todo.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	todo: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 5,
	},
	done: {
		textDecorationLine: 'line-through',
	},
	notDone: {
		color: 'green',
	},
});
