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
    instance = new akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle();
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

  describe('GwUpdateRemoteAccessSessionLogsGoogleChronicle', function() {
    it('should create an instance of GwUpdateRemoteAccessSessionLogsGoogleChronicle', function() {
      // uncomment below and update the code to test GwUpdateRemoteAccessSessionLogsGoogleChronicle
      //var instane = new akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle();
      //expect(instance).to.be.a(akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle);
    });

    it('should have the property customerId (base name: "customer-id")', function() {
      // uncomment below and update the code to test the property customerId
      //var instane = new akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle();
      //expect(instance).to.be();
    });

    it('should have the property enable (base name: "enable")', function() {
      // uncomment below and update the code to test the property enable
      //var instane = new akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle();
      //expect(instance).to.be();
    });

    it('should have the property gcpKey (base name: "gcp-key")', function() {
      // uncomment below and update the code to test the property gcpKey
      //var instane = new akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle();
      //expect(instance).to.be();
    });

    it('should have the property logType (base name: "log-type")', function() {
      // uncomment below and update the code to test the property logType
      //var instane = new akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle();
      //expect(instance).to.be();
    });

    it('should have the property outputFormat (base name: "output-format")', function() {
      // uncomment below and update the code to test the property outputFormat
      //var instane = new akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle();
      //expect(instance).to.be();
    });

    it('should have the property pullInterval (base name: "pull-interval")', function() {
      // uncomment below and update the code to test the property pullInterval
      //var instane = new akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "region")', function() {
      // uncomment below and update the code to test the property region
      //var instane = new akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle();
      //expect(instance).to.be();
    });

  });

}));
