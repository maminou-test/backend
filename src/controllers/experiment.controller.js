const { Experiment } = require('../models/index');

readAllExperiments = async (request, response) => {
	return response.json(await Experiment.findAll());
}
addExperiment = async (request, response) => {
	const body = request.body;
	const query = await Experiment.create(body);
	return response.json(query);
}
updateExperiment = async (request, response) => {
	const body = request.body;
	const params = request.params;
	const query = await Experiment.update({ body }, { where: { id: params.id } });
	return response.status().json(query);
}
deleteExperiment = async (request, response) => {
	const params = request.params;
	const query = await Experiment.destroy({ where: { id: params.id } });
	return response.status().json(query);
}
module.exports = { readAllExperiments, addExperiment, updateExperiment, deleteExperiment };
