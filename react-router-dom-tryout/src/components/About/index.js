import React from 'react';

export default function About() {
  let [is_loading, setIsLoading] = React.useState(true);
  let [is_quitting, setIsQuitting] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      alert('quitting About?');
      setIsQuitting(true);
      setTimeout(() => {
        alert('quit ?');
      }, 3000);
    };
  }, []);

  if (is_loading) return <div>isLoading About</div>;
  if (is_quitting) return <div>isQuitting About</div>;

  return <>About content</>;
}
