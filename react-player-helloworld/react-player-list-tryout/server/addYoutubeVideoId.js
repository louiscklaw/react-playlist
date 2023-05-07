const { broadcastMessage } = require('./broadcastMessage');
const { typesDef } = require('./typesDef');

const addYoutubeVideoId = (req, res, clients) => {
  try {
    var temp = req.body;
    console.log(req.body);
    var { youtube_video_id } = temp;
    broadcastMessage(
      {
        type: typesDef.PLAYLIST_CHANGE,
        data: {
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
