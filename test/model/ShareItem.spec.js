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
    instance = new akeyless.ShareItem();
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

  describe('ShareItem', function() {
    it('should create an instance of ShareItem', function() {
      // uncomment below and update the code to test ShareItem
      //var instane = new akeyless.ShareItem();
      //expect(instance).to.be.a(akeyless.ShareItem);
    });

    it('should have the property accessibility (base name: "accessibility")', function() {
      // uncomment below and update the code to test the property accessibility
      //var instane = new akeyless.ShareItem();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new akeyless.ShareItem();
      //expect(instance).to.be();
    });

    it('should have the property emails (base name: "emails")', function() {
      // uncomment below and update the code to test the property emails
      //var instane = new akeyless.ShareItem();
      //expect(instance).to.be();
    });

    it('should have the property itemName (base name: "item-name")', function() {
      // uncomment below and update the code to test the property itemName
      //var instane = new akeyless.ShareItem();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new akeyless.ShareItem();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.ShareItem();
      //expect(instance).to.be();
    });

    it('should have the property ttl (base name: "ttl")', function() {
      // uncomment below and update the code to test the property ttl
      //var instane = new akeyless.ShareItem();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.ShareItem();
      //expect(instance).to.be();
    });

    it('should have the property viewOnce (base name: "view-once")', function() {
      // uncomment below and update the code to test the property viewOnce
      //var instane = new akeyless.ShareItem();
      //expect(instance).to.be();
    });

  });

}));
