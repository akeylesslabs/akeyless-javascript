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
    instance = new akeyless.GatewayUpdateProducerGke();
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

  describe('GatewayUpdateProducerGke', function() {
    it('should create an instance of GatewayUpdateProducerGke', function() {
      // uncomment below and update the code to test GatewayUpdateProducerGke
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be.a(akeyless.GatewayUpdateProducerGke);
    });

    it('should have the property gkeAccountKey (base name: "gke-account-key")', function() {
      // uncomment below and update the code to test the property gkeAccountKey
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property gkeClusterCert (base name: "gke-cluster-cert")', function() {
      // uncomment below and update the code to test the property gkeClusterCert
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property gkeClusterEndpoint (base name: "gke-cluster-endpoint")', function() {
      // uncomment below and update the code to test the property gkeClusterEndpoint
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property gkeClusterName (base name: "gke-cluster-name")', function() {
      // uncomment below and update the code to test the property gkeClusterName
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property gkeServiceAccountEmail (base name: "gke-service-account-email")', function() {
      // uncomment below and update the code to test the property gkeServiceAccountEmail
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property newName (base name: "new-name")', function() {
      // uncomment below and update the code to test the property newName
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property producerEncryptionKeyName (base name: "producer-encryption-key-name")', function() {
      // uncomment below and update the code to test the property producerEncryptionKeyName
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessAllowPortForwading (base name: "secure-access-allow-port-forwading")', function() {
      // uncomment below and update the code to test the property secureAccessAllowPortForwading
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessBastionIssuer (base name: "secure-access-bastion-issuer")', function() {
      // uncomment below and update the code to test the property secureAccessBastionIssuer
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessClusterEndpoint (base name: "secure-access-cluster-endpoint")', function() {
      // uncomment below and update the code to test the property secureAccessClusterEndpoint
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessEnable (base name: "secure-access-enable")', function() {
      // uncomment below and update the code to test the property secureAccessEnable
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property secureAccessWeb (base name: "secure-access-web")', function() {
      // uncomment below and update the code to test the property secureAccessWeb
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property targetName (base name: "target-name")', function() {
      // uncomment below and update the code to test the property targetName
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property uidToken (base name: "uid-token")', function() {
      // uncomment below and update the code to test the property uidToken
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property userTtl (base name: "user-ttl")', function() {
      // uncomment below and update the code to test the property userTtl
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new akeyless.GatewayUpdateProducerGke();
      //expect(instance).to.be();
    });

  });

}));
