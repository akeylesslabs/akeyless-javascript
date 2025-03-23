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
 * The HashiVaultTargetDetails model module.
 * @module model/HashiVaultTargetDetails
 * @version 5.0.1
 */
class HashiVaultTargetDetails {
    /**
     * Constructs a new <code>HashiVaultTargetDetails</code>.
     * HashiVaultTargetDetails
     * @alias module:model/HashiVaultTargetDetails
     */
    constructor() { 
        
        HashiVaultTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HashiVaultTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HashiVaultTargetDetails} obj Optional instance to populate.
     * @return {module:model/HashiVaultTargetDetails} The populated <code>HashiVaultTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HashiVaultTargetDetails();

            if (data.hasOwnProperty('vault_namespaces')) {
                obj['vault_namespaces'] = ApiClient.convertToType(data['vault_namespaces'], 'String');
            }
            if (data.hasOwnProperty('vault_token')) {
                obj['vault_token'] = ApiClient.convertToType(data['vault_token'], 'String');
            }
            if (data.hasOwnProperty('vault_url')) {
                obj['vault_url'] = ApiClient.convertToType(data['vault_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HashiVaultTargetDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HashiVaultTargetDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['vault_namespaces'] && !(typeof data['vault_namespaces'] === 'string' || data['vault_namespaces'] instanceof String)) {
            throw new Error("Expected the field `vault_namespaces` to be a primitive type in the JSON string but got " + data['vault_namespaces']);
        }
        // ensure the json data is a string
        if (data['vault_token'] && !(typeof data['vault_token'] === 'string' || data['vault_token'] instanceof String)) {
            throw new Error("Expected the field `vault_token` to be a primitive type in the JSON string but got " + data['vault_token']);
        }
        // ensure the json data is a string
        if (data['vault_url'] && !(typeof data['vault_url'] === 'string' || data['vault_url'] instanceof String)) {
            throw new Error("Expected the field `vault_url` to be a primitive type in the JSON string but got " + data['vault_url']);
        }

        return true;
    }


}



/**
 * @member {String} vault_namespaces
 */
HashiVaultTargetDetails.prototype['vault_namespaces'] = undefined;

/**
 * @member {String} vault_token
 */
HashiVaultTargetDetails.prototype['vault_token'] = undefined;

/**
 * @member {String} vault_url
 */
HashiVaultTargetDetails.prototype['vault_url'] = undefined;






export default HashiVaultTargetDetails;

