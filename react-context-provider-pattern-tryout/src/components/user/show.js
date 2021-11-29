import useUser from './use';

export default function ShowName() {
  const {
    state: { name },
  } = useUser();
  return <p>Hello, {name}</p>;
}
