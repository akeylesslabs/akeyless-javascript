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
    instance = new akeyless.GatewayUpdateProducerRdp();
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

  describe('GatewayUpdateProducerRdp', function() {
    it('should create an instance of GatewayUpdateProducerRdp', function() {
      // uncomment below and update the code to test GatewayUpdateProducerRdp
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be.a(akeyless.GatewayUpdateProducerRdp);
    });

    it('should have the property fixedUserOnly (base name: "fixed-user-only")', function() {
      // uncomment below and update the code to test the property fixedUserOnly
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property newName (base name: "new-name")', function() {
      // uncomment below and update the code to test the property newName
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property producerEncryptionKeyName (base name: "producer-encryption-key-name")', function() {
      // uncomment below and update the code to test the property producerEncryptionKeyName
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property rdpAdminName (base name: "rdp-admin-name")', function() {
      // uncomment below and update the code to test the property rdpAdminName
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property rdpAdminPwd (base name: "rdp-admin-pwd")', function() {
      // uncomment below and update the code to test the property rdpAdminPwd
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property rdpHostName (base name: "rdp-host-name")', function() {
      // uncomment below and update the code to test the property rdpHostName
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property rdpHostPort (base name: "rdp-host-port")', function() {
      // uncomment below and update the code to test the property rdpHostPort
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property rdpUserGroups (base name: "rdp-user-groups")', function() {
      // uncomment below and update the code to test the property rdpUserGroups
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessAllowExternalUser (base name: "secure-access-allow-external-user")', function() {
      // uncomment below and update the code to test the property secureAccessAllowExternalUser
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessEnable (base name: "secure-access-enable")', function() {
      // uncomment below and update the code to test the property secureAccessEnable
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessHost (base name: "secure-access-host")', function() {
      // uncomment below and update the code to test the property secureAccessHost
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessRdpDomain (base name: "secure-access-rdp-domain")', function() {
      // uncomment below and update the code to test the property secureAccessRdpDomain
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessRdpUser (base name: "secure-access-rdp-user")', function() {
      // uncomment below and update the code to test the property secureAccessRdpUser
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property targetName (base name: "target-name")', function() {
      // uncomment below and update the code to test the property targetName
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property userTtl (base name: "user-ttl")', function() {
      // uncomment below and update the code to test the property userTtl
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new akeyless.GatewayUpdateProducerRdp();
      //expect(instance).to.be();
    });

  });

}));
