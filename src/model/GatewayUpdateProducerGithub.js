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
 * The GatewayUpdateProducerGithub model module.
 * @module model/GatewayUpdateProducerGithub
 * @version 5.0.2
 */
class GatewayUpdateProducerGithub {
    /**
     * Constructs a new <code>GatewayUpdateProducerGithub</code>.
     * gatewayUpdateProducerGithub is a command that updates github producer [Deprecated: Use dynamic-secret-update-github command]
     * @alias module:model/GatewayUpdateProducerGithub
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        GatewayUpdateProducerGithub.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['github-base-url'] = 'https://api.github.com/';
        obj['json'] = false;
        obj['name'] = name;
        obj['token-ttl'] = '60m';
    }

    /**
     * Constructs a <code>GatewayUpdateProducerGithub</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerGithub} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerGithub} The populated <code>GatewayUpdateProducerGithub</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerGithub();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
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
            if (data.hasOwnProperty('installation-id')) {
                obj['installation-id'] = ApiClient.convertToType(data['installation-id'], 'Number');
            }
            if (data.hasOwnProperty('installation-organization')) {
                obj['installation-organization'] = ApiClient.convertToType(data['installation-organization'], 'String');
            }
            if (data.hasOwnProperty('installation-repository')) {
                obj['installation-repository'] = ApiClient.convertToType(data['installation-repository'], 'String');
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
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('token-permissions')) {
                obj['token-permissions'] = ApiClient.convertToType(data['token-permissions'], ['String']);
            }
            if (data.hasOwnProperty('token-repositories')) {
                obj['token-repositories'] = ApiClient.convertToType(data['token-repositories'], ['String']);
            }
            if (data.hasOwnProperty('token-ttl')) {
                obj['token-ttl'] = ApiClient.convertToType(data['token-ttl'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GatewayUpdateProducerGithub</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayUpdateProducerGithub</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GatewayUpdateProducerGithub.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['github-app-private-key'] && !(typeof data['github-app-private-key'] === 'string' || data['github-app-private-key'] instanceof String)) {
            throw new Error("Expected the field `github-app-private-key` to be a primitive type in the JSON string but got " + data['github-app-private-key']);
        }
        // ensure the json data is a string
        if (data['github-base-url'] && !(typeof data['github-base-url'] === 'string' || data['github-base-url'] instanceof String)) {
            throw new Error("Expected the field `github-base-url` to be a primitive type in the JSON string but got " + data['github-base-url']);
        }
        // ensure the json data is a string
        if (data['installation-organization'] && !(typeof data['installation-organization'] === 'string' || data['installation-organization'] instanceof String)) {
            throw new Error("Expected the field `installation-organization` to be a primitive type in the JSON string but got " + data['installation-organization']);
        }
        // ensure the json data is a string
        if (data['installation-repository'] && !(typeof data['installation-repository'] === 'string' || data['installation-repository'] instanceof String)) {
            throw new Error("Expected the field `installation-repository` to be a primitive type in the JSON string but got " + data['installation-repository']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
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
        // ensure the json data is an array
        if (!Array.isArray(data['token-permissions'])) {
            throw new Error("Expected the field `token-permissions` to be an array in the JSON data but got " + data['token-permissions']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['token-repositories'])) {
            throw new Error("Expected the field `token-repositories` to be an array in the JSON data but got " + data['token-repositories']);
        }
        // ensure the json data is a string
        if (data['token-ttl'] && !(typeof data['token-ttl'] === 'string' || data['token-ttl'] instanceof String)) {
            throw new Error("Expected the field `token-ttl` to be a primitive type in the JSON string but got " + data['token-ttl']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

GatewayUpdateProducerGithub.RequiredProperties = ["name"];

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateProducerGithub.prototype['delete_protection'] = undefined;

/**
 * Github app id
 * @member {Number} github-app-id
 */
GatewayUpdateProducerGithub.prototype['github-app-id'] = undefined;

/**
 * App private key
 * @member {String} github-app-private-key
 */
GatewayUpdateProducerGithub.prototype['github-app-private-key'] = undefined;

/**
 * Base URL
 * @member {String} github-base-url
 * @default 'https://api.github.com/'
 */
GatewayUpdateProducerGithub.prototype['github-base-url'] = 'https://api.github.com/';

/**
 * GitHub application installation id
 * @member {Number} installation-id
 */
GatewayUpdateProducerGithub.prototype['installation-id'] = undefined;

/**
 * Optional, mutually exclusive with installation id, GitHub organization name
 * @member {String} installation-organization
 */
GatewayUpdateProducerGithub.prototype['installation-organization'] = undefined;

/**
 * Optional, mutually exclusive with installation id, GitHub repository '<owner>/<repo-name>'
 * @member {String} installation-repository
 */
GatewayUpdateProducerGithub.prototype['installation-repository'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateProducerGithub.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
GatewayUpdateProducerGithub.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
GatewayUpdateProducerGithub.prototype['new-name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerGithub.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerGithub.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerGithub.prototype['token'] = undefined;

/**
 * Optional - installation token's allowed permissions
 * @member {Array.<String>} token-permissions
 */
GatewayUpdateProducerGithub.prototype['token-permissions'] = undefined;

/**
 * Optional - installation token's allowed repositories
 * @member {Array.<String>} token-repositories
 */
GatewayUpdateProducerGithub.prototype['token-repositories'] = undefined;

/**
 * Token TTL
 * @member {String} token-ttl
 * @default '60m'
 */
GatewayUpdateProducerGithub.prototype['token-ttl'] = '60m';

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerGithub.prototype['uid-token'] = undefined;






export default GatewayUpdateProducerGithub;

