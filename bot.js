const Discord = require("discord.js");
const client = new Discord.Client();

const { token, prefix } = require('./auth.json');

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log("Under Construction");
  client.user.setActivity('With Neko and friends UwU', {type: 'PLAYING'});         //added by shwi setting status, chinchilla will be having fun
});

client.on("message", async message => {
  if (message.author.bot || !message.guild) return; 

client.on("message", message => {});
  
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`I wuv you, ${member}. Pweeze stay`);
});
  


  if(message.content.indexOf(prefix) !== 0) {return;} 
  let args = message.content.slice(prefix.length).trim().split(/ +/g); 
  let command = args.shift().toLowerCase(); 
  
  if (command == "ping") {
     message.channel.send(
     " > ℹ   **|** Pong! Time Taken: " +
        (new Date().getTime() - message.createdTimestamp) +
        "**ms**"
     ); 
  }
  
  if (message.content === `${prefix}server`) {
	message.channel.send(`This server's name is: ${message.guild.name}`);
} else if (message.content === `${prefix}serverinfo`) {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
} 


  const zenembed = {
  color: "#7fffd4",
  title: "Chomp UwU",
  author: {
    name: "ZEN"
  },


  description: "OMG ZEN",
  image: {
    url:
    "https://cdn.glitch.com/bdf0161e-8627-4edb-a3b1-35a9c8ef9f11%2Fchomp.jpg?v=1590179409302" //yes its fixed now XD
    
  }
};
  
  const zenembed2 = {
    color: "#7fffd4",
    title: "Atack UWU",
    author: {
      name:"ZEN"
    },
    
    description: "IMMA GETCHU",
    image: {
      url:
      "https://cdn.glitch.com/bdf0161e-8627-4edb-a3b1-35a9c8ef9f11%2FZen7.jpg?v=1590179070696"
    }
    
  };
  
  const zenembed3 = {
    color: "#7ffd4",
    title: "Sweepy UwU",
    author: {
      name: "ZEN"
    },
    
    descrption: "Nap time!",
    image: {
      url:
      "https://cdn.glitch.com/bdf0161e-8627-4edb-a3b1-35a9c8ef9f11%2FSleepZen.jpeg?v=1590179276755"
    }
    
  };
  
  const zenembed4 = {
    color: "#7fffd4",
    title: "Imma cutie",
    author: {
      name: "ZEN"
    },
    
    description: "OwO",
    image: {
      url:
      "https://cdn.glitch.com/bdf0161e-8627-4edb-a3b1-35a9c8ef9f11%2FCutie.jpg?v=1590179524508"
    }
  };
  
  const zenembed5 = {
    color: "#7fffd4",
    title: "Fwendos",
    author: {
      name:"ZEN"
    },
    
    description: "^-^",
    image: {
    url:
    "https://cdn.glitch.com/bdf0161e-8627-4edb-a3b1-35a9c8ef9f11%2FFwends.jpg?v=1590179374452"
    }
  };

  const zenembed6 = {
    color: "#7fffd4",
    title: "Oh no",
    author: {
      name: "ZEN"
  },
    
    description: "AHHH",
    image: {
      url: 
      "https://cdn.glitch.com/bdf0161e-8627-4edb-a3b1-35a9c8ef9f11%2FAhh.jpg?v=1590179306328"
    }
  };
  
  const zenembed7 = {
    color: "#7fffd4",
    title: "No touch",
    author: {
      name: "ZEN"
    },
    description: "Nuuu",
    image: {
      url: 
      "https://cdn.glitch.com/bdf0161e-8627-4edb-a3b1-35a9c8ef9f11%2FZen1.jpg?v=1590178842895"
    }
  };
  
  const help = {
    color: "#3cb371",
    title: "Commands",
    author: {
      name: "ZEN"
    },
    
    fields: [
      {
      name:"**help**",
      value: "Shows commands"
      },
      {
      name:"**chomp**, **rawr**, **tired**, **cute**, **friends**, **ahh**, **nu**",
      value: "Shows a zen pic. Use one at a time."
      }
    ]
  };
  
  if (command === "help") {
    message.channel.send({ embed: help })
  };
  
  const meow = {
    color: "#7fffd4",
    title: "quotes",
    author: {
      name: "ZEN"
    },
    
    fields: [
      {
        name:"UwU",
      }
    ]
  };
  
  const rawr = {
    color: "#7fffd4",
    title:"quotes",
    author: {
      name: "ZEN"
    },
    fields: [
      {
        name: "Rawr"
      }
    ]
  }
  
  
  if (command === "chomp") {
    message.channel.send( {embed: zenembed} )
  };
  
  if (command === "rawr") {
    message.channel.send({embed: zenembed2})
  };
  
  if (command === "tired") {
    message.channel.send({embed: zenembed3})
  };
  
  if (command === "cute") {
    message.channel.send({embed: zenembed4})
  };
  
  if (command === "friends"){
    message.channel.send({embed: zenembed5})
  };
  
  if (command === "ahh") {
    message.channel.send({embed: zenembed6})
  };
  if (command === "nu") {
    message.channel.send({embed:zenembed7})
  };
  if (command.starts.With("quote")) {
    const number = 2;
    var random = Math.floor(Math.random() * (number - 1 +1)) + 2;
    switch (random) {
      case 1:
        message.channel.send({ embed: meow});
        break;
      case 2:
        message.channel.send({ embed: rawr})
    }
  }
});
