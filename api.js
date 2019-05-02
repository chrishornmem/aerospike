const Aerospike = require('aerospike');
const aerospikeConfig = require('./aerospike_config.js')
const client = Aerospike.client(aerospikeConfig.aerospikeConfig)
// Establish connection to the cluster
exports.connect = function (callback) {
  client.connect(callback)
}
// Write a record
exports.writeRecord = async function (k, v) {
  let key = new Aerospike.Key(aerospikeConfig.aerospikeDBParams.defaultNamespace, aerospikeConfig.aerospikeDBParams.defaultSet, k)
  try {
    await client.put(key, { greet: v })
    return true
  } catch (error) {
    console.log(error)
    return false;
  }
}
// Read a record
exports.readRecord = async function (k) {
  let key = new Aerospike.Key(aerospikeConfig.aerospikeDBParams.defaultNamespace, aerospikeConfig.aerospikeDBParams.defaultSet, k)
  try {
    let record = await client.get(key)
    let bins = record.bins
    return k + ' ' + bins.greet
  } catch (error) {
    // Check for errors
    console.log(error)
    return false;
  }
}