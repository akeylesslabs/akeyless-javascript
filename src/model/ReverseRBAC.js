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
 * The ReverseRBAC model module.
 * @module model/ReverseRBAC
 * @version 4.3.0
 */
class ReverseRBAC {
    /**
     * Constructs a new <code>ReverseRBAC</code>.
     * reverseRBAC is a command that shows which auth methods have access to a particular object.
     * @alias module:model/ReverseRBAC
     * @param path {String} Path to an object
     * @param type {String} Type of object (item, am, role)
     */
    constructor(path, type) { 
        
        ReverseRBAC.initialize(this, path, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path, type) { 
        obj['path'] = path;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ReverseRBAC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReverseRBAC} obj Optional instance to populate.
     * @return {module:model/ReverseRBAC} The populated <code>ReverseRBAC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReverseRBAC();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
ReverseRBAC.prototype['json'] = false;

/**
 * Path to an object
 * @member {String} path
 */
ReverseRBAC.prototype['path'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ReverseRBAC.prototype['token'] = undefined;

/**
 * Type of object (item, am, role)
 * @member {String} type
 */
ReverseRBAC.prototype['type'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ReverseRBAC.prototype['uid-token'] = undefined;






export default ReverseRBAC;

