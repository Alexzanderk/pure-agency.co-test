import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBoardItems, getBoardItems } from '../../store/actions';
import { withRouter } from 'react-router-dom';

import { LeftSide, ArtBoard } from '../styles';
import Container from './Container';
import Box from './Box';

import data from '../../data/items.json';

class Board extends Component {
	state = {
		hideSourceOnDrag: true,
		boardItems: data
	};

	componentDidMount() {
		this.props.dispatch(setBoardItems(this.state.boardItems));
		this.props.dispatch(getBoardItems());
	}

	componentWillReceiveProps(nextProps) {
		const { boardItems } = nextProps;
		if (boardItems) {
			this.setState({ boardItems });
		}
	}

	render() {
		const { board } = this.props.match.params;

		return (
			<ArtBoard>
				<LeftSide>
					<h3>Elements</h3>
					{this.state.boardItems
						? this.state.boardItems.map(
								({ id, top, left, title }) => (
									<Box key={id} id={id} top={top} left={left}>
										{title}
									</Box>
								)
						  )
						: null}
				</LeftSide>

				<Container
					boardName={board}
					hideSourceOnDrag={this.state.hideSourceOnDrag}
				/>
			</ArtBoard>
		);
	}
}

export default withRouter(
	connect(state => ({
		items: state.items,
		boardItems: state.boardItems
	}))(Board)
);
