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
 * The TargetGet model module.
 * @module model/TargetGet
 * @version 4.2.1
 */
class TargetGet {
    /**
     * Constructs a new <code>TargetGet</code>.
     * @alias module:model/TargetGet
     * @param name {String} Target name
     */
    constructor(name) { 
        
        TargetGet.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TargetGet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetGet} obj Optional instance to populate.
     * @return {module:model/TargetGet} The populated <code>TargetGet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetGet();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('show-versions')) {
                obj['show-versions'] = ApiClient.convertToType(data['show-versions'], 'Boolean');
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
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetGet.prototype['json'] = false;

/**
 * Target name
 * @member {String} name
 */
TargetGet.prototype['name'] = undefined;

/**
 * Include all target versions in reply
 * @member {Boolean} show-versions
 * @default false
 */
TargetGet.prototype['show-versions'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetGet.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetGet.prototype['uid-token'] = undefined;






export default TargetGet;

