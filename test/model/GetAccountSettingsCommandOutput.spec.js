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
    instance = new akeyless.GetAccountSettingsCommandOutput();
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

  describe('GetAccountSettingsCommandOutput', function() {
    it('should create an instance of GetAccountSettingsCommandOutput', function() {
      // uncomment below and update the code to test GetAccountSettingsCommandOutput
      //var instane = new akeyless.GetAccountSettingsCommandOutput();
      //expect(instance).to.be.a(akeyless.GetAccountSettingsCommandOutput);
    });

    it('should have the property accountId (base name: "account_id")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new akeyless.GetAccountSettingsCommandOutput();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new akeyless.GetAccountSettingsCommandOutput();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "company_name")', function() {
      // uncomment below and update the code to test the property companyName
      //var instane = new akeyless.GetAccountSettingsCommandOutput();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new akeyless.GetAccountSettingsCommandOutput();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new akeyless.GetAccountSettingsCommandOutput();
      //expect(instance).to.be();
    });

    it('should have the property secretManagement (base name: "secret_management")', function() {
      // uncomment below and update the code to test the property secretManagement
      //var instane = new akeyless.GetAccountSettingsCommandOutput();
      //expect(instance).to.be();
    });

    it('should have the property secureRemoteAccess (base name: "secure_remote_access")', function() {
      // uncomment below and update the code to test the property secureRemoteAccess
      //var instane = new akeyless.GetAccountSettingsCommandOutput();
      //expect(instance).to.be();
    });

    it('should have the property systemAccessCredsSettings (base name: "system_access_creds_settings")', function() {
      // uncomment below and update the code to test the property systemAccessCredsSettings
      //var instane = new akeyless.GetAccountSettingsCommandOutput();
      //expect(instance).to.be();
    });

  });

}));