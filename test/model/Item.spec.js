/**
 * includes all operations supported by Akeyless.
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
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
    factory(root.expect, root.akl);
  }
}(this, function(expect, akl) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new akl.Item();
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

  describe('Item', function() {
    it('should create an instance of Item', function() {
      // uncomment below and update the code to test Item
      //var instane = new akl.Item();
      //expect(instance).to.be.a(akl.Item);
    });

    it('should have the property autoRotate (base name: "auto_rotate")', function() {
      // uncomment below and update the code to test the property autoRotate
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property certIssuerSignerKeyName (base name: "cert_issuer_signer_key_name")', function() {
      // uncomment below and update the code to test the property certIssuerSignerKeyName
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property certificateIssueDetails (base name: "certificate_issue_details")', function() {
      // uncomment below and update the code to test the property certificateIssueDetails
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property certificates (base name: "certificates")', function() {
      // uncomment below and update the code to test the property certificates
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property clientPermissions (base name: "client_permissions")', function() {
      // uncomment below and update the code to test the property clientPermissions
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property deletionDate (base name: "deletion_date")', function() {
      // uncomment below and update the code to test the property deletionDate
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property isEnabled (base name: "is_enabled")', function() {
      // uncomment below and update the code to test the property isEnabled
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property itemGeneralInfo (base name: "item_general_info")', function() {
      // uncomment below and update the code to test the property itemGeneralInfo
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property itemMetadata (base name: "item_metadata")', function() {
      // uncomment below and update the code to test the property itemMetadata
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property itemName (base name: "item_name")', function() {
      // uncomment below and update the code to test the property itemName
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property itemSize (base name: "item_size")', function() {
      // uncomment below and update the code to test the property itemSize
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property itemState (base name: "item_state")', function() {
      // uncomment below and update the code to test the property itemState
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property itemTags (base name: "item_tags")', function() {
      // uncomment below and update the code to test the property itemTags
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property itemType (base name: "item_type")', function() {
      // uncomment below and update the code to test the property itemType
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property itemVersions (base name: "item_versions")', function() {
      // uncomment below and update the code to test the property itemVersions
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property lastVersion (base name: "last_version")', function() {
      // uncomment below and update the code to test the property lastVersion
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property nextRotationDate (base name: "next_rotation_date")', function() {
      // uncomment below and update the code to test the property nextRotationDate
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property producerStatus (base name: "producer_status")', function() {
      // uncomment below and update the code to test the property producerStatus
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property protectionKeyName (base name: "protection_key_name")', function() {
      // uncomment below and update the code to test the property protectionKeyName
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property publicValue (base name: "public_value")', function() {
      // uncomment below and update the code to test the property publicValue
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property rotationInterval (base name: "rotation_interval")', function() {
      // uncomment below and update the code to test the property rotationInterval
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

    it('should have the property withCustomerFragment (base name: "with_customer_fragment")', function() {
      // uncomment below and update the code to test the property withCustomerFragment
      //var instane = new akl.Item();
      //expect(instance).to.be();
    });

  });

}));
