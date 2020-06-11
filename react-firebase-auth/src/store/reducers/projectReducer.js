const initState = {
  projects:[
    {id: '1',title:'project title1aaa',content:'project content 1'},
    {id: '2',title:'project title2bbb',content:'project content 2'},
    {id: '3',title:'project title3ccc',content:'project content 3'},
    {id: '4',title:'project title1aaa',content:'project content 1'},
    {id: '5',title:'project title2bbb',content:'project content 2'},
    {id: '6',title:'project title3ccc',content:'project content 3'},
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      // console.log('created project',action.project)
      return state
    case 'CREATE_PROJECT_ERROR':
      // console.log('create project error', action.err)
      return state
    default:
      return state
  }
}

export default projectReducer
