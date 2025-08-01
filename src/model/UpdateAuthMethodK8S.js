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
 * The UpdateAuthMethodK8S model module.
 * @module model/UpdateAuthMethodK8S
 * @version 5.0.6
 */
class UpdateAuthMethodK8S {
    /**
     * Constructs a new <code>UpdateAuthMethodK8S</code>.
     * updateAuthMethodK8S is a command that updates a new auth method that will be able to authenticate using K8S. [Deprecated: Use auth-method-update-k8s command]
     * @alias module:model/UpdateAuthMethodK8S
     * @param name {String} Auth Method name
     */
    constructor(name) { 
        
        UpdateAuthMethodK8S.initialize(this, name);
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
    }

    /**
     * Constructs a <code>UpdateAuthMethodK8S</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAuthMethodK8S} obj Optional instance to populate.
     * @return {module:model/UpdateAuthMethodK8S} The populated <code>UpdateAuthMethodK8S</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAuthMethodK8S();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('audit-logs-claims')) {
                obj['audit-logs-claims'] = ApiClient.convertToType(data['audit-logs-claims'], ['String']);
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('bound-namespaces')) {
                obj['bound-namespaces'] = ApiClient.convertToType(data['bound-namespaces'], ['String']);
            }
            if (data.hasOwnProperty('bound-pod-names')) {
                obj['bound-pod-names'] = ApiClient.convertToType(data['bound-pod-names'], ['String']);
            }
            if (data.hasOwnProperty('bound-sa-names')) {
                obj['bound-sa-names'] = ApiClient.convertToType(data['bound-sa-names'], ['String']);
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
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
            if (data.hasOwnProperty('gen-key')) {
                obj['gen-key'] = ApiClient.convertToType(data['gen-key'], 'String');
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
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('product-type')) {
                obj['product-type'] = ApiClient.convertToType(data['product-type'], ['String']);
            }
            if (data.hasOwnProperty('public-key')) {
                obj['public-key'] = ApiClient.convertToType(data['public-key'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateAuthMethodK8S</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateAuthMethodK8S</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateAuthMethodK8S.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['audience'] && !(typeof data['audience'] === 'string' || data['audience'] instanceof String)) {
            throw new Error("Expected the field `audience` to be a primitive type in the JSON string but got " + data['audience']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['audit-logs-claims'])) {
            throw new Error("Expected the field `audit-logs-claims` to be an array in the JSON data but got " + data['audit-logs-claims']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-ips'])) {
            throw new Error("Expected the field `bound-ips` to be an array in the JSON data but got " + data['bound-ips']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-namespaces'])) {
            throw new Error("Expected the field `bound-namespaces` to be an array in the JSON data but got " + data['bound-namespaces']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-pod-names'])) {
            throw new Error("Expected the field `bound-pod-names` to be an array in the JSON data but got " + data['bound-pod-names']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-sa-names'])) {
            throw new Error("Expected the field `bound-sa-names` to be an array in the JSON data but got " + data['bound-sa-names']);
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
        // ensure the json data is a string
        if (data['gen-key'] && !(typeof data['gen-key'] === 'string' || data['gen-key'] instanceof String)) {
            throw new Error("Expected the field `gen-key` to be a primitive type in the JSON string but got " + data['gen-key']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['gw-bound-ips'])) {
            throw new Error("Expected the field `gw-bound-ips` to be an array in the JSON data but got " + data['gw-bound-ips']);
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
        if (!Array.isArray(data['product-type'])) {
            throw new Error("Expected the field `product-type` to be an array in the JSON data but got " + data['product-type']);
        }
        // ensure the json data is a string
        if (data['public-key'] && !(typeof data['public-key'] === 'string' || data['public-key'] instanceof String)) {
            throw new Error("Expected the field `public-key` to be a primitive type in the JSON string but got " + data['public-key']);
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

UpdateAuthMethodK8S.RequiredProperties = ["name"];

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
UpdateAuthMethodK8S.prototype['access-expires'] = 0;

/**
 * The audience in the Kubernetes JWT that the access is restricted to
 * @member {String} audience
 */
UpdateAuthMethodK8S.prototype['audience'] = undefined;

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
UpdateAuthMethodK8S.prototype['audit-logs-claims'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
UpdateAuthMethodK8S.prototype['bound-ips'] = undefined;

/**
 * A list of namespaces that the access is restricted to
 * @member {Array.<String>} bound-namespaces
 */
UpdateAuthMethodK8S.prototype['bound-namespaces'] = undefined;

/**
 * A list of pod names that the access is restricted to
 * @member {Array.<String>} bound-pod-names
 */
UpdateAuthMethodK8S.prototype['bound-pod-names'] = undefined;

/**
 * A list of service account names that the access is restricted to
 * @member {Array.<String>} bound-sa-names
 */
UpdateAuthMethodK8S.prototype['bound-sa-names'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
UpdateAuthMethodK8S.prototype['delete_protection'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
UpdateAuthMethodK8S.prototype['description'] = undefined;

/**
 * How many days before the expiration of the auth method would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
UpdateAuthMethodK8S.prototype['expiration-event-in'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
UpdateAuthMethodK8S.prototype['force-sub-claims'] = undefined;

/**
 * Automatically generate key-pair for K8S configuration. If set to false, a public key needs to be provided [true/false]
 * @member {String} gen-key
 */
UpdateAuthMethodK8S.prototype['gen-key'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
UpdateAuthMethodK8S.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateAuthMethodK8S.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
UpdateAuthMethodK8S.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
UpdateAuthMethodK8S.prototype['name'] = undefined;

/**
 * Auth Method new name
 * @member {String} new-name
 */
UpdateAuthMethodK8S.prototype['new-name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
UpdateAuthMethodK8S.prototype['product-type'] = undefined;

/**
 * Base64-encoded or PEM formatted public key data for K8S authentication method is required [RSA2048]
 * @member {String} public-key
 */
UpdateAuthMethodK8S.prototype['public-key'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAuthMethodK8S.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAuthMethodK8S.prototype['uid-token'] = undefined;






export default UpdateAuthMethodK8S;

