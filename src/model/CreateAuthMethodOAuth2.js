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
 * The CreateAuthMethodOAuth2 model module.
 * @module model/CreateAuthMethodOAuth2
 * @version 5.0.2
 */
class CreateAuthMethodOAuth2 {
    /**
     * Constructs a new <code>CreateAuthMethodOAuth2</code>.
     * createAuthMethodOAuth2 is a command that creates a new auth method that will be able to authenticate using Oauth2. [Deprecated: Use auth-method-create-oauth2 command]
     * @alias module:model/CreateAuthMethodOAuth2
     * @param name {String} Auth Method name
     * @param uniqueIdentifier {String} A unique identifier (ID) value should be configured for OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
     */
    constructor(name, uniqueIdentifier) { 
        
        CreateAuthMethodOAuth2.initialize(this, name, uniqueIdentifier);
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
     * Constructs a <code>CreateAuthMethodOAuth2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodOAuth2} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodOAuth2} The populated <code>CreateAuthMethodOAuth2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodOAuth2();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('audit-logs-claims')) {
                obj['audit-logs-claims'] = ApiClient.convertToType(data['audit-logs-claims'], ['String']);
            }
            if (data.hasOwnProperty('bound-client-ids')) {
                obj['bound-client-ids'] = ApiClient.convertToType(data['bound-client-ids'], ['String']);
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('cert')) {
                obj['cert'] = ApiClient.convertToType(data['cert'], 'String');
            }
            if (data.hasOwnProperty('cert-file-data')) {
                obj['cert-file-data'] = ApiClient.convertToType(data['cert-file-data'], 'String');
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
            if (data.hasOwnProperty('gateway-url')) {
                obj['gateway-url'] = ApiClient.convertToType(data['gateway-url'], 'String');
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
            if (data.hasOwnProperty('jwks-json-data')) {
                obj['jwks-json-data'] = ApiClient.convertToType(data['jwks-json-data'], 'String');
            }
            if (data.hasOwnProperty('jwks-uri')) {
                obj['jwks-uri'] = ApiClient.convertToType(data['jwks-uri'], 'String');
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
     * Validates the JSON data with respect to <code>CreateAuthMethodOAuth2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAuthMethodOAuth2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateAuthMethodOAuth2.RequiredProperties) {
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
        if (!Array.isArray(data['bound-client-ids'])) {
            throw new Error("Expected the field `bound-client-ids` to be an array in the JSON data but got " + data['bound-client-ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-ips'])) {
            throw new Error("Expected the field `bound-ips` to be an array in the JSON data but got " + data['bound-ips']);
        }
        // ensure the json data is a string
        if (data['cert'] && !(typeof data['cert'] === 'string' || data['cert'] instanceof String)) {
            throw new Error("Expected the field `cert` to be a primitive type in the JSON string but got " + data['cert']);
        }
        // ensure the json data is a string
        if (data['cert-file-data'] && !(typeof data['cert-file-data'] === 'string' || data['cert-file-data'] instanceof String)) {
            throw new Error("Expected the field `cert-file-data` to be a primitive type in the JSON string but got " + data['cert-file-data']);
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
        if (data['gateway-url'] && !(typeof data['gateway-url'] === 'string' || data['gateway-url'] instanceof String)) {
            throw new Error("Expected the field `gateway-url` to be a primitive type in the JSON string but got " + data['gateway-url']);
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
        if (data['jwks-json-data'] && !(typeof data['jwks-json-data'] === 'string' || data['jwks-json-data'] instanceof String)) {
            throw new Error("Expected the field `jwks-json-data` to be a primitive type in the JSON string but got " + data['jwks-json-data']);
        }
        // ensure the json data is a string
        if (data['jwks-uri'] && !(typeof data['jwks-uri'] === 'string' || data['jwks-uri'] instanceof String)) {
            throw new Error("Expected the field `jwks-uri` to be a primitive type in the JSON string but got " + data['jwks-uri']);
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

CreateAuthMethodOAuth2.RequiredProperties = ["name", "unique-identifier"];

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
CreateAuthMethodOAuth2.prototype['access-expires'] = 0;

/**
 * The audience in the JWT
 * @member {String} audience
 */
CreateAuthMethodOAuth2.prototype['audience'] = undefined;

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
CreateAuthMethodOAuth2.prototype['audit-logs-claims'] = undefined;

/**
 * The clients ids that the access is restricted to
 * @member {Array.<String>} bound-client-ids
 */
CreateAuthMethodOAuth2.prototype['bound-client-ids'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethodOAuth2.prototype['bound-ips'] = undefined;

/**
 * CertificateFile Path to a file that contain the certificate in a PEM format.
 * @member {String} cert
 */
CreateAuthMethodOAuth2.prototype['cert'] = undefined;

/**
 * CertificateFileData PEM Certificate in a Base64 format.
 * @member {String} cert-file-data
 */
CreateAuthMethodOAuth2.prototype['cert-file-data'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
CreateAuthMethodOAuth2.prototype['delete_protection'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
CreateAuthMethodOAuth2.prototype['description'] = undefined;

/**
 * How many days before the expiration of the auth method would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
CreateAuthMethodOAuth2.prototype['expiration-event-in'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethodOAuth2.prototype['force-sub-claims'] = undefined;

/**
 * Akeyless Gateway URL (Configuration Management port). Relevant only when the jwks-uri is accessible only from the gateway.
 * @member {String} gateway-url
 */
CreateAuthMethodOAuth2.prototype['gateway-url'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
CreateAuthMethodOAuth2.prototype['gw-bound-ips'] = undefined;

/**
 * Issuer URL
 * @member {String} issuer
 */
CreateAuthMethodOAuth2.prototype['issuer'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateAuthMethodOAuth2.prototype['json'] = false;

/**
 * The JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server. base64 encoded string
 * @member {String} jwks-json-data
 */
CreateAuthMethodOAuth2.prototype['jwks-json-data'] = undefined;

/**
 * The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server.
 * @member {String} jwks-uri
 */
CreateAuthMethodOAuth2.prototype['jwks-uri'] = undefined;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
CreateAuthMethodOAuth2.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodOAuth2.prototype['name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
CreateAuthMethodOAuth2.prototype['product-type'] = undefined;

/**
 * A list of additional sub claims delimiters (relevant only for SAML, OIDC, OAuth2/JWT)
 * @member {Array.<String>} subclaims-delimiters
 */
CreateAuthMethodOAuth2.prototype['subclaims-delimiters'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAuthMethodOAuth2.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAuthMethodOAuth2.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value should be configured for OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
 * @member {String} unique-identifier
 */
CreateAuthMethodOAuth2.prototype['unique-identifier'] = undefined;






export default CreateAuthMethodOAuth2;

