App.chat = App.cable.subscriptions.create("ChatChannel", {
  connected: function() {
    console.log('connected to chat')
  },
  disconnected: function() {
    console.log('disconnected from chat')
  },
  received: function(data) {
    var messages = $('#chatbox');
    messages.append(data['message']);
    messages.scrollTop(messages[0].scrollHeight)
  }
});
