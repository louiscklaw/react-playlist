import { useMouseWheel } from 'react-use';

export default function Demo() {
  const mouseWheel = useMouseWheel();
  return (
    <>
      <h3>delta Y Scrolled: {mouseWheel}</h3>
    </>
  );
}
