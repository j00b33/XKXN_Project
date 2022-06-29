/**
 * Triggered from a change to a Cloud Storage bucket
 * @param {!Object} event Event payload
 * @param {!Object} context Metadata for the event
 */
exports.helloGCS = (event, context) => {
  console.log('HELLOW WORLD');
  console.log('=====================');
  console.log('context : ', context);
  console.log('event : ', event);
  console.log('=====================');
};
