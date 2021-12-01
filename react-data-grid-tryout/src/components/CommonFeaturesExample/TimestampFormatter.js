import dateFormatter from './dateFormatter';

export default function TimestampFormatter({ timestamp }) {
  return <>{dateFormatter.format(timestamp)}</>;
}
