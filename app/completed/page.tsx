'use client'

import Tasks from '../components/Tasks/Tasks';
import { useGlobalState } from '../context/globalProvider';

const page = () => {
  const { completedTasks } = useGlobalState();
  return (
    <Tasks tasks={completedTasks} title='My Completed Tasks' />
  )
}

export default page