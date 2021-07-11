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
    instance = new akeyless.ManagedKeyDetailsInfo();
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

  describe('ManagedKeyDetailsInfo', function() {
    it('should create an instance of ManagedKeyDetailsInfo', function() {
      // uncomment below and update the code to test ManagedKeyDetailsInfo
      //var instane = new akeyless.ManagedKeyDetailsInfo();
      //expect(instance).to.be.a(akeyless.ManagedKeyDetailsInfo);
    });

    it('should have the property isEnabled (base name: "is_enabled")', function() {
      // uncomment below and update the code to test the property isEnabled
      //var instane = new akeyless.ManagedKeyDetailsInfo();
      //expect(instance).to.be();
    });

    it('should have the property isExternal (base name: "is_external")', function() {
      // uncomment below and update the code to test the property isExternal
      //var instane = new akeyless.ManagedKeyDetailsInfo();
      //expect(instance).to.be();
    });

    it('should have the property keyType (base name: "key_type")', function() {
      // uncomment below and update the code to test the property keyType
      //var instane = new akeyless.ManagedKeyDetailsInfo();
      //expect(instance).to.be();
    });

    it('should have the property targets (base name: "targets")', function() {
      // uncomment below and update the code to test the property targets
      //var instane = new akeyless.ManagedKeyDetailsInfo();
      //expect(instance).to.be();
    });

  });

}));