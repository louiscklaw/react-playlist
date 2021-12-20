export default (duration) => {
  if ('vibrate' in navigator) {
    navigator.vibrate(duration);
  }
};
