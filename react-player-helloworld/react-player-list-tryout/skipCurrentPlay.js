const { broadcastMessage } = require('./broadcastMessage');
const { typesDef } = require('./typesDef');

const skipCurrentPlay = (req, clients) => {
  try {
    broadcastMessage(
      {
        type: typesDef.PLAYLIST_CHANGE,
        data: { action: typesDef.STOP_CURRENT_VIDEO },
      },
      clients,
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  skipCurrentPlay,
};
