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
 * The SectigoTargetDetails model module.
 * @module model/SectigoTargetDetails
 * @version 4.3.0
 */
class SectigoTargetDetails {
    /**
     * Constructs a new <code>SectigoTargetDetails</code>.
     * SectigoTargetDetails
     * @alias module:model/SectigoTargetDetails
     */
    constructor() { 
        
        SectigoTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SectigoTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectigoTargetDetails} obj Optional instance to populate.
     * @return {module:model/SectigoTargetDetails} The populated <code>SectigoTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SectigoTargetDetails();

            if (data.hasOwnProperty('certificate_profile_id')) {
                obj['certificate_profile_id'] = ApiClient.convertToType(data['certificate_profile_id'], 'Number');
            }
            if (data.hasOwnProperty('customer_uri')) {
                obj['customer_uri'] = ApiClient.convertToType(data['customer_uri'], 'String');
            }
            if (data.hasOwnProperty('external_requester')) {
                obj['external_requester'] = ApiClient.convertToType(data['external_requester'], 'String');
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
 * @member {Number} certificate_profile_id
 */
SectigoTargetDetails.prototype['certificate_profile_id'] = undefined;

/**
 * @member {String} customer_uri
 */
SectigoTargetDetails.prototype['customer_uri'] = undefined;

/**
 * @member {String} external_requester
 */
SectigoTargetDetails.prototype['external_requester'] = undefined;

/**
 * @member {Number} org_id
 */
SectigoTargetDetails.prototype['org_id'] = undefined;

/**
 * @member {String} password
 */
SectigoTargetDetails.prototype['password'] = undefined;

/**
 * A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.
 * @member {Number} timeout
 */
SectigoTargetDetails.prototype['timeout'] = undefined;

/**
 * @member {String} username
 */
SectigoTargetDetails.prototype['username'] = undefined;






export default SectigoTargetDetails;

