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
 * The CreateArtifactoryTarget model module.
 * @module model/CreateArtifactoryTarget
 * @version 2.5.1
 */
class CreateArtifactoryTarget {
    /**
     * Constructs a new <code>CreateArtifactoryTarget</code>.
     * @alias module:model/CreateArtifactoryTarget
     * @param artifactoryAdminName {String} Artifactory Admin Name
     * @param artifactoryAdminPwd {String} Artifactory Admin password
     * @param baseUrl {String} Base URL
     * @param name {String} Target name
     */
    constructor(artifactoryAdminName, artifactoryAdminPwd, baseUrl, name) { 
        
        CreateArtifactoryTarget.initialize(this, artifactoryAdminName, artifactoryAdminPwd, baseUrl, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, artifactoryAdminName, artifactoryAdminPwd, baseUrl, name) { 
        obj['artifactory-admin-name'] = artifactoryAdminName;
        obj['artifactory-admin-pwd'] = artifactoryAdminPwd;
        obj['base-url'] = baseUrl;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateArtifactoryTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateArtifactoryTarget} obj Optional instance to populate.
     * @return {module:model/CreateArtifactoryTarget} The populated <code>CreateArtifactoryTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateArtifactoryTarget();

            if (data.hasOwnProperty('artifactory-admin-name')) {
                obj['artifactory-admin-name'] = ApiClient.convertToType(data['artifactory-admin-name'], 'String');
            }
            if (data.hasOwnProperty('artifactory-admin-pwd')) {
                obj['artifactory-admin-pwd'] = ApiClient.convertToType(data['artifactory-admin-pwd'], 'String');
            }
            if (data.hasOwnProperty('base-url')) {
                obj['base-url'] = ApiClient.convertToType(data['base-url'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Artifactory Admin Name
 * @member {String} artifactory-admin-name
 */
CreateArtifactoryTarget.prototype['artifactory-admin-name'] = undefined;

/**
 * Artifactory Admin password
 * @member {String} artifactory-admin-pwd
 */
CreateArtifactoryTarget.prototype['artifactory-admin-pwd'] = undefined;

/**
 * Base URL
 * @member {String} base-url
 */
CreateArtifactoryTarget.prototype['base-url'] = undefined;

/**
 * Comment about the target
 * @member {String} comment
 */
CreateArtifactoryTarget.prototype['comment'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateArtifactoryTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateArtifactoryTarget.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
CreateArtifactoryTarget.prototype['password'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateArtifactoryTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateArtifactoryTarget.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
CreateArtifactoryTarget.prototype['username'] = undefined;






export default CreateArtifactoryTarget;

