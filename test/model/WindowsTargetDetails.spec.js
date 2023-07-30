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
    instance = new akeyless.WindowsTargetDetails();
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

  describe('WindowsTargetDetails', function() {
    it('should create an instance of WindowsTargetDetails', function() {
      // uncomment below and update the code to test WindowsTargetDetails
      //var instane = new akeyless.WindowsTargetDetails();
      //expect(instance).to.be.a(akeyless.WindowsTargetDetails);
    });

    it('should have the property certificate (base name: "certificate")', function() {
      // uncomment below and update the code to test the property certificate
      //var instane = new akeyless.WindowsTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property domainName (base name: "domain_name")', function() {
      // uncomment below and update the code to test the property domainName
      //var instane = new akeyless.WindowsTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property hostname (base name: "hostname")', function() {
      // uncomment below and update the code to test the property hostname
      //var instane = new akeyless.WindowsTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new akeyless.WindowsTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instane = new akeyless.WindowsTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property useTls (base name: "use_tls")', function() {
      // uncomment below and update the code to test the property useTls
      //var instane = new akeyless.WindowsTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new akeyless.WindowsTargetDetails();
      //expect(instance).to.be();
    });

  });

}));
