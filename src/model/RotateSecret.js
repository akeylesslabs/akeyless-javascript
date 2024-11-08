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
 * The RotateSecret model module.
 * @module model/RotateSecret
 * @version 4.3.0
 */
class RotateSecret {
    /**
     * Constructs a new <code>RotateSecret</code>.
     * @alias module:model/RotateSecret
     * @param name {String} Secret name (Rotated Secret or Custom Dynamic Secret)
     */
    constructor(name) { 
        
        RotateSecret.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>RotateSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotateSecret} obj Optional instance to populate.
     * @return {module:model/RotateSecret} The populated <code>RotateSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotateSecret();

            if (data.hasOwnProperty('RotateAllServicesBoolean')) {
                obj['RotateAllServicesBoolean'] = ApiClient.convertToType(data['RotateAllServicesBoolean'], 'Boolean');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rotate-all-services')) {
                obj['rotate-all-services'] = ApiClient.convertToType(data['rotate-all-services'], 'String');
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
 * @member {Boolean} RotateAllServicesBoolean
 */
RotateSecret.prototype['RotateAllServicesBoolean'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotateSecret.prototype['json'] = false;

/**
 * Secret name (Rotated Secret or Custom Dynamic Secret)
 * @member {String} name
 */
RotateSecret.prototype['name'] = undefined;

/**
 * Rotate all associated services
 * @member {String} rotate-all-services
 * @default 'false'
 */
RotateSecret.prototype['rotate-all-services'] = 'false';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotateSecret.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotateSecret.prototype['uid-token'] = undefined;






export default RotateSecret;

