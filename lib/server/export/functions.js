function Server() {
  this.url = "http://192.168.0.1";
  this.port = 8989;
  this.api = "abcdef012345";
}

Sonarr = new Server();

Sonarr.systemStatus = function() {
  return Meteor.call("systemStatus", {});
}

Sonarr.seriesStats= function(id) {
  return Meteor.call("seriesStats", id);
}
