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
 * The GatewayUpdateProducerChef model module.
 * @module model/GatewayUpdateProducerChef
 * @version 2.16.4
 */
class GatewayUpdateProducerChef {
    /**
     * Constructs a new <code>GatewayUpdateProducerChef</code>.
     * gatewayUpdateProducerChef is a command that updates chef producer
     * @alias module:model/GatewayUpdateProducerChef
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerChef.initialize(this, name);
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
     * Constructs a <code>GatewayUpdateProducerChef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerChef} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerChef} The populated <code>GatewayUpdateProducerChef</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerChef();

            if (data.hasOwnProperty('chef-orgs')) {
                obj['chef-orgs'] = ApiClient.convertToType(data['chef-orgs'], 'String');
            }
            if (data.hasOwnProperty('chef-server-key')) {
                obj['chef-server-key'] = ApiClient.convertToType(data['chef-server-key'], 'String');
            }
            if (data.hasOwnProperty('chef-server-url')) {
                obj['chef-server-url'] = ApiClient.convertToType(data['chef-server-url'], 'String');
            }
            if (data.hasOwnProperty('chef-server-username')) {
                obj['chef-server-username'] = ApiClient.convertToType(data['chef-server-username'], 'String');
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
            if (data.hasOwnProperty('skip-ssl')) {
                obj['skip-ssl'] = ApiClient.convertToType(data['skip-ssl'], 'Boolean');
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
 * Organizations
 * @member {String} chef-orgs
 */
GatewayUpdateProducerChef.prototype['chef-orgs'] = undefined;

/**
 * Server key
 * @member {String} chef-server-key
 */
GatewayUpdateProducerChef.prototype['chef-server-key'] = undefined;

/**
 * Server URL
 * @member {String} chef-server-url
 */
GatewayUpdateProducerChef.prototype['chef-server-url'] = undefined;

/**
 * Server username
 * @member {String} chef-server-username
 */
GatewayUpdateProducerChef.prototype['chef-server-username'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerChef.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerChef.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerChef.prototype['producer-encryption-key-name'] = undefined;

/**
 * Skip SSL
 * @member {Boolean} skip-ssl
 * @default true
 */
GatewayUpdateProducerChef.prototype['skip-ssl'] = true;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerChef.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerChef.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerChef.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerChef.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerChef.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerChef;

