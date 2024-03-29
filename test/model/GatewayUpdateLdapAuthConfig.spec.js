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
    instance = new akeyless.GatewayUpdateLdapAuthConfig();
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

  describe('GatewayUpdateLdapAuthConfig', function() {
    it('should create an instance of GatewayUpdateLdapAuthConfig', function() {
      // uncomment below and update the code to test GatewayUpdateLdapAuthConfig
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be.a(akeyless.GatewayUpdateLdapAuthConfig);
    });

    it('should have the property accessId (base name: "access-id")', function() {
      // uncomment below and update the code to test the property accessId
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property bindDn (base name: "bind-dn")', function() {
      // uncomment below and update the code to test the property bindDn
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property bindDnPassword (base name: "bind-dn-password")', function() {
      // uncomment below and update the code to test the property bindDnPassword
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property groupAttr (base name: "group-attr")', function() {
      // uncomment below and update the code to test the property groupAttr
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property groupDn (base name: "group-dn")', function() {
      // uncomment below and update the code to test the property groupDn
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property groupFilter (base name: "group-filter")', function() {
      // uncomment below and update the code to test the property groupFilter
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property ldapCaCert (base name: "ldap-ca-cert")', function() {
      // uncomment below and update the code to test the property ldapCaCert
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property ldapEnable (base name: "ldap-enable")', function() {
      // uncomment below and update the code to test the property ldapEnable
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property ldapUrl (base name: "ldap-url")', function() {
      // uncomment below and update the code to test the property ldapUrl
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property ldapAnonymousSearch (base name: "ldap_anonymous_search")', function() {
      // uncomment below and update the code to test the property ldapAnonymousSearch
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property signingKeyData (base name: "signing-key-data")', function() {
      // uncomment below and update the code to test the property signingKeyData
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property userAttribute (base name: "user-attribute")', function() {
      // uncomment below and update the code to test the property userAttribute
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

    it('should have the property userDn (base name: "user-dn")', function() {
      // uncomment below and update the code to test the property userDn
      //var instane = new akeyless.GatewayUpdateLdapAuthConfig();
      //expect(instance).to.be();
    });

  });

}));
