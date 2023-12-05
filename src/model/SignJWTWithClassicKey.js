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
 * The SignJWTWithClassicKey model module.
 * @module model/SignJWTWithClassicKey
 * @version 3.5.2
 */
class SignJWTWithClassicKey {
    /**
     * Constructs a new <code>SignJWTWithClassicKey</code>.
     * @alias module:model/SignJWTWithClassicKey
     * @param displayId {String} The name of the key to use in the sign JWT process
     * @param jwtClaims {String} JWTClaims
     * @param signingMethod {String} SigningMethod
     * @param version {Number} classic key version
     */
    constructor(displayId, jwtClaims, signingMethod, version) { 
        
        SignJWTWithClassicKey.initialize(this, displayId, jwtClaims, signingMethod, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, displayId, jwtClaims, signingMethod, version) { 
        obj['display-id'] = displayId;
        obj['jwt-claims'] = jwtClaims;
        obj['signing-method'] = signingMethod;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>SignJWTWithClassicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignJWTWithClassicKey} obj Optional instance to populate.
     * @return {module:model/SignJWTWithClassicKey} The populated <code>SignJWTWithClassicKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignJWTWithClassicKey();

            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('jwt-claims')) {
                obj['jwt-claims'] = ApiClient.convertToType(data['jwt-claims'], 'String');
            }
            if (data.hasOwnProperty('signing-method')) {
                obj['signing-method'] = ApiClient.convertToType(data['signing-method'], 'String');
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
 * The name of the key to use in the sign JWT process
 * @member {String} display-id
 */
SignJWTWithClassicKey.prototype['display-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
SignJWTWithClassicKey.prototype['json'] = false;

/**
 * JWTClaims
 * @member {String} jwt-claims
 */
SignJWTWithClassicKey.prototype['jwt-claims'] = undefined;

/**
 * SigningMethod
 * @member {String} signing-method
 */
SignJWTWithClassicKey.prototype['signing-method'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
SignJWTWithClassicKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
SignJWTWithClassicKey.prototype['uid-token'] = undefined;

/**
 * classic key version
 * @member {Number} version
 */
SignJWTWithClassicKey.prototype['version'] = undefined;






export default SignJWTWithClassicKey;

