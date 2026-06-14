import { useState } from 'react'
import './App.css'

function App() {
  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      name: 'Chest Day',
      exercises: ['Bench Press - 3x10 @ 135 lbs', 'Incline Dumbbell Press - 3x8 @ 75 lbs']
    },
    {
      id: 2,
      name: 'Leg Day',
      exercises: ['Squat - 4x8 @ 225 lbs', 'Leg Press - 3x12 @ 300 lbs']
    }
  ])

  const [newWorkout, setNewWorkout] = useState('')

  function addWorkout() {
    if (newWorkout.trim() === '') return

    setWorkouts([
      ...workouts,
      {
        id: Date.now(),
        name: newWorkout,
        exercises: ['New Exercise - 3x10']
      }
    ])

    setNewWorkout('')
  }

  function deleteWorkout(id) {
    setWorkouts(workouts.filter(workout => workout.id !== id))
  }

  return (
    <div className="app">
      <h1>🏋️ Workout Tracker</h1>

      <input
        type="text"
        placeholder="Workout Name"
        value={newWorkout}
        onChange={(e) => setNewWorkout(e.target.value)}
      />

      <button onClick={addWorkout}>Add Workout</button>

      {workouts.map(workout => (
        <div key={workout.id} className="workout-card">
          <h2>{workout.name}</h2>

          <ul>
            {workout.exercises.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>

          <button onClick={() => deleteWorkout(workout.id)}>
            Delete Workout
          </button>
        </div>
      ))}
    </div>
  )
}

export default App
