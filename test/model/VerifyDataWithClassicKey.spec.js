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
    instance = new akeyless.VerifyDataWithClassicKey();
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

  describe('VerifyDataWithClassicKey', function() {
    it('should create an instance of VerifyDataWithClassicKey', function() {
      // uncomment below and update the code to test VerifyDataWithClassicKey
      //var instane = new akeyless.VerifyDataWithClassicKey();
      //expect(instance).to.be.a(akeyless.VerifyDataWithClassicKey);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new akeyless.VerifyDataWithClassicKey();
      //expect(instance).to.be();
    });

    it('should have the property displayId (base name: "display-id")', function() {
      // uncomment below and update the code to test the property displayId
      //var instane = new akeyless.VerifyDataWithClassicKey();
      //expect(instance).to.be();
    });

    it('should have the property hashed (base name: "hashed")', function() {
      // uncomment below and update the code to test the property hashed
      //var instane = new akeyless.VerifyDataWithClassicKey();
      //expect(instance).to.be();
    });

    it('should have the property hashingMethod (base name: "hashing-method")', function() {
      // uncomment below and update the code to test the property hashingMethod
      //var instane = new akeyless.VerifyDataWithClassicKey();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new akeyless.VerifyDataWithClassicKey();
      //expect(instance).to.be();
    });

    it('should have the property keyName (base name: "key-name")', function() {
      // uncomment below and update the code to test the property keyName
      //var instane = new akeyless.VerifyDataWithClassicKey();
      //expect(instance).to.be();
    });

    it('should have the property signature (base name: "signature")', function() {
      // uncomment below and update the code to test the property signature
      //var instane = new akeyless.VerifyDataWithClassicKey();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.VerifyDataWithClassicKey();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.VerifyDataWithClassicKey();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new akeyless.VerifyDataWithClassicKey();
      //expect(instance).to.be();
    });

  });

}));
