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
 * The CreateAuthMethodGCP model module.
 * @module model/CreateAuthMethodGCP
 * @version 2.4.7
 */
class CreateAuthMethodGCP {
    /**
     * Constructs a new <code>CreateAuthMethodGCP</code>.
     * createAuthMethodGCP is a command that creates a new auth method that will be able to authenticate using GCP IAM Service Account credentials or GCE instance credentials.
     * @alias module:model/CreateAuthMethodGCP
     * @param audience {String} The audience to verify in the JWT received by the client
     * @param name {String} Auth Method name
     * @param type {String} Type of the GCP Access Rules
     */
    constructor(audience, name, type) { 
        
        CreateAuthMethodGCP.initialize(this, audience, name, type);
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
     * Constructs a <code>CreateAuthMethodGCP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodGCP} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodGCP} The populated <code>CreateAuthMethodGCP</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodGCP();

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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
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
CreateAuthMethodGCP.prototype['access-expires'] = 0;

/**
 * The audience to verify in the JWT received by the client
 * @member {String} audience
 * @default 'akeyless.io'
 */
CreateAuthMethodGCP.prototype['audience'] = 'akeyless.io';

/**
 * A CIDR whitelist of the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethodGCP.prototype['bound-ips'] = undefined;

/**
 * A comma-separated list of GCP labels formatted as \"key:value\" strings that must be set on authorized GCE instances. TODO: Because GCP labels are not currently ACL'd ....
 * @member {Array.<String>} bound-labels
 */
CreateAuthMethodGCP.prototype['bound-labels'] = undefined;

/**
 * === Human and Machine authentication section === Array of GCP project IDs. Only entities belonging to any of the provided projects can authenticate.
 * @member {Array.<String>} bound-projects
 */
CreateAuthMethodGCP.prototype['bound-projects'] = undefined;

/**
 * List of regions that a GCE instance must belong to in order to be authenticated. TODO: If bound_instance_groups is provided, it is assumed to be a regional group and the group must belong to this region. If bound_zones are provided, this attribute is ignored.
 * @member {Array.<String>} bound-regions
 */
CreateAuthMethodGCP.prototype['bound-regions'] = undefined;

/**
 * === Human authentication section === List of service accounts the service account must be part of in order to be authenticated.
 * @member {Array.<String>} bound-service-accounts
 */
CreateAuthMethodGCP.prototype['bound-service-accounts'] = undefined;

/**
 * === Machine authentication section === List of zones that a GCE instance must belong to in order to be authenticated. TODO: If bound_instance_groups is provided, it is assumed to be a zonal group and the group must belong to this zone.
 * @member {Array.<String>} bound-zones
 */
CreateAuthMethodGCP.prototype['bound-zones'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethodGCP.prototype['force-sub-claims'] = undefined;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodGCP.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
CreateAuthMethodGCP.prototype['password'] = undefined;

/**
 * ServiceAccount credentials data instead of giving a file path, base64 encoded
 * @member {String} service-account-creds-data
 */
CreateAuthMethodGCP.prototype['service-account-creds-data'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAuthMethodGCP.prototype['token'] = undefined;

/**
 * Type of the GCP Access Rules
 * @member {String} type
 */
CreateAuthMethodGCP.prototype['type'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAuthMethodGCP.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
CreateAuthMethodGCP.prototype['username'] = undefined;






export default CreateAuthMethodGCP;

