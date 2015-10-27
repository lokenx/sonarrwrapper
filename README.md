# Sonarr API Wrapper

A package that allows you to interface with [Sonarr](https://sonarr.tv/), specifically built for [Plex Requests](https://github.com/lokenx/plexrequests-meteor/). Not all API calls are available, and those available aren't complete.

## Features
- Check availability of server
- Get episode download stats

## Installation

`meteor add lokenx:sonarrwrapper`

## Usage

Define your Sonarr server details somewhere in your server-side code.

    if (Meteor.isServer) {
      Sonarr.url = "http://192.168.0.1";
      Sonarr.port = 8081;
      Sonarr.api = "abcdef012345";
      Sonarr.directory = "";
    }

## Functions

**systemStatus:** Checks if server is available

    Sonarr.systemStatus();

**seriesStats:** Get episode download status of TV show

    Sonarr.seriesStats(tvdb);
    id should be a TVDB ID

**seriesGet:** Check whether show exists on Sonarr server

    Sonarr.seriesGet(tvdb);
    id should be a TVDB ID

**seriesDelete:** Delete a series from Sonarr server

    Sonarr.seriesDelete(tvdb);
    id should be a TVDB ID


**seriesPost:** Add TV show to Sonarr server

	Sonarr.seriesPost(tvdb, title, qualityProfileId, seasonFolder, rootFolderPath, episodes);
	tvdb should be a TVDB ID
	title should be TV show title
	qualityProfileId should be quality profile
	seasonFolder should be true if you want folders for seasons
	rootFolderPath should be the path where episodes are saved
	episodes should be true if you want new and old episodes

## License

This application is licensed under The MIT License.
