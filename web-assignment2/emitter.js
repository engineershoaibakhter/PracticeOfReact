const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

setTimeout(() => {
  myEmitter.emit('customEvent', 'Event emitted after 2 seconds');
}, 2000);

module.exports = myEmitter;
