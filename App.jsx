import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import './App.css'

function App() {
  const [workouts, setWorkouts] = useState([])
  const [workoutName, setWorkoutName] = useState('')

  useEffect(() => {
    fetchWorkouts()
  }, [])

  async function fetchWorkouts() {
    const { data, error } = await supabase
      .from('workouts')
      .select('*')

    if (error) {
      console.log(error)
    } else {
      setWorkouts(data)
    }
  }

  async function addWorkout() {
    if (workoutName.trim() === '') {
      return
    }

    const { error } = await supabase
      .from('workouts')
      .insert([
        {
          user_id: 1,
          workout_name: workoutName
        }
      ])

    if (error) {
      console.log(error)
    } else {
      setWorkoutName('')
      fetchWorkouts()
    }
  }

  return (
    <div>
      <h1>Workout Tracker</h1>

      <div className="form-box">
        <input
          type="text"
          placeholder="Enter workout name"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />

        <button onClick={addWorkout}>
          Add Workout
        </button>
      </div>

      {workouts.map((workout) => (
        <div className="workout-card" key={workout.id}>
          <h2>{workout.workout_name}</h2>
          <p>Date: {workout.workout_date}</p>
        </div>
      ))}
    </div>
  )
}

export default App
