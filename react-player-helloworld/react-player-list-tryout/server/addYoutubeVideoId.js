const { broadcastMessage } = require('./broadcastMessage');
const { typesDef } = require('./typesDef');

const addYoutubeVideoId = (youtube_video_id, clients) => {
  try {
    broadcastMessage(
      {
        type: typesDef.PLAYLIST_CHANGE,
        data: {
          action: typesDef.ADD_URL,
          youtube_url: `https://www.youtube.com/watch?v=${youtube_video_id}`,
        },
      },
      clients,
    );
  } catch (error) {
    console.log(error);
    console.log('error');
  }
};

module.exports = {
  addYoutubeVideoId,
};
