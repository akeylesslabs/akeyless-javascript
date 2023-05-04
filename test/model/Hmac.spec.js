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
    instance = new akeyless.Hmac();
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

  describe('Hmac', function() {
    it('should create an instance of Hmac', function() {
      // uncomment below and update the code to test Hmac
      //var instane = new akeyless.Hmac();
      //expect(instance).to.be.a(akeyless.Hmac);
    });

    it('should have the property displayId (base name: "display-id")', function() {
      // uncomment below and update the code to test the property displayId
      //var instane = new akeyless.Hmac();
      //expect(instance).to.be();
    });

    it('should have the property hashFunction (base name: "hash-function")', function() {
      // uncomment below and update the code to test the property hashFunction
      //var instane = new akeyless.Hmac();
      //expect(instance).to.be();
    });

    it('should have the property inputFormat (base name: "input-format")', function() {
      // uncomment below and update the code to test the property inputFormat
      //var instane = new akeyless.Hmac();
      //expect(instance).to.be();
    });

    it('should have the property itemId (base name: "item-id")', function() {
      // uncomment below and update the code to test the property itemId
      //var instane = new akeyless.Hmac();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new akeyless.Hmac();
      //expect(instance).to.be();
    });

    it('should have the property keyName (base name: "key-name")', function() {
      // uncomment below and update the code to test the property keyName
      //var instane = new akeyless.Hmac();
      //expect(instance).to.be();
    });

    it('should have the property plaintext (base name: "plaintext")', function() {
      // uncomment below and update the code to test the property plaintext
      //var instane = new akeyless.Hmac();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.Hmac();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.Hmac();
      //expect(instance).to.be();
    });

  });

}));
