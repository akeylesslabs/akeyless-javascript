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
 * The UpdateGithubTarget model module.
 * @module model/UpdateGithubTarget
 * @version 2.20.0
 */
class UpdateGithubTarget {
    /**
     * Constructs a new <code>UpdateGithubTarget</code>.
     * @alias module:model/UpdateGithubTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateGithubTarget.initialize(this, name);
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
     * Constructs a <code>UpdateGithubTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateGithubTarget} obj Optional instance to populate.
     * @return {module:model/UpdateGithubTarget} The populated <code>UpdateGithubTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGithubTarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('github-app-id')) {
                obj['github-app-id'] = ApiClient.convertToType(data['github-app-id'], 'Number');
            }
            if (data.hasOwnProperty('github-app-private-key')) {
                obj['github-app-private-key'] = ApiClient.convertToType(data['github-app-private-key'], 'String');
            }
            if (data.hasOwnProperty('github-base-url')) {
                obj['github-base-url'] = ApiClient.convertToType(data['github-base-url'], 'String');
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
 * Comment about the target
 * @member {String} comment
 */
UpdateGithubTarget.prototype['comment'] = undefined;

/**
 * Github app id
 * @member {Number} github-app-id
 */
UpdateGithubTarget.prototype['github-app-id'] = undefined;

/**
 * App private key
 * @member {String} github-app-private-key
 */
UpdateGithubTarget.prototype['github-app-private-key'] = undefined;

/**
 * Base URL
 * @member {String} github-base-url
 */
UpdateGithubTarget.prototype['github-base-url'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
UpdateGithubTarget.prototype['json'] = undefined;

/**
 * @member {String} keep-prev-version
 */
UpdateGithubTarget.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateGithubTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateGithubTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateGithubTarget.prototype['new-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateGithubTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateGithubTarget.prototype['uid-token'] = undefined;

/**
 * Deprecated
 * @member {Boolean} update-version
 */
UpdateGithubTarget.prototype['update-version'] = undefined;






export default UpdateGithubTarget;

