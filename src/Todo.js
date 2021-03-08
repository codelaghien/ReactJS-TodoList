import './Todo.css';
import React from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		console.log('props', props);
	}

	changeState = () => {
		console.log('changeState', this.props);
	};

	render() {
		return (
			<div className='Todo aligned'>
				<img
					src='./assets/iconfinder_Symbol_-_Check_58687.png'
					alt='Hoàn thành'
					width='25'
					style={{ cursor: 'pointer' }}
					title='Bấm để hoàn thành task'
					onClick={() => this.props.completeTask(this.props.id)}
				/>
				<img
					src='./assets/iconfinder_f-cross_256_282471.png'
					alt='Hoàn thành'
					width='15'
					style={{ cursor: 'pointer' }}
					title='Bấm để xóa task'
					onClick={() => this.props.deleteTask(this.props.id)}
				/>
				&nbsp;&nbsp;
				<span>{this.props.value}</span>
			</div>
		);
	}
}

export default Todo;
