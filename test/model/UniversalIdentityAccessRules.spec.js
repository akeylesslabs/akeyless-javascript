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
    instance = new akl.UniversalIdentityAccessRules();
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

  describe('UniversalIdentityAccessRules', function() {
    it('should create an instance of UniversalIdentityAccessRules', function() {
      // uncomment below and update the code to test UniversalIdentityAccessRules
      //var instane = new akl.UniversalIdentityAccessRules();
      //expect(instance).to.be.a(akl.UniversalIdentityAccessRules);
    });

    it('should have the property denyInheritance (base name: "deny_inheritance")', function() {
      // uncomment below and update the code to test the property denyInheritance
      //var instane = new akl.UniversalIdentityAccessRules();
      //expect(instance).to.be();
    });

    it('should have the property denyRotate (base name: "deny_rotate")', function() {
      // uncomment below and update the code to test the property denyRotate
      //var instane = new akl.UniversalIdentityAccessRules();
      //expect(instance).to.be();
    });

    it('should have the property ttl (base name: "ttl")', function() {
      // uncomment below and update the code to test the property ttl
      //var instane = new akl.UniversalIdentityAccessRules();
      //expect(instance).to.be();
    });

  });

}));
