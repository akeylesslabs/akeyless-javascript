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
 * The AllowedAccessUpdateArgs model module.
 * @module model/AllowedAccessUpdateArgs
 * @version 3.3.13
 */
class AllowedAccessUpdateArgs {
    /**
     * Constructs a new <code>AllowedAccessUpdateArgs</code>.
     * @alias module:model/AllowedAccessUpdateArgs
     * @param accessId {String} Access ID The access id to be attached to this allowed access. Auth method with this access id should already exist.
     * @param name {String} Allowed access name
     */
    constructor(accessId, name) { 
        
        AllowedAccessUpdateArgs.initialize(this, accessId, name);
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
     * Constructs a <code>AllowedAccessUpdateArgs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllowedAccessUpdateArgs} obj Optional instance to populate.
     * @return {module:model/AllowedAccessUpdateArgs} The populated <code>AllowedAccessUpdateArgs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllowedAccessUpdateArgs();

            if (data.hasOwnProperty('access-id')) {
                obj['access-id'] = ApiClient.convertToType(data['access-id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
        }
        return obj;
    }


}

/**
 * Access ID The access id to be attached to this allowed access. Auth method with this access id should already exist.
 * @member {String} access-id
 */
AllowedAccessUpdateArgs.prototype['access-id'] = undefined;

/**
 * Allowed access description
 * @member {String} description
 */
AllowedAccessUpdateArgs.prototype['description'] = undefined;

/**
 * Allowed access name
 * @member {String} name
 */
AllowedAccessUpdateArgs.prototype['name'] = undefined;

/**
 * New allowed access name
 * @member {String} new-name
 */
AllowedAccessUpdateArgs.prototype['new-name'] = undefined;

/**
 * Permissions  Comma-seperated list of permissions for this allowed access. Available permissions: [defaults,targets,classic_keys,automatic_migration,ldap_auth,dynamic_secret,k8s_auth,log_forwarding,zero_knowledge_encryption,rotated_secret,caching,event_forwarding,admin,kmip,general]
 * @member {String} permissions
 */
AllowedAccessUpdateArgs.prototype['permissions'] = undefined;

/**
 * Sub claims key/val of sub claims, e.g group=admins,developers
 * @member {Object.<String, String>} sub-claims
 */
AllowedAccessUpdateArgs.prototype['sub-claims'] = undefined;






export default AllowedAccessUpdateArgs;

