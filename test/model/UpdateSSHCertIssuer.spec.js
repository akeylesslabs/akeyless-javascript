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
    instance = new akeyless.UpdateSSHCertIssuer();
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

  describe('UpdateSSHCertIssuer', function() {
    it('should create an instance of UpdateSSHCertIssuer', function() {
      // uncomment below and update the code to test UpdateSSHCertIssuer
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be.a(akeyless.UpdateSSHCertIssuer);
    });

    it('should have the property addTag (base name: "add-tag")', function() {
      // uncomment below and update the code to test the property addTag
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property allowedUsers (base name: "allowed-users")', function() {
      // uncomment below and update the code to test the property allowedUsers
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property extensions (base name: "extensions")', function() {
      // uncomment below and update the code to test the property extensions
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property newName (base name: "new-name")', function() {
      // uncomment below and update the code to test the property newName
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property principals (base name: "principals")', function() {
      // uncomment below and update the code to test the property principals
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property rmTag (base name: "rm-tag")', function() {
      // uncomment below and update the code to test the property rmTag
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessBastionApi (base name: "secure-access-bastion-api")', function() {
      // uncomment below and update the code to test the property secureAccessBastionApi
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessBastionSsh (base name: "secure-access-bastion-ssh")', function() {
      // uncomment below and update the code to test the property secureAccessBastionSsh
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessEnable (base name: "secure-access-enable")', function() {
      // uncomment below and update the code to test the property secureAccessEnable
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessHost (base name: "secure-access-host")', function() {
      // uncomment below and update the code to test the property secureAccessHost
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessSshCredsUser (base name: "secure-access-ssh-creds-user")', function() {
      // uncomment below and update the code to test the property secureAccessSshCredsUser
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessUseInternalBastion (base name: "secure-access-use-internal-bastion")', function() {
      // uncomment below and update the code to test the property secureAccessUseInternalBastion
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property signerKeyName (base name: "signer-key-name")', function() {
      // uncomment below and update the code to test the property signerKeyName
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property ttl (base name: "ttl")', function() {
      // uncomment below and update the code to test the property ttl
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new akeyless.UpdateSSHCertIssuer();
      //expect(instance).to.be();
    });

  });

}));
