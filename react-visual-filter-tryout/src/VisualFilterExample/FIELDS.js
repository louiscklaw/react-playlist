const FIELDS = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    operators: ['eq', 'ne', 'ct', 'nct', 'sw', 'fw', 'in', 'nn'],
  },
  { name: 'age', type: 'number', label: 'Age', operators: ['eq', 'ne', 'gt', 'lt'] },
  {
    name: 'birth_date',
    type: 'date',
    label: 'Birth date',
    operators: ['eq', 'ne', 'gt', 'lt', 'in', 'nn'],
  },
  {
    name: 'preference',
    type: 'list',
    label: 'Language',
    operators: ['eq', 'ne'],
    list: [
      { name: 'python', label: 'Python' },
      { name: 'javascript', label: 'JavaScript' },
      { name: 'go', label: 'Go' },
    ],
  },
]

export default FIELDS
