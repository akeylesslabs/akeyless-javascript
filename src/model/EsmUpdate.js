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
 * The EsmUpdate model module.
 * @module model/EsmUpdate
 * @version 4.2.2
 */
class EsmUpdate {
    /**
     * Constructs a new <code>EsmUpdate</code>.
     * esmUpdate is a command that updates a secret in an External Secrets Manager
     * @alias module:model/EsmUpdate
     * @param esmName {String} Name of the External Secrets Manager item
     * @param secretId {String} The external secret id (or name, for AWS, Azure or K8s targets) to update
     * @param value {String} Value of the external secret item, either text or base64 encoded binary
     */
    constructor(esmName, secretId, value) { 
        
        EsmUpdate.initialize(this, esmName, secretId, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, esmName, secretId, value) { 
        obj['esm-name'] = esmName;
        obj['secret-id'] = secretId;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>EsmUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EsmUpdate} obj Optional instance to populate.
     * @return {module:model/EsmUpdate} The populated <code>EsmUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EsmUpdate();

            if (data.hasOwnProperty('binary-value')) {
                obj['binary-value'] = ApiClient.convertToType(data['binary-value'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('esm-name')) {
                obj['esm-name'] = ApiClient.convertToType(data['esm-name'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Use this option if the external secret value is a base64 encoded binary
 * @member {Boolean} binary-value
 */
EsmUpdate.prototype['binary-value'] = undefined;

/**
 * Description of the external secret
 * @member {String} description
 */
EsmUpdate.prototype['description'] = undefined;

/**
 * Name of the External Secrets Manager item
 * @member {String} esm-name
 */
EsmUpdate.prototype['esm-name'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EsmUpdate.prototype['json'] = false;

/**
 * The external secret id (or name, for AWS, Azure or K8s targets) to update
 * @member {String} secret-id
 */
EsmUpdate.prototype['secret-id'] = undefined;

/**
 * Tags for the external secret
 * @member {Object.<String, String>} tags
 */
EsmUpdate.prototype['tags'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EsmUpdate.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EsmUpdate.prototype['uid-token'] = undefined;

/**
 * Value of the external secret item, either text or base64 encoded binary
 * @member {String} value
 */
EsmUpdate.prototype['value'] = undefined;






export default EsmUpdate;

