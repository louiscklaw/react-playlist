const { broadcastMessage } = require('./broadcastMessage');
const { typesDef } = require('./typesDef');

const delYoutubeVideoId = (youtube_video_id, clients) => {
  try {
    broadcastMessage(
      {
        type: typesDef.PLAYLIST_CHANGE,
        data: {
          action: typesDef.DEL_URL,
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
  delYoutubeVideoId,
};
