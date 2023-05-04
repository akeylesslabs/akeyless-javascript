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
 * The UpdateTarget model module.
 * @module model/UpdateTarget
 * @version 3.3.1
 */
class UpdateTarget {
    /**
     * Constructs a new <code>UpdateTarget</code>.
     * @alias module:model/UpdateTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateTarget.initialize(this, name);
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
     * Constructs a <code>UpdateTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTarget} obj Optional instance to populate.
     * @return {module:model/UpdateTarget} The populated <code>UpdateTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTarget();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-comment')) {
                obj['new-comment'] = ApiClient.convertToType(data['new-comment'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
 * Description of the object
 * @member {String} description
 * @default 'default_comment'
 */
UpdateTarget.prototype['description'] = 'default_comment';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateTarget.prototype['json'] = false;

/**
 * Target name
 * @member {String} name
 */
UpdateTarget.prototype['name'] = undefined;

/**
 * Deprecated - use description
 * @member {String} new-comment
 * @default 'default_comment'
 */
UpdateTarget.prototype['new-comment'] = 'default_comment';

/**
 * New Target name
 * @member {String} new-name
 */
UpdateTarget.prototype['new-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateTarget.prototype['uid-token'] = undefined;






export default UpdateTarget;

