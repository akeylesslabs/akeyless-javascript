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
 * The RenewCertificate model module.
 * @module model/RenewCertificate
 * @version 4.0.0
 */
class RenewCertificate {
    /**
     * Constructs a new <code>RenewCertificate</code>.
     * @alias module:model/RenewCertificate
     */
    constructor() { 
        
        RenewCertificate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RenewCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenewCertificate} obj Optional instance to populate.
     * @return {module:model/RenewCertificate} The populated <code>RenewCertificate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenewCertificate();

            if (data.hasOwnProperty('generate-key')) {
                obj['generate-key'] = ApiClient.convertToType(data['generate-key'], 'Boolean');
            }
            if (data.hasOwnProperty('item-id')) {
                obj['item-id'] = ApiClient.convertToType(data['item-id'], 'Number');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
 * Generate a new key as part of the certificate renewal
 * @member {Boolean} generate-key
 */
RenewCertificate.prototype['generate-key'] = undefined;

/**
 * Certificate item id
 * @member {Number} item-id
 */
RenewCertificate.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RenewCertificate.prototype['json'] = false;

/**
 * Certificate name
 * @member {String} name
 */
RenewCertificate.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RenewCertificate.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RenewCertificate.prototype['uid-token'] = undefined;






export default RenewCertificate;

