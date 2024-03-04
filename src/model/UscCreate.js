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
 * The UscCreate model module.
 * @module model/UscCreate
 * @version 3.6.2
 */
class UscCreate {
    /**
     * Constructs a new <code>UscCreate</code>.
     * uscCreate is a command that creates a new secret in a Universal Secrets Connector
     * @alias module:model/UscCreate
     * @param secretName {String} Name for the new universal secrets
     * @param uscName {String} Name of the Universal Secrets Connector item
     * @param value {String} Value of the universal secrets item, either text or base64 encoded binary
     */
    constructor(secretName, uscName, value) { 
        
        UscCreate.initialize(this, secretName, uscName, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, secretName, uscName, value) { 
        obj['secret-name'] = secretName;
        obj['usc-name'] = uscName;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>UscCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UscCreate} obj Optional instance to populate.
     * @return {module:model/UscCreate} The populated <code>UscCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UscCreate();

            if (data.hasOwnProperty('binary-value')) {
                obj['binary-value'] = ApiClient.convertToType(data['binary-value'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('secret-name')) {
                obj['secret-name'] = ApiClient.convertToType(data['secret-name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], {'String': 'String'});
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('usc-name')) {
                obj['usc-name'] = ApiClient.convertToType(data['usc-name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Use this option if the universal secrets value is a base64 encoded binary
 * @member {Boolean} binary-value
 */
UscCreate.prototype['binary-value'] = undefined;

/**
 * Description of the universal secrets
 * @member {String} description
 */
UscCreate.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UscCreate.prototype['json'] = false;

/**
 * Name for the new universal secrets
 * @member {String} secret-name
 */
UscCreate.prototype['secret-name'] = undefined;

/**
 * Tags for the universal secrets
 * @member {Object.<String, String>} tags
 */
UscCreate.prototype['tags'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UscCreate.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UscCreate.prototype['uid-token'] = undefined;

/**
 * Name of the Universal Secrets Connector item
 * @member {String} usc-name
 */
UscCreate.prototype['usc-name'] = undefined;

/**
 * Value of the universal secrets item, either text or base64 encoded binary
 * @member {String} value
 */
UscCreate.prototype['value'] = undefined;






export default UscCreate;

