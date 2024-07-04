/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.akeyless);
  }
}(this, function(expect, akeyless) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new akeyless.GitlabTargetDetails();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GitlabTargetDetails', function() {
    it('should create an instance of GitlabTargetDetails', function() {
      // uncomment below and update the code to test GitlabTargetDetails
      //var instane = new akeyless.GitlabTargetDetails();
      //expect(instance).to.be.a(akeyless.GitlabTargetDetails);
    });

    it('should have the property gitlabAccessToken (base name: "gitlab_access_token")', function() {
      // uncomment below and update the code to test the property gitlabAccessToken
      //var instane = new akeyless.GitlabTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property gitlabCertificate (base name: "gitlab_certificate")', function() {
      // uncomment below and update the code to test the property gitlabCertificate
      //var instane = new akeyless.GitlabTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property gitlabUrl (base name: "gitlab_url")', function() {
      // uncomment below and update the code to test the property gitlabUrl
      //var instane = new akeyless.GitlabTargetDetails();
      //expect(instance).to.be();
    });

  });

}));
