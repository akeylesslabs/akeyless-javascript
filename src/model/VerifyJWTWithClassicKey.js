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
 * The VerifyJWTWithClassicKey model module.
 * @module model/VerifyJWTWithClassicKey
 * @version 2.16.12
 */
class VerifyJWTWithClassicKey {
    /**
     * Constructs a new <code>VerifyJWTWithClassicKey</code>.
     * @alias module:model/VerifyJWTWithClassicKey
     * @param displayId {String} The name of the key to use in the verify JWT process
     * @param jwt {String} JWT
     * @param requiredClaims {String} RequiredClaims
     * @param version {Number} classic key version
     */
    constructor(displayId, jwt, requiredClaims, version) { 
        
        VerifyJWTWithClassicKey.initialize(this, displayId, jwt, requiredClaims, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, displayId, jwt, requiredClaims, version) { 
        obj['display-id'] = displayId;
        obj['jwt'] = jwt;
        obj['required-claims'] = requiredClaims;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>VerifyJWTWithClassicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyJWTWithClassicKey} obj Optional instance to populate.
     * @return {module:model/VerifyJWTWithClassicKey} The populated <code>VerifyJWTWithClassicKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyJWTWithClassicKey();

            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('jwt')) {
                obj['jwt'] = ApiClient.convertToType(data['jwt'], 'String');
            }
            if (data.hasOwnProperty('required-claims')) {
                obj['required-claims'] = ApiClient.convertToType(data['required-claims'], 'String');
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
 * The name of the key to use in the verify JWT process
 * @member {String} display-id
 */
VerifyJWTWithClassicKey.prototype['display-id'] = undefined;

/**
 * JWT
 * @member {String} jwt
 */
VerifyJWTWithClassicKey.prototype['jwt'] = undefined;

/**
 * RequiredClaims
 * @member {String} required-claims
 */
VerifyJWTWithClassicKey.prototype['required-claims'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
VerifyJWTWithClassicKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
VerifyJWTWithClassicKey.prototype['uid-token'] = undefined;

/**
 * classic key version
 * @member {Number} version
 */
VerifyJWTWithClassicKey.prototype['version'] = undefined;






export default VerifyJWTWithClassicKey;

