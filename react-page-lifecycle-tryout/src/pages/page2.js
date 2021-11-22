import React from 'react';

function Page2() {
  let [is_loading, setIsLoading] = React.useState(true);
  let [is_quitting, setIsQuitting] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      setIsQuitting(true);
    };
  }, []);

  if (is_loading) return <div>isLoading</div>;
  if (is_quitting) return <div>isQuitting</div>;

  return <div>Page2</div>;
}

export default Page2;
