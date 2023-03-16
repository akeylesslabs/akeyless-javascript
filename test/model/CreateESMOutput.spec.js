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
    instance = new akeyless.CreateESMOutput();
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

  describe('CreateESMOutput', function() {
    it('should create an instance of CreateESMOutput', function() {
      // uncomment below and update the code to test CreateESMOutput
      //var instane = new akeyless.CreateESMOutput();
      //expect(instance).to.be.a(akeyless.CreateESMOutput);
    });

    it('should have the property externalSecretManagerId (base name: "external_secret_manager_id")', function() {
      // uncomment below and update the code to test the property externalSecretManagerId
      //var instane = new akeyless.CreateESMOutput();
      //expect(instance).to.be();
    });

    it('should have the property externalSecretManagerName (base name: "external_secret_manager_name")', function() {
      // uncomment below and update the code to test the property externalSecretManagerName
      //var instane = new akeyless.CreateESMOutput();
      //expect(instance).to.be();
    });

  });

}));
