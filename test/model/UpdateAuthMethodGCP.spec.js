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
    instance = new akeyless.UpdateAuthMethodGCP();
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

  describe('UpdateAuthMethodGCP', function() {
    it('should create an instance of UpdateAuthMethodGCP', function() {
      // uncomment below and update the code to test UpdateAuthMethodGCP
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be.a(akeyless.UpdateAuthMethodGCP);
    });

    it('should have the property accessExpires (base name: "access-expires")', function() {
      // uncomment below and update the code to test the property accessExpires
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property audience (base name: "audience")', function() {
      // uncomment below and update the code to test the property audience
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property boundIps (base name: "bound-ips")', function() {
      // uncomment below and update the code to test the property boundIps
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property boundLabels (base name: "bound-labels")', function() {
      // uncomment below and update the code to test the property boundLabels
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property boundProjects (base name: "bound-projects")', function() {
      // uncomment below and update the code to test the property boundProjects
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property boundRegions (base name: "bound-regions")', function() {
      // uncomment below and update the code to test the property boundRegions
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property boundServiceAccounts (base name: "bound-service-accounts")', function() {
      // uncomment below and update the code to test the property boundServiceAccounts
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property boundZones (base name: "bound-zones")', function() {
      // uncomment below and update the code to test the property boundZones
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property forceSubClaims (base name: "force-sub-claims")', function() {
      // uncomment below and update the code to test the property forceSubClaims
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property newName (base name: "new-name")', function() {
      // uncomment below and update the code to test the property newName
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property serviceAccountCredsData (base name: "service-account-creds-data")', function() {
      // uncomment below and update the code to test the property serviceAccountCredsData
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new akeyless.UpdateAuthMethodGCP();
      //expect(instance).to.be();
    });

  });

}));
