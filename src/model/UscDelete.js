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
 * The UscDelete model module.
 * @module model/UscDelete
 * @version 4.2.0
 */
class UscDelete {
    /**
     * Constructs a new <code>UscDelete</code>.
     * uscDelete is a command that deletes a secret from a Universal Secrets Connector
     * @alias module:model/UscDelete
     * @param secretId {String} The universal secrets id (or name, for AWS, Azure, K8s or Hashi vault targets) to delete
     * @param uscName {String} Name of the Universal Secrets Connector item
     */
    constructor(secretId, uscName) { 
        
        UscDelete.initialize(this, secretId, uscName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, secretId, uscName) { 
        obj['secret-id'] = secretId;
        obj['usc-name'] = uscName;
    }

    /**
     * Constructs a <code>UscDelete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UscDelete} obj Optional instance to populate.
     * @return {module:model/UscDelete} The populated <code>UscDelete</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UscDelete();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
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
            if (data.hasOwnProperty('usc-name')) {
                obj['usc-name'] = ApiClient.convertToType(data['usc-name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UscDelete.prototype['json'] = false;

/**
 * The namespace (relevant for Hashi vault target)
 * @member {String} namespace
 */
UscDelete.prototype['namespace'] = undefined;

/**
 * The universal secrets id (or name, for AWS, Azure, K8s or Hashi vault targets) to delete
 * @member {String} secret-id
 */
UscDelete.prototype['secret-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UscDelete.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UscDelete.prototype['uid-token'] = undefined;

/**
 * Name of the Universal Secrets Connector item
 * @member {String} usc-name
 */
UscDelete.prototype['usc-name'] = undefined;






export default UscDelete;

