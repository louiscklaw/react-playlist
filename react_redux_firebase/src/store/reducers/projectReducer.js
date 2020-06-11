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
  return state
}

export default projectReducer