/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CertificateVersionInfo from './CertificateVersionInfo';

/**
 * The TargetItemVersion model module.
 * @module model/TargetItemVersion
 * @version 5.0.6
 */
class TargetItemVersion {
    /**
     * Constructs a new <code>TargetItemVersion</code>.
     * @alias module:model/TargetItemVersion
     */
    constructor() { 
        
        TargetItemVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TargetItemVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetItemVersion} obj Optional instance to populate.
     * @return {module:model/TargetItemVersion} The populated <code>TargetItemVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetItemVersion();

            if (data.hasOwnProperty('access_date')) {
                obj['access_date'] = ApiClient.convertToType(data['access_date'], 'Date');
            }
            if (data.hasOwnProperty('access_date_display')) {
                obj['access_date_display'] = ApiClient.convertToType(data['access_date_display'], 'String');
            }
            if (data.hasOwnProperty('access_id')) {
                obj['access_id'] = ApiClient.convertToType(data['access_id'], 'String');
            }
            if (data.hasOwnProperty('certificate_version_info')) {
                obj['certificate_version_info'] = CertificateVersionInfo.constructFromObject(data['certificate_version_info']);
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
            }
            if (data.hasOwnProperty('customer_fragment_id')) {
                obj['customer_fragment_id'] = ApiClient.convertToType(data['customer_fragment_id'], 'String');
            }
            if (data.hasOwnProperty('deletion_date')) {
                obj['deletion_date'] = ApiClient.convertToType(data['deletion_date'], 'Date');
            }
            if (data.hasOwnProperty('item_version_state')) {
                obj['item_version_state'] = ApiClient.convertToType(data['item_version_state'], 'String');
            }
            if (data.hasOwnProperty('latest_version')) {
                obj['latest_version'] = ApiClient.convertToType(data['latest_version'], 'Boolean');
            }
            if (data.hasOwnProperty('modification_date')) {
                obj['modification_date'] = ApiClient.convertToType(data['modification_date'], 'Date');
            }
            if (data.hasOwnProperty('protection_key_name')) {
                obj['protection_key_name'] = ApiClient.convertToType(data['protection_key_name'], 'String');
            }
            if (data.hasOwnProperty('target_name')) {
                obj['target_name'] = ApiClient.convertToType(data['target_name'], 'String');
            }
            if (data.hasOwnProperty('unique_identifier')) {
                obj['unique_identifier'] = ApiClient.convertToType(data['unique_identifier'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('with_customer_fragment')) {
                obj['with_customer_fragment'] = ApiClient.convertToType(data['with_customer_fragment'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TargetItemVersion</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TargetItemVersion</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_date_display'] && !(typeof data['access_date_display'] === 'string' || data['access_date_display'] instanceof String)) {
            throw new Error("Expected the field `access_date_display` to be a primitive type in the JSON string but got " + data['access_date_display']);
        }
        // ensure the json data is a string
        if (data['access_id'] && !(typeof data['access_id'] === 'string' || data['access_id'] instanceof String)) {
            throw new Error("Expected the field `access_id` to be a primitive type in the JSON string but got " + data['access_id']);
        }
        // validate the optional field `certificate_version_info`
        if (data['certificate_version_info']) { // data not null
          CertificateVersionInfo.validateJSON(data['certificate_version_info']);
        }
        // ensure the json data is a string
        if (data['customer_fragment_id'] && !(typeof data['customer_fragment_id'] === 'string' || data['customer_fragment_id'] instanceof String)) {
            throw new Error("Expected the field `customer_fragment_id` to be a primitive type in the JSON string but got " + data['customer_fragment_id']);
        }
        // ensure the json data is a string
        if (data['item_version_state'] && !(typeof data['item_version_state'] === 'string' || data['item_version_state'] instanceof String)) {
            throw new Error("Expected the field `item_version_state` to be a primitive type in the JSON string but got " + data['item_version_state']);
        }
        // ensure the json data is a string
        if (data['protection_key_name'] && !(typeof data['protection_key_name'] === 'string' || data['protection_key_name'] instanceof String)) {
            throw new Error("Expected the field `protection_key_name` to be a primitive type in the JSON string but got " + data['protection_key_name']);
        }
        // ensure the json data is a string
        if (data['target_name'] && !(typeof data['target_name'] === 'string' || data['target_name'] instanceof String)) {
            throw new Error("Expected the field `target_name` to be a primitive type in the JSON string but got " + data['target_name']);
        }
        // ensure the json data is a string
        if (data['unique_identifier'] && !(typeof data['unique_identifier'] === 'string' || data['unique_identifier'] instanceof String)) {
            throw new Error("Expected the field `unique_identifier` to be a primitive type in the JSON string but got " + data['unique_identifier']);
        }

        return true;
    }


}



/**
 * @member {Date} access_date
 */
TargetItemVersion.prototype['access_date'] = undefined;

/**
 * @member {String} access_date_display
 */
TargetItemVersion.prototype['access_date_display'] = undefined;

/**
 * @member {String} access_id
 */
TargetItemVersion.prototype['access_id'] = undefined;

/**
 * @member {module:model/CertificateVersionInfo} certificate_version_info
 */
TargetItemVersion.prototype['certificate_version_info'] = undefined;

/**
 * @member {Date} creation_date
 */
TargetItemVersion.prototype['creation_date'] = undefined;

/**
 * @member {String} customer_fragment_id
 */
TargetItemVersion.prototype['customer_fragment_id'] = undefined;

/**
 * @member {Date} deletion_date
 */
TargetItemVersion.prototype['deletion_date'] = undefined;

/**
 * ItemState defines the different states an Item can be in
 * @member {String} item_version_state
 */
TargetItemVersion.prototype['item_version_state'] = undefined;

/**
 * @member {Boolean} latest_version
 */
TargetItemVersion.prototype['latest_version'] = undefined;

/**
 * @member {Date} modification_date
 */
TargetItemVersion.prototype['modification_date'] = undefined;

/**
 * @member {String} protection_key_name
 */
TargetItemVersion.prototype['protection_key_name'] = undefined;

/**
 * @member {String} target_name
 */
TargetItemVersion.prototype['target_name'] = undefined;

/**
 * @member {String} unique_identifier
 */
TargetItemVersion.prototype['unique_identifier'] = undefined;

/**
 * @member {Number} version
 */
TargetItemVersion.prototype['version'] = undefined;

/**
 * @member {Boolean} with_customer_fragment
 */
TargetItemVersion.prototype['with_customer_fragment'] = undefined;






export default TargetItemVersion;

