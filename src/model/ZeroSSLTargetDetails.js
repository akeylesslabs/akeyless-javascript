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
 * The ZeroSSLTargetDetails model module.
 * @module model/ZeroSSLTargetDetails
 * @version 3.5.4
 */
class ZeroSSLTargetDetails {
    /**
     * Constructs a new <code>ZeroSSLTargetDetails</code>.
     * ZeroSSLTargetDetails
     * @alias module:model/ZeroSSLTargetDetails
     */
    constructor() { 
        
        ZeroSSLTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ZeroSSLTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ZeroSSLTargetDetails} obj Optional instance to populate.
     * @return {module:model/ZeroSSLTargetDetails} The populated <code>ZeroSSLTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ZeroSSLTargetDetails();

            if (data.hasOwnProperty('api_key')) {
                obj['api_key'] = ApiClient.convertToType(data['api_key'], 'String');
            }
            if (data.hasOwnProperty('imap_fqdn')) {
                obj['imap_fqdn'] = ApiClient.convertToType(data['imap_fqdn'], 'String');
            }
            if (data.hasOwnProperty('imap_password')) {
                obj['imap_password'] = ApiClient.convertToType(data['imap_password'], 'String');
            }
            if (data.hasOwnProperty('imap_port')) {
                obj['imap_port'] = ApiClient.convertToType(data['imap_port'], 'String');
            }
            if (data.hasOwnProperty('imap_user')) {
                obj['imap_user'] = ApiClient.convertToType(data['imap_user'], 'String');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
            }
            if (data.hasOwnProperty('validation_email')) {
                obj['validation_email'] = ApiClient.convertToType(data['validation_email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} api_key
 */
ZeroSSLTargetDetails.prototype['api_key'] = undefined;

/**
 * @member {String} imap_fqdn
 */
ZeroSSLTargetDetails.prototype['imap_fqdn'] = undefined;

/**
 * @member {String} imap_password
 */
ZeroSSLTargetDetails.prototype['imap_password'] = undefined;

/**
 * @member {String} imap_port
 */
ZeroSSLTargetDetails.prototype['imap_port'] = undefined;

/**
 * @member {String} imap_user
 */
ZeroSSLTargetDetails.prototype['imap_user'] = undefined;

/**
 * A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.
 * @member {Number} timeout
 */
ZeroSSLTargetDetails.prototype['timeout'] = undefined;

/**
 * @member {String} validation_email
 */
ZeroSSLTargetDetails.prototype['validation_email'] = undefined;






export default ZeroSSLTargetDetails;

