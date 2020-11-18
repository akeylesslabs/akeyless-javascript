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
    instance = new akl.DecryptFileOutput();
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

  describe('DecryptFileOutput', function() {
    it('should create an instance of DecryptFileOutput', function() {
      // uncomment below and update the code to test DecryptFileOutput
      //var instane = new akl.DecryptFileOutput();
      //expect(instance).to.be.a(akl.DecryptFileOutput);
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new akl.DecryptFileOutput();
      //expect(instance).to.be();
    });

    it('should have the property plainText (base name: "plain_text")', function() {
      // uncomment below and update the code to test the property plainText
      //var instane = new akl.DecryptFileOutput();
      //expect(instance).to.be();
    });

  });

}));
