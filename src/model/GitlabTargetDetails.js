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
 * The GitlabTargetDetails model module.
 * @module model/GitlabTargetDetails
 * @version 4.2.4
 */
class GitlabTargetDetails {
    /**
     * Constructs a new <code>GitlabTargetDetails</code>.
     * GitlabTargetDetails
     * @alias module:model/GitlabTargetDetails
     */
    constructor() { 
        
        GitlabTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GitlabTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitlabTargetDetails} obj Optional instance to populate.
     * @return {module:model/GitlabTargetDetails} The populated <code>GitlabTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GitlabTargetDetails();

            if (data.hasOwnProperty('gitlab_access_token')) {
                obj['gitlab_access_token'] = ApiClient.convertToType(data['gitlab_access_token'], 'String');
            }
            if (data.hasOwnProperty('gitlab_certificate')) {
                obj['gitlab_certificate'] = ApiClient.convertToType(data['gitlab_certificate'], 'String');
            }
            if (data.hasOwnProperty('gitlab_url')) {
                obj['gitlab_url'] = ApiClient.convertToType(data['gitlab_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} gitlab_access_token
 */
GitlabTargetDetails.prototype['gitlab_access_token'] = undefined;

/**
 * @member {String} gitlab_certificate
 */
GitlabTargetDetails.prototype['gitlab_certificate'] = undefined;

/**
 * @member {String} gitlab_url
 */
GitlabTargetDetails.prototype['gitlab_url'] = undefined;






export default GitlabTargetDetails;

