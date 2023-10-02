"use client"

import Image from 'next/image'
import styles from './page.module.css'
import button from './/components/button'
import { useState, useEffect } from "react"

const todos = [
    { id: 1, task: 'Einkaufen gehen', completed: false },
    { id: 2, task: 'React-App erstellen', completed: true },
    { id: 3, task: 'Übungen für JavaScript machen', completed: false },
  ];

export default function Homepage() {
  const [myTodos, setMyTodos] = useState(todos)

  const handleAddTodo = () => {
    setMyTodos(
      [...myTodos, { id: myTodos.length + 1, task: "Fahrrad reparieren", completed: false }]
    )
  }

  useEffect(() => {
    console.log("my new todos", myTodos)
  }, [myTodos])

  return (
    <div>
      <main>
        <h1>Welcome to my ToDo Website</h1>
        <br />
        <p>Here are my ToDos</p>
        <br />
        <ul>
        { myTodos.map(todo => {
          return (
            <li key={todo.id}>{todo.description}{todo.completed}</li>
          )
        }) }
        </ul>
        <br />
        <button onClick={handleAddTodo}>Add todo</button>
      </main>
    </div>
    
  )
}