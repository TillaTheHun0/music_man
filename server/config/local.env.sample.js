'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'musicman-secret',

  FACEBOOK_ID:      '967584753291334',
  FACEBOOK_SECRET:  'c079adfe79eee92d5c58881aa61436fe',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  GOOGLE_ID:        '68550344447-vnsjutiqia5hn063smbp0d306kq7g663.apps.googleusercontent.com',
  GOOGLE_SECRET:    '7oyYG2DtbMOjB4n97yj6jzqI',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
