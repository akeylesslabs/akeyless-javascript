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
 * The LdapConfigPart model module.
 * @module model/LdapConfigPart
 * @version 4.3.0
 */
class LdapConfigPart {
    /**
     * Constructs a new <code>LdapConfigPart</code>.
     * @alias module:model/LdapConfigPart
     */
    constructor() { 
        
        LdapConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LdapConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LdapConfigPart} obj Optional instance to populate.
     * @return {module:model/LdapConfigPart} The populated <code>LdapConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LdapConfigPart();

            if (data.hasOwnProperty('ldap_access_id')) {
                obj['ldap_access_id'] = ApiClient.convertToType(data['ldap_access_id'], 'String');
            }
            if (data.hasOwnProperty('ldap_anonymous_search')) {
                obj['ldap_anonymous_search'] = ApiClient.convertToType(data['ldap_anonymous_search'], 'Boolean');
            }
            if (data.hasOwnProperty('ldap_bind_dn')) {
                obj['ldap_bind_dn'] = ApiClient.convertToType(data['ldap_bind_dn'], 'String');
            }
            if (data.hasOwnProperty('ldap_bind_password')) {
                obj['ldap_bind_password'] = ApiClient.convertToType(data['ldap_bind_password'], 'String');
            }
            if (data.hasOwnProperty('ldap_cert')) {
                obj['ldap_cert'] = ApiClient.convertToType(data['ldap_cert'], 'String');
            }
            if (data.hasOwnProperty('ldap_enable')) {
                obj['ldap_enable'] = ApiClient.convertToType(data['ldap_enable'], 'Boolean');
            }
            if (data.hasOwnProperty('ldap_group_attr')) {
                obj['ldap_group_attr'] = ApiClient.convertToType(data['ldap_group_attr'], 'String');
            }
            if (data.hasOwnProperty('ldap_group_dn')) {
                obj['ldap_group_dn'] = ApiClient.convertToType(data['ldap_group_dn'], 'String');
            }
            if (data.hasOwnProperty('ldap_group_filter')) {
                obj['ldap_group_filter'] = ApiClient.convertToType(data['ldap_group_filter'], 'String');
            }
            if (data.hasOwnProperty('ldap_private_key')) {
                obj['ldap_private_key'] = ApiClient.convertToType(data['ldap_private_key'], 'String');
            }
            if (data.hasOwnProperty('ldap_token_expiration')) {
                obj['ldap_token_expiration'] = ApiClient.convertToType(data['ldap_token_expiration'], 'String');
            }
            if (data.hasOwnProperty('ldap_url')) {
                obj['ldap_url'] = ApiClient.convertToType(data['ldap_url'], 'String');
            }
            if (data.hasOwnProperty('ldap_user_attr')) {
                obj['ldap_user_attr'] = ApiClient.convertToType(data['ldap_user_attr'], 'String');
            }
            if (data.hasOwnProperty('ldap_user_dn')) {
                obj['ldap_user_dn'] = ApiClient.convertToType(data['ldap_user_dn'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ldap_access_id
 */
LdapConfigPart.prototype['ldap_access_id'] = undefined;

/**
 * @member {Boolean} ldap_anonymous_search
 */
LdapConfigPart.prototype['ldap_anonymous_search'] = undefined;

/**
 * @member {String} ldap_bind_dn
 */
LdapConfigPart.prototype['ldap_bind_dn'] = undefined;

/**
 * @member {String} ldap_bind_password
 */
LdapConfigPart.prototype['ldap_bind_password'] = undefined;

/**
 * @member {String} ldap_cert
 */
LdapConfigPart.prototype['ldap_cert'] = undefined;

/**
 * @member {Boolean} ldap_enable
 */
LdapConfigPart.prototype['ldap_enable'] = undefined;

/**
 * @member {String} ldap_group_attr
 */
LdapConfigPart.prototype['ldap_group_attr'] = undefined;

/**
 * @member {String} ldap_group_dn
 */
LdapConfigPart.prototype['ldap_group_dn'] = undefined;

/**
 * @member {String} ldap_group_filter
 */
LdapConfigPart.prototype['ldap_group_filter'] = undefined;

/**
 * @member {String} ldap_private_key
 */
LdapConfigPart.prototype['ldap_private_key'] = undefined;

/**
 * @member {String} ldap_token_expiration
 */
LdapConfigPart.prototype['ldap_token_expiration'] = undefined;

/**
 * @member {String} ldap_url
 */
LdapConfigPart.prototype['ldap_url'] = undefined;

/**
 * @member {String} ldap_user_attr
 */
LdapConfigPart.prototype['ldap_user_attr'] = undefined;

/**
 * @member {String} ldap_user_dn
 */
LdapConfigPart.prototype['ldap_user_dn'] = undefined;






export default LdapConfigPart;

