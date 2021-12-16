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
    instance = new akeyless.ConfigHash();
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

  describe('ConfigHash', function() {
    it('should create an instance of ConfigHash', function() {
      // uncomment below and update the code to test ConfigHash
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be.a(akeyless.ConfigHash);
    });

    it('should have the property admins (base name: "admins")', function() {
      // uncomment below and update the code to test the property admins
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

    it('should have the property cache (base name: "cache")', function() {
      // uncomment below and update the code to test the property cache
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

    it('should have the property customerFragements (base name: "customer_fragements")', function() {
      // uncomment below and update the code to test the property customerFragements
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

    it('should have the property general (base name: "general")', function() {
      // uncomment below and update the code to test the property general
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

    it('should have the property k8sAuths (base name: "k8s_auths")', function() {
      // uncomment below and update the code to test the property k8sAuths
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

    it('should have the property kmip (base name: "kmip")', function() {
      // uncomment below and update the code to test the property kmip
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

    it('should have the property ldap (base name: "ldap")', function() {
      // uncomment below and update the code to test the property ldap
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

    it('should have the property leadership (base name: "leadership")', function() {
      // uncomment below and update the code to test the property leadership
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

    it('should have the property logForwarding (base name: "log_forwarding")', function() {
      // uncomment below and update the code to test the property logForwarding
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

    it('should have the property migrations (base name: "migrations")', function() {
      // uncomment below and update the code to test the property migrations
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

    it('should have the property producers (base name: "producers")', function() {
      // uncomment below and update the code to test the property producers
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

    it('should have the property rotators (base name: "rotators")', function() {
      // uncomment below and update the code to test the property rotators
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

    it('should have the property saml (base name: "saml")', function() {
      // uncomment below and update the code to test the property saml
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

    it('should have the property universalIdentity (base name: "universal_identity")', function() {
      // uncomment below and update the code to test the property universalIdentity
      //var instane = new akeyless.ConfigHash();
      //expect(instance).to.be();
    });

  });

}));