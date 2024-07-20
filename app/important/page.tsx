'use client'

import Tasks from '../components/Tasks/Tasks'
import { useGlobalState } from '../context/globalProvider'

const page = () => {
  const { importantTasks } = useGlobalState();
  return (
    <Tasks tasks={importantTasks} title={'My Priority Tasks'} />
  )
}

export default page