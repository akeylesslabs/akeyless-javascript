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
 * The LdapTargetDetails model module.
 * @module model/LdapTargetDetails
 * @version 4.3.0
 */
class LdapTargetDetails {
    /**
     * Constructs a new <code>LdapTargetDetails</code>.
     * LdapTargetDetails
     * @alias module:model/LdapTargetDetails
     */
    constructor() { 
        
        LdapTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LdapTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LdapTargetDetails} obj Optional instance to populate.
     * @return {module:model/LdapTargetDetails} The populated <code>LdapTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LdapTargetDetails();

            if (data.hasOwnProperty('implementation_type')) {
                obj['implementation_type'] = ApiClient.convertToType(data['implementation_type'], 'String');
            }
            if (data.hasOwnProperty('ldap_audience')) {
                obj['ldap_audience'] = ApiClient.convertToType(data['ldap_audience'], 'String');
            }
            if (data.hasOwnProperty('ldap_bind_dn')) {
                obj['ldap_bind_dn'] = ApiClient.convertToType(data['ldap_bind_dn'], 'String');
            }
            if (data.hasOwnProperty('ldap_bind_password')) {
                obj['ldap_bind_password'] = ApiClient.convertToType(data['ldap_bind_password'], 'String');
            }
            if (data.hasOwnProperty('ldap_certificate')) {
                obj['ldap_certificate'] = ApiClient.convertToType(data['ldap_certificate'], 'String');
            }
            if (data.hasOwnProperty('ldap_token_expiration')) {
                obj['ldap_token_expiration'] = ApiClient.convertToType(data['ldap_token_expiration'], 'String');
            }
            if (data.hasOwnProperty('ldap_url')) {
                obj['ldap_url'] = ApiClient.convertToType(data['ldap_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} implementation_type
 */
LdapTargetDetails.prototype['implementation_type'] = undefined;

/**
 * @member {String} ldap_audience
 */
LdapTargetDetails.prototype['ldap_audience'] = undefined;

/**
 * @member {String} ldap_bind_dn
 */
LdapTargetDetails.prototype['ldap_bind_dn'] = undefined;

/**
 * @member {String} ldap_bind_password
 */
LdapTargetDetails.prototype['ldap_bind_password'] = undefined;

/**
 * @member {String} ldap_certificate
 */
LdapTargetDetails.prototype['ldap_certificate'] = undefined;

/**
 * @member {String} ldap_token_expiration
 */
LdapTargetDetails.prototype['ldap_token_expiration'] = undefined;

/**
 * @member {String} ldap_url
 */
LdapTargetDetails.prototype['ldap_url'] = undefined;






export default LdapTargetDetails;

