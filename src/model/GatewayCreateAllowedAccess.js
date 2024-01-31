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
 * The GatewayCreateAllowedAccess model module.
 * @module model/GatewayCreateAllowedAccess
 * @version 3.6.0
 */
class GatewayCreateAllowedAccess {
    /**
     * Constructs a new <code>GatewayCreateAllowedAccess</code>.
     * gatewayCreateAllowedAccess is a command that creates allowed access in Gator
     * @alias module:model/GatewayCreateAllowedAccess
     * @param accessId {String} Access ID The access id to be attached to this allowed access. Auth method with this access id should already exist.
     * @param name {String} Allowed access name
     */
    constructor(accessId, name) { 
        
        GatewayCreateAllowedAccess.initialize(this, accessId, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessId, name) { 
        obj['access-id'] = accessId;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GatewayCreateAllowedAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateAllowedAccess} obj Optional instance to populate.
     * @return {module:model/GatewayCreateAllowedAccess} The populated <code>GatewayCreateAllowedAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateAllowedAccess();

            if (data.hasOwnProperty('SubClaimsCaseInsensitive')) {
                obj['SubClaimsCaseInsensitive'] = ApiClient.convertToType(data['SubClaimsCaseInsensitive'], 'Boolean');
            }
            if (data.hasOwnProperty('access-id')) {
                obj['access-id'] = ApiClient.convertToType(data['access-id'], 'String');
            }
            if (data.hasOwnProperty('case-sensitive')) {
                obj['case-sensitive'] = ApiClient.convertToType(data['case-sensitive'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], 'String');
            }
            if (data.hasOwnProperty('sub-claims')) {
                obj['sub-claims'] = ApiClient.convertToType(data['sub-claims'], {'String': 'String'});
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} SubClaimsCaseInsensitive
 */
GatewayCreateAllowedAccess.prototype['SubClaimsCaseInsensitive'] = undefined;

/**
 * Access ID The access id to be attached to this allowed access. Auth method with this access id should already exist.
 * @member {String} access-id
 */
GatewayCreateAllowedAccess.prototype['access-id'] = undefined;

/**
 * Treat sub claims as case-sensitive [true/false]
 * @member {String} case-sensitive
 * @default 'true'
 */
GatewayCreateAllowedAccess.prototype['case-sensitive'] = 'true';

/**
 * Allowed access description
 * @member {String} description
 */
GatewayCreateAllowedAccess.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayCreateAllowedAccess.prototype['json'] = false;

/**
 * Allowed access name
 * @member {String} name
 */
GatewayCreateAllowedAccess.prototype['name'] = undefined;

/**
 * Permissions  Comma-seperated list of permissions for this allowed access. Available permissions: [defaults,targets,classic_keys,automatic_migration,ldap_auth,dynamic_secret,k8s_auth,log_forwarding,zero_knowledge_encryption,rotated_secret,caching,event_forwarding,admin,kmip,general]
 * @member {String} permissions
 */
GatewayCreateAllowedAccess.prototype['permissions'] = undefined;

/**
 * Sub claims key/val of sub claims, e.g group=admins,developers
 * @member {Object.<String, String>} sub-claims
 */
GatewayCreateAllowedAccess.prototype['sub-claims'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateAllowedAccess.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateAllowedAccess.prototype['uid-token'] = undefined;






export default GatewayCreateAllowedAccess;

