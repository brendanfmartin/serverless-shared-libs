const version = require('./package').version;
const name = require('./package').name;
const utils = require('../../lib/utils');

exports.version = (event, context, callback) => {
  const start = Math.floor(Math.random() * 10) + 1;
  const end = Math.floor(Math.random() * 10) + 1;
  const sum = utils.sum(start, end);
  callback(null, {status: 200, body: JSON.stringify({message: version, name, sum: `adding ${start} and ${end} = ${sum}`})});
};
