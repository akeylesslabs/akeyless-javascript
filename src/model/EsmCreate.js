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
 * The EsmCreate model module.
 * @module model/EsmCreate
 * @version 3.3.1
 */
class EsmCreate {
    /**
     * Constructs a new <code>EsmCreate</code>.
     * esmCreate is a command that creates a new secret in an External Secrets Manager
     * @alias module:model/EsmCreate
     * @param esmName {String} Name of the External Secrets Manager item
     * @param secretName {String} Name for the new external secret
     * @param value {String} Value of the external secret item, either text or base64 encoded binary
     */
    constructor(esmName, secretName, value) { 
        
        EsmCreate.initialize(this, esmName, secretName, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, esmName, secretName, value) { 
        obj['esm-name'] = esmName;
        obj['secret-name'] = secretName;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>EsmCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EsmCreate} obj Optional instance to populate.
     * @return {module:model/EsmCreate} The populated <code>EsmCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EsmCreate();

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
EsmCreate.prototype['binary-value'] = undefined;

/**
 * Description of the external secret
 * @member {String} description
 */
EsmCreate.prototype['description'] = undefined;

/**
 * Name of the External Secrets Manager item
 * @member {String} esm-name
 */
EsmCreate.prototype['esm-name'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EsmCreate.prototype['json'] = false;

/**
 * Name for the new external secret
 * @member {String} secret-name
 */
EsmCreate.prototype['secret-name'] = undefined;

/**
 * Tags for the external secret
 * @member {Object.<String, String>} tags
 */
EsmCreate.prototype['tags'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EsmCreate.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EsmCreate.prototype['uid-token'] = undefined;

/**
 * Value of the external secret item, either text or base64 encoded binary
 * @member {String} value
 */
EsmCreate.prototype['value'] = undefined;






export default EsmCreate;

