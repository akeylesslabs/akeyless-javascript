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
    instance = new akeyless.AWSTargetDetails();
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

  describe('AWSTargetDetails', function() {
    it('should create an instance of AWSTargetDetails', function() {
      // uncomment below and update the code to test AWSTargetDetails
      //var instane = new akeyless.AWSTargetDetails();
      //expect(instance).to.be.a(akeyless.AWSTargetDetails);
    });

    it('should have the property awsAccessKeyId (base name: "aws_access_key_id")', function() {
      // uncomment below and update the code to test the property awsAccessKeyId
      //var instane = new akeyless.AWSTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property awsRegion (base name: "aws_region")', function() {
      // uncomment below and update the code to test the property awsRegion
      //var instane = new akeyless.AWSTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property awsSecretAccessKey (base name: "aws_secret_access_key")', function() {
      // uncomment below and update the code to test the property awsSecretAccessKey
      //var instane = new akeyless.AWSTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property awsSessionToken (base name: "aws_session_token")', function() {
      // uncomment below and update the code to test the property awsSessionToken
      //var instane = new akeyless.AWSTargetDetails();
      //expect(instance).to.be();
    });

    it('should have the property useGwCloudIdentity (base name: "use_gw_cloud_identity")', function() {
      // uncomment below and update the code to test the property useGwCloudIdentity
      //var instane = new akeyless.AWSTargetDetails();
      //expect(instance).to.be();
    });

  });

}));