// const eventEmitter = require('events');
// // const ALLOWED_OBJECT_IDS = ['boot', 'internal', 'error'];
// // const LogFormatter = require('./logger-formatter');
// // const ApplogSingleton = require('./logger/applog-singleton');
// // const SyslogSingleton = require('./logger/syslog-singleton');

// class Syslog extends eventEmitter {

//     log(event, msg) {
//         this.emit(event, msg);
//     }

//     initLogger(objectId) {
//         try {
//             if (ALLOWED_OBJECT_IDS.includes(objectId)) {
//                 return ApplogSingleton.getInstance()
//             }
//         } catch (exception) {
//             throw exception
//         }
//     }

//     initSyslogger() {
//         try {
//             return SyslogSingleton.getInstance()
//         } catch (exception) {
//             throw exception
//         }
//     }   

//     pushInfoLog(msg) {
//         const objectId = msg.data.objectId || '';
//         const log = LogFormatter.format(objectId, msg);
//         this.initLogger(objectId).info(log);
//     }

//     pushErrorLog(msg) {
//         const objectId = msg.data.objectId || '';
//         const log = LogFormatter.format(objectId, msg)
//         this.initLogger(objectId).error(log);
//     }
// }

// const syslogEvent = new Syslog();

// /** Event Listeners for info and error events */
// syslogEvent.on('info', (data) => {
//     syslogEvent.pushInfoLog(data);
// });

// syslogEvent.on('error', (data) => {
//     syslogEvent.pushErrorLog(data);
// });

// module.exports = syslogEvent;