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
 * The SSHTargetDetails model module.
 * @module model/SSHTargetDetails
 * @version 3.6.0
 */
class SSHTargetDetails {
    /**
     * Constructs a new <code>SSHTargetDetails</code>.
     * @alias module:model/SSHTargetDetails
     */
    constructor() { 
        
        SSHTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SSHTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SSHTargetDetails} obj Optional instance to populate.
     * @return {module:model/SSHTargetDetails} The populated <code>SSHTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SSHTargetDetails();

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('private_key')) {
                obj['private_key'] = ApiClient.convertToType(data['private_key'], 'String');
            }
            if (data.hasOwnProperty('private_key_password')) {
                obj['private_key_password'] = ApiClient.convertToType(data['private_key_password'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} host
 */
SSHTargetDetails.prototype['host'] = undefined;

/**
 * @member {String} password
 */
SSHTargetDetails.prototype['password'] = undefined;

/**
 * @member {String} port
 */
SSHTargetDetails.prototype['port'] = undefined;

/**
 * @member {String} private_key
 */
SSHTargetDetails.prototype['private_key'] = undefined;

/**
 * @member {String} private_key_password
 */
SSHTargetDetails.prototype['private_key_password'] = undefined;

/**
 * @member {String} username
 */
SSHTargetDetails.prototype['username'] = undefined;






export default SSHTargetDetails;

