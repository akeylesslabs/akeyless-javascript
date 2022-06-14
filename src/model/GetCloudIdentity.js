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
 * The GetCloudIdentity model module.
 * @module model/GetCloudIdentity
 * @version 2.16.8
 */
class GetCloudIdentity {
    /**
     * Constructs a new <code>GetCloudIdentity</code>.
     * getCloudIdentity is a command that gets Cloud Identity Token (relevant only for access-type&#x3D;azure_ad, aws_iam, gcp).
     * @alias module:model/GetCloudIdentity
     */
    constructor() { 
        
        GetCloudIdentity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCloudIdentity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCloudIdentity} obj Optional instance to populate.
     * @return {module:model/GetCloudIdentity} The populated <code>GetCloudIdentity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCloudIdentity();

            if (data.hasOwnProperty('azure_ad_object_id')) {
                obj['azure_ad_object_id'] = ApiClient.convertToType(data['azure_ad_object_id'], 'String');
            }
            if (data.hasOwnProperty('debug')) {
                obj['debug'] = ApiClient.convertToType(data['debug'], 'Boolean');
            }
            if (data.hasOwnProperty('gcp-audience')) {
                obj['gcp-audience'] = ApiClient.convertToType(data['gcp-audience'], 'String');
            }
            if (data.hasOwnProperty('url_safe')) {
                obj['url_safe'] = ApiClient.convertToType(data['url_safe'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Azure Active Directory ObjectId (relevant only for access-type=azure_ad)
 * @member {String} azure_ad_object_id
 */
GetCloudIdentity.prototype['azure_ad_object_id'] = undefined;

/**
 * @member {Boolean} debug
 */
GetCloudIdentity.prototype['debug'] = undefined;

/**
 * GCP JWT audience
 * @member {String} gcp-audience
 */
GetCloudIdentity.prototype['gcp-audience'] = undefined;

/**
 * Escapes the token so it can be safely placed inside a URL query
 * @member {Boolean} url_safe
 */
GetCloudIdentity.prototype['url_safe'] = undefined;






export default GetCloudIdentity;

