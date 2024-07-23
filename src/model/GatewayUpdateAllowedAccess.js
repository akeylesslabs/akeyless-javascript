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
 * The GatewayUpdateAllowedAccess model module.
 * @module model/GatewayUpdateAllowedAccess
 * @version 4.2.1
 */
class GatewayUpdateAllowedAccess {
    /**
     * Constructs a new <code>GatewayUpdateAllowedAccess</code>.
     * gatewayUpdateAllowedAccess is a command that update allowed access in Gator
     * @alias module:model/GatewayUpdateAllowedAccess
     * @param accessId {String} Access ID The access id to be attached to this allowed access. Auth method with this access id should already exist.
     * @param name {String} Allowed access name
     */
    constructor(accessId, name) { 
        
        GatewayUpdateAllowedAccess.initialize(this, accessId, name);
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
     * Constructs a <code>GatewayUpdateAllowedAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateAllowedAccess} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateAllowedAccess} The populated <code>GatewayUpdateAllowedAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateAllowedAccess();

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
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
GatewayUpdateAllowedAccess.prototype['SubClaimsCaseInsensitive'] = undefined;

/**
 * Access ID The access id to be attached to this allowed access. Auth method with this access id should already exist.
 * @member {String} access-id
 */
GatewayUpdateAllowedAccess.prototype['access-id'] = undefined;

/**
 * Treat sub claims as case-sensitive [true/false]
 * @member {String} case-sensitive
 * @default 'true'
 */
GatewayUpdateAllowedAccess.prototype['case-sensitive'] = 'true';

/**
 * Allowed access description
 * @member {String} description
 */
GatewayUpdateAllowedAccess.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateAllowedAccess.prototype['json'] = false;

/**
 * Allowed access name
 * @member {String} name
 */
GatewayUpdateAllowedAccess.prototype['name'] = undefined;

/**
 * New allowed access name
 * @member {String} new-name
 */
GatewayUpdateAllowedAccess.prototype['new-name'] = undefined;

/**
 * Permissions  Comma-seperated list of permissions for this allowed access. Available permissions: [defaults,targets,classic_keys,automatic_migration,ldap_auth,dynamic_secret,k8s_auth,log_forwarding,zero_knowledge_encryption,rotated_secret,caching,event_forwarding,admin,kmip,general]
 * @member {String} permissions
 */
GatewayUpdateAllowedAccess.prototype['permissions'] = undefined;

/**
 * Sub claims key/val of sub claims, e.g group=admins,developers
 * @member {Object.<String, String>} sub-claims
 */
GatewayUpdateAllowedAccess.prototype['sub-claims'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateAllowedAccess.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateAllowedAccess.prototype['uid-token'] = undefined;






export default GatewayUpdateAllowedAccess;

