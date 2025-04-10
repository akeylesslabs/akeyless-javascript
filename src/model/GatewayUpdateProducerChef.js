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
 * @version 5.0.2
 */
class GatewayUpdateProducerChef {
    /**
     * Constructs a new <code>GatewayUpdateProducerChef</code>.
     * gatewayUpdateProducerChef is a command that updates chef producer [Deprecated: Use dynamic-secret-update-chef command]
     * @alias module:model/GatewayUpdateProducerChef
     * @param name {String} Dynamic secret name
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
        obj['json'] = false;
        obj['name'] = name;
        obj['skip-ssl'] = true;
        obj['user-ttl'] = '60m';
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
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>GatewayUpdateProducerChef</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayUpdateProducerChef</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GatewayUpdateProducerChef.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['chef-orgs'] && !(typeof data['chef-orgs'] === 'string' || data['chef-orgs'] instanceof String)) {
            throw new Error("Expected the field `chef-orgs` to be a primitive type in the JSON string but got " + data['chef-orgs']);
        }
        // ensure the json data is a string
        if (data['chef-server-key'] && !(typeof data['chef-server-key'] === 'string' || data['chef-server-key'] instanceof String)) {
            throw new Error("Expected the field `chef-server-key` to be a primitive type in the JSON string but got " + data['chef-server-key']);
        }
        // ensure the json data is a string
        if (data['chef-server-url'] && !(typeof data['chef-server-url'] === 'string' || data['chef-server-url'] instanceof String)) {
            throw new Error("Expected the field `chef-server-url` to be a primitive type in the JSON string but got " + data['chef-server-url']);
        }
        // ensure the json data is a string
        if (data['chef-server-username'] && !(typeof data['chef-server-username'] === 'string' || data['chef-server-username'] instanceof String)) {
            throw new Error("Expected the field `chef-server-username` to be a primitive type in the JSON string but got " + data['chef-server-username']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
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
        if (data['password-length'] && !(typeof data['password-length'] === 'string' || data['password-length'] instanceof String)) {
            throw new Error("Expected the field `password-length` to be a primitive type in the JSON string but got " + data['password-length']);
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

GatewayUpdateProducerChef.RequiredProperties = ["name"];

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
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateProducerChef.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateProducerChef.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
GatewayUpdateProducerChef.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
GatewayUpdateProducerChef.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
GatewayUpdateProducerChef.prototype['password-length'] = undefined;

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
 * Add tags attached to this object
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

