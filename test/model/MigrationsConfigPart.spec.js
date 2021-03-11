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
    instance = new akeyless.MigrationsConfigPart();
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

  describe('MigrationsConfigPart', function() {
    it('should create an instance of MigrationsConfigPart', function() {
      // uncomment below and update the code to test MigrationsConfigPart
      //var instane = new akeyless.MigrationsConfigPart();
      //expect(instance).to.be.a(akeyless.MigrationsConfigPart);
    });

    it('should have the property awsSecretsMigrations (base name: "aws_secrets_migrations")', function() {
      // uncomment below and update the code to test the property awsSecretsMigrations
      //var instane = new akeyless.MigrationsConfigPart();
      //expect(instance).to.be();
    });

    it('should have the property azureKvMigrations (base name: "azure_kv_migrations")', function() {
      // uncomment below and update the code to test the property azureKvMigrations
      //var instane = new akeyless.MigrationsConfigPart();
      //expect(instance).to.be();
    });

    it('should have the property hashiMigrations (base name: "hashi_migrations")', function() {
      // uncomment below and update the code to test the property hashiMigrations
      //var instane = new akeyless.MigrationsConfigPart();
      //expect(instance).to.be();
    });

    it('should have the property k8sMigrations (base name: "k8s_migrations")', function() {
      // uncomment below and update the code to test the property k8sMigrations
      //var instane = new akeyless.MigrationsConfigPart();
      //expect(instance).to.be();
    });

  });

}));
