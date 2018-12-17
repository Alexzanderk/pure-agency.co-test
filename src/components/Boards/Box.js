import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const style = {
	position: 'absolute',
	border: '1px dashed gray',
	backgroundColor: 'tomato',
	padding: '0.5rem 1rem',
	cursor: 'move'
};

const boxSource = {
	beginDrag(props, monitor, component) {
		const { left, top, children } = component.state;
		const { id, left: leftProps, top: topProps } = props;

		if (!leftProps && !topProps) return { id, left, top, children };

		return { id, left: leftProps, top: topProps, children };
	}
};

class Box extends Component {
	state = { ...this.props, title: this.props.children };

	handleDragStart = e => {
		const {
			offsetHeight: boxHeight,
			offsetWidth: boxWidth,
			offsetLeft: boxLeft,
			offsetTop: boxTop
		} = e.target;
		let newState = { ...this.state };
		if (!newState.left && !newState.top) {
			newState.left = -boxWidth - boxLeft;
			newState.top = boxHeight - boxHeight + boxTop;
			this.setState({ ...newState });
		}
	};

	render() {
		const {
			hideSourceOnDrag,
			left,
			top,
			connectDragSource,
			isDragging,
			children
		} = this.props;
		if (isDragging && hideSourceOnDrag) {
			return null;
		}

		return connectDragSource(
			<div
				id={this.props.id}
				style={{ ...style, left, top }}
				onDragStart={this.handleDragStart}
			>
				{children}
			</div>
		);
	}
}

export default DragSource('ItemTypes', boxSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
}))(Box);
