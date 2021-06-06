let initialData = {
  // tasks: {
  //   'cc-1': { id: 'cc-1', content: 'Take out the garbage' },
  //   'cc-2': { id: 'cc-2', content: 'Watch my favorite show' },
  //   'cc-3': { id: 'cc-3', content: 'Charge my phone' },
  //   'cc-4': { id: 'cc-4', content: 'Cook dinner' },
  // },
  carousel_configs: {
    'cc-1': {
      id: 'cc-1',
      meta: {
        id: 'cc-1',
        cc_description: 'Take out the garbage',
        img_url:
          'https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
    },
    'cc-2': {
      id: 'cc-2',
      meta: {
        id: 'cc-2',
        cc_description: 'Watch my favorite show',
        img_url:
          'https://images.unsplash.com/photo-1582719201918-f1fa99cc3c1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
    },
    'cc-3': {
      id: 'cc-3',
      meta: {
        id: 'cc-3',
        cc_description: 'Charge my phone',
        img_url:
          'https://images.unsplash.com/photo-1621570168077-befe8b7eab56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      },
    },
    'cc-4': {
      id: 'cc-4',
      meta: {
        id: 'cc-4',
        cc_description: 'Charge my phone',
        img_url:
          'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
    },
  },
  columns: {
    active: {
      id: 'active',
      title: 'active',
      carouselConfigIds: ['cc-1', 'cc-2', 'cc-3', 'cc-4'],
      // taskIds: ['cc-1', 'cc-2', 'cc-3', 'cc-4'],
    },
    parking: {
      id: 'parking',
      title: 'parking',
      carouselConfigIds: [],
      // taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['active', 'parking'],
}

// let array_length = Array(5).fill(null)

// array_length.forEach((_, idx) => {
//   initialData.carousel_configs[`cc-${idx}`] = {
//     // content: `cc-${idx}`,
//     content: `cc-${idx}-helloworld`,
//     meta: {
//       id: `cc-${idx}`,
//       cc_description: `cc-${idx}-description`,
//       img_url: `https://via.placeholder.com/750x850.png?text=cc-${idx}-description`,
//     },
//   }
// })

// array_length.forEach((_, idx) => {
//   initialData.carousel_configs[`cc-2-${idx}`] = {
//     id: `cc-${idx}`,
//     content: `cc-${idx}-helloworld`,
//     cc_description: `cc-2-${idx}-description`,
//     img_url: `https://via.placeholder.com/750x850.png?text=cc-2-${idx}-description`,
//   }
// })

// array_length.forEach((_, idx) => {
//   initialData.carousel_configs[`cc-3-${idx}`] = {
//     id: `cc-3-${idx}`,
//     meta: `cc-3-${idx}-content`,
//   }
// })

// initialData.columns['active'].taskIds = array_length.map((_, idx) => `task-${idx}`)

// initialData.columns['parking'].taskIds = array_length.map((_, idx) => `task-2-${idx}`)

// initialData.columns['column-3'].taskIds = array_length.map((_, idx) => `task-3-${idx}`)

export default initialData
