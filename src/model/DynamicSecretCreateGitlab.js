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
 * The DynamicSecretCreateGitlab model module.
 * @module model/DynamicSecretCreateGitlab
 * @version 5.0.1
 */
class DynamicSecretCreateGitlab {
    /**
     * Constructs a new <code>DynamicSecretCreateGitlab</code>.
     * dynamicSecretCreateGitlab is a command that creates gitlab dynamic secret
     * @alias module:model/DynamicSecretCreateGitlab
     * @param gitlabAccessType {String} Gitlab access token type [project,group]
     * @param gitlabTokenScopes {String} Comma-separated list of access token scopes to grant
     * @param name {String} Dynamic secret name
     */
    constructor(gitlabAccessType, gitlabTokenScopes, name) { 
        
        DynamicSecretCreateGitlab.initialize(this, gitlabAccessType, gitlabTokenScopes, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gitlabAccessType, gitlabTokenScopes, name) { 
        obj['gitlab-access-type'] = gitlabAccessType;
        obj['gitlab-token-scopes'] = gitlabTokenScopes;
        obj['gitlab-url'] = 'https://gitlab.com/';
        obj['json'] = false;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>DynamicSecretCreateGitlab</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretCreateGitlab} obj Optional instance to populate.
     * @return {module:model/DynamicSecretCreateGitlab} The populated <code>DynamicSecretCreateGitlab</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretCreateGitlab();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('gitlab-access-token')) {
                obj['gitlab-access-token'] = ApiClient.convertToType(data['gitlab-access-token'], 'String');
            }
            if (data.hasOwnProperty('gitlab-access-type')) {
                obj['gitlab-access-type'] = ApiClient.convertToType(data['gitlab-access-type'], 'String');
            }
            if (data.hasOwnProperty('gitlab-certificate')) {
                obj['gitlab-certificate'] = ApiClient.convertToType(data['gitlab-certificate'], 'String');
            }
            if (data.hasOwnProperty('gitlab-role')) {
                obj['gitlab-role'] = ApiClient.convertToType(data['gitlab-role'], 'String');
            }
            if (data.hasOwnProperty('gitlab-token-scopes')) {
                obj['gitlab-token-scopes'] = ApiClient.convertToType(data['gitlab-token-scopes'], 'String');
            }
            if (data.hasOwnProperty('gitlab-url')) {
                obj['gitlab-url'] = ApiClient.convertToType(data['gitlab-url'], 'String');
            }
            if (data.hasOwnProperty('group-name')) {
                obj['group-name'] = ApiClient.convertToType(data['group-name'], 'String');
            }
            if (data.hasOwnProperty('installation-organization')) {
                obj['installation-organization'] = ApiClient.convertToType(data['installation-organization'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DynamicSecretCreateGitlab</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretCreateGitlab</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DynamicSecretCreateGitlab.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['gitlab-access-token'] && !(typeof data['gitlab-access-token'] === 'string' || data['gitlab-access-token'] instanceof String)) {
            throw new Error("Expected the field `gitlab-access-token` to be a primitive type in the JSON string but got " + data['gitlab-access-token']);
        }
        // ensure the json data is a string
        if (data['gitlab-access-type'] && !(typeof data['gitlab-access-type'] === 'string' || data['gitlab-access-type'] instanceof String)) {
            throw new Error("Expected the field `gitlab-access-type` to be a primitive type in the JSON string but got " + data['gitlab-access-type']);
        }
        // ensure the json data is a string
        if (data['gitlab-certificate'] && !(typeof data['gitlab-certificate'] === 'string' || data['gitlab-certificate'] instanceof String)) {
            throw new Error("Expected the field `gitlab-certificate` to be a primitive type in the JSON string but got " + data['gitlab-certificate']);
        }
        // ensure the json data is a string
        if (data['gitlab-role'] && !(typeof data['gitlab-role'] === 'string' || data['gitlab-role'] instanceof String)) {
            throw new Error("Expected the field `gitlab-role` to be a primitive type in the JSON string but got " + data['gitlab-role']);
        }
        // ensure the json data is a string
        if (data['gitlab-token-scopes'] && !(typeof data['gitlab-token-scopes'] === 'string' || data['gitlab-token-scopes'] instanceof String)) {
            throw new Error("Expected the field `gitlab-token-scopes` to be a primitive type in the JSON string but got " + data['gitlab-token-scopes']);
        }
        // ensure the json data is a string
        if (data['gitlab-url'] && !(typeof data['gitlab-url'] === 'string' || data['gitlab-url'] instanceof String)) {
            throw new Error("Expected the field `gitlab-url` to be a primitive type in the JSON string but got " + data['gitlab-url']);
        }
        // ensure the json data is a string
        if (data['group-name'] && !(typeof data['group-name'] === 'string' || data['group-name'] instanceof String)) {
            throw new Error("Expected the field `group-name` to be a primitive type in the JSON string but got " + data['group-name']);
        }
        // ensure the json data is a string
        if (data['installation-organization'] && !(typeof data['installation-organization'] === 'string' || data['installation-organization'] instanceof String)) {
            throw new Error("Expected the field `installation-organization` to be a primitive type in the JSON string but got " + data['installation-organization']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
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
        if (data['ttl'] && !(typeof data['ttl'] === 'string' || data['ttl'] instanceof String)) {
            throw new Error("Expected the field `ttl` to be a primitive type in the JSON string but got " + data['ttl']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

DynamicSecretCreateGitlab.RequiredProperties = ["gitlab-access-type", "gitlab-token-scopes", "name"];

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretCreateGitlab.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretCreateGitlab.prototype['description'] = undefined;

/**
 * Gitlab access token
 * @member {String} gitlab-access-token
 */
DynamicSecretCreateGitlab.prototype['gitlab-access-token'] = undefined;

/**
 * Gitlab access token type [project,group]
 * @member {String} gitlab-access-type
 */
DynamicSecretCreateGitlab.prototype['gitlab-access-type'] = undefined;

/**
 * Gitlab tls certificate (base64 encoded)
 * @member {String} gitlab-certificate
 */
DynamicSecretCreateGitlab.prototype['gitlab-certificate'] = undefined;

/**
 * Gitlab role
 * @member {String} gitlab-role
 */
DynamicSecretCreateGitlab.prototype['gitlab-role'] = undefined;

/**
 * Comma-separated list of access token scopes to grant
 * @member {String} gitlab-token-scopes
 */
DynamicSecretCreateGitlab.prototype['gitlab-token-scopes'] = undefined;

/**
 * Gitlab base url
 * @member {String} gitlab-url
 * @default 'https://gitlab.com/'
 */
DynamicSecretCreateGitlab.prototype['gitlab-url'] = 'https://gitlab.com/';

/**
 * Gitlab group name, required for access-type=group
 * @member {String} group-name
 */
DynamicSecretCreateGitlab.prototype['group-name'] = undefined;

/**
 * Gitlab project name, required for access-type=project
 * @member {String} installation-organization
 */
DynamicSecretCreateGitlab.prototype['installation-organization'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretCreateGitlab.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretCreateGitlab.prototype['name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretCreateGitlab.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretCreateGitlab.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretCreateGitlab.prototype['token'] = undefined;

/**
 * Access Token TTL
 * @member {String} ttl
 */
DynamicSecretCreateGitlab.prototype['ttl'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretCreateGitlab.prototype['uid-token'] = undefined;






export default DynamicSecretCreateGitlab;

