const env = require('../config/env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize( env.database, env.username, env.password, {
	host: env.host,
	dialect: env.dialect
	
});

const Login = sequelize.define('login',{
		uid : Sequelize.STRING,
		email : Sequelize.STRING,
		service : Sequelize.STRING,
		ip : Sequelize.STRING,
		agent : Sequelize.STRING,
		data : { 
			type : Sequelize.TEXT,
			allowNull : true
		//----auto create----
		//createAt
		//id
		}
});

module.exports = {
	sequelize: sequelize,
	Login: Login
}