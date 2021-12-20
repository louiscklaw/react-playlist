export default (url, title) => {
  if (navigator.share) {
    return navigator.share({ title, url });
  } else if (navigator.clipboard) {
    return navigator.clipboard.writeText(url);
  }
  return new Promise((resolve) => resolve(''));
};
