import { useEffect, useState } from "react"
import { Todo } from "./types/todo"

function App() {
	const [todos, setTodos] = useState<Todo[]>([])

	function createTodo() {
		const title = window.prompt("Todo title")
		if (!title) return

		const now = new Date().toISOString()
		const todo: Todo = {
			id: crypto.randomUUID(),
			title: title,
			completed: false,
			createdAt: now,
			updatedAt: now,
		}

		setTodos([...todos, todo])
	}

	function deleteTodo(id: string) {
		console.log("deleteTodo", id)
	}

	return (
		<main>
			<h1>My todos</h1>
			<button onClick={createTodo}>+ new</button>
			<ul>
				{todos.map((todo) => (
					<li onClick={() => deleteTodo(todo.id)} key={todo.id}>
						{todo.title}
					</li>
				))}
			</ul>
			<div>
				🥳 App successfully hosted. Try creating a new todo.
				<br />
				<a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
					Review next step of this tutorial.
				</a>
			</div>
		</main>
	)
}

export default App
