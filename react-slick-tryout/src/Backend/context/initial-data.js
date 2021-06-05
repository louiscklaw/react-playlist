let initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columns: {
    active: {
      id: 'active',
      title: 'active',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    parking: {
      id: 'parking',
      title: 'parking',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'column-3',
      taskIds: [],
    },
    'column-4': {
      id: 'column-4',
      title: 'column-4',
      taskIds: [],
    },
    'column-5': {
      id: 'column-5',
      title: 'column-5',
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['active', 'parking'],
}

let array_length = Array(4).fill(null)

array_length.forEach((_, idx) => {
  initialData.tasks[`task-${idx}`] = {
    id: `task-${idx}`,
    content: `task-${idx}-content`,
  }
})

array_length.forEach((_, idx) => {
  initialData.tasks[`task-2-${idx}`] = {
    id: `task-2-${idx}`,
    content: `task-2-${idx}-content`,
  }
})

array_length.forEach((_, idx) => {
  initialData.tasks[`task-3-${idx}`] = {
    id: `task-3-${idx}`,
    content: `task-3-${idx}-content`,
  }
})

initialData.columns['active'].taskIds = array_length.map((_, idx) => `task-${idx}`)

initialData.columns['parking'].taskIds = array_length.map((_, idx) => `task-2-${idx}`)

initialData.columns['column-3'].taskIds = array_length.map((_, idx) => `task-3-${idx}`)

export default initialData
