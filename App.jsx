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
    const { data, error } = await supabase
      .from('workouts')
      .select('*')

    if (error) {
      console.log(error)
    } else {
      setWorkouts(data)
    }
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

  async function deleteWorkout(id) {
    await supabase
      .from('workouts')
      .delete()
      .eq('id', id)

    fetchWorkouts()
  }

  return (
    <div>
      <h1>Workout Tracker</h1>

      {workouts.map((workout) => (
        <div className="workout-card" key={workout.id}>
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

          <button onClick={() => deleteWorkout(workout.id)}>
            Delete
          </button>
        </div>
      ))}

      {editId && (
        <div>
          <input
            value={editWorkout}
            onChange={(e) => setEditWorkout(e.target.value)}
            placeholder="Update workout name"
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
