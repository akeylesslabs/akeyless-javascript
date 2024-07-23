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
 * The AWSTargetDetails model module.
 * @module model/AWSTargetDetails
 * @version 4.2.1
 */
class AWSTargetDetails {
    /**
     * Constructs a new <code>AWSTargetDetails</code>.
     * @alias module:model/AWSTargetDetails
     */
    constructor() { 
        
        AWSTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AWSTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AWSTargetDetails} obj Optional instance to populate.
     * @return {module:model/AWSTargetDetails} The populated <code>AWSTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AWSTargetDetails();

            if (data.hasOwnProperty('aws_access_key_id')) {
                obj['aws_access_key_id'] = ApiClient.convertToType(data['aws_access_key_id'], 'String');
            }
            if (data.hasOwnProperty('aws_region')) {
                obj['aws_region'] = ApiClient.convertToType(data['aws_region'], 'String');
            }
            if (data.hasOwnProperty('aws_secret_access_key')) {
                obj['aws_secret_access_key'] = ApiClient.convertToType(data['aws_secret_access_key'], 'String');
            }
            if (data.hasOwnProperty('aws_session_token')) {
                obj['aws_session_token'] = ApiClient.convertToType(data['aws_session_token'], 'String');
            }
            if (data.hasOwnProperty('use_gw_cloud_identity')) {
                obj['use_gw_cloud_identity'] = ApiClient.convertToType(data['use_gw_cloud_identity'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} aws_access_key_id
 */
AWSTargetDetails.prototype['aws_access_key_id'] = undefined;

/**
 * @member {String} aws_region
 */
AWSTargetDetails.prototype['aws_region'] = undefined;

/**
 * @member {String} aws_secret_access_key
 */
AWSTargetDetails.prototype['aws_secret_access_key'] = undefined;

/**
 * @member {String} aws_session_token
 */
AWSTargetDetails.prototype['aws_session_token'] = undefined;

/**
 * @member {Boolean} use_gw_cloud_identity
 */
AWSTargetDetails.prototype['use_gw_cloud_identity'] = undefined;






export default AWSTargetDetails;

