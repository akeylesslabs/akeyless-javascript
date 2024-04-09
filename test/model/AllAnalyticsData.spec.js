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
    instance = new akeyless.AllAnalyticsData();
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

  describe('AllAnalyticsData', function() {
    it('should create an instance of AllAnalyticsData', function() {
      // uncomment below and update the code to test AllAnalyticsData
      //var instane = new akeyless.AllAnalyticsData();
      //expect(instance).to.be.a(akeyless.AllAnalyticsData);
    });

    it('should have the property analyticsData (base name: "analytics_data")', function() {
      // uncomment below and update the code to test the property analyticsData
      //var instane = new akeyless.AllAnalyticsData();
      //expect(instance).to.be();
    });

    it('should have the property certificatesExpiryData (base name: "certificates_expiry_data")', function() {
      // uncomment below and update the code to test the property certificatesExpiryData
      //var instane = new akeyless.AllAnalyticsData();
      //expect(instance).to.be();
    });

    it('should have the property clientsUsageReports (base name: "clients_usage_reports")', function() {
      // uncomment below and update the code to test the property clientsUsageReports
      //var instane = new akeyless.AllAnalyticsData();
      //expect(instance).to.be();
    });

    it('should have the property dateUpdated (base name: "date_updated")', function() {
      // uncomment below and update the code to test the property dateUpdated
      //var instane = new akeyless.AllAnalyticsData();
      //expect(instance).to.be();
    });

    it('should have the property usageReports (base name: "usage_reports")', function() {
      // uncomment below and update the code to test the property usageReports
      //var instane = new akeyless.AllAnalyticsData();
      //expect(instance).to.be();
    });

  });

}));
