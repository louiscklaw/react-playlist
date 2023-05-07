const { broadcastMessage } = require('./broadcastMessage');
const { typesDef } = require('./typesDef');

const resumeCurrentPlay = (req, clients) => {
  try {
    broadcastMessage(
      {
        type: typesDef.PLAYLIST_CHANGE,
        data: { action: typesDef.RESUME_CURRENT_VIDEO },
      },
      clients,
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  resumeCurrentPlay,
};
