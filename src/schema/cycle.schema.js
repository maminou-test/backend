const { z } = require("zod");

const cycleSchemaPOST = z.object({
	body: z.object({
		duration: z.number().int().finite().nonnegative(),
		growth: z.number().nonnegative(),
		biomass: z.number().nonnegative(),
		lipid: z.number().nonnegative(),
		carbs: z.number().nonnegative(),
		protein: z.number().nonnegative(),
		inVolume: z.number().nonnegative(),
		outVolume: z.number().nonnegative(),
		isActive: z.boolean(),
		isDay: z.boolean(),
		type: z.enum(["harvesting", "cultivation"])
	})
});

module.exports = { cycleSchemaPOST };
