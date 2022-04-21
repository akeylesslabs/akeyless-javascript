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
 * The GatewayCreateProducerGithub model module.
 * @module model/GatewayCreateProducerGithub
 * @version 2.16.3
 */
class GatewayCreateProducerGithub {
    /**
     * Constructs a new <code>GatewayCreateProducerGithub</code>.
     * gatewayCreateProducerGithub is a command that creates github producer
     * @alias module:model/GatewayCreateProducerGithub
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayCreateProducerGithub.initialize(this, name);
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
     * Constructs a <code>GatewayCreateProducerGithub</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerGithub} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerGithub} The populated <code>GatewayCreateProducerGithub</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerGithub();

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
            if (data.hasOwnProperty('installation-repository')) {
                obj['installation-repository'] = ApiClient.convertToType(data['installation-repository'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
 * Github app id
 * @member {Number} github-app-id
 */
GatewayCreateProducerGithub.prototype['github-app-id'] = undefined;

/**
 * App private key
 * @member {String} github-app-private-key
 */
GatewayCreateProducerGithub.prototype['github-app-private-key'] = undefined;

/**
 * Base URL
 * @member {String} github-base-url
 */
GatewayCreateProducerGithub.prototype['github-base-url'] = undefined;

/**
 * Github app installation id
 * @member {Number} installation-id
 */
GatewayCreateProducerGithub.prototype['installation-id'] = undefined;

/**
 * Repository that the app installation has access to
 * @member {String} installation-repository
 */
GatewayCreateProducerGithub.prototype['installation-repository'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerGithub.prototype['name'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerGithub.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerGithub.prototype['token'] = undefined;

/**
 * Optional - installation token's allowed permissions
 * @member {Array.<String>} token-permissions
 */
GatewayCreateProducerGithub.prototype['token-permissions'] = undefined;

/**
 * Optional - installation token's allowed repositories
 * @member {Array.<String>} token-repositories
 */
GatewayCreateProducerGithub.prototype['token-repositories'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerGithub.prototype['uid-token'] = undefined;






export default GatewayCreateProducerGithub;

