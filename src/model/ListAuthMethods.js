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
 * The ListAuthMethods model module.
 * @module model/ListAuthMethods
 * @version 3.3.1
 */
class ListAuthMethods {
    /**
     * Constructs a new <code>ListAuthMethods</code>.
     * listAuthMethods is a command that returns a list of all auth methods in the account.
     * @alias module:model/ListAuthMethods
     */
    constructor() { 
        
        ListAuthMethods.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListAuthMethods</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAuthMethods} obj Optional instance to populate.
     * @return {module:model/ListAuthMethods} The populated <code>ListAuthMethods</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAuthMethods();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('pagination-token')) {
                obj['pagination-token'] = ApiClient.convertToType(data['pagination-token'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], ['String']);
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Filter by auth method name or part of it
 * @member {String} filter
 */
ListAuthMethods.prototype['filter'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
ListAuthMethods.prototype['json'] = false;

/**
 * Next page reference
 * @member {String} pagination-token
 */
ListAuthMethods.prototype['pagination-token'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ListAuthMethods.prototype['token'] = undefined;

/**
 * The Auth method types list of the requested method. In case it is empty, all types of auth methods will be returned. options: [api_key, azure_ad, oauth2/jwt, saml2, ldap, aws_iam, oidc, universal_identity, gcp, k8s, cert]
 * @member {Array.<String>} type
 */
ListAuthMethods.prototype['type'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ListAuthMethods.prototype['uid-token'] = undefined;






export default ListAuthMethods;

