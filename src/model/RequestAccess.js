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
 * The RequestAccess model module.
 * @module model/RequestAccess
 * @version 3.1.1
 */
class RequestAccess {
    /**
     * Constructs a new <code>RequestAccess</code>.
     * @alias module:model/RequestAccess
     * @param capability {Array.<String>} List of the required capabilities options: [read, update, delete]
     * @param name {String} Item type
     */
    constructor(capability, name) { 
        
        RequestAccess.initialize(this, capability, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, capability, name) { 
        obj['capability'] = capability;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>RequestAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestAccess} obj Optional instance to populate.
     * @return {module:model/RequestAccess} The populated <code>RequestAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestAccess();

            if (data.hasOwnProperty('capability')) {
                obj['capability'] = ApiClient.convertToType(data['capability'], ['String']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
 * List of the required capabilities options: [read, update, delete]
 * @member {Array.<String>} capability
 */
RequestAccess.prototype['capability'] = undefined;

/**
 * Comment about this request
 * @member {String} comment
 */
RequestAccess.prototype['comment'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
RequestAccess.prototype['json'] = undefined;

/**
 * Item type
 * @member {String} name
 */
RequestAccess.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RequestAccess.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RequestAccess.prototype['uid-token'] = undefined;






export default RequestAccess;

