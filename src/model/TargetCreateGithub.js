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
 * The TargetCreateGithub model module.
 * @module model/TargetCreateGithub
 * @version 4.2.2
 */
class TargetCreateGithub {
    /**
     * Constructs a new <code>TargetCreateGithub</code>.
     * @alias module:model/TargetCreateGithub
     * @param name {String} Target name
     */
    constructor(name) { 
        
        TargetCreateGithub.initialize(this, name);
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
     * Constructs a <code>TargetCreateGithub</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetCreateGithub} obj Optional instance to populate.
     * @return {module:model/TargetCreateGithub} The populated <code>TargetCreateGithub</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetCreateGithub();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
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
 * Description of the object
 * @member {String} description
 */
TargetCreateGithub.prototype['description'] = undefined;

/**
 * Github app id
 * @member {Number} github-app-id
 */
TargetCreateGithub.prototype['github-app-id'] = undefined;

/**
 * App private key
 * @member {String} github-app-private-key
 */
TargetCreateGithub.prototype['github-app-private-key'] = undefined;

/**
 * Base URL
 * @member {String} github-base-url
 * @default 'https://api.github.com/'
 */
TargetCreateGithub.prototype['github-base-url'] = 'https://api.github.com/';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetCreateGithub.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetCreateGithub.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetCreateGithub.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetCreateGithub.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetCreateGithub.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetCreateGithub.prototype['uid-token'] = undefined;






export default TargetCreateGithub;
