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
 * The DeactivateAcmeAccount model module.
 * @module model/DeactivateAcmeAccount
 * @version 4.2.5
 */
class DeactivateAcmeAccount {
    /**
     * Constructs a new <code>DeactivateAcmeAccount</code>.
     * deactivateAcmeAccount is a command that Deactivates \\ Deletes an acme external account
     * @alias module:model/DeactivateAcmeAccount
     * @param acmeAccountId {String} The acme account id to deactivate
     * @param certIssuerName {String} The name of the PKI certificate issuer
     */
    constructor(acmeAccountId, certIssuerName) { 
        
        DeactivateAcmeAccount.initialize(this, acmeAccountId, certIssuerName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, acmeAccountId, certIssuerName) { 
        obj['acme-account-id'] = acmeAccountId;
        obj['cert-issuer-name'] = certIssuerName;
    }

    /**
     * Constructs a <code>DeactivateAcmeAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeactivateAcmeAccount} obj Optional instance to populate.
     * @return {module:model/DeactivateAcmeAccount} The populated <code>DeactivateAcmeAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeactivateAcmeAccount();

            if (data.hasOwnProperty('acme-account-id')) {
                obj['acme-account-id'] = ApiClient.convertToType(data['acme-account-id'], 'String');
            }
            if (data.hasOwnProperty('cert-issuer-name')) {
                obj['cert-issuer-name'] = ApiClient.convertToType(data['cert-issuer-name'], 'String');
            }
            if (data.hasOwnProperty('delete-account')) {
                obj['delete-account'] = ApiClient.convertToType(data['delete-account'], 'Boolean');
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


}

/**
 * The acme account id to deactivate
 * @member {String} acme-account-id
 */
DeactivateAcmeAccount.prototype['acme-account-id'] = undefined;

/**
 * The name of the PKI certificate issuer
 * @member {String} cert-issuer-name
 */
DeactivateAcmeAccount.prototype['cert-issuer-name'] = undefined;

/**
 * Delete the account
 * @member {Boolean} delete-account
 */
DeactivateAcmeAccount.prototype['delete-account'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DeactivateAcmeAccount.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DeactivateAcmeAccount.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DeactivateAcmeAccount.prototype['uid-token'] = undefined;






export default DeactivateAcmeAccount;

