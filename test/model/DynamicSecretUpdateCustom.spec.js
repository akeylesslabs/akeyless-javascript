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
    instance = new akeyless.DynamicSecretUpdateCustom();
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

  describe('DynamicSecretUpdateCustom', function() {
    it('should create an instance of DynamicSecretUpdateCustom', function() {
      // uncomment below and update the code to test DynamicSecretUpdateCustom
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be.a(akeyless.DynamicSecretUpdateCustom);
    });

    it('should have the property adminRotationIntervalDays (base name: "admin_rotation_interval_days")', function() {
      // uncomment below and update the code to test the property adminRotationIntervalDays
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property createSyncUrl (base name: "create-sync-url")', function() {
      // uncomment below and update the code to test the property createSyncUrl
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property deleteProtection (base name: "delete_protection")', function() {
      // uncomment below and update the code to test the property deleteProtection
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property enableAdminRotation (base name: "enable_admin_rotation")', function() {
      // uncomment below and update the code to test the property enableAdminRotation
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property newName (base name: "new-name")', function() {
      // uncomment below and update the code to test the property newName
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property payload (base name: "payload")', function() {
      // uncomment below and update the code to test the property payload
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property producerEncryptionKeyName (base name: "producer-encryption-key-name")', function() {
      // uncomment below and update the code to test the property producerEncryptionKeyName
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property revokeSyncUrl (base name: "revoke-sync-url")', function() {
      // uncomment below and update the code to test the property revokeSyncUrl
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property rotateSyncUrl (base name: "rotate-sync-url")', function() {
      // uncomment below and update the code to test the property rotateSyncUrl
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property timeoutSec (base name: "timeout-sec")', function() {
      // uncomment below and update the code to test the property timeoutSec
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

    it('should have the property userTtl (base name: "user-ttl")', function() {
      // uncomment below and update the code to test the property userTtl
      //var instane = new akeyless.DynamicSecretUpdateCustom();
      //expect(instance).to.be();
    });

  });

}));
