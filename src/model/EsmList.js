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
 * The EsmList model module.
 * @module model/EsmList
 * @version 3.3.7
 */
class EsmList {
    /**
     * Constructs a new <code>EsmList</code>.
     * esmList is a command that lists the secrets of an External Secrets Manager
     * @alias module:model/EsmList
     * @param esmName {String} Name of the External Secrets Manager item
     */
    constructor(esmName) { 
        
        EsmList.initialize(this, esmName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, esmName) { 
        obj['esm-name'] = esmName;
    }

    /**
     * Constructs a <code>EsmList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EsmList} obj Optional instance to populate.
     * @return {module:model/EsmList} The populated <code>EsmList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EsmList();

            if (data.hasOwnProperty('esm-name')) {
                obj['esm-name'] = ApiClient.convertToType(data['esm-name'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
EsmList.prototype['esm-name'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EsmList.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EsmList.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EsmList.prototype['uid-token'] = undefined;






export default EsmList;
