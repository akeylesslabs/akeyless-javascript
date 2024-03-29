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
    instance = new akeyless.UpdatePKICertIssuer();
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

  describe('UpdatePKICertIssuer', function() {
    it('should create an instance of UpdatePKICertIssuer', function() {
      // uncomment below and update the code to test UpdatePKICertIssuer
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be.a(akeyless.UpdatePKICertIssuer);
    });

    it('should have the property addTag (base name: "add-tag")', function() {
      // uncomment below and update the code to test the property addTag
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property allowAnyName (base name: "allow-any-name")', function() {
      // uncomment below and update the code to test the property allowAnyName
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property allowSubdomains (base name: "allow-subdomains")', function() {
      // uncomment below and update the code to test the property allowSubdomains
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property allowedDomains (base name: "allowed-domains")', function() {
      // uncomment below and update the code to test the property allowedDomains
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property allowedUriSans (base name: "allowed-uri-sans")', function() {
      // uncomment below and update the code to test the property allowedUriSans
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property clientFlag (base name: "client-flag")', function() {
      // uncomment below and update the code to test the property clientFlag
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property codeSigningFlag (base name: "code-signing-flag")', function() {
      // uncomment below and update the code to test the property codeSigningFlag
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property keyUsage (base name: "key-usage")', function() {
      // uncomment below and update the code to test the property keyUsage
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property locality (base name: "locality")', function() {
      // uncomment below and update the code to test the property locality
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property newName (base name: "new-name")', function() {
      // uncomment below and update the code to test the property newName
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property notEnforceHostnames (base name: "not-enforce-hostnames")', function() {
      // uncomment below and update the code to test the property notEnforceHostnames
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property notRequireCn (base name: "not-require-cn")', function() {
      // uncomment below and update the code to test the property notRequireCn
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property organizationalUnits (base name: "organizational-units")', function() {
      // uncomment below and update the code to test the property organizationalUnits
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property organizations (base name: "organizations")', function() {
      // uncomment below and update the code to test the property organizations
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal-code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property province (base name: "province")', function() {
      // uncomment below and update the code to test the property province
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property rmTag (base name: "rm-tag")', function() {
      // uncomment below and update the code to test the property rmTag
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property serverFlag (base name: "server-flag")', function() {
      // uncomment below and update the code to test the property serverFlag
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property signerKeyName (base name: "signer-key-name")', function() {
      // uncomment below and update the code to test the property signerKeyName
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property streetAddress (base name: "street-address")', function() {
      // uncomment below and update the code to test the property streetAddress
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property ttl (base name: "ttl")', function() {
      // uncomment below and update the code to test the property ttl
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new akeyless.UpdatePKICertIssuer();
      //expect(instance).to.be();
    });

  });

}));
