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
    instance = new akeyless.DynamicSecretCreateRedis();
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

  describe('DynamicSecretCreateRedis', function() {
    it('should create an instance of DynamicSecretCreateRedis', function() {
      // uncomment below and update the code to test DynamicSecretCreateRedis
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be.a(akeyless.DynamicSecretCreateRedis);
    });

    it('should have the property aclRules (base name: "acl-rules")', function() {
      // uncomment below and update the code to test the property aclRules
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property deleteProtection (base name: "delete_protection")', function() {
      // uncomment below and update the code to test the property deleteProtection
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property passwordLength (base name: "password-length")', function() {
      // uncomment below and update the code to test the property passwordLength
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property producerEncryptionKeyName (base name: "producer-encryption-key-name")', function() {
      // uncomment below and update the code to test the property producerEncryptionKeyName
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property ssl (base name: "ssl")', function() {
      // uncomment below and update the code to test the property ssl
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property sslCertificate (base name: "ssl-certificate")', function() {
      // uncomment below and update the code to test the property sslCertificate
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property targetName (base name: "target-name")', function() {
      // uncomment below and update the code to test the property targetName
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property userTtl (base name: "user-ttl")', function() {
      // uncomment below and update the code to test the property userTtl
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new akeyless.DynamicSecretCreateRedis();
      //expect(instance).to.be();
    });

  });

}));
