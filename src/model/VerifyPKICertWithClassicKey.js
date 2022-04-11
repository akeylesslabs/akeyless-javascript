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
 * The VerifyPKICertWithClassicKey model module.
 * @module model/VerifyPKICertWithClassicKey
 * @version 2.15.32
 */
class VerifyPKICertWithClassicKey {
    /**
     * Constructs a new <code>VerifyPKICertWithClassicKey</code>.
     * @alias module:model/VerifyPKICertWithClassicKey
     * @param displayId {String} The name of the key to use in the verify PKICert process
     * @param pkiCert {String} PkiCert
     * @param version {Number} classic key version
     */
    constructor(displayId, pkiCert, version) { 
        
        VerifyPKICertWithClassicKey.initialize(this, displayId, pkiCert, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, displayId, pkiCert, version) { 
        obj['display-id'] = displayId;
        obj['pki-cert'] = pkiCert;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>VerifyPKICertWithClassicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyPKICertWithClassicKey} obj Optional instance to populate.
     * @return {module:model/VerifyPKICertWithClassicKey} The populated <code>VerifyPKICertWithClassicKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyPKICertWithClassicKey();

            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('pki-cert')) {
                obj['pki-cert'] = ApiClient.convertToType(data['pki-cert'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The name of the key to use in the verify PKICert process
 * @member {String} display-id
 */
VerifyPKICertWithClassicKey.prototype['display-id'] = undefined;

/**
 * PkiCert
 * @member {String} pki-cert
 */
VerifyPKICertWithClassicKey.prototype['pki-cert'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
VerifyPKICertWithClassicKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
VerifyPKICertWithClassicKey.prototype['uid-token'] = undefined;

/**
 * classic key version
 * @member {Number} version
 */
VerifyPKICertWithClassicKey.prototype['version'] = undefined;






export default VerifyPKICertWithClassicKey;

