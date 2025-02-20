/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
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
    instance = new akeyless.GenerateCA();
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

  describe('GenerateCA', function() {
    it('should create an instance of GenerateCA', function() {
      // uncomment below and update the code to test GenerateCA
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be.a(akeyless.GenerateCA);
    });

    it('should have the property alg (base name: "alg")', function() {
      // uncomment below and update the code to test the property alg
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be();
    });

    it('should have the property allowedDomains (base name: "allowed-domains")', function() {
      // uncomment below and update the code to test the property allowedDomains
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be();
    });

    it('should have the property deleteProtection (base name: "delete_protection")', function() {
      // uncomment below and update the code to test the property deleteProtection
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be();
    });

    it('should have the property extendedKeyUsage (base name: "extended-key-usage")', function() {
      // uncomment below and update the code to test the property extendedKeyUsage
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be();
    });

    it('should have the property keyType (base name: "key-type")', function() {
      // uncomment below and update the code to test the property keyType
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be();
    });

    it('should have the property maxPathLen (base name: "max-path-len")', function() {
      // uncomment below and update the code to test the property maxPathLen
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be();
    });

    it('should have the property pkiChainName (base name: "pki-chain-name")', function() {
      // uncomment below and update the code to test the property pkiChainName
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be();
    });

    it('should have the property protectionKeyName (base name: "protection-key-name")', function() {
      // uncomment below and update the code to test the property protectionKeyName
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be();
    });

    it('should have the property splitLevel (base name: "split-level")', function() {
      // uncomment below and update the code to test the property splitLevel
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be();
    });

    it('should have the property ttl (base name: "ttl")', function() {
      // uncomment below and update the code to test the property ttl
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instance = new akeyless.GenerateCA();
      //expect(instance).to.be();
    });

  });

}));
