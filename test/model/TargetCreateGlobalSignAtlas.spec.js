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
    instance = new akeyless.TargetCreateGlobalSignAtlas();
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

  describe('TargetCreateGlobalSignAtlas', function() {
    it('should create an instance of TargetCreateGlobalSignAtlas', function() {
      // uncomment below and update the code to test TargetCreateGlobalSignAtlas
      //var instane = new akeyless.TargetCreateGlobalSignAtlas();
      //expect(instance).to.be.a(akeyless.TargetCreateGlobalSignAtlas);
    });

    it('should have the property apiKey (base name: "api-key")', function() {
      // uncomment below and update the code to test the property apiKey
      //var instane = new akeyless.TargetCreateGlobalSignAtlas();
      //expect(instance).to.be();
    });

    it('should have the property apiSecret (base name: "api-secret")', function() {
      // uncomment below and update the code to test the property apiSecret
      //var instane = new akeyless.TargetCreateGlobalSignAtlas();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new akeyless.TargetCreateGlobalSignAtlas();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new akeyless.TargetCreateGlobalSignAtlas();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new akeyless.TargetCreateGlobalSignAtlas();
      //expect(instance).to.be();
    });

    it('should have the property maxVersions (base name: "max-versions")', function() {
      // uncomment below and update the code to test the property maxVersions
      //var instane = new akeyless.TargetCreateGlobalSignAtlas();
      //expect(instance).to.be();
    });

    it('should have the property mtlsCertDataBase64 (base name: "mtls-cert-data-base64")', function() {
      // uncomment below and update the code to test the property mtlsCertDataBase64
      //var instane = new akeyless.TargetCreateGlobalSignAtlas();
      //expect(instance).to.be();
    });

    it('should have the property mtlsKeyDataBase64 (base name: "mtls-key-data-base64")', function() {
      // uncomment below and update the code to test the property mtlsKeyDataBase64
      //var instane = new akeyless.TargetCreateGlobalSignAtlas();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.TargetCreateGlobalSignAtlas();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "timeout")', function() {
      // uncomment below and update the code to test the property timeout
      //var instane = new akeyless.TargetCreateGlobalSignAtlas();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.TargetCreateGlobalSignAtlas();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.TargetCreateGlobalSignAtlas();
      //expect(instance).to.be();
    });

  });

}));