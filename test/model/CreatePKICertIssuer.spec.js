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
    instance = new akl.CreatePKICertIssuer();
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

  describe('CreatePKICertIssuer', function() {
    it('should create an instance of CreatePKICertIssuer', function() {
      // uncomment below and update the code to test CreatePKICertIssuer
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be.a(akl.CreatePKICertIssuer);
    });

    it('should have the property allowAnyName (base name: "allow-any-name")', function() {
      // uncomment below and update the code to test the property allowAnyName
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property allowSubdomains (base name: "allow-subdomains")', function() {
      // uncomment below and update the code to test the property allowSubdomains
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property allowedDomains (base name: "allowed-domains")', function() {
      // uncomment below and update the code to test the property allowedDomains
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property allowedUriSans (base name: "allowed-uri-sans")', function() {
      // uncomment below and update the code to test the property allowedUriSans
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property clientFlag (base name: "client-flag")', function() {
      // uncomment below and update the code to test the property clientFlag
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property codeSigningFlag (base name: "code-signing-flag")', function() {
      // uncomment below and update the code to test the property codeSigningFlag
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property keyUsage (base name: "key-usage")', function() {
      // uncomment below and update the code to test the property keyUsage
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property locality (base name: "locality")', function() {
      // uncomment below and update the code to test the property locality
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property notEnforceHostnames (base name: "not-enforce-hostnames")', function() {
      // uncomment below and update the code to test the property notEnforceHostnames
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property notRequireCn (base name: "not-require-cn")', function() {
      // uncomment below and update the code to test the property notRequireCn
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property organizationalUnits (base name: "organizational-units")', function() {
      // uncomment below and update the code to test the property organizationalUnits
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property organizations (base name: "organizations")', function() {
      // uncomment below and update the code to test the property organizations
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal-code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property province (base name: "province")', function() {
      // uncomment below and update the code to test the property province
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property serverFlag (base name: "server-flag")', function() {
      // uncomment below and update the code to test the property serverFlag
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property signerKeyName (base name: "signer-key-name")', function() {
      // uncomment below and update the code to test the property signerKeyName
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property streetAddress (base name: "street-address")', function() {
      // uncomment below and update the code to test the property streetAddress
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property ttl (base name: "ttl")', function() {
      // uncomment below and update the code to test the property ttl
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akl.CreatePKICertIssuer();
      //expect(instance).to.be();
    });

  });

}));
