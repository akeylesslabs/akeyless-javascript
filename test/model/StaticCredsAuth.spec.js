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
    instance = new akl.StaticCredsAuth();
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

  describe('StaticCredsAuth', function() {
    it('should create an instance of StaticCredsAuth', function() {
      // uncomment below and update the code to test StaticCredsAuth
      //var instane = new akl.StaticCredsAuth();
      //expect(instance).to.be.a(akl.StaticCredsAuth);
    });

    it('should have the property accessId (base name: "access-id")', function() {
      // uncomment below and update the code to test the property accessId
      //var instane = new akl.StaticCredsAuth();
      //expect(instance).to.be();
    });

    it('should have the property adminEmail (base name: "admin-email")', function() {
      // uncomment below and update the code to test the property adminEmail
      //var instane = new akl.StaticCredsAuth();
      //expect(instance).to.be();
    });

    it('should have the property creds (base name: "creds")', function() {
      // uncomment below and update the code to test the property creds
      //var instane = new akl.StaticCredsAuth();
      //expect(instance).to.be();
    });

  });

}));
