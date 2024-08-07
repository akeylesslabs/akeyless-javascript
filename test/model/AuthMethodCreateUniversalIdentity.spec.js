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
    instance = new akeyless.AuthMethodCreateUniversalIdentity();
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

  describe('AuthMethodCreateUniversalIdentity', function() {
    it('should create an instance of AuthMethodCreateUniversalIdentity', function() {
      // uncomment below and update the code to test AuthMethodCreateUniversalIdentity
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be.a(akeyless.AuthMethodCreateUniversalIdentity);
    });

    it('should have the property accessExpires (base name: "access-expires")', function() {
      // uncomment below and update the code to test the property accessExpires
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property auditLogsClaims (base name: "audit-logs-claims")', function() {
      // uncomment below and update the code to test the property auditLogsClaims
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property boundIps (base name: "bound-ips")', function() {
      // uncomment below and update the code to test the property boundIps
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property denyInheritance (base name: "deny-inheritance")', function() {
      // uncomment below and update the code to test the property denyInheritance
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property denyRotate (base name: "deny-rotate")', function() {
      // uncomment below and update the code to test the property denyRotate
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property forceSubClaims (base name: "force-sub-claims")', function() {
      // uncomment below and update the code to test the property forceSubClaims
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property gwBoundIps (base name: "gw-bound-ips")', function() {
      // uncomment below and update the code to test the property gwBoundIps
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property jwtTtl (base name: "jwt-ttl")', function() {
      // uncomment below and update the code to test the property jwtTtl
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property productType (base name: "product-type")', function() {
      // uncomment below and update the code to test the property productType
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property ttl (base name: "ttl")', function() {
      // uncomment below and update the code to test the property ttl
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.AuthMethodCreateUniversalIdentity();
      //expect(instance).to.be();
    });

  });

}));
