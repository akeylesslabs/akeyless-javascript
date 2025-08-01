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
 * The CreateAuthMethodOIDC model module.
 * @module model/CreateAuthMethodOIDC
 * @version 5.0.6
 */
class CreateAuthMethodOIDC {
    /**
     * Constructs a new <code>CreateAuthMethodOIDC</code>.
     * createAuthMethodOIDC is a command that creates a new auth method that will be available to authenticate using OIDC. [Deprecated: Use auth-method-create-oidc command]
     * @alias module:model/CreateAuthMethodOIDC
     * @param name {String} Auth Method name
     * @param uniqueIdentifier {String} A unique identifier (ID) value should be configured for OIDC, OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
     */
    constructor(name, uniqueIdentifier) { 
        
        CreateAuthMethodOIDC.initialize(this, name, uniqueIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, uniqueIdentifier) { 
        obj['access-expires'] = 0;
        obj['json'] = false;
        obj['jwt-ttl'] = 0;
        obj['name'] = name;
        obj['unique-identifier'] = uniqueIdentifier;
    }

    /**
     * Constructs a <code>CreateAuthMethodOIDC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodOIDC} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodOIDC} The populated <code>CreateAuthMethodOIDC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodOIDC();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('allowed-redirect-uri')) {
                obj['allowed-redirect-uri'] = ApiClient.convertToType(data['allowed-redirect-uri'], ['String']);
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
            if (data.hasOwnProperty('client-id')) {
                obj['client-id'] = ApiClient.convertToType(data['client-id'], 'String');
            }
            if (data.hasOwnProperty('client-secret')) {
                obj['client-secret'] = ApiClient.convertToType(data['client-secret'], 'String');
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
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
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
            if (data.hasOwnProperty('required-scopes')) {
                obj['required-scopes'] = ApiClient.convertToType(data['required-scopes'], ['String']);
            }
            if (data.hasOwnProperty('required-scopes-prefix')) {
                obj['required-scopes-prefix'] = ApiClient.convertToType(data['required-scopes-prefix'], 'String');
            }
            if (data.hasOwnProperty('subclaims-delimiters')) {
                obj['subclaims-delimiters'] = ApiClient.convertToType(data['subclaims-delimiters'], ['String']);
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
     * Validates the JSON data with respect to <code>CreateAuthMethodOIDC</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAuthMethodOIDC</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateAuthMethodOIDC.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['allowed-redirect-uri'])) {
            throw new Error("Expected the field `allowed-redirect-uri` to be an array in the JSON data but got " + data['allowed-redirect-uri']);
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
        // ensure the json data is a string
        if (data['client-id'] && !(typeof data['client-id'] === 'string' || data['client-id'] instanceof String)) {
            throw new Error("Expected the field `client-id` to be a primitive type in the JSON string but got " + data['client-id']);
        }
        // ensure the json data is a string
        if (data['client-secret'] && !(typeof data['client-secret'] === 'string' || data['client-secret'] instanceof String)) {
            throw new Error("Expected the field `client-secret` to be a primitive type in the JSON string but got " + data['client-secret']);
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
        if (data['issuer'] && !(typeof data['issuer'] === 'string' || data['issuer'] instanceof String)) {
            throw new Error("Expected the field `issuer` to be a primitive type in the JSON string but got " + data['issuer']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['product-type'])) {
            throw new Error("Expected the field `product-type` to be an array in the JSON data but got " + data['product-type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['required-scopes'])) {
            throw new Error("Expected the field `required-scopes` to be an array in the JSON data but got " + data['required-scopes']);
        }
        // ensure the json data is a string
        if (data['required-scopes-prefix'] && !(typeof data['required-scopes-prefix'] === 'string' || data['required-scopes-prefix'] instanceof String)) {
            throw new Error("Expected the field `required-scopes-prefix` to be a primitive type in the JSON string but got " + data['required-scopes-prefix']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['subclaims-delimiters'])) {
            throw new Error("Expected the field `subclaims-delimiters` to be an array in the JSON data but got " + data['subclaims-delimiters']);
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

CreateAuthMethodOIDC.RequiredProperties = ["name", "unique-identifier"];

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
CreateAuthMethodOIDC.prototype['access-expires'] = 0;

/**
 * Allowed redirect URIs after the authentication
 * @member {Array.<String>} allowed-redirect-uri
 */
CreateAuthMethodOIDC.prototype['allowed-redirect-uri'] = undefined;

/**
 * Audience claim to be used as part of the authentication flow. In case set, it must match the one configured on the Identity Provider's Application
 * @member {String} audience
 */
CreateAuthMethodOIDC.prototype['audience'] = undefined;

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
CreateAuthMethodOIDC.prototype['audit-logs-claims'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethodOIDC.prototype['bound-ips'] = undefined;

/**
 * Client ID
 * @member {String} client-id
 */
CreateAuthMethodOIDC.prototype['client-id'] = undefined;

/**
 * Client Secret
 * @member {String} client-secret
 */
CreateAuthMethodOIDC.prototype['client-secret'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
CreateAuthMethodOIDC.prototype['delete_protection'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
CreateAuthMethodOIDC.prototype['description'] = undefined;

/**
 * How many days before the expiration of the auth method would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
CreateAuthMethodOIDC.prototype['expiration-event-in'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethodOIDC.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
CreateAuthMethodOIDC.prototype['gw-bound-ips'] = undefined;

/**
 * Issuer URL
 * @member {String} issuer
 */
CreateAuthMethodOIDC.prototype['issuer'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateAuthMethodOIDC.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
CreateAuthMethodOIDC.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodOIDC.prototype['name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
CreateAuthMethodOIDC.prototype['product-type'] = undefined;

/**
 * RequiredScopes is a list of required scopes that the oidc method will request from the oidc provider and the user must approve
 * @member {Array.<String>} required-scopes
 */
CreateAuthMethodOIDC.prototype['required-scopes'] = undefined;

/**
 * RequiredScopesPrefix is a a prefix to add to all required-scopes when requesting them from the oidc server (for example, azures' Application ID URI)
 * @member {String} required-scopes-prefix
 */
CreateAuthMethodOIDC.prototype['required-scopes-prefix'] = undefined;

/**
 * A list of additional sub claims delimiters (relevant only for SAML, OIDC, OAuth2/JWT)
 * @member {Array.<String>} subclaims-delimiters
 */
CreateAuthMethodOIDC.prototype['subclaims-delimiters'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAuthMethodOIDC.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAuthMethodOIDC.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value should be configured for OIDC, OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
 * @member {String} unique-identifier
 */
CreateAuthMethodOIDC.prototype['unique-identifier'] = undefined;






export default CreateAuthMethodOIDC;

