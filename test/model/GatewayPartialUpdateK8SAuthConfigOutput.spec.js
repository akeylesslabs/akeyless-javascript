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
    instance = new akeyless.GatewayPartialUpdateK8SAuthConfigOutput();
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

  describe('GatewayPartialUpdateK8SAuthConfigOutput', function() {
    it('should create an instance of GatewayPartialUpdateK8SAuthConfigOutput', function() {
      // uncomment below and update the code to test GatewayPartialUpdateK8SAuthConfigOutput
      //var instane = new akeyless.GatewayPartialUpdateK8SAuthConfigOutput();
      //expect(instance).to.be.a(akeyless.GatewayPartialUpdateK8SAuthConfigOutput);
    });

    it('should have the property clusterId (base name: "cluster_id")', function() {
      // uncomment below and update the code to test the property clusterId
      //var instane = new akeyless.GatewayPartialUpdateK8SAuthConfigOutput();
      //expect(instance).to.be();
    });

    it('should have the property partsChange (base name: "parts_change")', function() {
      // uncomment below and update the code to test the property partsChange
      //var instane = new akeyless.GatewayPartialUpdateK8SAuthConfigOutput();
      //expect(instance).to.be();
    });

    it('should have the property totalHash (base name: "total_hash")', function() {
      // uncomment below and update the code to test the property totalHash
      //var instane = new akeyless.GatewayPartialUpdateK8SAuthConfigOutput();
      //expect(instance).to.be();
    });

  });

}));
