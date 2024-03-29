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
    instance = new akeyless.Tokenize();
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

  describe('Tokenize', function() {
    it('should create an instance of Tokenize', function() {
      // uncomment below and update the code to test Tokenize
      //var instane = new akeyless.Tokenize();
      //expect(instance).to.be.a(akeyless.Tokenize);
    });

    it('should have the property plaintext (base name: "plaintext")', function() {
      // uncomment below and update the code to test the property plaintext
      //var instane = new akeyless.Tokenize();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.Tokenize();
      //expect(instance).to.be();
    });

    it('should have the property tokenizerName (base name: "tokenizer-name")', function() {
      // uncomment below and update the code to test the property tokenizerName
      //var instane = new akeyless.Tokenize();
      //expect(instance).to.be();
    });

    it('should have the property tweak (base name: "tweak")', function() {
      // uncomment below and update the code to test the property tweak
      //var instane = new akeyless.Tokenize();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.Tokenize();
      //expect(instance).to.be();
    });

  });

}));
