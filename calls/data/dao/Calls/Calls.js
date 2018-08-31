var query = require('db/v3/query');
var daoApi = require('db/v3/dao');
var dao = daoApi.create({
	'table': 'CALLS',
	'properties': [
		{
			'name': 'Id',
			'column': 'CALL_ID',
			'type': 'INTEGER',
			'id': true,
		}, {
			'name': 'Customer',
			'column': 'CALL_CUSTOMER_ID',
			'type': 'INTEGER',
		}, {
			'name': 'Description',
			'column': 'CALL_DESCRIPTION',
			'type': 'VARCHAR',
		}, {
			'name': 'Date',
			'column': 'CALL_DATE',
			'type': 'DATE',
		}]
});
exports.list = function(settings) {
	return dao.list(settings);
};

exports.get = function(id) {
	return dao.find(id);
};

exports.create = function(entity) {
	return dao.insert(entity);
};

exports.update = function(entity) {
	return dao.update(entity);
};

exports.delete = function(id) {
	dao.remove(id);
};

exports.count = function() {
	return dao.count();
};

exports.customDataCount = function() {
	var resultSet = query.execute("SELECT COUNT(*) AS COUNT FROM CALLS");
	return resultSet !== null ? resultSet[0].COUNT : 0;
};