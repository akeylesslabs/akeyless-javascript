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
 * The UpdateArtifactoryTarget model module.
 * @module model/UpdateArtifactoryTarget
 * @version 3.2.1
 */
class UpdateArtifactoryTarget {
    /**
     * Constructs a new <code>UpdateArtifactoryTarget</code>.
     * @alias module:model/UpdateArtifactoryTarget
     * @param artifactoryAdminName {String} Artifactory Admin Name
     * @param artifactoryAdminPwd {String} Artifactory Admin password
     * @param baseUrl {String} Base URL
     * @param name {String} Target name
     */
    constructor(artifactoryAdminName, artifactoryAdminPwd, baseUrl, name) { 
        
        UpdateArtifactoryTarget.initialize(this, artifactoryAdminName, artifactoryAdminPwd, baseUrl, name);
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
     * Constructs a <code>UpdateArtifactoryTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateArtifactoryTarget} obj Optional instance to populate.
     * @return {module:model/UpdateArtifactoryTarget} The populated <code>UpdateArtifactoryTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateArtifactoryTarget();

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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
 * Artifactory Admin Name
 * @member {String} artifactory-admin-name
 */
UpdateArtifactoryTarget.prototype['artifactory-admin-name'] = undefined;

/**
 * Artifactory Admin password
 * @member {String} artifactory-admin-pwd
 */
UpdateArtifactoryTarget.prototype['artifactory-admin-pwd'] = undefined;

/**
 * Base URL
 * @member {String} base-url
 */
UpdateArtifactoryTarget.prototype['base-url'] = undefined;

/**
 * Deprecated - use description
 * @member {String} comment
 */
UpdateArtifactoryTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
UpdateArtifactoryTarget.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
UpdateArtifactoryTarget.prototype['json'] = undefined;

/**
 * @member {String} keep-prev-version
 */
UpdateArtifactoryTarget.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateArtifactoryTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateArtifactoryTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateArtifactoryTarget.prototype['new-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateArtifactoryTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateArtifactoryTarget.prototype['uid-token'] = undefined;

/**
 * Deprecated
 * @member {Boolean} update-version
 */
UpdateArtifactoryTarget.prototype['update-version'] = undefined;






export default UpdateArtifactoryTarget;

