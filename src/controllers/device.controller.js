const { Device } = require('../models/index');

readAllDevices = async (request, response) => {
	return response.json(await Device.findAll());
}
addDevice = async (request, response) => {
	const body = request.body;
	const query = await Device.create(body);
	return response.json(query);
}
updateDevice = async (request, response) => {
	const body = request.body;
	const params = request.params;
	const query = await Device.update({ body }, { where: { id: params.id } });
	return response.status().json(query);
}
deleteDevice = async (request, response) => {
	const params = request.params;
	const query = await Device.destroy({ where: { id: params.id } });
	return response.status().json(query);
}
module.exports = { readAllDevices, addDevice, updateDevice, deleteDevice };
