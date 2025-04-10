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
 * The ListAcmeAccounts model module.
 * @module model/ListAcmeAccounts
 * @version 5.0.2
 */
class ListAcmeAccounts {
    /**
     * Constructs a new <code>ListAcmeAccounts</code>.
     * listAcmeAccounts is a command lists acme external accounts for a cert issuer
     * @alias module:model/ListAcmeAccounts
     * @param certIssuerName {String} The name of the PKI certificate issuer
     */
    constructor(certIssuerName) { 
        
        ListAcmeAccounts.initialize(this, certIssuerName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, certIssuerName) { 
        obj['cert-issuer-name'] = certIssuerName;
        obj['json'] = false;
    }

    /**
     * Constructs a <code>ListAcmeAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAcmeAccounts} obj Optional instance to populate.
     * @return {module:model/ListAcmeAccounts} The populated <code>ListAcmeAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAcmeAccounts();

            if (data.hasOwnProperty('cert-issuer-name')) {
                obj['cert-issuer-name'] = ApiClient.convertToType(data['cert-issuer-name'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
     * Validates the JSON data with respect to <code>ListAcmeAccounts</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListAcmeAccounts</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListAcmeAccounts.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['cert-issuer-name'] && !(typeof data['cert-issuer-name'] === 'string' || data['cert-issuer-name'] instanceof String)) {
            throw new Error("Expected the field `cert-issuer-name` to be a primitive type in the JSON string but got " + data['cert-issuer-name']);
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

ListAcmeAccounts.RequiredProperties = ["cert-issuer-name"];

/**
 * The name of the PKI certificate issuer
 * @member {String} cert-issuer-name
 */
ListAcmeAccounts.prototype['cert-issuer-name'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
ListAcmeAccounts.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ListAcmeAccounts.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ListAcmeAccounts.prototype['uid-token'] = undefined;






export default ListAcmeAccounts;

