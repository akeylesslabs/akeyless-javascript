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
    instance = new akl.UniversalIdentityDetails();
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

  describe('UniversalIdentityDetails', function() {
    it('should create an instance of UniversalIdentityDetails', function() {
      // uncomment below and update the code to test UniversalIdentityDetails
      //var instane = new akl.UniversalIdentityDetails();
      //expect(instance).to.be.a(akl.UniversalIdentityDetails);
    });

    it('should have the property maxDepth (base name: "max_depth")', function() {
      // uncomment below and update the code to test the property maxDepth
      //var instane = new akl.UniversalIdentityDetails();
      //expect(instance).to.be();
    });

    it('should have the property numberOfTokens (base name: "number_of_tokens")', function() {
      // uncomment below and update the code to test the property numberOfTokens
      //var instane = new akl.UniversalIdentityDetails();
      //expect(instance).to.be();
    });

    it('should have the property root (base name: "root")', function() {
      // uncomment below and update the code to test the property root
      //var instane = new akl.UniversalIdentityDetails();
      //expect(instance).to.be();
    });

  });

}));
