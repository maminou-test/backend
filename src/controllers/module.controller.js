const { Module } = require('../models/index');

readAllModules = async (request, response) => {
	return response.json(await Module.findAll());
}
addModule = async (request, response) => {
	const body = request.body;
	const query = await Module.create(body);
	return response.json(query);
}
updateModule = async (request, response) => {
	const body = request.body;
	const params = request.params;
	const query = await Module.update({ body }, { where: { id: params.id } });
	return response.status().json(query);
}
deleteModule = async (request, response) => {
	const params = request.params;
	const query = await Module.destroy({ where: { id: params.id } });
	return response.status().json(query);
}
module.exports = { readAllModules, addModule, updateModule, deleteModule };
