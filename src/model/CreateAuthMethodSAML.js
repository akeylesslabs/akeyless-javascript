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
 * The CreateAuthMethodSAML model module.
 * @module model/CreateAuthMethodSAML
 * @version 2.5.15
 */
class CreateAuthMethodSAML {
    /**
     * Constructs a new <code>CreateAuthMethodSAML</code>.
     * createAuthMethodSAML is a command that creates a new auth method that will be available to authenticate using SAML.
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
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('idp-metadata-url')) {
                obj['idp-metadata-url'] = ApiClient.convertToType(data['idp-metadata-url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
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
CreateAuthMethodSAML.prototype['access-expires'] = 0;

/**
 * Allowed redirect URIs after the authentication
 * @member {Array.<String>} allowed-redirect-uri
 */
CreateAuthMethodSAML.prototype['allowed-redirect-uri'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethodSAML.prototype['bound-ips'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethodSAML.prototype['force-sub-claims'] = undefined;

/**
 * IDP metadata url
 * @member {String} idp-metadata-url
 */
CreateAuthMethodSAML.prototype['idp-metadata-url'] = undefined;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodSAML.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
CreateAuthMethodSAML.prototype['password'] = undefined;

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

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
CreateAuthMethodSAML.prototype['username'] = undefined;






export default CreateAuthMethodSAML;

