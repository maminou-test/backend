const { Logs } = require('../models/index');

readAllLogss = async (request, response) => {
	return response.json(await Logs.findAll());
}
addLogs = async (request, response) => {
	const body = request.body;
	const query = await Logs.create(body);
	return response.json(query);
}
updateLogs = async (request, response) => {
	const body = request.body;
	const params = request.params;
	const query = await Logs.update({ body }, { where: { id: params.id } });
	return response.status().json(query);
}
deleteLogs = async (request, response) => {
	const params = request.params;
	const query = await Logs.destroy({ where: { id: params.id } });
	return response.status().json(query);
}
module.exports = { readAllLogss, addLogs, updateLogs, deleteLogs };
