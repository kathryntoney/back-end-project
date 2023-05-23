const accountSid = "AC19f9cc314a7c73d143a207bc558f4edd";
const authToken = "705e3da538847efb21d7048c1fd32d0c";
const client = require("twilio")(accountSid, authToken);


client.conversations.v1.conversations
                       .create({friendlyName: 'My First Conversation'})
                       .then(conversation => console.log(conversation.sid));
  client.conversations.v1.conversations('CH800f32e6879e4aa891e9846a1d8281b1')
                       .fetch()
                       .then(conversation => console.log(conversation.chatServiceSid));
                       
   client.conversations.v1.conversations('CH800f32e6879e4aa891e9846a1d8281b1')
  .participants
  .create({
     'messagingBinding.address': '+18328141362',
     'messagingBinding.proxyAddress': '+18667167183'
   })
  .then(participant => console.log(participant.sid));     
 

client.conversations.v1.conversations('CH800f32e6879e4aa891e9846a1d8281b1')
                       .participants
                       .create({identity: 'testPineapple'})
                       .then(participant => console.log(participant.sid));
               