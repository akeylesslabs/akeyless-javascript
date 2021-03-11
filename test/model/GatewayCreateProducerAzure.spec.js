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
    instance = new akeyless.GatewayCreateProducerAzure();
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

  describe('GatewayCreateProducerAzure', function() {
    it('should create an instance of GatewayCreateProducerAzure', function() {
      // uncomment below and update the code to test GatewayCreateProducerAzure
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be.a(akeyless.GatewayCreateProducerAzure);
    });

    it('should have the property appObjId (base name: "app-obj-id")', function() {
      // uncomment below and update the code to test the property appObjId
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client-id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property clientSecret (base name: "client-secret")', function() {
      // uncomment below and update the code to test the property clientSecret
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property gatewayUrl (base name: "gateway-url")', function() {
      // uncomment below and update the code to test the property gatewayUrl
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property producerEncryptionKeyName (base name: "producer-encryption-key-name")', function() {
      // uncomment below and update the code to test the property producerEncryptionKeyName
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenant-id")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property userGroupObjId (base name: "user-group-obj-id")', function() {
      // uncomment below and update the code to test the property userGroupObjId
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property userPortalAccess (base name: "user-portal-access")', function() {
      // uncomment below and update the code to test the property userPortalAccess
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property userPrincipalName (base name: "user-principal-name")', function() {
      // uncomment below and update the code to test the property userPrincipalName
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property userProgrammaticAccess (base name: "user-programmatic-access")', function() {
      // uncomment below and update the code to test the property userProgrammaticAccess
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property userRoleTemplateId (base name: "user-role-template-id")', function() {
      // uncomment below and update the code to test the property userRoleTemplateId
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

    it('should have the property userTtl (base name: "user-ttl")', function() {
      // uncomment below and update the code to test the property userTtl
      //var instane = new akeyless.GatewayCreateProducerAzure();
      //expect(instance).to.be();
    });

  });

}));
