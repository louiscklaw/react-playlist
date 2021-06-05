let initialData = {
  // tasks_del: {
  //   'task-1': { id: 'task-1', content: 'Take out the garbage' },
  //   'task-2': { id: 'task-2', content: 'Watch my favorite show' },
  //   'task-3': { id: 'task-3', content: 'Charge my phone' },
  //   'task-4': { id: 'task-4', content: 'Cook dinner' },
  // },
  carousel_configs: {
    'cc-1': { id: 'cc-1', content: 'Take out the garbage' },
    'cc-2': { id: 'cc-2', content: 'Watch my favorite show' },
    'cc-3': { id: 'cc-3', content: 'Charge my phone' },
  },
  columns: {
    active: {
      id: 'active',
      title: 'active',
      carouselConfigIds: ['cc-1', 'cc-2', 'cc-3', 'cc-4'],
    },
    parking: {
      id: 'parking',
      title: 'parking',
      carouselConfigIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'column-3',
      carouselConfigIds: [],
    },
    'column-4': {
      id: 'column-4',
      title: 'column-4',
      carouselConfigIds: [],
    },
    'column-5': {
      id: 'column-5',
      title: 'column-5',
      carouselConfigIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['active', 'parking'],
}

let array_length = Array(5).fill(null)

array_length.forEach((_, idx) => {
  initialData.carousel_configs[`cc-${idx}`] = {
    content: {
      id: `cc-${idx}`,
      cc_description: `cc-${idx}-description`,
      img_url: `https://via.placeholder.com/750x850.png?text=cc-${idx}-description`,
    },
  }
})

array_length.forEach((_, idx) => {
  initialData.carousel_configs[`cc-2-${idx}`] = {
    id: `cc-${idx}`,
    cc_description: `cc-2-${idx}-description`,
    img_url: `https://via.placeholder.com/750x850.png?text=cc-2-${idx}-description`,
  }
})

array_length.forEach((_, idx) => {
  initialData.carousel_configs[`cc-3-${idx}`] = {
    id: `cc-3-${idx}`,
    content: `cc-3-${idx}-content`,
  }
})

// initialData.columns['active'].taskIds = array_length.map((_, idx) => `task-${idx}`)

// initialData.columns['parking'].taskIds = array_length.map((_, idx) => `task-2-${idx}`)

// initialData.columns['column-3'].taskIds = array_length.map((_, idx) => `task-3-${idx}`)

export default initialData
