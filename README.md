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
    }

## Functions

**systemStatus:** Checks if server is available

    Sonarr.systemStatus();

**seriesGet:** Get episode download status of TV show

    SickRage.seriesGet(id);
    id should be a Sonarr ID

## License

This application is licensed under The MIT License.
