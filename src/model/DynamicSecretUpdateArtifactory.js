/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DynamicSecretUpdateArtifactory model module.
 * @module model/DynamicSecretUpdateArtifactory
 * @version 5.0.3
 */
class DynamicSecretUpdateArtifactory {
    /**
     * Constructs a new <code>DynamicSecretUpdateArtifactory</code>.
     * dynamicSecretUpdateArtifactory is a command that updates artifactory dynamic secret
     * @alias module:model/DynamicSecretUpdateArtifactory
     * @param artifactoryTokenAudience {String} Token Audience
     * @param artifactoryTokenScope {String} Token Scope
     * @param name {String} Dynamic secret name
     */
    constructor(artifactoryTokenAudience, artifactoryTokenScope, name) { 
        
        DynamicSecretUpdateArtifactory.initialize(this, artifactoryTokenAudience, artifactoryTokenScope, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, artifactoryTokenAudience, artifactoryTokenScope, name) { 
        obj['artifactory-token-audience'] = artifactoryTokenAudience;
        obj['artifactory-token-scope'] = artifactoryTokenScope;
        obj['json'] = false;
        obj['name'] = name;
        obj['user-ttl'] = '60m';
    }

    /**
     * Constructs a <code>DynamicSecretUpdateArtifactory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretUpdateArtifactory} obj Optional instance to populate.
     * @return {module:model/DynamicSecretUpdateArtifactory} The populated <code>DynamicSecretUpdateArtifactory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretUpdateArtifactory();

            if (data.hasOwnProperty('artifactory-admin-name')) {
                obj['artifactory-admin-name'] = ApiClient.convertToType(data['artifactory-admin-name'], 'String');
            }
            if (data.hasOwnProperty('artifactory-admin-pwd')) {
                obj['artifactory-admin-pwd'] = ApiClient.convertToType(data['artifactory-admin-pwd'], 'String');
            }
            if (data.hasOwnProperty('artifactory-token-audience')) {
                obj['artifactory-token-audience'] = ApiClient.convertToType(data['artifactory-token-audience'], 'String');
            }
            if (data.hasOwnProperty('artifactory-token-scope')) {
                obj['artifactory-token-scope'] = ApiClient.convertToType(data['artifactory-token-scope'], 'String');
            }
            if (data.hasOwnProperty('base-url')) {
                obj['base-url'] = ApiClient.convertToType(data['base-url'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DynamicSecretUpdateArtifactory</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretUpdateArtifactory</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DynamicSecretUpdateArtifactory.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['artifactory-admin-name'] && !(typeof data['artifactory-admin-name'] === 'string' || data['artifactory-admin-name'] instanceof String)) {
            throw new Error("Expected the field `artifactory-admin-name` to be a primitive type in the JSON string but got " + data['artifactory-admin-name']);
        }
        // ensure the json data is a string
        if (data['artifactory-admin-pwd'] && !(typeof data['artifactory-admin-pwd'] === 'string' || data['artifactory-admin-pwd'] instanceof String)) {
            throw new Error("Expected the field `artifactory-admin-pwd` to be a primitive type in the JSON string but got " + data['artifactory-admin-pwd']);
        }
        // ensure the json data is a string
        if (data['artifactory-token-audience'] && !(typeof data['artifactory-token-audience'] === 'string' || data['artifactory-token-audience'] instanceof String)) {
            throw new Error("Expected the field `artifactory-token-audience` to be a primitive type in the JSON string but got " + data['artifactory-token-audience']);
        }
        // ensure the json data is a string
        if (data['artifactory-token-scope'] && !(typeof data['artifactory-token-scope'] === 'string' || data['artifactory-token-scope'] instanceof String)) {
            throw new Error("Expected the field `artifactory-token-scope` to be a primitive type in the JSON string but got " + data['artifactory-token-scope']);
        }
        // ensure the json data is a string
        if (data['base-url'] && !(typeof data['base-url'] === 'string' || data['base-url'] instanceof String)) {
            throw new Error("Expected the field `base-url` to be a primitive type in the JSON string but got " + data['base-url']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is a string
        if (data['producer-encryption-key-name'] && !(typeof data['producer-encryption-key-name'] === 'string' || data['producer-encryption-key-name'] instanceof String)) {
            throw new Error("Expected the field `producer-encryption-key-name` to be a primitive type in the JSON string but got " + data['producer-encryption-key-name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['target-name'] && !(typeof data['target-name'] === 'string' || data['target-name'] instanceof String)) {
            throw new Error("Expected the field `target-name` to be a primitive type in the JSON string but got " + data['target-name']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['user-ttl'] && !(typeof data['user-ttl'] === 'string' || data['user-ttl'] instanceof String)) {
            throw new Error("Expected the field `user-ttl` to be a primitive type in the JSON string but got " + data['user-ttl']);
        }

        return true;
    }


}

DynamicSecretUpdateArtifactory.RequiredProperties = ["artifactory-token-audience", "artifactory-token-scope", "name"];

/**
 * Artifactory Admin Name
 * @member {String} artifactory-admin-name
 */
DynamicSecretUpdateArtifactory.prototype['artifactory-admin-name'] = undefined;

/**
 * Artifactory Admin password
 * @member {String} artifactory-admin-pwd
 */
DynamicSecretUpdateArtifactory.prototype['artifactory-admin-pwd'] = undefined;

/**
 * Token Audience
 * @member {String} artifactory-token-audience
 */
DynamicSecretUpdateArtifactory.prototype['artifactory-token-audience'] = undefined;

/**
 * Token Scope
 * @member {String} artifactory-token-scope
 */
DynamicSecretUpdateArtifactory.prototype['artifactory-token-scope'] = undefined;

/**
 * Base URL
 * @member {String} base-url
 */
DynamicSecretUpdateArtifactory.prototype['base-url'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretUpdateArtifactory.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretUpdateArtifactory.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretUpdateArtifactory.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretUpdateArtifactory.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
DynamicSecretUpdateArtifactory.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretUpdateArtifactory.prototype['producer-encryption-key-name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretUpdateArtifactory.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretUpdateArtifactory.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretUpdateArtifactory.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretUpdateArtifactory.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretUpdateArtifactory.prototype['user-ttl'] = '60m';






export default DynamicSecretUpdateArtifactory;

