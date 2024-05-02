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
 * The PingTargetDetails model module.
 * @module model/PingTargetDetails
 * @version 4.0.0
 */
class PingTargetDetails {
    /**
     * Constructs a new <code>PingTargetDetails</code>.
     * PingTargetDetails
     * @alias module:model/PingTargetDetails
     */
    constructor() { 
        
        PingTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PingTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PingTargetDetails} obj Optional instance to populate.
     * @return {module:model/PingTargetDetails} The populated <code>PingTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PingTargetDetails();

            if (data.hasOwnProperty('administrative_port')) {
                obj['administrative_port'] = ApiClient.convertToType(data['administrative_port'], 'String');
            }
            if (data.hasOwnProperty('authorization_port')) {
                obj['authorization_port'] = ApiClient.convertToType(data['authorization_port'], 'String');
            }
            if (data.hasOwnProperty('ping_url')) {
                obj['ping_url'] = ApiClient.convertToType(data['ping_url'], 'String');
            }
            if (data.hasOwnProperty('privileged_user')) {
                obj['privileged_user'] = ApiClient.convertToType(data['privileged_user'], 'String');
            }
            if (data.hasOwnProperty('user_password')) {
                obj['user_password'] = ApiClient.convertToType(data['user_password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} administrative_port
 */
PingTargetDetails.prototype['administrative_port'] = undefined;

/**
 * @member {String} authorization_port
 */
PingTargetDetails.prototype['authorization_port'] = undefined;

/**
 * @member {String} ping_url
 */
PingTargetDetails.prototype['ping_url'] = undefined;

/**
 * @member {String} privileged_user
 */
PingTargetDetails.prototype['privileged_user'] = undefined;

/**
 * @member {String} user_password
 */
PingTargetDetails.prototype['user_password'] = undefined;






export default PingTargetDetails;

