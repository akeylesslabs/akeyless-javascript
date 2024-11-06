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
 * The UpdateAuthMethodOAuth2 model module.
 * @module model/UpdateAuthMethodOAuth2
 * @version 4.3.0
 */
class UpdateAuthMethodOAuth2 {
    /**
     * Constructs a new <code>UpdateAuthMethodOAuth2</code>.
     * updateAuthMethodOAuth2 is a command that updates a new auth method that will be able to authenticate using Oauth2. [Deprecated: Use auth-method-update-oauth2 command]
     * @alias module:model/UpdateAuthMethodOAuth2
     * @param jwksUri {String} The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server.
     * @param name {String} Auth Method name
     * @param uniqueIdentifier {String} A unique identifier (ID) value should be configured for OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
     */
    constructor(jwksUri, name, uniqueIdentifier) { 
        
        UpdateAuthMethodOAuth2.initialize(this, jwksUri, name, uniqueIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, jwksUri, name, uniqueIdentifier) { 
        obj['jwks-uri'] = jwksUri;
        obj['name'] = name;
        obj['unique-identifier'] = uniqueIdentifier;
    }

    /**
     * Constructs a <code>UpdateAuthMethodOAuth2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAuthMethodOAuth2} obj Optional instance to populate.
     * @return {module:model/UpdateAuthMethodOAuth2} The populated <code>UpdateAuthMethodOAuth2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAuthMethodOAuth2();

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
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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


}

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
UpdateAuthMethodOAuth2.prototype['access-expires'] = 0;

/**
 * The audience in the JWT
 * @member {String} audience
 */
UpdateAuthMethodOAuth2.prototype['audience'] = undefined;

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
UpdateAuthMethodOAuth2.prototype['audit-logs-claims'] = undefined;

/**
 * The clients ids that the access is restricted to
 * @member {Array.<String>} bound-client-ids
 */
UpdateAuthMethodOAuth2.prototype['bound-client-ids'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
UpdateAuthMethodOAuth2.prototype['bound-ips'] = undefined;

/**
 * CertificateFile Path to a file that contain the certificate in a PEM format.
 * @member {String} cert
 */
UpdateAuthMethodOAuth2.prototype['cert'] = undefined;

/**
 * CertificateFileData PEM Certificate in a Base64 format.
 * @member {String} cert-file-data
 */
UpdateAuthMethodOAuth2.prototype['cert-file-data'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
UpdateAuthMethodOAuth2.prototype['delete_protection'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
UpdateAuthMethodOAuth2.prototype['description'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
UpdateAuthMethodOAuth2.prototype['force-sub-claims'] = undefined;

/**
 * Akeyless Gateway URL (Configuration Management port). Relevant only when the jwks-uri is accessible only from the gateway.
 * @member {String} gateway-url
 */
UpdateAuthMethodOAuth2.prototype['gateway-url'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
UpdateAuthMethodOAuth2.prototype['gw-bound-ips'] = undefined;

/**
 * Issuer URL
 * @member {String} issuer
 */
UpdateAuthMethodOAuth2.prototype['issuer'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateAuthMethodOAuth2.prototype['json'] = false;

/**
 * The JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server. base64 encoded string
 * @member {String} jwks-json-data
 */
UpdateAuthMethodOAuth2.prototype['jwks-json-data'] = undefined;

/**
 * The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server.
 * @member {String} jwks-uri
 * @default 'default_jwks_url'
 */
UpdateAuthMethodOAuth2.prototype['jwks-uri'] = 'default_jwks_url';

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
UpdateAuthMethodOAuth2.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
UpdateAuthMethodOAuth2.prototype['name'] = undefined;

/**
 * Auth Method new name
 * @member {String} new-name
 */
UpdateAuthMethodOAuth2.prototype['new-name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
UpdateAuthMethodOAuth2.prototype['product-type'] = undefined;

/**
 * A list of additional sub claims delimiters (relevant only for SAML, OIDC, OAuth2/JWT)
 * @member {Array.<String>} subclaims-delimiters
 */
UpdateAuthMethodOAuth2.prototype['subclaims-delimiters'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAuthMethodOAuth2.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAuthMethodOAuth2.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value should be configured for OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
 * @member {String} unique-identifier
 */
UpdateAuthMethodOAuth2.prototype['unique-identifier'] = undefined;






export default UpdateAuthMethodOAuth2;

