Meteor.methods({
  seriesStats: function(id){
    try {
      check(Sonarr.url, String);
      check(Sonarr.port, Number);
      check(Sonarr.api, String);
      check(id, Number);
    } catch (e) {
      console.log("Sonarr Series Get -> " + e.message);
      return false;
    }

    try {
      var response = HTTP.call("GET", Sonarr.url + ":" + Sonarr.port + "/api/series/" + id, {headers: {"X-Api-Key":Sonarr.api}, timeout: 2000} );
    } catch (e) {
      if (e.message.indexOf("NotFound") > -1) {
        return {"downloaded" : 0, "total" : 0};
      } else {
        console.log("Sonarr Series Get -> " + e.message);
        return false;
      }
    }

    return {"downloaded" : response.data.episodeFileCount, "total" : response.data.episodeCount};
  }
});
