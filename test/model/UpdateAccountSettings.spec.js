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
    instance = new akeyless.UpdateAccountSettings();
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

  describe('UpdateAccountSettings', function() {
    it('should create an instance of UpdateAccountSettings', function() {
      // uncomment below and update the code to test UpdateAccountSettings
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be.a(akeyless.UpdateAccountSettings);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "company-name")', function() {
      // uncomment below and update the code to test the property companyName
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property jwtTtlDefault (base name: "jwt-ttl-default")', function() {
      // uncomment below and update the code to test the property jwtTtlDefault
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property jwtTtlMax (base name: "jwt-ttl-max")', function() {
      // uncomment below and update the code to test the property jwtTtlMax
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property jwtTtlMin (base name: "jwt-ttl-min")', function() {
      // uncomment below and update the code to test the property jwtTtlMin
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal-code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new akeyless.UpdateAccountSettings();
      //expect(instance).to.be();
    });

  });

}));
