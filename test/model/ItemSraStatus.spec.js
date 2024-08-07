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
    instance = new akeyless.ItemSraStatus();
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

  describe('ItemSraStatus', function() {
    it('should create an instance of ItemSraStatus', function() {
      // uncomment below and update the code to test ItemSraStatus
      //var instane = new akeyless.ItemSraStatus();
      //expect(instance).to.be.a(akeyless.ItemSraStatus);
    });

    it('should have the property bastionAccessId (base name: "bastion_access_id")', function() {
      // uncomment below and update the code to test the property bastionAccessId
      //var instane = new akeyless.ItemSraStatus();
      //expect(instance).to.be();
    });

    it('should have the property bastionClusterName (base name: "bastion_cluster_name")', function() {
      // uncomment below and update the code to test the property bastionClusterName
      //var instane = new akeyless.ItemSraStatus();
      //expect(instance).to.be();
    });

    it('should have the property bastionInstanceId (base name: "bastion_instance_id")', function() {
      // uncomment below and update the code to test the property bastionInstanceId
      //var instane = new akeyless.ItemSraStatus();
      //expect(instance).to.be();
    });

    it('should have the property isInUsed (base name: "is_in_used")', function() {
      // uncomment below and update the code to test the property isInUsed
      //var instane = new akeyless.ItemSraStatus();
      //expect(instance).to.be();
    });

    it('should have the property sessionId (base name: "session_id")', function() {
      // uncomment below and update the code to test the property sessionId
      //var instane = new akeyless.ItemSraStatus();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new akeyless.ItemSraStatus();
      //expect(instance).to.be();
    });

  });

}));