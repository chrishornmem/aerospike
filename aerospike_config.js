var aerospikeClusterIP = '172.28.128.3'
var aerospikeClusterPort = 3000

exports.aerospikeConfig = {
    hosts: [{ addr: aerospikeClusterIP, port: aerospikeClusterPort }]
}
exports.aerospikeDBParams = {
    defaultNamespace: 'test',
    defaultSet: 'test'
}
