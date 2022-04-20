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
    instance = new akeyless.CreateAuthMethodCert();
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

  describe('CreateAuthMethodCert', function() {
    it('should create an instance of CreateAuthMethodCert', function() {
      // uncomment below and update the code to test CreateAuthMethodCert
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be.a(akeyless.CreateAuthMethodCert);
    });

    it('should have the property accessExpires (base name: "access-expires")', function() {
      // uncomment below and update the code to test the property accessExpires
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property boundCommonNames (base name: "bound-common-names")', function() {
      // uncomment below and update the code to test the property boundCommonNames
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property boundDnsSans (base name: "bound-dns-sans")', function() {
      // uncomment below and update the code to test the property boundDnsSans
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property boundEmailSans (base name: "bound-email-sans")', function() {
      // uncomment below and update the code to test the property boundEmailSans
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property boundExtensions (base name: "bound-extensions")', function() {
      // uncomment below and update the code to test the property boundExtensions
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property boundIps (base name: "bound-ips")', function() {
      // uncomment below and update the code to test the property boundIps
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property boundOrganizationalUnits (base name: "bound-organizational-units")', function() {
      // uncomment below and update the code to test the property boundOrganizationalUnits
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property boundUriSans (base name: "bound-uri-sans")', function() {
      // uncomment below and update the code to test the property boundUriSans
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property certificateData (base name: "certificate-data")', function() {
      // uncomment below and update the code to test the property certificateData
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property forceSubClaims (base name: "force-sub-claims")', function() {
      // uncomment below and update the code to test the property forceSubClaims
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property jwtTtl (base name: "jwt-ttl")', function() {
      // uncomment below and update the code to test the property jwtTtl
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property revokedCertIds (base name: "revoked-cert-ids")', function() {
      // uncomment below and update the code to test the property revokedCertIds
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

    it('should have the property uniqueIdentifier (base name: "unique-identifier")', function() {
      // uncomment below and update the code to test the property uniqueIdentifier
      //var instane = new akeyless.CreateAuthMethodCert();
      //expect(instance).to.be();
    });

  });

}));
