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
 * The UpdateAuthMethodAWSIAM model module.
 * @module model/UpdateAuthMethodAWSIAM
 * @version 5.0.3
 */
class UpdateAuthMethodAWSIAM {
    /**
     * Constructs a new <code>UpdateAuthMethodAWSIAM</code>.
     * updateAuthMethodAWSIAM is a command that updates a new Auth Method that will be able to authenticate using AWS IAM credentials. [Deprecated: Use auth-method-update-aws-iam command]
     * @alias module:model/UpdateAuthMethodAWSIAM
     * @param boundAwsAccountId {Array.<String>} A list of AWS account-IDs that the access is restricted to
     * @param name {String} Auth Method name
     */
    constructor(boundAwsAccountId, name) { 
        
        UpdateAuthMethodAWSIAM.initialize(this, boundAwsAccountId, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, boundAwsAccountId, name) { 
        obj['access-expires'] = 0;
        obj['bound-aws-account-id'] = boundAwsAccountId;
        obj['json'] = false;
        obj['jwt-ttl'] = 0;
        obj['name'] = name;
        obj['sts-url'] = 'https://sts.amazonaws.com';
    }

    /**
     * Constructs a <code>UpdateAuthMethodAWSIAM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAuthMethodAWSIAM} obj Optional instance to populate.
     * @return {module:model/UpdateAuthMethodAWSIAM} The populated <code>UpdateAuthMethodAWSIAM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAuthMethodAWSIAM();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('audit-logs-claims')) {
                obj['audit-logs-claims'] = ApiClient.convertToType(data['audit-logs-claims'], ['String']);
            }
            if (data.hasOwnProperty('bound-arn')) {
                obj['bound-arn'] = ApiClient.convertToType(data['bound-arn'], ['String']);
            }
            if (data.hasOwnProperty('bound-aws-account-id')) {
                obj['bound-aws-account-id'] = ApiClient.convertToType(data['bound-aws-account-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('bound-resource-id')) {
                obj['bound-resource-id'] = ApiClient.convertToType(data['bound-resource-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-role-id')) {
                obj['bound-role-id'] = ApiClient.convertToType(data['bound-role-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-role-name')) {
                obj['bound-role-name'] = ApiClient.convertToType(data['bound-role-name'], ['String']);
            }
            if (data.hasOwnProperty('bound-user-id')) {
                obj['bound-user-id'] = ApiClient.convertToType(data['bound-user-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-user-name')) {
                obj['bound-user-name'] = ApiClient.convertToType(data['bound-user-name'], ['String']);
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
            if (data.hasOwnProperty('sts-url')) {
                obj['sts-url'] = ApiClient.convertToType(data['sts-url'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
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
     * Validates the JSON data with respect to <code>UpdateAuthMethodAWSIAM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateAuthMethodAWSIAM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateAuthMethodAWSIAM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['audit-logs-claims'])) {
            throw new Error("Expected the field `audit-logs-claims` to be an array in the JSON data but got " + data['audit-logs-claims']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-arn'])) {
            throw new Error("Expected the field `bound-arn` to be an array in the JSON data but got " + data['bound-arn']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-aws-account-id'])) {
            throw new Error("Expected the field `bound-aws-account-id` to be an array in the JSON data but got " + data['bound-aws-account-id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-ips'])) {
            throw new Error("Expected the field `bound-ips` to be an array in the JSON data but got " + data['bound-ips']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-resource-id'])) {
            throw new Error("Expected the field `bound-resource-id` to be an array in the JSON data but got " + data['bound-resource-id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-role-id'])) {
            throw new Error("Expected the field `bound-role-id` to be an array in the JSON data but got " + data['bound-role-id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-role-name'])) {
            throw new Error("Expected the field `bound-role-name` to be an array in the JSON data but got " + data['bound-role-name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-user-id'])) {
            throw new Error("Expected the field `bound-user-id` to be an array in the JSON data but got " + data['bound-user-id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-user-name'])) {
            throw new Error("Expected the field `bound-user-name` to be an array in the JSON data but got " + data['bound-user-name']);
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
        if (data['sts-url'] && !(typeof data['sts-url'] === 'string' || data['sts-url'] instanceof String)) {
            throw new Error("Expected the field `sts-url` to be a primitive type in the JSON string but got " + data['sts-url']);
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
        if (data['unique-identifier'] && !(typeof data['unique-identifier'] === 'string' || data['unique-identifier'] instanceof String)) {
            throw new Error("Expected the field `unique-identifier` to be a primitive type in the JSON string but got " + data['unique-identifier']);
        }

        return true;
    }


}

UpdateAuthMethodAWSIAM.RequiredProperties = ["bound-aws-account-id", "name"];

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
UpdateAuthMethodAWSIAM.prototype['access-expires'] = 0;

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
UpdateAuthMethodAWSIAM.prototype['audit-logs-claims'] = undefined;

/**
 * A list of full arns that the access is restricted to
 * @member {Array.<String>} bound-arn
 */
UpdateAuthMethodAWSIAM.prototype['bound-arn'] = undefined;

/**
 * A list of AWS account-IDs that the access is restricted to
 * @member {Array.<String>} bound-aws-account-id
 */
UpdateAuthMethodAWSIAM.prototype['bound-aws-account-id'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
UpdateAuthMethodAWSIAM.prototype['bound-ips'] = undefined;

/**
 * A list of full resource ids that the access is restricted to
 * @member {Array.<String>} bound-resource-id
 */
UpdateAuthMethodAWSIAM.prototype['bound-resource-id'] = undefined;

/**
 * A list of full role ids that the access is restricted to
 * @member {Array.<String>} bound-role-id
 */
UpdateAuthMethodAWSIAM.prototype['bound-role-id'] = undefined;

/**
 * A list of full role-name that the access is restricted to
 * @member {Array.<String>} bound-role-name
 */
UpdateAuthMethodAWSIAM.prototype['bound-role-name'] = undefined;

/**
 * A list of full user ids that the access is restricted to
 * @member {Array.<String>} bound-user-id
 */
UpdateAuthMethodAWSIAM.prototype['bound-user-id'] = undefined;

/**
 * A list of full user-name that the access is restricted to
 * @member {Array.<String>} bound-user-name
 */
UpdateAuthMethodAWSIAM.prototype['bound-user-name'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
UpdateAuthMethodAWSIAM.prototype['delete_protection'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
UpdateAuthMethodAWSIAM.prototype['description'] = undefined;

/**
 * How many days before the expiration of the auth method would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
UpdateAuthMethodAWSIAM.prototype['expiration-event-in'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
UpdateAuthMethodAWSIAM.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
UpdateAuthMethodAWSIAM.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateAuthMethodAWSIAM.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
UpdateAuthMethodAWSIAM.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
UpdateAuthMethodAWSIAM.prototype['name'] = undefined;

/**
 * Auth Method new name
 * @member {String} new-name
 */
UpdateAuthMethodAWSIAM.prototype['new-name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
UpdateAuthMethodAWSIAM.prototype['product-type'] = undefined;

/**
 * sts URL
 * @member {String} sts-url
 * @default 'https://sts.amazonaws.com'
 */
UpdateAuthMethodAWSIAM.prototype['sts-url'] = 'https://sts.amazonaws.com';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAuthMethodAWSIAM.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAuthMethodAWSIAM.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value which is a \"sub claim\" name that contains details uniquely identifying that resource. This \"sub claim\" is used to distinguish between different identities.
 * @member {String} unique-identifier
 */
UpdateAuthMethodAWSIAM.prototype['unique-identifier'] = undefined;






export default UpdateAuthMethodAWSIAM;

