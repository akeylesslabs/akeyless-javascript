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
    instance = new akeyless.DynamicSecretCreateGitlab();
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

  describe('DynamicSecretCreateGitlab', function() {
    it('should create an instance of DynamicSecretCreateGitlab', function() {
      // uncomment below and update the code to test DynamicSecretCreateGitlab
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be.a(akeyless.DynamicSecretCreateGitlab);
    });

    it('should have the property deleteProtection (base name: "delete_protection")', function() {
      // uncomment below and update the code to test the property deleteProtection
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property gitlabAccessToken (base name: "gitlab-access-token")', function() {
      // uncomment below and update the code to test the property gitlabAccessToken
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property gitlabAccessType (base name: "gitlab-access-type")', function() {
      // uncomment below and update the code to test the property gitlabAccessType
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property gitlabCertificate (base name: "gitlab-certificate")', function() {
      // uncomment below and update the code to test the property gitlabCertificate
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property gitlabRole (base name: "gitlab-role")', function() {
      // uncomment below and update the code to test the property gitlabRole
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property gitlabTokenScopes (base name: "gitlab-token-scopes")', function() {
      // uncomment below and update the code to test the property gitlabTokenScopes
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property gitlabUrl (base name: "gitlab-url")', function() {
      // uncomment below and update the code to test the property gitlabUrl
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property groupName (base name: "group-name")', function() {
      // uncomment below and update the code to test the property groupName
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property installationOrganization (base name: "installation-organization")', function() {
      // uncomment below and update the code to test the property installationOrganization
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property targetName (base name: "target-name")', function() {
      // uncomment below and update the code to test the property targetName
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property ttl (base name: "ttl")', function() {
      // uncomment below and update the code to test the property ttl
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.DynamicSecretCreateGitlab();
      //expect(instance).to.be();
    });

  });

}));