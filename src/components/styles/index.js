import styled from 'styled-components';

const ArtBoard = styled.div`
	display: grid;
	grid-template-columns: 100px 1fr;
	grid-template-rows: 1fr;
	height: 75vh;
	border-bottom: 1px solid;
	border-top: 1px solid;
	margin: 5px 0;
`;

const LeftSide = styled.div`
	padding: 5px;
	border-right: 1px solid #000;
	display: flex;
	flex-flow: column;
	align-items: center;
	position: relative;
	div {
		position: relative !important;
		color: blue;
		margin: 5px 0;
	}
`;

const Board = styled.div`
	width: 100%;
	min-height: 100%;
	position: relative;
	box-sizing: border-box;
`;

const Figure = styled.div`
	width: 75px;
	height: 75px;
	margin: 5px;
`;

const Circle = styled(Figure)`
	border-radius: 50%;
	background: red;
`;

const Square = styled(Figure)`
	background: blue;
`;

export { ArtBoard, LeftSide, Board, Figure, Circle, Square };
