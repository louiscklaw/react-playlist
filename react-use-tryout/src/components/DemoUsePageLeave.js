import { usePageLeave } from 'react-use';

export default function Demo() {
  usePageLeave(() => console.log('Page left...'));

  return null;
}
