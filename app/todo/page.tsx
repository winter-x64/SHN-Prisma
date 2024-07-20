'use client'

import Tasks from '../components/Tasks/Tasks';
import { useGlobalState } from '../context/globalProvider';

const page = () => {
  const { todoTasks } = useGlobalState();
  return (
    <Tasks tasks={todoTasks} title={'My To-Do Tasks'} />
  )
}

export default page