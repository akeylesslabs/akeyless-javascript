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
 * The KmipClientDeleteRule model module.
 * @module model/KmipClientDeleteRule
 * @version 4.2.5
 */
class KmipClientDeleteRule {
    /**
     * Constructs a new <code>KmipClientDeleteRule</code>.
     * @alias module:model/KmipClientDeleteRule
     * @param path {String} Access path
     */
    constructor(path) { 
        
        KmipClientDeleteRule.initialize(this, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path) { 
        obj['path'] = path;
    }

    /**
     * Constructs a <code>KmipClientDeleteRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KmipClientDeleteRule} obj Optional instance to populate.
     * @return {module:model/KmipClientDeleteRule} The populated <code>KmipClientDeleteRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KmipClientDeleteRule();

            if (data.hasOwnProperty('client-id')) {
                obj['client-id'] = ApiClient.convertToType(data['client-id'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
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
 * @member {String} client-id
 */
KmipClientDeleteRule.prototype['client-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
KmipClientDeleteRule.prototype['json'] = false;

/**
 * @member {String} name
 */
KmipClientDeleteRule.prototype['name'] = undefined;

/**
 * Access path
 * @member {String} path
 */
KmipClientDeleteRule.prototype['path'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
KmipClientDeleteRule.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
KmipClientDeleteRule.prototype['uid-token'] = undefined;






export default KmipClientDeleteRule;

