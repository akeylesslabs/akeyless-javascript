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
 * The UscUpdate model module.
 * @module model/UscUpdate
 * @version 4.3.0
 */
class UscUpdate {
    /**
     * Constructs a new <code>UscUpdate</code>.
     * uscUpdate is a command that updates a secret in a Universal Secrets Connector
     * @alias module:model/UscUpdate
     * @param secretId {String} The universal secrets id (or name, for AWS, Azure, K8s or Hashi vault targets) to update
     * @param uscName {String} Name of the Universal Secrets Connector item
     * @param value {String} Value of the universal secrets item, either text or base64 encoded binary
     */
    constructor(secretId, uscName, value) { 
        
        UscUpdate.initialize(this, secretId, uscName, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, secretId, uscName, value) { 
        obj['secret-id'] = secretId;
        obj['usc-name'] = uscName;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>UscUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UscUpdate} obj Optional instance to populate.
     * @return {module:model/UscUpdate} The populated <code>UscUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UscUpdate();

            if (data.hasOwnProperty('binary-value')) {
                obj['binary-value'] = ApiClient.convertToType(data['binary-value'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('secret-id')) {
                obj['secret-id'] = ApiClient.convertToType(data['secret-id'], 'String');
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
UscUpdate.prototype['binary-value'] = undefined;

/**
 * Description of the universal secrets
 * @member {String} description
 */
UscUpdate.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UscUpdate.prototype['json'] = false;

/**
 * The namespace (relevant for Hashi vault target)
 * @member {String} namespace
 */
UscUpdate.prototype['namespace'] = undefined;

/**
 * The universal secrets id (or name, for AWS, Azure, K8s or Hashi vault targets) to update
 * @member {String} secret-id
 */
UscUpdate.prototype['secret-id'] = undefined;

/**
 * Tags for the universal secrets
 * @member {Object.<String, String>} tags
 */
UscUpdate.prototype['tags'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UscUpdate.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UscUpdate.prototype['uid-token'] = undefined;

/**
 * Name of the Universal Secrets Connector item
 * @member {String} usc-name
 */
UscUpdate.prototype['usc-name'] = undefined;

/**
 * Value of the universal secrets item, either text or base64 encoded binary
 * @member {String} value
 */
UscUpdate.prototype['value'] = undefined;






export default UscUpdate;

