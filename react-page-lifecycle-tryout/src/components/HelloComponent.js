import React from 'react';

console.log('HelloComponent 1');

function HelloComponent() {
  let [is_loading, setIsLoading] = React.useState(true);
  let [is_quitting, setIsQuitting] = React.useState(false);

  console.log('HelloComponent 2');

  const gotoGoogle = () => {
    window.location.href = 'https://www.google.com';
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      alert('quitting component?');
      setIsQuitting(true);
    };
  }, []);

  if (is_loading) return <div>isLoading component</div>;
  if (is_quitting) return <div>isQuitting component</div>;

  return (
    <div>
      <div>HelloComponent</div>
      <button
        onClick={(e) => {
          gotoGoogle(e);
        }}>
        to google.com
      </button>
    </div>
  );
}

export default HelloComponent;
