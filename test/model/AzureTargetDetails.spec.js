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
    instance = new akeyless.AzureTargetDetails();
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

  describe('AzureTargetDetails', function() {
    it('should create an instance of AzureTargetDetails', function() {
      // uncomment below and update the code to test AzureTargetDetails
      //var instane = new akeyless.AzureTargetDetails();
      //expect(instance).to.be.a(akeyless.AzureTargetDetails);
    });

    it('should have the property azureClientId (base name: "azure_client_id")', function() {
      // uncomment below and update the code to test the property azureClientId
      //var instane = new akeyless.AzureTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property azureClientSecret (base name: "azure_client_secret")', function() {
      // uncomment below and update the code to test the property azureClientSecret
      //var instane = new akeyless.AzureTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property azureResourceGroupName (base name: "azure_resource_group_name")', function() {
      // uncomment below and update the code to test the property azureResourceGroupName
      //var instane = new akeyless.AzureTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property azureResourceName (base name: "azure_resource_name")', function() {
      // uncomment below and update the code to test the property azureResourceName
      //var instane = new akeyless.AzureTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property azureSubscriptionId (base name: "azure_subscription_id")', function() {
      // uncomment below and update the code to test the property azureSubscriptionId
      //var instane = new akeyless.AzureTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property azureTenantId (base name: "azure_tenant_id")', function() {
      // uncomment below and update the code to test the property azureTenantId
      //var instane = new akeyless.AzureTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property useGwCloudIdentity (base name: "use_gw_cloud_identity")', function() {
      // uncomment below and update the code to test the property useGwCloudIdentity
      //var instane = new akeyless.AzureTargetDetails();
      //expect(instance).to.be();
    });

  });

}));