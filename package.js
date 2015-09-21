Package.describe({
  name: 'lokenx:sonarrwrapper',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for the Sonarr API',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('check');
  api.use('http');

  api.addFiles('lib/server/export/functions.js', ['server']);
  api.addFiles('lib/server/methods/systemStatus.js', ['server']);
  api.addFiles('lib/server/methods/seriesGet.js', ['server']);

  api.export("Sonarr");

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sonarrwrapper');
  api.addFiles('sonarrwrapper-tests.js');
});
