import React from 'react';

function HelloComponent2() {
  let [is_loading, setIsLoading] = React.useState(true);
  let [is_quitting, setIsQuitting] = React.useState(false);

  const gotoGoogle = () => {
    window.location.href = 'https://www.google.com';
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      alert('quitting component2?');
      setIsQuitting(true);
    };
  }, []);

  if (is_loading) return <div>isLoading component2</div>;
  if (is_quitting) return <div>isQuitting component2</div>;

  return (
    <div>
      <div>HelloComponent2</div>
      <button
        onClick={(e) => {
          gotoGoogle(e);
        }}>
        to google.com
      </button>
    </div>
  );
}

export default HelloComponent2;
