import addNotification from 'react-push-notification';

const options = {
  title: 'title',
  subtitle: 'subtitle', //optional
  message: 'message', //optional
  onClick: (e) => {
    alert('helloworld');
  }, //optional, onClick callback.
  theme: 'red', //optional, default: undefined
  duration: 30000, //optional, default: 5000,
  backgroundTop: 'green', //optional, background color of top container.
  backgroundBottom: 'darkgreen', //optional, background color of bottom container.
  colorTop: 'green', //optional, font color of top container.
  colorBottom: 'darkgreen', //optional, font color of bottom container.
  closeButton: 'Go away', //optional, text or html/jsx element for close text. Default: Close,
  native: true, //optional, makes the push notification a native OS notification
  // icon: string, // optional, Native only. Sets an icon for the notification.
  vibrate: 100, // optional, Native only. Sets a vibration for the notification.
  silent: false, // optional, Native only. Makes the notification silent.
};

const Page = () => {
  const buttonClick = () => {
    addNotification(options);
  };

  return (
    <div className="page">
      <button onClick={buttonClick} className="button">
        Hello world.
      </button>
    </div>
  );
};

export default Page;
