/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
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
    instance = new akeyless.StaticSecretSync();
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

  describe('StaticSecretSync', function() {
    it('should create an instance of StaticSecretSync', function() {
      // uncomment below and update the code to test StaticSecretSync
      //var instance = new akeyless.StaticSecretSync();
      //expect(instance).to.be.a(akeyless.StaticSecretSync);
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instance = new akeyless.StaticSecretSync();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new akeyless.StaticSecretSync();
      //expect(instance).to.be();
    });

    it('should have the property namespace (base name: "namespace")', function() {
      // uncomment below and update the code to test the property namespace
      //var instance = new akeyless.StaticSecretSync();
      //expect(instance).to.be();
    });

    it('should have the property remoteSecretName (base name: "remote-secret-name")', function() {
      // uncomment below and update the code to test the property remoteSecretName
      //var instance = new akeyless.StaticSecretSync();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new akeyless.StaticSecretSync();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instance = new akeyless.StaticSecretSync();
      //expect(instance).to.be();
    });

    it('should have the property uscName (base name: "usc-name")', function() {
      // uncomment below and update the code to test the property uscName
      //var instance = new akeyless.StaticSecretSync();
      //expect(instance).to.be();
    });

  });

}));
