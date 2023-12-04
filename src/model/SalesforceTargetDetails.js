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
 * The SalesforceTargetDetails model module.
 * @module model/SalesforceTargetDetails
 * @version 3.5.1
 */
class SalesforceTargetDetails {
    /**
     * Constructs a new <code>SalesforceTargetDetails</code>.
     * SalesforceTargetDetails
     * @alias module:model/SalesforceTargetDetails
     */
    constructor() { 
        
        SalesforceTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SalesforceTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SalesforceTargetDetails} obj Optional instance to populate.
     * @return {module:model/SalesforceTargetDetails} The populated <code>SalesforceTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SalesforceTargetDetails();

            if (data.hasOwnProperty('app_private_key')) {
                obj['app_private_key'] = ApiClient.convertToType(data['app_private_key'], ['Number']);
            }
            if (data.hasOwnProperty('auth_flow')) {
                obj['auth_flow'] = ApiClient.convertToType(data['auth_flow'], 'String');
            }
            if (data.hasOwnProperty('ca_cert_data')) {
                obj['ca_cert_data'] = ApiClient.convertToType(data['ca_cert_data'], ['Number']);
            }
            if (data.hasOwnProperty('ca_cert_name')) {
                obj['ca_cert_name'] = ApiClient.convertToType(data['ca_cert_name'], 'String');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('security_token')) {
                obj['security_token'] = ApiClient.convertToType(data['security_token'], 'String');
            }
            if (data.hasOwnProperty('tenant_url')) {
                obj['tenant_url'] = ApiClient.convertToType(data['tenant_url'], 'String');
            }
            if (data.hasOwnProperty('user_name')) {
                obj['user_name'] = ApiClient.convertToType(data['user_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * params needed for jwt auth AppPrivateKey is the rsa private key in PEM format
 * @member {Array.<Number>} app_private_key
 */
SalesforceTargetDetails.prototype['app_private_key'] = undefined;

/**
 * @member {String} auth_flow
 */
SalesforceTargetDetails.prototype['auth_flow'] = undefined;

/**
 * CACertData is the rsa 4096 certificate data in PEM format
 * @member {Array.<Number>} ca_cert_data
 */
SalesforceTargetDetails.prototype['ca_cert_data'] = undefined;

/**
 * CACertName is the name of the certificate in SalesForce tenant
 * @member {String} ca_cert_name
 */
SalesforceTargetDetails.prototype['ca_cert_name'] = undefined;

/**
 * @member {String} client_id
 */
SalesforceTargetDetails.prototype['client_id'] = undefined;

/**
 * params needed for password auth
 * @member {String} client_secret
 */
SalesforceTargetDetails.prototype['client_secret'] = undefined;

/**
 * @member {String} password
 */
SalesforceTargetDetails.prototype['password'] = undefined;

/**
 * @member {String} security_token
 */
SalesforceTargetDetails.prototype['security_token'] = undefined;

/**
 * @member {String} tenant_url
 */
SalesforceTargetDetails.prototype['tenant_url'] = undefined;

/**
 * @member {String} user_name
 */
SalesforceTargetDetails.prototype['user_name'] = undefined;






export default SalesforceTargetDetails;

