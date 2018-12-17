import {
	SET_ITEMS,
	GET_ITEMS,
	GET_BOARD_ITEMS,
	SET_BOARD_ITEMS,
	GET_BOARD,
	SET_BOARD
} from './actions';

export default function reducer(state, action) {
	switch (action.type) {
		case GET_BOARD:
			return {
				...state,
				board: action.payload
			};

		case SET_BOARD:
			return {
				...state,
				board: action.payload
			};

		case SET_BOARD_ITEMS:
			return {
				...state,
				boardItems: action.payload
			};

		case GET_BOARD_ITEMS:
			return {
				...state,
				boardItems: action.payload
			};

		case SET_ITEMS:
			return {
				...state,
				items: action.payload
			};

		case GET_ITEMS:
			return {
				...state,
				items: action.payload
			};

		default:
			return state;
	}
}
