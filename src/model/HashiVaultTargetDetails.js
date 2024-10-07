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
 * @version 4.2.5
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

