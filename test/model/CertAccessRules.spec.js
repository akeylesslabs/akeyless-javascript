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
    instance = new akeyless.CertAccessRules();
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

  describe('CertAccessRules', function() {
    it('should create an instance of CertAccessRules', function() {
      // uncomment below and update the code to test CertAccessRules
      //var instane = new akeyless.CertAccessRules();
      //expect(instance).to.be.a(akeyless.CertAccessRules);
    });

    it('should have the property boundCommonNames (base name: "bound_common_names")', function() {
      // uncomment below and update the code to test the property boundCommonNames
      //var instane = new akeyless.CertAccessRules();
      //expect(instance).to.be();
    });

    it('should have the property boundDnsSans (base name: "bound_dns_sans")', function() {
      // uncomment below and update the code to test the property boundDnsSans
      //var instane = new akeyless.CertAccessRules();
      //expect(instance).to.be();
    });

    it('should have the property boundEmailSans (base name: "bound_email_sans")', function() {
      // uncomment below and update the code to test the property boundEmailSans
      //var instane = new akeyless.CertAccessRules();
      //expect(instance).to.be();
    });

    it('should have the property boundExtensions (base name: "bound_extensions")', function() {
      // uncomment below and update the code to test the property boundExtensions
      //var instane = new akeyless.CertAccessRules();
      //expect(instance).to.be();
    });

    it('should have the property boundOrganizationalUnits (base name: "bound_organizational_units")', function() {
      // uncomment below and update the code to test the property boundOrganizationalUnits
      //var instane = new akeyless.CertAccessRules();
      //expect(instance).to.be();
    });

    it('should have the property boundUriSans (base name: "bound_uri_sans")', function() {
      // uncomment below and update the code to test the property boundUriSans
      //var instane = new akeyless.CertAccessRules();
      //expect(instance).to.be();
    });

    it('should have the property certificate (base name: "certificate")', function() {
      // uncomment below and update the code to test the property certificate
      //var instane = new akeyless.CertAccessRules();
      //expect(instance).to.be();
    });

    it('should have the property revokedCertIds (base name: "revoked_cert_ids")', function() {
      // uncomment below and update the code to test the property revokedCertIds
      //var instane = new akeyless.CertAccessRules();
      //expect(instance).to.be();
    });

    it('should have the property uniqueIdentifier (base name: "unique_identifier")', function() {
      // uncomment below and update the code to test the property uniqueIdentifier
      //var instane = new akeyless.CertAccessRules();
      //expect(instance).to.be();
    });

  });

}));
