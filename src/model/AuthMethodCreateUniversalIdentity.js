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
 * The AuthMethodCreateUniversalIdentity model module.
 * @module model/AuthMethodCreateUniversalIdentity
 * @version 5.0.0
 */
class AuthMethodCreateUniversalIdentity {
    /**
     * Constructs a new <code>AuthMethodCreateUniversalIdentity</code>.
     * authMethodCreateUniversalIdentity is a command that creates a new auth method that will be able to authenticate using Akeyless Universal Identity.
     * @alias module:model/AuthMethodCreateUniversalIdentity
     * @param name {String} Auth Method name
     */
    constructor(name) { 
        
        AuthMethodCreateUniversalIdentity.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['access-expires'] = 0;
        obj['json'] = false;
        obj['jwt-ttl'] = 0;
        obj['name'] = name;
        obj['ttl'] = 60;
    }

    /**
     * Constructs a <code>AuthMethodCreateUniversalIdentity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthMethodCreateUniversalIdentity} obj Optional instance to populate.
     * @return {module:model/AuthMethodCreateUniversalIdentity} The populated <code>AuthMethodCreateUniversalIdentity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthMethodCreateUniversalIdentity();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('audit-logs-claims')) {
                obj['audit-logs-claims'] = ApiClient.convertToType(data['audit-logs-claims'], ['String']);
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('deny-inheritance')) {
                obj['deny-inheritance'] = ApiClient.convertToType(data['deny-inheritance'], 'Boolean');
            }
            if (data.hasOwnProperty('deny-rotate')) {
                obj['deny-rotate'] = ApiClient.convertToType(data['deny-rotate'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('expiration-event-in')) {
                obj['expiration-event-in'] = ApiClient.convertToType(data['expiration-event-in'], ['String']);
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('gw-bound-ips')) {
                obj['gw-bound-ips'] = ApiClient.convertToType(data['gw-bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('jwt-ttl')) {
                obj['jwt-ttl'] = ApiClient.convertToType(data['jwt-ttl'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('product-type')) {
                obj['product-type'] = ApiClient.convertToType(data['product-type'], ['String']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthMethodCreateUniversalIdentity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthMethodCreateUniversalIdentity</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AuthMethodCreateUniversalIdentity.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['audit-logs-claims'])) {
            throw new Error("Expected the field `audit-logs-claims` to be an array in the JSON data but got " + data['audit-logs-claims']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-ips'])) {
            throw new Error("Expected the field `bound-ips` to be an array in the JSON data but got " + data['bound-ips']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['expiration-event-in'])) {
            throw new Error("Expected the field `expiration-event-in` to be an array in the JSON data but got " + data['expiration-event-in']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['gw-bound-ips'])) {
            throw new Error("Expected the field `gw-bound-ips` to be an array in the JSON data but got " + data['gw-bound-ips']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['product-type'])) {
            throw new Error("Expected the field `product-type` to be an array in the JSON data but got " + data['product-type']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

AuthMethodCreateUniversalIdentity.RequiredProperties = ["name"];

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
AuthMethodCreateUniversalIdentity.prototype['access-expires'] = 0;

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
AuthMethodCreateUniversalIdentity.prototype['audit-logs-claims'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
AuthMethodCreateUniversalIdentity.prototype['bound-ips'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
AuthMethodCreateUniversalIdentity.prototype['delete_protection'] = undefined;

/**
 * Deny from root to create children
 * @member {Boolean} deny-inheritance
 */
AuthMethodCreateUniversalIdentity.prototype['deny-inheritance'] = undefined;

/**
 * Deny from the token to rotate
 * @member {Boolean} deny-rotate
 */
AuthMethodCreateUniversalIdentity.prototype['deny-rotate'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
AuthMethodCreateUniversalIdentity.prototype['description'] = undefined;

/**
 * How many days before the expiration of the auth method would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
AuthMethodCreateUniversalIdentity.prototype['expiration-event-in'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
AuthMethodCreateUniversalIdentity.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
AuthMethodCreateUniversalIdentity.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
AuthMethodCreateUniversalIdentity.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
AuthMethodCreateUniversalIdentity.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
AuthMethodCreateUniversalIdentity.prototype['name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
AuthMethodCreateUniversalIdentity.prototype['product-type'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
AuthMethodCreateUniversalIdentity.prototype['token'] = undefined;

/**
 * Token ttl
 * @member {Number} ttl
 * @default 60
 */
AuthMethodCreateUniversalIdentity.prototype['ttl'] = 60;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
AuthMethodCreateUniversalIdentity.prototype['uid-token'] = undefined;






export default AuthMethodCreateUniversalIdentity;

