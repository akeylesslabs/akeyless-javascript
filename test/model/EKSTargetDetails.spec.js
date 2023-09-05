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
    instance = new akeyless.EKSTargetDetails();
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

  describe('EKSTargetDetails', function() {
    it('should create an instance of EKSTargetDetails', function() {
      // uncomment below and update the code to test EKSTargetDetails
      //var instane = new akeyless.EKSTargetDetails();
      //expect(instance).to.be.a(akeyless.EKSTargetDetails);
    });

    it('should have the property eksAccessKeyId (base name: "eks_access_key_id")', function() {
      // uncomment below and update the code to test the property eksAccessKeyId
      //var instane = new akeyless.EKSTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property eksClusterCaCertificate (base name: "eks_cluster_ca_certificate")', function() {
      // uncomment below and update the code to test the property eksClusterCaCertificate
      //var instane = new akeyless.EKSTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property eksClusterEndpoint (base name: "eks_cluster_endpoint")', function() {
      // uncomment below and update the code to test the property eksClusterEndpoint
      //var instane = new akeyless.EKSTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property eksClusterName (base name: "eks_cluster_name")', function() {
      // uncomment below and update the code to test the property eksClusterName
      //var instane = new akeyless.EKSTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property eksRegion (base name: "eks_region")', function() {
      // uncomment below and update the code to test the property eksRegion
      //var instane = new akeyless.EKSTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property eksSecretAccessKey (base name: "eks_secret_access_key")', function() {
      // uncomment below and update the code to test the property eksSecretAccessKey
      //var instane = new akeyless.EKSTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property useGwCloudIdentity (base name: "use_gw_cloud_identity")', function() {
      // uncomment below and update the code to test the property useGwCloudIdentity
      //var instane = new akeyless.EKSTargetDetails();
      //expect(instance).to.be();
    });

  });

}));