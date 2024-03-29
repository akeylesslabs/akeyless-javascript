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
    instance = new akeyless.GatewayMigratePersonalItems();
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

  describe('GatewayMigratePersonalItems', function() {
    it('should create an instance of GatewayMigratePersonalItems', function() {
      // uncomment below and update the code to test GatewayMigratePersonalItems
      //var instane = new akeyless.GatewayMigratePersonalItems();
      //expect(instance).to.be.a(akeyless.GatewayMigratePersonalItems);
    });

    it('should have the property _1passwordEmail (base name: "1password-email")', function() {
      // uncomment below and update the code to test the property _1passwordEmail
      //var instane = new akeyless.GatewayMigratePersonalItems();
      //expect(instance).to.be();
    });

    it('should have the property _1passwordPassword (base name: "1password-password")', function() {
      // uncomment below and update the code to test the property _1passwordPassword
      //var instane = new akeyless.GatewayMigratePersonalItems();
      //expect(instance).to.be();
    });

    it('should have the property _1passwordSecretKey (base name: "1password-secret-key")', function() {
      // uncomment below and update the code to test the property _1passwordSecretKey
      //var instane = new akeyless.GatewayMigratePersonalItems();
      //expect(instance).to.be();
    });

    it('should have the property _1passwordUrl (base name: "1password-url")', function() {
      // uncomment below and update the code to test the property _1passwordUrl
      //var instane = new akeyless.GatewayMigratePersonalItems();
      //expect(instance).to.be();
    });

    it('should have the property _1passwordVaults (base name: "1password-vaults")', function() {
      // uncomment below and update the code to test the property _1passwordVaults
      //var instane = new akeyless.GatewayMigratePersonalItems();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new akeyless.GatewayMigratePersonalItems();
      //expect(instance).to.be();
    });

    it('should have the property protectionKey (base name: "protection-key")', function() {
      // uncomment below and update the code to test the property protectionKey
      //var instane = new akeyless.GatewayMigratePersonalItems();
      //expect(instance).to.be();
    });

    it('should have the property targetLocation (base name: "target-location")', function() {
      // uncomment below and update the code to test the property targetLocation
      //var instane = new akeyless.GatewayMigratePersonalItems();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.GatewayMigratePersonalItems();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new akeyless.GatewayMigratePersonalItems();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.GatewayMigratePersonalItems();
      //expect(instance).to.be();
    });

  });

}));
