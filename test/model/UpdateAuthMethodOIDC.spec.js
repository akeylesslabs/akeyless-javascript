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
    instance = new akeyless.UpdateAuthMethodOIDC();
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

  describe('UpdateAuthMethodOIDC', function() {
    it('should create an instance of UpdateAuthMethodOIDC', function() {
      // uncomment below and update the code to test UpdateAuthMethodOIDC
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be.a(akeyless.UpdateAuthMethodOIDC);
    });

    it('should have the property accessExpires (base name: "access-expires")', function() {
      // uncomment below and update the code to test the property accessExpires
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

    it('should have the property allowedRedirectUri (base name: "allowed-redirect-uri")', function() {
      // uncomment below and update the code to test the property allowedRedirectUri
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

    it('should have the property boundIps (base name: "bound-ips")', function() {
      // uncomment below and update the code to test the property boundIps
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client-id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

    it('should have the property clientSecret (base name: "client-secret")', function() {
      // uncomment below and update the code to test the property clientSecret
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

    it('should have the property forceSubClaims (base name: "force-sub-claims")', function() {
      // uncomment below and update the code to test the property forceSubClaims
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

    it('should have the property issuer (base name: "issuer")', function() {
      // uncomment below and update the code to test the property issuer
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

    it('should have the property newName (base name: "new-name")', function() {
      // uncomment below and update the code to test the property newName
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

    it('should have the property uniqueIdentifier (base name: "unique-identifier")', function() {
      // uncomment below and update the code to test the property uniqueIdentifier
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new akeyless.UpdateAuthMethodOIDC();
      //expect(instance).to.be();
    });

  });

}));
