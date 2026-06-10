import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [workouts, setWorkouts] = useState([])
  const [editWorkout, setEditWorkout] = useState('')
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    fetchWorkouts()
  }, [])

  async function fetchWorkouts() {
    const { data } = await supabase
      .from('workouts')
      .select('*')

    setWorkouts(data)
  }

  async function updateWorkout() {
    await supabase
      .from('workouts')
      .update({ workout_name: editWorkout })
      .eq('id', editId)

    setEditWorkout('')
    setEditId(null)

    fetchWorkouts()
  }

  return (
    <div>
      <h1>Workout Tracker</h1>

      {workouts.map((workout) => (
        <div key={workout.id}>
          <h2>{workout.workout_name}</h2>
          <p>{workout.workout_date}</p>

          <button
            onClick={() => {
              setEditId(workout.id)
              setEditWorkout(workout.workout_name)
            }}
          >
            Edit
          </button>
        </div>
      ))}

      {editId && (
        <div>
          <input
            value={editWorkout}
            onChange={(e) => setEditWorkout(e.target.value)}
          />

          <button onClick={updateWorkout}>
            Save Changes
          </button>
        </div>
      )}
    </div>
  )
}

export default App
