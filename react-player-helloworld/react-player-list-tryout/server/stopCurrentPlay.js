const { typesDef } = require('./typesDef');

const stopCurrentPlay = () => {
  try {
    console.log(typesDef);
    console.log('stop current play');
  } catch (error) {
    console.log('error during calling stop player');
  }
};

module.exports = {
  stopCurrentPlay,
};
