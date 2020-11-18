/**
 * includes all operations supported by Akeyless.
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
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
    factory(root.expect, root.akl);
  }
}(this, function(expect, akl) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new akl.CreateSSHCertIssuer();
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

  describe('CreateSSHCertIssuer', function() {
    it('should create an instance of CreateSSHCertIssuer', function() {
      // uncomment below and update the code to test CreateSSHCertIssuer
      //var instane = new akl.CreateSSHCertIssuer();
      //expect(instance).to.be.a(akl.CreateSSHCertIssuer);
    });

    it('should have the property allowedUsers (base name: "allowed-users")', function() {
      // uncomment below and update the code to test the property allowedUsers
      //var instane = new akl.CreateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property extensions (base name: "extensions")', function() {
      // uncomment below and update the code to test the property extensions
      //var instane = new akl.CreateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new akl.CreateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akl.CreateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property principals (base name: "principals")', function() {
      // uncomment below and update the code to test the property principals
      //var instane = new akl.CreateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property signerKeyName (base name: "signer-key-name")', function() {
      // uncomment below and update the code to test the property signerKeyName
      //var instane = new akl.CreateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akl.CreateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property ttl (base name: "ttl")', function() {
      // uncomment below and update the code to test the property ttl
      //var instane = new akl.CreateSSHCertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akl.CreateSSHCertIssuer();
      //expect(instance).to.be();
    });

  });

}));
