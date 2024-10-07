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
 * The CreateGitlabTarget model module.
 * @module model/CreateGitlabTarget
 * @version 4.2.5
 */
class CreateGitlabTarget {
    /**
     * Constructs a new <code>CreateGitlabTarget</code>.
     * createGitlabTarget is a command that creates a new target. [Deprecated: Use target-create-gitlab command]
     * @alias module:model/CreateGitlabTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        CreateGitlabTarget.initialize(this, name);
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
     * Constructs a <code>CreateGitlabTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateGitlabTarget} obj Optional instance to populate.
     * @return {module:model/CreateGitlabTarget} The populated <code>CreateGitlabTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateGitlabTarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('gitlab-access-token')) {
                obj['gitlab-access-token'] = ApiClient.convertToType(data['gitlab-access-token'], 'String');
            }
            if (data.hasOwnProperty('gitlab-certificate')) {
                obj['gitlab-certificate'] = ApiClient.convertToType(data['gitlab-certificate'], 'String');
            }
            if (data.hasOwnProperty('gitlab-url')) {
                obj['gitlab-url'] = ApiClient.convertToType(data['gitlab-url'], 'String');
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
 * Deprecated - use description
 * @member {String} comment
 */
CreateGitlabTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateGitlabTarget.prototype['description'] = undefined;

/**
 * Gitlab access token
 * @member {String} gitlab-access-token
 */
CreateGitlabTarget.prototype['gitlab-access-token'] = undefined;

/**
 * Gitlab tls certificate (base64 encoded)
 * @member {String} gitlab-certificate
 */
CreateGitlabTarget.prototype['gitlab-certificate'] = undefined;

/**
 * Gitlab base url
 * @member {String} gitlab-url
 * @default 'https://gitlab.com/'
 */
CreateGitlabTarget.prototype['gitlab-url'] = 'https://gitlab.com/';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateGitlabTarget.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateGitlabTarget.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
CreateGitlabTarget.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateGitlabTarget.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateGitlabTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateGitlabTarget.prototype['uid-token'] = undefined;






export default CreateGitlabTarget;

