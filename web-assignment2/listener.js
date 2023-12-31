const emitter = require('./emitter');

emitter.on('customEvent', (message) => {
  console.log('Listener module received:', message);
});
