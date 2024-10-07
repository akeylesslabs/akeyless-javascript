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
 * @version 4.2.5
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
        obj['name'] = name;
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
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

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
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerGithub.prototype['uid-token'] = undefined;






export default GatewayUpdateProducerGithub;

