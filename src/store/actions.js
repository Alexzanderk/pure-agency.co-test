export const GET_BOARD_ITEMS = 'GET_BOARD_ITEMS';
export const SET_BOARD_ITEMS = 'SET_BOARD_ITEMS';
export const GET_BOARD = 'GET_BOARD';
export const SET_BOARD = 'SET_BOARD';

export function getBoard(boardName) {
	const string = localStorage.getItem(boardName);
	const data = JSON.parse(string);
	return {
		type: GET_BOARD,
		payload: data || {}
	};
}

export function setBoard(boardName, items) {
	const string = JSON.stringify(items);
	localStorage.setItem(boardName, string);
	return {
		type: SET_BOARD,
		payload: items
	};
}

export function getBoardItems() {
	const string = localStorage.getItem('boardItems');
	const data = JSON.parse(string);
	return {
		type: GET_BOARD_ITEMS,
		payload: data
	};
}

export function setBoardItems(items) {
	const string = JSON.stringify(items);
	localStorage.setItem('boardItems', string);
	return {
		type: SET_BOARD_ITEMS,
		payload: items
	};
}
