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
 * The AuthMethodUpdateGcp model module.
 * @module model/AuthMethodUpdateGcp
 * @version 5.0.2
 */
class AuthMethodUpdateGcp {
    /**
     * Constructs a new <code>AuthMethodUpdateGcp</code>.
     * authMethodUpdateGcp is a command that updates a new auth method that will be able to authenticate using GCP IAM Service Account credentials or GCE instance credentials.
     * @alias module:model/AuthMethodUpdateGcp
     * @param audience {String} The audience to verify in the JWT received by the client
     * @param name {String} Auth Method name
     * @param type {String} Type of the GCP Access Rules
     */
    constructor(audience, name, type) { 
        
        AuthMethodUpdateGcp.initialize(this, audience, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, audience, name, type) { 
        obj['access-expires'] = 0;
        obj['audience'] = audience || 'akeyless.io';
        obj['json'] = false;
        obj['jwt-ttl'] = 0;
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>AuthMethodUpdateGcp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthMethodUpdateGcp} obj Optional instance to populate.
     * @return {module:model/AuthMethodUpdateGcp} The populated <code>AuthMethodUpdateGcp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthMethodUpdateGcp();

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
            if (data.hasOwnProperty('bound-labels')) {
                obj['bound-labels'] = ApiClient.convertToType(data['bound-labels'], ['String']);
            }
            if (data.hasOwnProperty('bound-projects')) {
                obj['bound-projects'] = ApiClient.convertToType(data['bound-projects'], ['String']);
            }
            if (data.hasOwnProperty('bound-regions')) {
                obj['bound-regions'] = ApiClient.convertToType(data['bound-regions'], ['String']);
            }
            if (data.hasOwnProperty('bound-service-accounts')) {
                obj['bound-service-accounts'] = ApiClient.convertToType(data['bound-service-accounts'], ['String']);
            }
            if (data.hasOwnProperty('bound-zones')) {
                obj['bound-zones'] = ApiClient.convertToType(data['bound-zones'], ['String']);
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
            if (data.hasOwnProperty('service-account-creds-data')) {
                obj['service-account-creds-data'] = ApiClient.convertToType(data['service-account-creds-data'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('unique-identifier')) {
                obj['unique-identifier'] = ApiClient.convertToType(data['unique-identifier'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthMethodUpdateGcp</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthMethodUpdateGcp</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AuthMethodUpdateGcp.RequiredProperties) {
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
        if (!Array.isArray(data['bound-labels'])) {
            throw new Error("Expected the field `bound-labels` to be an array in the JSON data but got " + data['bound-labels']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-projects'])) {
            throw new Error("Expected the field `bound-projects` to be an array in the JSON data but got " + data['bound-projects']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-regions'])) {
            throw new Error("Expected the field `bound-regions` to be an array in the JSON data but got " + data['bound-regions']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-service-accounts'])) {
            throw new Error("Expected the field `bound-service-accounts` to be an array in the JSON data but got " + data['bound-service-accounts']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-zones'])) {
            throw new Error("Expected the field `bound-zones` to be an array in the JSON data but got " + data['bound-zones']);
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
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['product-type'])) {
            throw new Error("Expected the field `product-type` to be an array in the JSON data but got " + data['product-type']);
        }
        // ensure the json data is a string
        if (data['service-account-creds-data'] && !(typeof data['service-account-creds-data'] === 'string' || data['service-account-creds-data'] instanceof String)) {
            throw new Error("Expected the field `service-account-creds-data` to be a primitive type in the JSON string but got " + data['service-account-creds-data']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['unique-identifier'] && !(typeof data['unique-identifier'] === 'string' || data['unique-identifier'] instanceof String)) {
            throw new Error("Expected the field `unique-identifier` to be a primitive type in the JSON string but got " + data['unique-identifier']);
        }

        return true;
    }


}

AuthMethodUpdateGcp.RequiredProperties = ["audience", "name", "type"];

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
AuthMethodUpdateGcp.prototype['access-expires'] = 0;

/**
 * The audience to verify in the JWT received by the client
 * @member {String} audience
 * @default 'akeyless.io'
 */
AuthMethodUpdateGcp.prototype['audience'] = 'akeyless.io';

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
AuthMethodUpdateGcp.prototype['audit-logs-claims'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
AuthMethodUpdateGcp.prototype['bound-ips'] = undefined;

/**
 * A comma-separated list of GCP labels formatted as \"key:value\" strings that must be set on authorized GCE instances. TODO: Because GCP labels are not currently ACL'd ....
 * @member {Array.<String>} bound-labels
 */
AuthMethodUpdateGcp.prototype['bound-labels'] = undefined;

/**
 * === Human and Machine authentication section === Array of GCP project IDs. Only entities belonging to any of the provided projects can authenticate.
 * @member {Array.<String>} bound-projects
 */
AuthMethodUpdateGcp.prototype['bound-projects'] = undefined;

/**
 * List of regions that a GCE instance must belong to in order to be authenticated. TODO: If bound_instance_groups is provided, it is assumed to be a regional group and the group must belong to this region. If bound_zones are provided, this attribute is ignored.
 * @member {Array.<String>} bound-regions
 */
AuthMethodUpdateGcp.prototype['bound-regions'] = undefined;

/**
 * List of service accounts the service account must be part of in order to be authenticated.
 * @member {Array.<String>} bound-service-accounts
 */
AuthMethodUpdateGcp.prototype['bound-service-accounts'] = undefined;

/**
 * === Machine authentication section === List of zones that a GCE instance must belong to in order to be authenticated. TODO: If bound_instance_groups is provided, it is assumed to be a zonal group and the group must belong to this zone.
 * @member {Array.<String>} bound-zones
 */
AuthMethodUpdateGcp.prototype['bound-zones'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
AuthMethodUpdateGcp.prototype['delete_protection'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
AuthMethodUpdateGcp.prototype['description'] = undefined;

/**
 * How many days before the expiration of the auth method would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
AuthMethodUpdateGcp.prototype['expiration-event-in'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
AuthMethodUpdateGcp.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
AuthMethodUpdateGcp.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
AuthMethodUpdateGcp.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
AuthMethodUpdateGcp.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
AuthMethodUpdateGcp.prototype['name'] = undefined;

/**
 * Auth Method new name
 * @member {String} new-name
 */
AuthMethodUpdateGcp.prototype['new-name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
AuthMethodUpdateGcp.prototype['product-type'] = undefined;

/**
 * ServiceAccount credentials data instead of giving a file path, base64 encoded
 * @member {String} service-account-creds-data
 */
AuthMethodUpdateGcp.prototype['service-account-creds-data'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
AuthMethodUpdateGcp.prototype['token'] = undefined;

/**
 * Type of the GCP Access Rules
 * @member {String} type
 */
AuthMethodUpdateGcp.prototype['type'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
AuthMethodUpdateGcp.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value which is a \"sub claim\" name that contains details uniquely identifying that resource. This \"sub claim\" is used to distinguish between different identities.
 * @member {String} unique-identifier
 */
AuthMethodUpdateGcp.prototype['unique-identifier'] = undefined;






export default AuthMethodUpdateGcp;

