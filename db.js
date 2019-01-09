var mongojs = require('mongojs');

var databaseUrl = 'mongodb://202.139.192.111/tgr2019test';
var collections = ['users'];
var option = {"auth":{"user":"admin","password":"tgr2019"}}
var connect = mongojs(databaseUrl, collections,option);

module.exports = {
    connect: connect
};