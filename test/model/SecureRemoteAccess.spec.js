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
    instance = new akeyless.SecureRemoteAccess();
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

  describe('SecureRemoteAccess', function() {
    it('should create an instance of SecureRemoteAccess', function() {
      // uncomment below and update the code to test SecureRemoteAccess
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be.a(akeyless.SecureRemoteAccess);
    });

    it('should have the property accountId (base name: "account_id")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property allowPortForwarding (base name: "allow_port_forwarding")', function() {
      // uncomment below and update the code to test the property allowPortForwarding
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property bastionApi (base name: "bastion_api")', function() {
      // uncomment below and update the code to test the property bastionApi
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property bastionIssuer (base name: "bastion_issuer")', function() {
      // uncomment below and update the code to test the property bastionIssuer
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property bastionIssuerId (base name: "bastion_issuer_id")', function() {
      // uncomment below and update the code to test the property bastionIssuerId
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property bastionSsh (base name: "bastion_ssh")', function() {
      // uncomment below and update the code to test the property bastionSsh
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property dashboardUrl (base name: "dashboard_url")', function() {
      // uncomment below and update the code to test the property dashboardUrl
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property dbName (base name: "db_name")', function() {
      // uncomment below and update the code to test the property dbName
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property domain (base name: "domain")', function() {
      // uncomment below and update the code to test the property domain
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property enable (base name: "enable")', function() {
      // uncomment below and update the code to test the property enable
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property endpoint (base name: "endpoint")', function() {
      // uncomment below and update the code to test the property endpoint
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property isCli (base name: "is_cli")', function() {
      // uncomment below and update the code to test the property isCli
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property isWeb (base name: "is_web")', function() {
      // uncomment below and update the code to test the property isWeb
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property isolated (base name: "isolated")', function() {
      // uncomment below and update the code to test the property isolated
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property _native (base name: "native")', function() {
      // uncomment below and update the code to test the property _native
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "region")', function() {
      // uncomment below and update the code to test the property region
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property schema (base name: "schema")', function() {
      // uncomment below and update the code to test the property schema
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property sshPassword (base name: "ssh_password")', function() {
      // uncomment below and update the code to test the property sshPassword
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property sshPrivateKey (base name: "ssh_private_key")', function() {
      // uncomment below and update the code to test the property sshPrivateKey
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property sshUser (base name: "ssh_user")', function() {
      // uncomment below and update the code to test the property sshUser
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new akeyless.SecureRemoteAccess();
      //expect(instance).to.be();
    });

  });

}));
