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
    instance = new akeyless.VenafiTargetDetails();
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

  describe('VenafiTargetDetails', function() {
    it('should create an instance of VenafiTargetDetails', function() {
      // uncomment below and update the code to test VenafiTargetDetails
      //var instane = new akeyless.VenafiTargetDetails();
      //expect(instance).to.be.a(akeyless.VenafiTargetDetails);
    });

    it('should have the property venafiApiKey (base name: "venafi_api_key")', function() {
      // uncomment below and update the code to test the property venafiApiKey
      //var instane = new akeyless.VenafiTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property venafiBaseUrl (base name: "venafi_base_url")', function() {
      // uncomment below and update the code to test the property venafiBaseUrl
      //var instane = new akeyless.VenafiTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property venafiTppAccessToken (base name: "venafi_tpp_access_token")', function() {
      // uncomment below and update the code to test the property venafiTppAccessToken
      //var instane = new akeyless.VenafiTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property venafiTppClientId (base name: "venafi_tpp_client_id")', function() {
      // uncomment below and update the code to test the property venafiTppClientId
      //var instane = new akeyless.VenafiTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property venafiTppPassword (base name: "venafi_tpp_password")', function() {
      // uncomment below and update the code to test the property venafiTppPassword
      //var instane = new akeyless.VenafiTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property venafiTppRefreshToken (base name: "venafi_tpp_refresh_token")', function() {
      // uncomment below and update the code to test the property venafiTppRefreshToken
      //var instane = new akeyless.VenafiTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property venafiTppUsername (base name: "venafi_tpp_username")', function() {
      // uncomment below and update the code to test the property venafiTppUsername
      //var instane = new akeyless.VenafiTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property venafiUseTpp (base name: "venafi_use_tpp")', function() {
      // uncomment below and update the code to test the property venafiUseTpp
      //var instane = new akeyless.VenafiTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property venafiZone (base name: "venafi_zone")', function() {
      // uncomment below and update the code to test the property venafiZone
      //var instane = new akeyless.VenafiTargetDetails();
      //expect(instance).to.be();
    });

  });

}));
