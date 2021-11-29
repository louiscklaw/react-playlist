import useSharedVar from './use';

export default function EditName() {
  const {
    actions: { setName },
  } = useSharedVar();

  const handleClick = () => setName(prompt('What is your name?'));

  return <button onClick={handleClick}>hello edit</button>;
}
