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

import ApiClient from '../ApiClient';

/**
 * The SecretInfo model module.
 * @module model/SecretInfo
 * @version 3.3.13
 */
class SecretInfo {
    /**
     * Constructs a new <code>SecretInfo</code>.
     * @alias module:model/SecretInfo
     */
    constructor() { 
        
        SecretInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecretInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretInfo} obj Optional instance to populate.
     * @return {module:model/SecretInfo} The populated <code>SecretInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretInfo();

            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('expiration')) {
                obj['expiration'] = ApiClient.convertToType(data['expiration'], 'Date');
            }
            if (data.hasOwnProperty('last_retrieved')) {
                obj['last_retrieved'] = ApiClient.convertToType(data['last_retrieved'], 'Date');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('secret_id')) {
                obj['secret_id'] = ApiClient.convertToType(data['secret_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], {'String': 'String'});
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} created
 */
SecretInfo.prototype['created'] = undefined;

/**
 * @member {String} description
 */
SecretInfo.prototype['description'] = undefined;

/**
 * @member {Date} expiration
 */
SecretInfo.prototype['expiration'] = undefined;

/**
 * @member {Date} last_retrieved
 */
SecretInfo.prototype['last_retrieved'] = undefined;

/**
 * @member {Object} location
 */
SecretInfo.prototype['location'] = undefined;

/**
 * @member {String} name
 */
SecretInfo.prototype['name'] = undefined;

/**
 * @member {String} secret_id
 */
SecretInfo.prototype['secret_id'] = undefined;

/**
 * @member {Boolean} status
 */
SecretInfo.prototype['status'] = undefined;

/**
 * @member {Object.<String, String>} tags
 */
SecretInfo.prototype['tags'] = undefined;

/**
 * @member {String} type
 */
SecretInfo.prototype['type'] = undefined;






export default SecretInfo;

