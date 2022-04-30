import PaginationDot from './PaginationDot'

export default function Pagination({ index, dots, onChangeIndex }) {
  const childrens = []

  const handleClick = (event, index) => onChangeIndex(index)

  for (let i = 0; i < dots; i += 1) {
    childrens.push(<PaginationDot key={i} index={i} active={i === index} onClick={handleClick} />)
  }

  return <div style={styles.root}>{childrens}</div>
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '10vh',
    width: '100%',
  },
}
