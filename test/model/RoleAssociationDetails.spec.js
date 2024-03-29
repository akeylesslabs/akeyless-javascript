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
    instance = new akeyless.RoleAssociationDetails();
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

  describe('RoleAssociationDetails', function() {
    it('should create an instance of RoleAssociationDetails', function() {
      // uncomment below and update the code to test RoleAssociationDetails
      //var instane = new akeyless.RoleAssociationDetails();
      //expect(instance).to.be.a(akeyless.RoleAssociationDetails);
    });

    it('should have the property assocId (base name: "assoc_id")', function() {
      // uncomment below and update the code to test the property assocId
      //var instane = new akeyless.RoleAssociationDetails();
      //expect(instance).to.be();
    });

    it('should have the property authMethodName (base name: "auth_method_name")', function() {
      // uncomment below and update the code to test the property authMethodName
      //var instane = new akeyless.RoleAssociationDetails();
      //expect(instance).to.be();
    });

    it('should have the property authMethodSubClaims (base name: "auth_method_sub_claims")', function() {
      // uncomment below and update the code to test the property authMethodSubClaims
      //var instane = new akeyless.RoleAssociationDetails();
      //expect(instance).to.be();
    });

    it('should have the property roleName (base name: "role_name")', function() {
      // uncomment below and update the code to test the property roleName
      //var instane = new akeyless.RoleAssociationDetails();
      //expect(instance).to.be();
    });

    it('should have the property subClaimsCaseSensitive (base name: "sub_claims_case_sensitive")', function() {
      // uncomment below and update the code to test the property subClaimsCaseSensitive
      //var instane = new akeyless.RoleAssociationDetails();
      //expect(instance).to.be();
    });

  });

}));
