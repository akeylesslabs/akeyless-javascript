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
    instance = new akeyless.CreateManagedKey();
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

  describe('CreateManagedKey', function() {
    it('should create an instance of CreateManagedKey', function() {
      // uncomment below and update the code to test CreateManagedKey
      //var instane = new akeyless.CreateManagedKey();
      //expect(instance).to.be.a(akeyless.CreateManagedKey);
    });

    it('should have the property alg (base name: "alg")', function() {
      // uncomment below and update the code to test the property alg
      //var instane = new akeyless.CreateManagedKey();
      //expect(instance).to.be();
    });

    it('should have the property managedKeyValue (base name: "managed-key-value")', function() {
      // uncomment below and update the code to test the property managedKeyValue
      //var instane = new akeyless.CreateManagedKey();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new akeyless.CreateManagedKey();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.CreateManagedKey();
      //expect(instance).to.be();
    });

    it('should have the property protectionKey (base name: "protection_key")', function() {
      // uncomment below and update the code to test the property protectionKey
      //var instane = new akeyless.CreateManagedKey();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new akeyless.CreateManagedKey();
      //expect(instance).to.be();
    });

    it('should have the property targetName (base name: "target-name")', function() {
      // uncomment below and update the code to test the property targetName
      //var instane = new akeyless.CreateManagedKey();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.CreateManagedKey();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.CreateManagedKey();
      //expect(instance).to.be();
    });

  });

}));