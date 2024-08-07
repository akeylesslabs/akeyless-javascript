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
    instance = new akeyless.AuthMethodUpdateAwsIam();
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

  describe('AuthMethodUpdateAwsIam', function() {
    it('should create an instance of AuthMethodUpdateAwsIam', function() {
      // uncomment below and update the code to test AuthMethodUpdateAwsIam
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be.a(akeyless.AuthMethodUpdateAwsIam);
    });

    it('should have the property accessExpires (base name: "access-expires")', function() {
      // uncomment below and update the code to test the property accessExpires
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property auditLogsClaims (base name: "audit-logs-claims")', function() {
      // uncomment below and update the code to test the property auditLogsClaims
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property boundArn (base name: "bound-arn")', function() {
      // uncomment below and update the code to test the property boundArn
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property boundAwsAccountId (base name: "bound-aws-account-id")', function() {
      // uncomment below and update the code to test the property boundAwsAccountId
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property boundIps (base name: "bound-ips")', function() {
      // uncomment below and update the code to test the property boundIps
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property boundResourceId (base name: "bound-resource-id")', function() {
      // uncomment below and update the code to test the property boundResourceId
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property boundRoleId (base name: "bound-role-id")', function() {
      // uncomment below and update the code to test the property boundRoleId
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property boundRoleName (base name: "bound-role-name")', function() {
      // uncomment below and update the code to test the property boundRoleName
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property boundUserId (base name: "bound-user-id")', function() {
      // uncomment below and update the code to test the property boundUserId
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property boundUserName (base name: "bound-user-name")', function() {
      // uncomment below and update the code to test the property boundUserName
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property forceSubClaims (base name: "force-sub-claims")', function() {
      // uncomment below and update the code to test the property forceSubClaims
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property gwBoundIps (base name: "gw-bound-ips")', function() {
      // uncomment below and update the code to test the property gwBoundIps
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property jwtTtl (base name: "jwt-ttl")', function() {
      // uncomment below and update the code to test the property jwtTtl
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property newName (base name: "new-name")', function() {
      // uncomment below and update the code to test the property newName
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property productType (base name: "product-type")', function() {
      // uncomment below and update the code to test the property productType
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property stsUrl (base name: "sts-url")', function() {
      // uncomment below and update the code to test the property stsUrl
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.AuthMethodUpdateAwsIam();
      //expect(instance).to.be();
    });

  });

}));
