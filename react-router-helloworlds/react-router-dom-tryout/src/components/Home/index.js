import React from 'react';

export default function Home() {
  let [is_loading, setIsLoading] = React.useState(true);
  let [is_quitting, setIsQuitting] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      alert('quitting Home?');
      setIsQuitting(true);
    };
  }, []);

  if (is_loading) return <div>isLoading Home</div>;
  if (is_quitting) return <div>isQuitting Home</div>;

  return <>Home content</>;
}
