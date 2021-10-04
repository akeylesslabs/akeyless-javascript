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
 * The GatewayCreateProducerChef model module.
 * @module model/GatewayCreateProducerChef
 * @version 2.5.9
 */
class GatewayCreateProducerChef {
    /**
     * Constructs a new <code>GatewayCreateProducerChef</code>.
     * gatewayCreateProducerChef is a command that creates chef producer
     * @alias module:model/GatewayCreateProducerChef
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayCreateProducerChef.initialize(this, name);
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
     * Constructs a <code>GatewayCreateProducerChef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerChef} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerChef} The populated <code>GatewayCreateProducerChef</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerChef();

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
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('skip-ssl')) {
                obj['skip-ssl'] = ApiClient.convertToType(data['skip-ssl'], 'Boolean');
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Organizations
 * @member {String} chef-orgs
 */
GatewayCreateProducerChef.prototype['chef-orgs'] = undefined;

/**
 * Server key
 * @member {String} chef-server-key
 */
GatewayCreateProducerChef.prototype['chef-server-key'] = undefined;

/**
 * Server URL
 * @member {String} chef-server-url
 */
GatewayCreateProducerChef.prototype['chef-server-url'] = undefined;

/**
 * Server username
 * @member {String} chef-server-username
 */
GatewayCreateProducerChef.prototype['chef-server-username'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerChef.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GatewayCreateProducerChef.prototype['password'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerChef.prototype['producer-encryption-key-name'] = undefined;

/**
 * Skip SSL
 * @member {Boolean} skip-ssl
 * @default true
 */
GatewayCreateProducerChef.prototype['skip-ssl'] = true;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerChef.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerChef.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerChef.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerChef.prototype['user-ttl'] = '60m';

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GatewayCreateProducerChef.prototype['username'] = undefined;






export default GatewayCreateProducerChef;

