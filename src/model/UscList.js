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
 * The UscList model module.
 * @module model/UscList
 * @version 4.2.0
 */
class UscList {
    /**
     * Constructs a new <code>UscList</code>.
     * uscList is a command that lists the secrets of a Universal Secrets Connector
     * @alias module:model/UscList
     * @param uscName {String} Name of the Universal Secrets Connector item
     */
    constructor(uscName) { 
        
        UscList.initialize(this, uscName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uscName) { 
        obj['usc-name'] = uscName;
    }

    /**
     * Constructs a <code>UscList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UscList} obj Optional instance to populate.
     * @return {module:model/UscList} The populated <code>UscList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UscList();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
UscList.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UscList.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UscList.prototype['uid-token'] = undefined;

/**
 * Name of the Universal Secrets Connector item
 * @member {String} usc-name
 */
UscList.prototype['usc-name'] = undefined;






export default UscList;

