const Mutations = {
	async createItem(parent, args, ctx, info) {
		const item = await ctx.db.mutation.createItem(
			{
				data: {
					...args
				}
			},
			info
		);

		return item;
	},
	async createUser(parent, args, ctx, info) {
		const user = await ctx.db.mutation.createUser(
			{
				data: {
					...args
				}
			},
			info
		);

		return user;
	}
	// createDog(parent, args, ctx, info) {
	// 	global.dogs = global.dogs || [];
	// 	const newDog = { name: args.name };
	// 	global.dogs.push(newDog);
	// 	return newDog;
	// }
};

module.exports = Mutations;
