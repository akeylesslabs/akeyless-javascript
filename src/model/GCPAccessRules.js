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
 * The GCPAccessRules model module.
 * @module model/GCPAccessRules
 * @version 2.16.9
 */
class GCPAccessRules {
    /**
     * Constructs a new <code>GCPAccessRules</code>.
     * @alias module:model/GCPAccessRules
     */
    constructor() { 
        
        GCPAccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GCPAccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GCPAccessRules} obj Optional instance to populate.
     * @return {module:model/GCPAccessRules} The populated <code>GCPAccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GCPAccessRules();

            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('bound_labels')) {
                obj['bound_labels'] = ApiClient.convertToType(data['bound_labels'], {'String': 'String'});
            }
            if (data.hasOwnProperty('bound_projects')) {
                obj['bound_projects'] = ApiClient.convertToType(data['bound_projects'], ['String']);
            }
            if (data.hasOwnProperty('bound_regions')) {
                obj['bound_regions'] = ApiClient.convertToType(data['bound_regions'], ['String']);
            }
            if (data.hasOwnProperty('bound_service_accounts')) {
                obj['bound_service_accounts'] = ApiClient.convertToType(data['bound_service_accounts'], ['String']);
            }
            if (data.hasOwnProperty('bound_zones')) {
                obj['bound_zones'] = ApiClient.convertToType(data['bound_zones'], ['String']);
            }
            if (data.hasOwnProperty('service_account')) {
                obj['service_account'] = ApiClient.convertToType(data['service_account'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The audience in the JWT
 * @member {String} audience
 * @default 'akeyless.io'
 */
GCPAccessRules.prototype['audience'] = 'akeyless.io';

/**
 * A map of GCP labels formatted as \"key:value\" strings that must be set on authorized GCE instances. TODO: Because GCP labels are not currently ACL'd ....
 * @member {Object.<String, String>} bound_labels
 */
GCPAccessRules.prototype['bound_labels'] = undefined;

/**
 * Human and Machine authentication section Array of GCP project IDs. Only entities belonging to any of the provided projects can authenticate.
 * @member {Array.<String>} bound_projects
 */
GCPAccessRules.prototype['bound_projects'] = undefined;

/**
 * List of regions that a GCE instance must belong to in order to be authenticated. TODO: If bound_instance_groups is provided, it is assumed to be a regional group and the group must belong to this region. If bound_zones are provided, this attribute is ignored.
 * @member {Array.<String>} bound_regions
 */
GCPAccessRules.prototype['bound_regions'] = undefined;

/**
 * List of service accounts the service account must be part of in order to be authenticated
 * @member {Array.<String>} bound_service_accounts
 */
GCPAccessRules.prototype['bound_service_accounts'] = undefined;

/**
 * === Machine authentication section === List of zones that a GCE instance must belong to in order to be authenticated. TODO: If bound_instance_groups is provided, it is assumed to be a zonal group and the group must belong to this zone.
 * @member {Array.<String>} bound_zones
 */
GCPAccessRules.prototype['bound_zones'] = undefined;

/**
 * ServiceAccount holds the credentials file contents to be used by Akeyless to validate IAM (Human) and GCE (Machine) logins against GCP base64 encoded string
 * @member {String} service_account
 */
GCPAccessRules.prototype['service_account'] = undefined;

/**
 * @member {String} type
 */
GCPAccessRules.prototype['type'] = undefined;






export default GCPAccessRules;

