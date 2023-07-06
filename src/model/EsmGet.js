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
 * The EsmGet model module.
 * @module model/EsmGet
 * @version 3.3.13
 */
class EsmGet {
    /**
     * Constructs a new <code>EsmGet</code>.
     * esmGet is a command that gets the value and interal details of a secret from an External Secrets Manager
     * @alias module:model/EsmGet
     * @param esmName {String} Name of the External Secrets Manager item
     * @param secretId {String} The secret id (or name, for AWS, Azure or K8s targets) to get from the External Secrets Manager
     */
    constructor(esmName, secretId) { 
        
        EsmGet.initialize(this, esmName, secretId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, esmName, secretId) { 
        obj['esm-name'] = esmName;
        obj['secret-id'] = secretId;
    }

    /**
     * Constructs a <code>EsmGet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EsmGet} obj Optional instance to populate.
     * @return {module:model/EsmGet} The populated <code>EsmGet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EsmGet();

            if (data.hasOwnProperty('esm-name')) {
                obj['esm-name'] = ApiClient.convertToType(data['esm-name'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('secret-id')) {
                obj['secret-id'] = ApiClient.convertToType(data['secret-id'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the External Secrets Manager item
 * @member {String} esm-name
 */
EsmGet.prototype['esm-name'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EsmGet.prototype['json'] = false;

/**
 * The secret id (or name, for AWS, Azure or K8s targets) to get from the External Secrets Manager
 * @member {String} secret-id
 */
EsmGet.prototype['secret-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EsmGet.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EsmGet.prototype['uid-token'] = undefined;






export default EsmGet;

