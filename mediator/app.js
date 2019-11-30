const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Broadcast message
        for (let key in users) {
          if (users.hasOwnProperty(key)) {
            const user = users[key];
            
            if (user !== from) {
              user.receive(message, from);
            }
          }
        }
      }
    }
  }
}

const kev = new User('Kev');
const jay = new User('Jay');
const jane = new User('Jane');
const mary = new User('Mary');

const chatroom = new Chatroom();

chatroom.register(kev);
chatroom.register(jay);
chatroom.register(jane);
chatroom.register(mary);

kev.send('Hello Mary', mary);
jane.send('Hello Kev, Nice code!', kev);
mary.send('Hey Jay, Best dev ever!', jay);
jay.send('Hi Everyone, Let\'s code an app!');