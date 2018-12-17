import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Box from './Box';
import { connect } from 'react-redux';

import { getBoard, setBoard } from '../../store/actions';

const styles = {
	width: '100%',
	height: '100%',
	position: 'relative',
	boxSizing: 'border-box',
	background: 'lightgreen'
};

const boxTarget = {
	drop(props, monitor, component) {
		if (!component) {
			return;
		}
		const item = monitor.getItem();
		const delta = monitor.getDifferenceFromInitialOffset();
		const left =
			item.left !== null
				? Math.round(item.left + delta.x)
				: Math.round(item.left + delta.x);
		const top =
			item.top !== null
				? Math.round(item.top + delta.y)
				: Math.round(item.top + delta.y);
		component.moveBox(item.id, left, top, item);
	}
};

class Container extends Component {
	state = {
		items: {}
	};

	componentDidMount() {
		this.props.dispatch(getBoard(this.props.boardName));
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.boardName !== prevProps.boardName) {
			this.props.dispatch(getBoard(this.props.boardName));
		}
		if (
			JSON.stringify(this.props.board) !==
			JSON.stringify(this.state.items)
		) {
			const { board: items } = this.props;
			this.setState({ items: items });
		}
	}

	moveBox = (id, left, top, element) => {
		let { board: items } = this.props;
		const item = element;
		if (!items) {
			items = { [id]: { ...item, title: item.children } };
		} else {
			items[id] = { ...item, top, left, title: element.children };
		}
		this.setState({ items });
		this.props.dispatch(setBoard(this.props.boardName, this.state.items));
	};

	render() {
		const { hideSourceOnDrag, connectDropTarget } = this.props;
		const { items } = this.state;
		return connectDropTarget(
			<div style={styles}>
				{items
					? Object.keys(items).map(key => {
							const { left, top, title } = items[key];
							return (
								<Box
									children={this.props.children}
									key={key}
									id={key}
									left={left}
									top={top}
									hideSourceOnDrag={hideSourceOnDrag}
								>
									{title}
								</Box>
							);
					  })
					: ''}
			</div>
		);
	}
}

export default connect(state => ({
	board: state.board,
	currentItem: state.currentItem
}))(
	DropTarget('ItemTypes', boxTarget, connect => ({
		connectDropTarget: connect.dropTarget()
	}))(Container)
);
