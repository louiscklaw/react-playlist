const storePlaylist = list_to_store => {
  localStorage.setItem('playlist', JSON.stringify(list_to_store));
};

const loadPlaylist = () => {
  return JSON.parse(localStorage.getItem('playlist')) || [];
};

export { storePlaylist, loadPlaylist };
