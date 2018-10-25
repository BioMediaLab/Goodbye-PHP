const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutations = {
	async createUser(parent, args, ctx, info) {
		args.email = args.email.toLowerCase();
		const password = await bcrypt.hash(args.password, 10);

		const user = await ctx.db.mutation.createUser(
			{
				data: {
					...args,
					password,
					permissions: { set: [ 'USER' ] }
				}
			},
			info
		);
		//create JWT token for users
		const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
		//set JWT as a cookie on the response
		ctx.response.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365
		});
		return user;
	}
};

module.exports = Mutations;
