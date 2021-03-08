import './Todo.css';
import React from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		// console.log('props', props);
		this.state = { id: props.id, value: props.value, done: props.done };
	}

	completeTask = () => {
		// console.log('Todo completeTask', this.props.id);
		this.setState({ done: true });
		this.props.completeTask(this.props.id);
	};

	render() {
		let checkDone = '';
		if (!this.state.done) {
			checkDone = (
				<img
					src='./assets/iconfinder_Symbol_-_Check_58687.png'
					alt='Hoàn thành'
					width='25'
					style={{ cursor: 'pointer' }}
					title='Bấm để hoàn thành task'
					onClick={() => this.completeTask(this.props.id)}
				/>
			);
		}
		return (
			<div className='todo aligned'>
				{checkDone}
				<img
					className={this.state.done ? 'noCheckDone' : ''}
					src='./assets/iconfinder_f-cross_256_282471.png'
					alt='Hoàn thành'
					width='15'
					style={{ cursor: 'pointer' }}
					title='Bấm để xóa task'
					onClick={() => this.props.deleteTask(this.props.id)}
				/>
				&nbsp;&nbsp;
				<span className={this.state.done ? 'done' : ''}>
					{this.state.value}
				</span>
			</div>
		);
	}
}

export default Todo;
