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
 * The GithubTargetDetails model module.
 * @module model/GithubTargetDetails
 * @version 3.6.3
 */
class GithubTargetDetails {
    /**
     * Constructs a new <code>GithubTargetDetails</code>.
     * @alias module:model/GithubTargetDetails
     */
    constructor() { 
        
        GithubTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GithubTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GithubTargetDetails} obj Optional instance to populate.
     * @return {module:model/GithubTargetDetails} The populated <code>GithubTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GithubTargetDetails();

            if (data.hasOwnProperty('github_app_id')) {
                obj['github_app_id'] = ApiClient.convertToType(data['github_app_id'], 'Number');
            }
            if (data.hasOwnProperty('github_app_private_key')) {
                obj['github_app_private_key'] = ApiClient.convertToType(data['github_app_private_key'], 'String');
            }
            if (data.hasOwnProperty('github_base_url')) {
                obj['github_base_url'] = ApiClient.convertToType(data['github_base_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} github_app_id
 */
GithubTargetDetails.prototype['github_app_id'] = undefined;

/**
 * @member {String} github_app_private_key
 */
GithubTargetDetails.prototype['github_app_private_key'] = undefined;

/**
 * @member {String} github_base_url
 */
GithubTargetDetails.prototype['github_base_url'] = undefined;






export default GithubTargetDetails;

