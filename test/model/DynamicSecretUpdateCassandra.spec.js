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
    instance = new akeyless.DynamicSecretUpdateCassandra();
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

  describe('DynamicSecretUpdateCassandra', function() {
    it('should create an instance of DynamicSecretUpdateCassandra', function() {
      // uncomment below and update the code to test DynamicSecretUpdateCassandra
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be.a(akeyless.DynamicSecretUpdateCassandra);
    });

    it('should have the property cassandraCreationStatements (base name: "cassandra-creation-statements")', function() {
      // uncomment below and update the code to test the property cassandraCreationStatements
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property cassandraHosts (base name: "cassandra-hosts")', function() {
      // uncomment below and update the code to test the property cassandraHosts
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property cassandraPassword (base name: "cassandra-password")', function() {
      // uncomment below and update the code to test the property cassandraPassword
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property cassandraPort (base name: "cassandra-port")', function() {
      // uncomment below and update the code to test the property cassandraPort
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property cassandraUsername (base name: "cassandra-username")', function() {
      // uncomment below and update the code to test the property cassandraUsername
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property deleteProtection (base name: "delete_protection")', function() {
      // uncomment below and update the code to test the property deleteProtection
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property newName (base name: "new-name")', function() {
      // uncomment below and update the code to test the property newName
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property passwordLength (base name: "password-length")', function() {
      // uncomment below and update the code to test the property passwordLength
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property producerEncryptionKeyName (base name: "producer-encryption-key-name")', function() {
      // uncomment below and update the code to test the property producerEncryptionKeyName
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property ssl (base name: "ssl")', function() {
      // uncomment below and update the code to test the property ssl
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property sslCertificate (base name: "ssl-certificate")', function() {
      // uncomment below and update the code to test the property sslCertificate
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property targetName (base name: "target-name")', function() {
      // uncomment below and update the code to test the property targetName
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

    it('should have the property userTtl (base name: "user-ttl")', function() {
      // uncomment below and update the code to test the property userTtl
      //var instane = new akeyless.DynamicSecretUpdateCassandra();
      //expect(instance).to.be();
    });

  });

}));
