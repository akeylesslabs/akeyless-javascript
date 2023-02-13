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
 * The UpdateDockerhubTarget model module.
 * @module model/UpdateDockerhubTarget
 * @version 3.2.4
 */
class UpdateDockerhubTarget {
    /**
     * Constructs a new <code>UpdateDockerhubTarget</code>.
     * @alias module:model/UpdateDockerhubTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateDockerhubTarget.initialize(this, name);
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
     * Constructs a <code>UpdateDockerhubTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateDockerhubTarget} obj Optional instance to populate.
     * @return {module:model/UpdateDockerhubTarget} The populated <code>UpdateDockerhubTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateDockerhubTarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('dockerhub-password')) {
                obj['dockerhub-password'] = ApiClient.convertToType(data['dockerhub-password'], 'String');
            }
            if (data.hasOwnProperty('dockerhub-username')) {
                obj['dockerhub-username'] = ApiClient.convertToType(data['dockerhub-username'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
            if (data.hasOwnProperty('update-version')) {
                obj['update-version'] = ApiClient.convertToType(data['update-version'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Deprecated - use description
 * @member {String} comment
 */
UpdateDockerhubTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
UpdateDockerhubTarget.prototype['description'] = undefined;

/**
 * @member {String} dockerhub-password
 */
UpdateDockerhubTarget.prototype['dockerhub-password'] = undefined;

/**
 * @member {String} dockerhub-username
 */
UpdateDockerhubTarget.prototype['dockerhub-username'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateDockerhubTarget.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdateDockerhubTarget.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateDockerhubTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateDockerhubTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateDockerhubTarget.prototype['new-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateDockerhubTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateDockerhubTarget.prototype['uid-token'] = undefined;

/**
 * Deprecated
 * @member {Boolean} update-version
 */
UpdateDockerhubTarget.prototype['update-version'] = undefined;






export default UpdateDockerhubTarget;

