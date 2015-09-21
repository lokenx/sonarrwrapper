Meteor.methods({
  systemStatus: function(){
    try {
      check(Sonarr.url, String);
      check(Sonarr.port, Number);
      check(Sonarr.api, String);
    } catch (e) {
      console.log("Sonarr Status -> " + e.message);
      return false;
    }

    try {
      var response = HTTP.call("GET", Sonarr.url + ":" + Sonarr.port + "/api/system/status", {headers: {"X-Api-Key":Sonarr.api}, timeout: 2000} );
    } catch (e) {
      console.log("Sonarr Status -> " + e.message);
      return false;
    }

    var status = (response.data) ? true : false;
    return status;
  }
});
