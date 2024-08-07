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
 * The ArtifactoryTargetDetails model module.
 * @module model/ArtifactoryTargetDetails
 * @version 4.2.2
 */
class ArtifactoryTargetDetails {
    /**
     * Constructs a new <code>ArtifactoryTargetDetails</code>.
     * @alias module:model/ArtifactoryTargetDetails
     */
    constructor() { 
        
        ArtifactoryTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArtifactoryTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArtifactoryTargetDetails} obj Optional instance to populate.
     * @return {module:model/ArtifactoryTargetDetails} The populated <code>ArtifactoryTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArtifactoryTargetDetails();

            if (data.hasOwnProperty('artifactory_admin_apikey')) {
                obj['artifactory_admin_apikey'] = ApiClient.convertToType(data['artifactory_admin_apikey'], 'String');
            }
            if (data.hasOwnProperty('artifactory_admin_username')) {
                obj['artifactory_admin_username'] = ApiClient.convertToType(data['artifactory_admin_username'], 'String');
            }
            if (data.hasOwnProperty('artifactory_base_url')) {
                obj['artifactory_base_url'] = ApiClient.convertToType(data['artifactory_base_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} artifactory_admin_apikey
 */
ArtifactoryTargetDetails.prototype['artifactory_admin_apikey'] = undefined;

/**
 * @member {String} artifactory_admin_username
 */
ArtifactoryTargetDetails.prototype['artifactory_admin_username'] = undefined;

/**
 * @member {String} artifactory_base_url
 */
ArtifactoryTargetDetails.prototype['artifactory_base_url'] = undefined;






export default ArtifactoryTargetDetails;

