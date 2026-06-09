import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [workouts, setWorkouts] = useState([])

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

  return (
    <div>
      <h1>Workout Tracker</h1>

      {workouts.map((workout) => (
        <div key={workout.id}>
          <h2>{workout.workout_name}</h2>
          <p>Date: {workout.workout_date}</p>
        </div>
      ))}
    </div>
  )
}

export default App
