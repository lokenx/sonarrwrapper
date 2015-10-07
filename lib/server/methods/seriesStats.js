Meteor.methods({
  seriesStats: function(tvdb){
    try {
      check(Sonarr.url, String);
      check(Sonarr.port, Number);
      check(Sonarr.api, String);
      check(tvdb, Number);
    } catch (e) {
      console.log("Sonarr Series Stats -> " + e.message);
      return false;
    }

    try {
      var allShows = HTTP.call("GET", Sonarr.url + ":" + Sonarr.port + "/api/series/", {headers: {"X-Api-Key":Sonarr.api}, timeout: 2000} );
    } catch (e) {
      console.log("Sonarr Series Stats -> " + e.message);
      return {"downloaded" : 0, "total" : 0};
    }

    var sonarrId ;

    _.each(allShows.data, function (show) {
      if (show.tvdbId === tvdb) {
        sonarrId = show.id;
      }
    });

    try {
      var response = HTTP.call("GET", Sonarr.url + ":" + Sonarr.port + "/api/series/" + sonarrId, {headers: {"X-Api-Key":Sonarr.api}, timeout: 2000} );
    } catch (e) {
      if (e.message.indexOf("NotFound") > -1) {
        return {"downloaded" : 0, "total" : 0};
      } else {
        console.log("Sonarr Series Stats -> " + e.message);
        return false;
      }
    }

    return {"downloaded" : response.data.episodeFileCount, "total" : response.data.episodeCount};
  }
});
