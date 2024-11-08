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
 * The EsmDelete model module.
 * @module model/EsmDelete
 * @version 4.3.0
 */
class EsmDelete {
    /**
     * Constructs a new <code>EsmDelete</code>.
     * esmDelete is a command that deletes a secret from an External Secrets Manager
     * @alias module:model/EsmDelete
     * @param esmName {String} Name of the External Secrets Manager item
     * @param secretId {String} The external secret id (or name, for AWS, Azure or K8s targets) to delete
     */
    constructor(esmName, secretId) { 
        
        EsmDelete.initialize(this, esmName, secretId);
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
     * Constructs a <code>EsmDelete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EsmDelete} obj Optional instance to populate.
     * @return {module:model/EsmDelete} The populated <code>EsmDelete</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EsmDelete();

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
EsmDelete.prototype['esm-name'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EsmDelete.prototype['json'] = false;

/**
 * The external secret id (or name, for AWS, Azure or K8s targets) to delete
 * @member {String} secret-id
 */
EsmDelete.prototype['secret-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EsmDelete.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EsmDelete.prototype['uid-token'] = undefined;






export default EsmDelete;

