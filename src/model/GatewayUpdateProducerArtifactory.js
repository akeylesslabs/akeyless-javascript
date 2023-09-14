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
 * The GatewayUpdateProducerArtifactory model module.
 * @module model/GatewayUpdateProducerArtifactory
 * @version 3.4.0
 */
class GatewayUpdateProducerArtifactory {
    /**
     * Constructs a new <code>GatewayUpdateProducerArtifactory</code>.
     * gatewayUpdateProducerArtifactory is a command that updates artifactory producer
     * @alias module:model/GatewayUpdateProducerArtifactory
     * @param artifactoryTokenAudience {String} Token Audience
     * @param artifactoryTokenScope {String} Token Scope
     * @param name {String} Producer name
     */
    constructor(artifactoryTokenAudience, artifactoryTokenScope, name) { 
        
        GatewayUpdateProducerArtifactory.initialize(this, artifactoryTokenAudience, artifactoryTokenScope, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, artifactoryTokenAudience, artifactoryTokenScope, name) { 
        obj['artifactory-token-audience'] = artifactoryTokenAudience;
        obj['artifactory-token-scope'] = artifactoryTokenScope;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GatewayUpdateProducerArtifactory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerArtifactory} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerArtifactory} The populated <code>GatewayUpdateProducerArtifactory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerArtifactory();

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


}

/**
 * Artifactory Admin Name
 * @member {String} artifactory-admin-name
 */
GatewayUpdateProducerArtifactory.prototype['artifactory-admin-name'] = undefined;

/**
 * Artifactory Admin password
 * @member {String} artifactory-admin-pwd
 */
GatewayUpdateProducerArtifactory.prototype['artifactory-admin-pwd'] = undefined;

/**
 * Token Audience
 * @member {String} artifactory-token-audience
 */
GatewayUpdateProducerArtifactory.prototype['artifactory-token-audience'] = undefined;

/**
 * Token Scope
 * @member {String} artifactory-token-scope
 */
GatewayUpdateProducerArtifactory.prototype['artifactory-token-scope'] = undefined;

/**
 * Base URL
 * @member {String} base-url
 */
GatewayUpdateProducerArtifactory.prototype['base-url'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateProducerArtifactory.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateProducerArtifactory.prototype['json'] = false;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerArtifactory.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerArtifactory.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerArtifactory.prototype['producer-encryption-key-name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerArtifactory.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerArtifactory.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerArtifactory.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerArtifactory.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerArtifactory.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerArtifactory;

