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
    instance = new akeyless.ChefTargetDetails();
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

  describe('ChefTargetDetails', function() {
    it('should create an instance of ChefTargetDetails', function() {
      // uncomment below and update the code to test ChefTargetDetails
      //var instane = new akeyless.ChefTargetDetails();
      //expect(instance).to.be.a(akeyless.ChefTargetDetails);
    });

    it('should have the property chefServerHostName (base name: "chef_server_host_name")', function() {
      // uncomment below and update the code to test the property chefServerHostName
      //var instane = new akeyless.ChefTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property chefServerKey (base name: "chef_server_key")', function() {
      // uncomment below and update the code to test the property chefServerKey
      //var instane = new akeyless.ChefTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property chefServerPort (base name: "chef_server_port")', function() {
      // uncomment below and update the code to test the property chefServerPort
      //var instane = new akeyless.ChefTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property chefServerUrl (base name: "chef_server_url")', function() {
      // uncomment below and update the code to test the property chefServerUrl
      //var instane = new akeyless.ChefTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property chefServerUsername (base name: "chef_server_username")', function() {
      // uncomment below and update the code to test the property chefServerUsername
      //var instane = new akeyless.ChefTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property chefSkipSsl (base name: "chef_skip_ssl")', function() {
      // uncomment below and update the code to test the property chefSkipSsl
      //var instane = new akeyless.ChefTargetDetails();
      //expect(instance).to.be();
    });

  });

}));