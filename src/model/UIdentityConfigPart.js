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
 * The UIdentityConfigPart model module.
 * @module model/UIdentityConfigPart
 * @version 2.4.3
 */
class UIdentityConfigPart {
    /**
     * Constructs a new <code>UIdentityConfigPart</code>.
     * @alias module:model/UIdentityConfigPart
     */
    constructor() { 
        
        UIdentityConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UIdentityConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UIdentityConfigPart} obj Optional instance to populate.
     * @return {module:model/UIdentityConfigPart} The populated <code>UIdentityConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UIdentityConfigPart();

            if (data.hasOwnProperty('uid_access_id')) {
                obj['uid_access_id'] = ApiClient.convertToType(data['uid_access_id'], 'String');
            }
            if (data.hasOwnProperty('uid_enable')) {
                obj['uid_enable'] = ApiClient.convertToType(data['uid_enable'], 'Boolean');
            }
            if (data.hasOwnProperty('uid_rotate_interval')) {
                obj['uid_rotate_interval'] = ApiClient.convertToType(data['uid_rotate_interval'], 'String');
            }
            if (data.hasOwnProperty('uid_status')) {
                obj['uid_status'] = ApiClient.convertToType(data['uid_status'], 'String');
            }
            if (data.hasOwnProperty('uid_token')) {
                obj['uid_token'] = ApiClient.convertToType(data['uid_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} uid_access_id
 */
UIdentityConfigPart.prototype['uid_access_id'] = undefined;

/**
 * @member {Boolean} uid_enable
 */
UIdentityConfigPart.prototype['uid_enable'] = undefined;

/**
 * @member {String} uid_rotate_interval
 */
UIdentityConfigPart.prototype['uid_rotate_interval'] = undefined;

/**
 * @member {String} uid_status
 */
UIdentityConfigPart.prototype['uid_status'] = undefined;

/**
 * @member {String} uid_token
 */
UIdentityConfigPart.prototype['uid_token'] = undefined;






export default UIdentityConfigPart;

