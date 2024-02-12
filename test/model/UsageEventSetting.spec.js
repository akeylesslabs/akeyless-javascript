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
    instance = new akeyless.UsageEventSetting();
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

  describe('UsageEventSetting', function() {
    it('should create an instance of UsageEventSetting', function() {
      // uncomment below and update the code to test UsageEventSetting
      //var instane = new akeyless.UsageEventSetting();
      //expect(instance).to.be.a(akeyless.UsageEventSetting);
    });

    it('should have the property enable (base name: "enable")', function() {
      // uncomment below and update the code to test the property enable
      //var instane = new akeyless.UsageEventSetting();
      //expect(instance).to.be();
    });

    it('should have the property enableTime (base name: "enable_time")', function() {
      // uncomment below and update the code to test the property enableTime
      //var instane = new akeyless.UsageEventSetting();
      //expect(instance).to.be();
    });

    it('should have the property intervalByDays (base name: "interval_by_days")', function() {
      // uncomment below and update the code to test the property intervalByDays
      //var instane = new akeyless.UsageEventSetting();
      //expect(instance).to.be();
    });

  });

}));