//Coded by Ian Sloth for use on ONLY The Canopy discord server. https://discord.gg/qGuau4m

const Discord = require("discord.js");

const TOKEN = "MzM5OTU5OTY5MDkwNjMzNzI4.DFrj8w.gmwereNWGc0GmvFXno7_dWzUumQ";
const PREFIX = "!"; //Call bot command use ! and then type command after without spacing. Example, !poke

var fortunes = [ //20 8-Ball answers found at https://en.wikipedia.org/wiki/Magic_8-Ball
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook is good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
];

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("guildMemberAdd", function(member) { //Greets and assigns people who just joined discord member
    member.guild.channels.find("name", "general").sendMessage(member.toString() + "Welcome to The Canopy");

    member.addRole(member.guild.roles.find("name", "Member"));
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLocaleLowerCase()) {
        case "poke":
            message.channel.sendMessage("Hello!");
            break;
        case "info":
            message.channel.sendMessage("I'm a bot created by Ian Sloth to monitor The Canopy.");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]); 
            else message.channel.sendMessage("Can't read that."); // !8ball redback if format -> !8ball question? is not used 
            break;
        case "embed":
            var embed = new Discord.RichEmbed() //All embed methods found at https://discord.js.org/#/docs/main/stable/class/RichEmbed
                .addField("Enter Title", "Enter Description") //To keep another title and description on same line use --> .addField("Enter Title", "Enter Description", true)
                .setColor(0x00FFFF) //Uses a string or a hex value for the color
                .setFooter("Enter A Footer Here This Is A Test Footer")
                .setThumbnail(message.author.avatarURL) //Sets embed thumbnail to !embed command user's avatar 
            message.channel.sendEmbed(embed);
            break;
        case "noticeme":
            message.channel.sendMessage(message.author.toString() + "Hello, how are you?");
            break;
        default:
            message.channel.sendMessage("Invalid Command.");
    }
});

bot.login(TOKEN);