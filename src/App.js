import './App.css';
import React from 'react';
import Todo from './Todo';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { taskName: '', tasks: [] };
	}

	myTaskChangeHandler = (event) => {
		this.setState({ taskName: event.target.value });
		// console.log('myTaskChangeHandler', event.target.value);
	};

	addTask = () => {
		// console.log('addTask', this.state.taskName);
		if (this.state.taskName === '') {
			return;
		}
		const id = this.state.tasks.length;
		const name = this.state.taskName;
		this.state.tasks.push({ id, name, done: false });
		this.setState({ taskName: '' });
	};

	deleteTask = (id) => {
		// console.log('list', this.state.tasks);
		console.log('deleteTask', id);
		const tasks = this.state.tasks.filter((task) => task.id !== id);
		console.log('sau khi xóa', tasks);
		this.setState({ tasks });
	};

	completeTask = (id) => {
		// console.log('list', this.state.tasks);
		console.log('completeTask', id);
		const tasks = this.state.tasks;
		tasks.forEach((task) => {
			if (task.id === id) {
				task.done = true;
			}
		});
		console.log('tasks muốn complete', tasks);
		this.setState({ tasks });
	};

	render() {
		return (
			<div className='App'>
				<br />
				Todo List
				<br />
				<div className='aligned'>
					<img
						src='./assets/iconfinder_gnome-app-install_29240 (1).png'
						alt='Add Task'
						width='25'
						style={{ cursor: 'pointer' }}
						title='Bấm để thêm task'
						onClick={() => this.addTask()}
					/>
					<input
						type='text'
						value={this.state.taskName}
						onChange={this.myTaskChangeHandler}
					/>
				</div>
				<ul style={{ paddingLeft: '10px' }}>
					{this.state.tasks.map((value, index) => {
						return (
							<Todo
								key={index}
								id={value.id}
								value={value.name}
								deleteTask={this.deleteTask}
								completeTask={this.completeTask}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default App;
