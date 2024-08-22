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
 * The EKSTargetDetails model module.
 * @module model/EKSTargetDetails
 * @version 4.2.3
 */
class EKSTargetDetails {
    /**
     * Constructs a new <code>EKSTargetDetails</code>.
     * EKSTargetDetails defines details related to connecting to a EKS (Elastic Container Service) target
     * @alias module:model/EKSTargetDetails
     */
    constructor() { 
        
        EKSTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EKSTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EKSTargetDetails} obj Optional instance to populate.
     * @return {module:model/EKSTargetDetails} The populated <code>EKSTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EKSTargetDetails();

            if (data.hasOwnProperty('eks_access_key_id')) {
                obj['eks_access_key_id'] = ApiClient.convertToType(data['eks_access_key_id'], 'String');
            }
            if (data.hasOwnProperty('eks_cluster_ca_certificate')) {
                obj['eks_cluster_ca_certificate'] = ApiClient.convertToType(data['eks_cluster_ca_certificate'], 'String');
            }
            if (data.hasOwnProperty('eks_cluster_endpoint')) {
                obj['eks_cluster_endpoint'] = ApiClient.convertToType(data['eks_cluster_endpoint'], 'String');
            }
            if (data.hasOwnProperty('eks_cluster_name')) {
                obj['eks_cluster_name'] = ApiClient.convertToType(data['eks_cluster_name'], 'String');
            }
            if (data.hasOwnProperty('eks_region')) {
                obj['eks_region'] = ApiClient.convertToType(data['eks_region'], 'String');
            }
            if (data.hasOwnProperty('eks_secret_access_key')) {
                obj['eks_secret_access_key'] = ApiClient.convertToType(data['eks_secret_access_key'], 'String');
            }
            if (data.hasOwnProperty('use_gw_cloud_identity')) {
                obj['use_gw_cloud_identity'] = ApiClient.convertToType(data['use_gw_cloud_identity'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} eks_access_key_id
 */
EKSTargetDetails.prototype['eks_access_key_id'] = undefined;

/**
 * @member {String} eks_cluster_ca_certificate
 */
EKSTargetDetails.prototype['eks_cluster_ca_certificate'] = undefined;

/**
 * @member {String} eks_cluster_endpoint
 */
EKSTargetDetails.prototype['eks_cluster_endpoint'] = undefined;

/**
 * @member {String} eks_cluster_name
 */
EKSTargetDetails.prototype['eks_cluster_name'] = undefined;

/**
 * @member {String} eks_region
 */
EKSTargetDetails.prototype['eks_region'] = undefined;

/**
 * @member {String} eks_secret_access_key
 */
EKSTargetDetails.prototype['eks_secret_access_key'] = undefined;

/**
 * @member {Boolean} use_gw_cloud_identity
 */
EKSTargetDetails.prototype['use_gw_cloud_identity'] = undefined;






export default EKSTargetDetails;

