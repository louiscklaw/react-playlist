import useUser from './use';

export default function EditName() {
  const {
    actions: { setName },
  } = useUser();

  const handleClick = () => setName(prompt('What is your name?'));

  return <button onClick={handleClick}>hello edit</button>;
}
