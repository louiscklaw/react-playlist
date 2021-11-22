import React from 'react';

export default function Users() {
  let [is_loading, setIsLoading] = React.useState(true);
  let [is_quitting, setIsQuitting] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      alert('quitting Users?');
      setIsQuitting(true);
    };
  }, []);

  if (is_loading) return <div>isLoading Users</div>;
  if (is_quitting) return <div>isQuitting Users</div>;

  return <>Users content</>;
}
