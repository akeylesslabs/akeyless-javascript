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
 * The UpdateAuthMethodGCP model module.
 * @module model/UpdateAuthMethodGCP
 * @version 2.15.28
 */
class UpdateAuthMethodGCP {
    /**
     * Constructs a new <code>UpdateAuthMethodGCP</code>.
     * updateAuthMethodGCP is a command that updates a new auth method that will be able to authenticate using GCP IAM Service Account credentials or GCE instance credentials.
     * @alias module:model/UpdateAuthMethodGCP
     * @param audience {String} The audience to verify in the JWT received by the client
     * @param name {String} Auth Method name
     * @param type {String} Type of the GCP Access Rules
     */
    constructor(audience, name, type) { 
        
        UpdateAuthMethodGCP.initialize(this, audience, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, audience, name, type) { 
        obj['audience'] = audience;
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>UpdateAuthMethodGCP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAuthMethodGCP} obj Optional instance to populate.
     * @return {module:model/UpdateAuthMethodGCP} The populated <code>UpdateAuthMethodGCP</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAuthMethodGCP();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('bound-labels')) {
                obj['bound-labels'] = ApiClient.convertToType(data['bound-labels'], ['String']);
            }
            if (data.hasOwnProperty('bound-projects')) {
                obj['bound-projects'] = ApiClient.convertToType(data['bound-projects'], ['String']);
            }
            if (data.hasOwnProperty('bound-regions')) {
                obj['bound-regions'] = ApiClient.convertToType(data['bound-regions'], ['String']);
            }
            if (data.hasOwnProperty('bound-service-accounts')) {
                obj['bound-service-accounts'] = ApiClient.convertToType(data['bound-service-accounts'], ['String']);
            }
            if (data.hasOwnProperty('bound-zones')) {
                obj['bound-zones'] = ApiClient.convertToType(data['bound-zones'], ['String']);
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('jwt-ttl')) {
                obj['jwt-ttl'] = ApiClient.convertToType(data['jwt-ttl'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('service-account-creds-data')) {
                obj['service-account-creds-data'] = ApiClient.convertToType(data['service-account-creds-data'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
UpdateAuthMethodGCP.prototype['access-expires'] = 0;

/**
 * The audience to verify in the JWT received by the client
 * @member {String} audience
 * @default 'akeyless.io'
 */
UpdateAuthMethodGCP.prototype['audience'] = 'akeyless.io';

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
UpdateAuthMethodGCP.prototype['bound-ips'] = undefined;

/**
 * A comma-separated list of GCP labels formatted as \"key:value\" strings that must be set on authorized GCE instances. TODO: Because GCP labels are not currently ACL'd ....
 * @member {Array.<String>} bound-labels
 */
UpdateAuthMethodGCP.prototype['bound-labels'] = undefined;

/**
 * === Human and Machine authentication section === Array of GCP project IDs. Only entities belonging to any of the provided projects can authenticate.
 * @member {Array.<String>} bound-projects
 */
UpdateAuthMethodGCP.prototype['bound-projects'] = undefined;

/**
 * List of regions that a GCE instance must belong to in order to be authenticated. TODO: If bound_instance_groups is provided, it is assumed to be a regional group and the group must belong to this region. If bound_zones are provided, this attribute is ignored.
 * @member {Array.<String>} bound-regions
 */
UpdateAuthMethodGCP.prototype['bound-regions'] = undefined;

/**
 * List of service accounts the service account must be part of in order to be authenticated.
 * @member {Array.<String>} bound-service-accounts
 */
UpdateAuthMethodGCP.prototype['bound-service-accounts'] = undefined;

/**
 * === Machine authentication section === List of zones that a GCE instance must belong to in order to be authenticated. TODO: If bound_instance_groups is provided, it is assumed to be a zonal group and the group must belong to this zone.
 * @member {Array.<String>} bound-zones
 */
UpdateAuthMethodGCP.prototype['bound-zones'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
UpdateAuthMethodGCP.prototype['force-sub-claims'] = undefined;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
UpdateAuthMethodGCP.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
UpdateAuthMethodGCP.prototype['name'] = undefined;

/**
 * Auth Method new name
 * @member {String} new-name
 */
UpdateAuthMethodGCP.prototype['new-name'] = undefined;

/**
 * ServiceAccount credentials data instead of giving a file path, base64 encoded
 * @member {String} service-account-creds-data
 */
UpdateAuthMethodGCP.prototype['service-account-creds-data'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAuthMethodGCP.prototype['token'] = undefined;

/**
 * Type of the GCP Access Rules
 * @member {String} type
 */
UpdateAuthMethodGCP.prototype['type'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAuthMethodGCP.prototype['uid-token'] = undefined;






export default UpdateAuthMethodGCP;

