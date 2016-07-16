'use strict';
const _ = require('lodash');
const async = require('async');
const validator = require('validator');
const request = require('request');
});

/**
 * GET /api
 * Request a Guide`
 */
exports.getApi = (req, res) => {
  res.render('api/index', {
    title: 'Request a Guide'
  });
};

