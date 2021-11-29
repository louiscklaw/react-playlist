import useSharedVar from './use';

export default function ShowName() {
  const {
    state: { name },
  } = useSharedVar();
  return <p>Hello, {name}</p>;
}
