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
    instance = new akeyless.RotatedSecretUpdateRedshift();
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

  describe('RotatedSecretUpdateRedshift', function() {
    it('should create an instance of RotatedSecretUpdateRedshift', function() {
      // uncomment below and update the code to test RotatedSecretUpdateRedshift
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be.a(akeyless.RotatedSecretUpdateRedshift);
    });

    it('should have the property addTag (base name: "add-tag")', function() {
      // uncomment below and update the code to test the property addTag
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property authenticationCredentials (base name: "authentication-credentials")', function() {
      // uncomment below and update the code to test the property authenticationCredentials
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property autoRotate (base name: "auto-rotate")', function() {
      // uncomment below and update the code to test the property autoRotate
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property deleteProtection (base name: "delete_protection")', function() {
      // uncomment below and update the code to test the property deleteProtection
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property keepPrevVersion (base name: "keep-prev-version")', function() {
      // uncomment below and update the code to test the property keepPrevVersion
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property newName (base name: "new-name")', function() {
      // uncomment below and update the code to test the property newName
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property passwordLength (base name: "password-length")', function() {
      // uncomment below and update the code to test the property passwordLength
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property rmTag (base name: "rm-tag")', function() {
      // uncomment below and update the code to test the property rmTag
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property rotateAfterDisconnect (base name: "rotate-after-disconnect")', function() {
      // uncomment below and update the code to test the property rotateAfterDisconnect
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property rotatedPassword (base name: "rotated-password")', function() {
      // uncomment below and update the code to test the property rotatedPassword
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property rotatedUsername (base name: "rotated-username")', function() {
      // uncomment below and update the code to test the property rotatedUsername
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property rotationHour (base name: "rotation-hour")', function() {
      // uncomment below and update the code to test the property rotationHour
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property rotationInterval (base name: "rotation-interval")', function() {
      // uncomment below and update the code to test the property rotationInterval
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessDbName (base name: "secure-access-db-name")', function() {
      // uncomment below and update the code to test the property secureAccessDbName
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessEnable (base name: "secure-access-enable")', function() {
      // uncomment below and update the code to test the property secureAccessEnable
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessHost (base name: "secure-access-host")', function() {
      // uncomment below and update the code to test the property secureAccessHost
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.RotatedSecretUpdateRedshift();
      //expect(instance).to.be();
    });

  });

}));
