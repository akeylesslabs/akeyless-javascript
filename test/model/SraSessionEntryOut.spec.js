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
    instance = new akeyless.SraSessionEntryOut();
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

  describe('SraSessionEntryOut', function() {
    it('should create an instance of SraSessionEntryOut', function() {
      // uncomment below and update the code to test SraSessionEntryOut
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be.a(akeyless.SraSessionEntryOut);
    });

    it('should have the property accessId (base name: "access_id")', function() {
      // uncomment below and update the code to test the property accessId
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property clientType (base name: "client_type")', function() {
      // uncomment below and update the code to test the property clientType
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property clusterUniqueId (base name: "cluster_unique_id")', function() {
      // uncomment below and update the code to test the property clusterUniqueId
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property connectionType (base name: "connection_type")', function() {
      // uncomment below and update the code to test the property connectionType
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "end_time")', function() {
      // uncomment below and update the code to test the property endTime
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property errorMsg (base name: "error_msg")', function() {
      // uncomment below and update the code to test the property errorMsg
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property gatewayName (base name: "gateway_name")', function() {
      // uncomment below and update the code to test the property gatewayName
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property instanceId (base name: "instance_id")', function() {
      // uncomment below and update the code to test the property instanceId
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property secretName (base name: "secret_name")', function() {
      // uncomment below and update the code to test the property secretName
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property sessionId (base name: "session_id")', function() {
      // uncomment below and update the code to test the property sessionId
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "start_time")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property targetHost (base name: "target_host")', function() {
      // uncomment below and update the code to test the property targetHost
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property ttl (base name: "ttl")', function() {
      // uncomment below and update the code to test the property ttl
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

    it('should have the property userIdentifier (base name: "user_identifier")', function() {
      // uncomment below and update the code to test the property userIdentifier
      //var instane = new akeyless.SraSessionEntryOut();
      //expect(instance).to.be();
    });

  });

}));
