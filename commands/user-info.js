module.exports = {
  name: 'user-info',
  description: 'Muestra información sobre el usuario',
  run: async (client, message, args) => {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  }
}