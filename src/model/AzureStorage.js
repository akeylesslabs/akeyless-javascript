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

/**
 * The AzureStorage model module.
 * @module model/AzureStorage
 * @version 5.0.0
 */
class AzureStorage {
    /**
     * Constructs a new <code>AzureStorage</code>.
     * @alias module:model/AzureStorage
     */
    constructor() { 
        
        AzureStorage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AzureStorage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AzureStorage} obj Optional instance to populate.
     * @return {module:model/AzureStorage} The populated <code>AzureStorage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AzureStorage();

            if (data.hasOwnProperty('auth_type')) {
                obj['auth_type'] = ApiClient.convertToType(data['auth_type'], 'String');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
            if (data.hasOwnProperty('storage_account')) {
                obj['storage_account'] = ApiClient.convertToType(data['storage_account'], 'String');
            }
            if (data.hasOwnProperty('storage_container_name')) {
                obj['storage_container_name'] = ApiClient.convertToType(data['storage_container_name'], 'String');
            }
            if (data.hasOwnProperty('tenant_id')) {
                obj['tenant_id'] = ApiClient.convertToType(data['tenant_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AzureStorage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AzureStorage</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['auth_type'] && !(typeof data['auth_type'] === 'string' || data['auth_type'] instanceof String)) {
            throw new Error("Expected the field `auth_type` to be a primitive type in the JSON string but got " + data['auth_type']);
        }
        // ensure the json data is a string
        if (data['client_id'] && !(typeof data['client_id'] === 'string' || data['client_id'] instanceof String)) {
            throw new Error("Expected the field `client_id` to be a primitive type in the JSON string but got " + data['client_id']);
        }
        // ensure the json data is a string
        if (data['client_secret'] && !(typeof data['client_secret'] === 'string' || data['client_secret'] instanceof String)) {
            throw new Error("Expected the field `client_secret` to be a primitive type in the JSON string but got " + data['client_secret']);
        }
        // ensure the json data is a string
        if (data['storage_account'] && !(typeof data['storage_account'] === 'string' || data['storage_account'] instanceof String)) {
            throw new Error("Expected the field `storage_account` to be a primitive type in the JSON string but got " + data['storage_account']);
        }
        // ensure the json data is a string
        if (data['storage_container_name'] && !(typeof data['storage_container_name'] === 'string' || data['storage_container_name'] instanceof String)) {
            throw new Error("Expected the field `storage_container_name` to be a primitive type in the JSON string but got " + data['storage_container_name']);
        }
        // ensure the json data is a string
        if (data['tenant_id'] && !(typeof data['tenant_id'] === 'string' || data['tenant_id'] instanceof String)) {
            throw new Error("Expected the field `tenant_id` to be a primitive type in the JSON string but got " + data['tenant_id']);
        }

        return true;
    }


}



/**
 * @member {String} auth_type
 */
AzureStorage.prototype['auth_type'] = undefined;

/**
 * @member {String} client_id
 */
AzureStorage.prototype['client_id'] = undefined;

/**
 * @member {String} client_secret
 */
AzureStorage.prototype['client_secret'] = undefined;

/**
 * @member {String} storage_account
 */
AzureStorage.prototype['storage_account'] = undefined;

/**
 * @member {String} storage_container_name
 */
AzureStorage.prototype['storage_container_name'] = undefined;

/**
 * creds
 * @member {String} tenant_id
 */
AzureStorage.prototype['tenant_id'] = undefined;






export default AzureStorage;

