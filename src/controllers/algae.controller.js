const { Algae } = require('../models/index');

readAllAlages = async (request, response) => {
	return response.json(await Algae.findAll());
}
addAlgae = async (request, response) => {
	const body = request.body;
	const query = await Algae.create(body);
	return response.json(query);
}
updateAlgae = async (request, response) => {
	const body = request.body;
	const params = request.params;
	const query = await Algae.update({ body }, { where: { id: params.id } });
	return response.status().json(query);
}
deleteAlgae = async (request, response) => {
	const params = request.params;
	const query = await Algae.destroy({ where: { id: params.id } });
	return response.status().json(query);
}
module.exports = { readAllAlages, addAlgae, updateAlgae, deleteAlgae };