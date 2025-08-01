/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
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
 * @version 5.0.6
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
        obj['json'] = false;
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
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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

    /**
     * Validates the JSON data with respect to <code>VerifyJWTWithClassicKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VerifyJWTWithClassicKey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VerifyJWTWithClassicKey.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['display-id'] && !(typeof data['display-id'] === 'string' || data['display-id'] instanceof String)) {
            throw new Error("Expected the field `display-id` to be a primitive type in the JSON string but got " + data['display-id']);
        }
        // ensure the json data is a string
        if (data['jwt'] && !(typeof data['jwt'] === 'string' || data['jwt'] instanceof String)) {
            throw new Error("Expected the field `jwt` to be a primitive type in the JSON string but got " + data['jwt']);
        }
        // ensure the json data is a string
        if (data['required-claims'] && !(typeof data['required-claims'] === 'string' || data['required-claims'] instanceof String)) {
            throw new Error("Expected the field `required-claims` to be a primitive type in the JSON string but got " + data['required-claims']);
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

VerifyJWTWithClassicKey.RequiredProperties = ["display-id", "jwt", "required-claims", "version"];

/**
 * The name of the key to use in the verify JWT process
 * @member {String} display-id
 */
VerifyJWTWithClassicKey.prototype['display-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
VerifyJWTWithClassicKey.prototype['json'] = false;

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

