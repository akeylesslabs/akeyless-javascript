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
 * The CreateAuthMethodSAML model module.
 * @module model/CreateAuthMethodSAML
 * @version 5.0.3
 */
class CreateAuthMethodSAML {
    /**
     * Constructs a new <code>CreateAuthMethodSAML</code>.
     * createAuthMethodSAML is a command that creates a new auth method that will be available to authenticate using SAML. [Deprecated: Use auth-method-create-saml command]
     * @alias module:model/CreateAuthMethodSAML
     * @param name {String} Auth Method name
     * @param uniqueIdentifier {String} A unique identifier (ID) value should be configured for OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
     */
    constructor(name, uniqueIdentifier) { 
        
        CreateAuthMethodSAML.initialize(this, name, uniqueIdentifier);
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
     * Constructs a <code>CreateAuthMethodSAML</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodSAML} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodSAML} The populated <code>CreateAuthMethodSAML</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodSAML();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('allowed-redirect-uri')) {
                obj['allowed-redirect-uri'] = ApiClient.convertToType(data['allowed-redirect-uri'], ['String']);
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
            if (data.hasOwnProperty('idp-metadata-url')) {
                obj['idp-metadata-url'] = ApiClient.convertToType(data['idp-metadata-url'], 'String');
            }
            if (data.hasOwnProperty('idp-metadata-xml-data')) {
                obj['idp-metadata-xml-data'] = ApiClient.convertToType(data['idp-metadata-xml-data'], 'String');
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
     * Validates the JSON data with respect to <code>CreateAuthMethodSAML</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAuthMethodSAML</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateAuthMethodSAML.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['allowed-redirect-uri'])) {
            throw new Error("Expected the field `allowed-redirect-uri` to be an array in the JSON data but got " + data['allowed-redirect-uri']);
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
        if (data['idp-metadata-url'] && !(typeof data['idp-metadata-url'] === 'string' || data['idp-metadata-url'] instanceof String)) {
            throw new Error("Expected the field `idp-metadata-url` to be a primitive type in the JSON string but got " + data['idp-metadata-url']);
        }
        // ensure the json data is a string
        if (data['idp-metadata-xml-data'] && !(typeof data['idp-metadata-xml-data'] === 'string' || data['idp-metadata-xml-data'] instanceof String)) {
            throw new Error("Expected the field `idp-metadata-xml-data` to be a primitive type in the JSON string but got " + data['idp-metadata-xml-data']);
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

CreateAuthMethodSAML.RequiredProperties = ["name", "unique-identifier"];

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
CreateAuthMethodSAML.prototype['access-expires'] = 0;

/**
 * Allowed redirect URIs after the authentication
 * @member {Array.<String>} allowed-redirect-uri
 */
CreateAuthMethodSAML.prototype['allowed-redirect-uri'] = undefined;

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
CreateAuthMethodSAML.prototype['audit-logs-claims'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethodSAML.prototype['bound-ips'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
CreateAuthMethodSAML.prototype['delete_protection'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
CreateAuthMethodSAML.prototype['description'] = undefined;

/**
 * How many days before the expiration of the auth method would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
CreateAuthMethodSAML.prototype['expiration-event-in'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethodSAML.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
CreateAuthMethodSAML.prototype['gw-bound-ips'] = undefined;

/**
 * IDP metadata url
 * @member {String} idp-metadata-url
 */
CreateAuthMethodSAML.prototype['idp-metadata-url'] = undefined;

/**
 * IDP metadata xml data
 * @member {String} idp-metadata-xml-data
 */
CreateAuthMethodSAML.prototype['idp-metadata-xml-data'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateAuthMethodSAML.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
CreateAuthMethodSAML.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodSAML.prototype['name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
CreateAuthMethodSAML.prototype['product-type'] = undefined;

/**
 * A list of additional sub claims delimiters (relevant only for SAML, OIDC, OAuth2/JWT)
 * @member {Array.<String>} subclaims-delimiters
 */
CreateAuthMethodSAML.prototype['subclaims-delimiters'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAuthMethodSAML.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAuthMethodSAML.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value should be configured for OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
 * @member {String} unique-identifier
 */
CreateAuthMethodSAML.prototype['unique-identifier'] = undefined;






export default CreateAuthMethodSAML;

