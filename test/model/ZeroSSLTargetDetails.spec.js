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
    instance = new akeyless.ZeroSSLTargetDetails();
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

  describe('ZeroSSLTargetDetails', function() {
    it('should create an instance of ZeroSSLTargetDetails', function() {
      // uncomment below and update the code to test ZeroSSLTargetDetails
      //var instane = new akeyless.ZeroSSLTargetDetails();
      //expect(instance).to.be.a(akeyless.ZeroSSLTargetDetails);
    });

    it('should have the property apiKey (base name: "api_key")', function() {
      // uncomment below and update the code to test the property apiKey
      //var instane = new akeyless.ZeroSSLTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property imapFqdn (base name: "imap_fqdn")', function() {
      // uncomment below and update the code to test the property imapFqdn
      //var instane = new akeyless.ZeroSSLTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property imapPassword (base name: "imap_password")', function() {
      // uncomment below and update the code to test the property imapPassword
      //var instane = new akeyless.ZeroSSLTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property imapPort (base name: "imap_port")', function() {
      // uncomment below and update the code to test the property imapPort
      //var instane = new akeyless.ZeroSSLTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property imapUser (base name: "imap_user")', function() {
      // uncomment below and update the code to test the property imapUser
      //var instane = new akeyless.ZeroSSLTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "timeout")', function() {
      // uncomment below and update the code to test the property timeout
      //var instane = new akeyless.ZeroSSLTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property validationEmail (base name: "validation_email")', function() {
      // uncomment below and update the code to test the property validationEmail
      //var instane = new akeyless.ZeroSSLTargetDetails();
      //expect(instance).to.be();
    });

  });

}));
