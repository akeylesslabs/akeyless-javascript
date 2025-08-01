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
    instance = new akeyless.UscSyncInfo();
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

  describe('UscSyncInfo', function() {
    it('should create an instance of UscSyncInfo', function() {
      // uncomment below and update the code to test UscSyncInfo
      //var instance = new akeyless.UscSyncInfo();
      //expect(instance).to.be.a(akeyless.UscSyncInfo);
    });

    it('should have the property jqSecretFilter (base name: "jq_secret_filter")', function() {
      // uncomment below and update the code to test the property jqSecretFilter
      //var instance = new akeyless.UscSyncInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastError (base name: "last_error")', function() {
      // uncomment below and update the code to test the property lastError
      //var instance = new akeyless.UscSyncInfo();
      //expect(instance).to.be();
    });

    it('should have the property namespace (base name: "namespace")', function() {
      // uncomment below and update the code to test the property namespace
      //var instance = new akeyless.UscSyncInfo();
      //expect(instance).to.be();
    });

    it('should have the property secretId (base name: "secret_id")', function() {
      // uncomment below and update the code to test the property secretId
      //var instance = new akeyless.UscSyncInfo();
      //expect(instance).to.be();
    });

    it('should have the property secretName (base name: "secret_name")', function() {
      // uncomment below and update the code to test the property secretName
      //var instance = new akeyless.UscSyncInfo();
      //expect(instance).to.be();
    });

  });

}));
