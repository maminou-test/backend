const { Cycle } = require('../models/index');
function readAllCycles(request, response) {
	console.log(request.params);
	return response.json(Cycle.findAll());
}
function addCycle(request, response) {
	console.log(request.params);
	const body = request.body;
	return response.json(body);
}
function updateCycle(request, response) {
	console.log(request.params);
	const body = request.body;
	return response.json(body);
}
function deleteCycle(request, response) {
	console.log(request.params);
	const body = request.body;
	return response.json(body);
}
module.exports = { readAllCycles, addCycle, updateCycle, deleteCycle };
