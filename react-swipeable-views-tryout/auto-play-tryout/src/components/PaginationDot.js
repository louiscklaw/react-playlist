export default function PaginationDot({ active, onClick, index }) {
  let styleDot

  if (active) {
    styleDot = Object.assign({}, styles.dot, styles.active)
  } else {
    styleDot = styles.dot
  }

  const handleClick = event => onClick(event, index)

  return (
    <>
      <button type="button" style={styles.root} onClick={handleClick}>
        <div style={styleDot} />
      </button>
    </>
  )
}

const styles = {
  root: {
    height: 18,
    width: 18,
    cursor: 'pointer',
    border: 0,
    background: 'none',
    padding: 0,
  },
  dot: {
    backgroundColor: '#e4e6e7',
    height: 12,
    width: 12,
    borderRadius: 6,
    margin: 3,
  },
  active: {
    backgroundColor: '#319fd6',
  },
}
