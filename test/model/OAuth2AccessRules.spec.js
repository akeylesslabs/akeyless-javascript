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
    instance = new akl.OAuth2AccessRules();
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

  describe('OAuth2AccessRules', function() {
    it('should create an instance of OAuth2AccessRules', function() {
      // uncomment below and update the code to test OAuth2AccessRules
      //var instane = new akl.OAuth2AccessRules();
      //expect(instance).to.be.a(akl.OAuth2AccessRules);
    });

    it('should have the property audience (base name: "audience")', function() {
      // uncomment below and update the code to test the property audience
      //var instane = new akl.OAuth2AccessRules();
      //expect(instance).to.be();
    });

    it('should have the property boundClaims (base name: "bound_claims")', function() {
      // uncomment below and update the code to test the property boundClaims
      //var instane = new akl.OAuth2AccessRules();
      //expect(instance).to.be();
    });

    it('should have the property boundClientsId (base name: "bound_clients_id")', function() {
      // uncomment below and update the code to test the property boundClientsId
      //var instane = new akl.OAuth2AccessRules();
      //expect(instance).to.be();
    });

    it('should have the property issuer (base name: "issuer")', function() {
      // uncomment below and update the code to test the property issuer
      //var instane = new akl.OAuth2AccessRules();
      //expect(instance).to.be();
    });

    it('should have the property jwksUri (base name: "jwks_uri")', function() {
      // uncomment below and update the code to test the property jwksUri
      //var instane = new akl.OAuth2AccessRules();
      //expect(instance).to.be();
    });

  });

}));
