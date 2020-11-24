module.exports = {
	name: 'add',
    description: 'Adds two numbers',
    args: true,
	usage: "<number 1> <number 2>",
	guildOnly: false,
	cooldown: 5,
	aliases: ['sum'],
	execute(message, args) {
		message.channel.send(args[0] + args[1]);
	},
};