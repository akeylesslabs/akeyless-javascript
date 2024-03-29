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
    instance = new akeyless.GatewayCreateProducerMySQL();
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

  describe('GatewayCreateProducerMySQL', function() {
    it('should create an instance of GatewayCreateProducerMySQL', function() {
      // uncomment below and update the code to test GatewayCreateProducerMySQL
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be.a(akeyless.GatewayCreateProducerMySQL);
    });

    it('should have the property dbServerCertificates (base name: "db-server-certificates")', function() {
      // uncomment below and update the code to test the property dbServerCertificates
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

    it('should have the property dbServerName (base name: "db-server-name")', function() {
      // uncomment below and update the code to test the property dbServerName
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

    it('should have the property gatewayUrl (base name: "gateway-url")', function() {
      // uncomment below and update the code to test the property gatewayUrl
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

    it('should have the property mysqlDbname (base name: "mysql-dbname")', function() {
      // uncomment below and update the code to test the property mysqlDbname
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

    it('should have the property mysqlHost (base name: "mysql-host")', function() {
      // uncomment below and update the code to test the property mysqlHost
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

    it('should have the property mysqlPassword (base name: "mysql-password")', function() {
      // uncomment below and update the code to test the property mysqlPassword
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

    it('should have the property mysqlPort (base name: "mysql-port")', function() {
      // uncomment below and update the code to test the property mysqlPort
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

    it('should have the property mysqlScreationStatements (base name: "mysql-screation-statements")', function() {
      // uncomment below and update the code to test the property mysqlScreationStatements
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

    it('should have the property mysqlUsername (base name: "mysql-username")', function() {
      // uncomment below and update the code to test the property mysqlUsername
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

    it('should have the property producerEncryptionKeyName (base name: "producer-encryption-key-name")', function() {
      // uncomment below and update the code to test the property producerEncryptionKeyName
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

    it('should have the property userTtl (base name: "user-ttl")', function() {
      // uncomment below and update the code to test the property userTtl
      //var instane = new akeyless.GatewayCreateProducerMySQL();
      //expect(instance).to.be();
    });

  });

}));
