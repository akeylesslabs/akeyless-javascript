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
 * The GlobalSignGCCTargetDetails model module.
 * @module model/GlobalSignGCCTargetDetails
 * @version 4.2.1
 */
class GlobalSignGCCTargetDetails {
    /**
     * Constructs a new <code>GlobalSignGCCTargetDetails</code>.
     * GlobalSignGCCTargetDetails
     * @alias module:model/GlobalSignGCCTargetDetails
     */
    constructor() { 
        
        GlobalSignGCCTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GlobalSignGCCTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalSignGCCTargetDetails} obj Optional instance to populate.
     * @return {module:model/GlobalSignGCCTargetDetails} The populated <code>GlobalSignGCCTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GlobalSignGCCTargetDetails();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('profile_id')) {
                obj['profile_id'] = ApiClient.convertToType(data['profile_id'], 'String');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
GlobalSignGCCTargetDetails.prototype['email'] = undefined;

/**
 * Contact Info - GlobalSign requires this to be sent with every certificate creation request
 * @member {String} first_name
 */
GlobalSignGCCTargetDetails.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
GlobalSignGCCTargetDetails.prototype['last_name'] = undefined;

/**
 * @member {String} password
 */
GlobalSignGCCTargetDetails.prototype['password'] = undefined;

/**
 * @member {String} phone
 */
GlobalSignGCCTargetDetails.prototype['phone'] = undefined;

/**
 * @member {String} profile_id
 */
GlobalSignGCCTargetDetails.prototype['profile_id'] = undefined;

/**
 * A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.
 * @member {Number} timeout
 */
GlobalSignGCCTargetDetails.prototype['timeout'] = undefined;

/**
 * @member {String} username
 */
GlobalSignGCCTargetDetails.prototype['username'] = undefined;






export default GlobalSignGCCTargetDetails;

