Meteor.methods({
  seriesPost: function(tvdb, title, qualityProfileId, seasonFolder, rootFolderPath, episodes){
    try {
      check(Sonarr.url, String);
      check(Sonarr.port, Number);
      check(Sonarr.api, String);
      
      check(tvdb, Number);
      check(title, String);
      check(qualityProfileId, Number);
      check(seasonFolder, Boolean);
      check(rootFolderPath, String);
      check(episodes, Boolean);

    } catch (e) {
      console.log("Sonarr Series Post -> " + e.message);
      return false;
    }

    var options = [];
    if (episodes === false) {
        options = ({
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "searchForMissingEpisodes": false
        });
    } else {
        options = ({
          "ignoreEpisodesWithFiles": false,
          "ignoreEpisodesWithoutFiles": false,
          "searchForMissingEpisodes": true
        });
    }

    try {
      var response = HTTP.call("POST", Sonarr.url + ":" + Sonarr.port + "/api/series/", {headers: {"X-Api-Key":Sonarr.api},
        data: {
          "tvdbId":tvdb,
          "title":title,
          "qualityProfileId":qualityProfileId,
          "seasons":[],
          "seasonFolder":seasonFolder,
          "rootFolderPath":rootFolderPath,
          "addOptions":options
          }, timeout: 2000}
        );
    } catch (e) {
      console.log("Sonarr Series Post -> " + e.message);
      return false;
    }

    return response.data ? true : false;
  }
});
