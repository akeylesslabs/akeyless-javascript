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
    instance = new akeyless.CreateLdapTarget();
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

  describe('CreateLdapTarget', function() {
    it('should create an instance of CreateLdapTarget', function() {
      // uncomment below and update the code to test CreateLdapTarget
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be.a(akeyless.CreateLdapTarget);
    });

    it('should have the property accessId (base name: "access-id")', function() {
      // uncomment below and update the code to test the property accessId
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property bindDn (base name: "bind-dn")', function() {
      // uncomment below and update the code to test the property bindDn
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property bindDnPassword (base name: "bind-dn-password")', function() {
      // uncomment below and update the code to test the property bindDnPassword
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property enableAnonymSearch (base name: "enable-anonym-search")', function() {
      // uncomment below and update the code to test the property enableAnonymSearch
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property groupAttribute (base name: "group-attribute")', function() {
      // uncomment below and update the code to test the property groupAttribute
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property groupDn (base name: "group-dn")', function() {
      // uncomment below and update the code to test the property groupDn
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property groupFilter (base name: "group-filter")', function() {
      // uncomment below and update the code to test the property groupFilter
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property ldapCaCert (base name: "ldap-ca-cert")', function() {
      // uncomment below and update the code to test the property ldapCaCert
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property ldapUrl (base name: "ldap-url")', function() {
      // uncomment below and update the code to test the property ldapUrl
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property privateKey (base name: "private-key")', function() {
      // uncomment below and update the code to test the property privateKey
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property tokenExpiration (base name: "token-expiration")', function() {
      // uncomment below and update the code to test the property tokenExpiration
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property userAttribute (base name: "user-attribute")', function() {
      // uncomment below and update the code to test the property userAttribute
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property userDn (base name: "user-dn")', function() {
      // uncomment below and update the code to test the property userDn
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new akeyless.CreateLdapTarget();
      //expect(instance).to.be();
    });

  });

}));