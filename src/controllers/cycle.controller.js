const { Cycle } = require('../models/index');

readAllCycles = async (request, response) => {
	return response.json(await Cycle.findAll());
}
addCycle = async (request, response) => {
	const body = request.body;
	const query = await Cycle.create(body);
	return response.json(query);
}
updateCycle = async (request, response) => {
	const body = request.body;
	const params = request.params;
	const query = await Cycle.update({ body }, { where: { id: params.id } });
	return response.status().json(query);
}
deleteCycle = async (request, response) => {
	const params = request.params;
	const query = await Cycle.destroy({ where: { id: params.id } });
	return response.status().json(query);
}
module.exports = { readAllCycles, addCycle, updateCycle, deleteCycle };
