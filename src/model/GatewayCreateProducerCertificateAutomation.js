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
 * The GatewayCreateProducerCertificateAutomation model module.
 * @module model/GatewayCreateProducerCertificateAutomation
 * @version 2.5.20
 */
class GatewayCreateProducerCertificateAutomation {
    /**
     * Constructs a new <code>GatewayCreateProducerCertificateAutomation</code>.
     * gatewayCreateProducerCertificateAutomation is a command that creates a Certificate Automation dynamic secret producer to dynamically create certificates generated by Venafi or have Akeyless generated certificates using PKI be monitored by Venafi
     * @alias module:model/GatewayCreateProducerCertificateAutomation
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayCreateProducerCertificateAutomation.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GatewayCreateProducerCertificateAutomation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerCertificateAutomation} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerCertificateAutomation} The populated <code>GatewayCreateProducerCertificateAutomation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerCertificateAutomation();

            if (data.hasOwnProperty('admin-rotation-interval-days')) {
                obj['admin-rotation-interval-days'] = ApiClient.convertToType(data['admin-rotation-interval-days'], 'Number');
            }
            if (data.hasOwnProperty('allow-subdomains')) {
                obj['allow-subdomains'] = ApiClient.convertToType(data['allow-subdomains'], 'Boolean');
            }
            if (data.hasOwnProperty('allowed-domains')) {
                obj['allowed-domains'] = ApiClient.convertToType(data['allowed-domains'], ['String']);
            }
            if (data.hasOwnProperty('auto-generated-folder')) {
                obj['auto-generated-folder'] = ApiClient.convertToType(data['auto-generated-folder'], 'String');
            }
            if (data.hasOwnProperty('enable-admin-rotation')) {
                obj['enable-admin-rotation'] = ApiClient.convertToType(data['enable-admin-rotation'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('root-first-in-chain')) {
                obj['root-first-in-chain'] = ApiClient.convertToType(data['root-first-in-chain'], 'Boolean');
            }
            if (data.hasOwnProperty('sign-using-akeyless-pki')) {
                obj['sign-using-akeyless-pki'] = ApiClient.convertToType(data['sign-using-akeyless-pki'], 'Boolean');
            }
            if (data.hasOwnProperty('signer-key-name')) {
                obj['signer-key-name'] = ApiClient.convertToType(data['signer-key-name'], 'String');
            }
            if (data.hasOwnProperty('store-private-key')) {
                obj['store-private-key'] = ApiClient.convertToType(data['store-private-key'], 'Boolean');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('venafi-api-key')) {
                obj['venafi-api-key'] = ApiClient.convertToType(data['venafi-api-key'], 'String');
            }
            if (data.hasOwnProperty('venafi-baseurl')) {
                obj['venafi-baseurl'] = ApiClient.convertToType(data['venafi-baseurl'], 'String');
            }
            if (data.hasOwnProperty('venafi-password')) {
                obj['venafi-password'] = ApiClient.convertToType(data['venafi-password'], 'String');
            }
            if (data.hasOwnProperty('venafi-use-tpp')) {
                obj['venafi-use-tpp'] = ApiClient.convertToType(data['venafi-use-tpp'], 'Boolean');
            }
            if (data.hasOwnProperty('venafi-username')) {
                obj['venafi-username'] = ApiClient.convertToType(data['venafi-username'], 'String');
            }
            if (data.hasOwnProperty('venafi-zone')) {
                obj['venafi-zone'] = ApiClient.convertToType(data['venafi-zone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Admin credentials rotation interval (days)
 * @member {Number} admin-rotation-interval-days
 * @default 0
 */
GatewayCreateProducerCertificateAutomation.prototype['admin-rotation-interval-days'] = 0;

/**
 * Allow subdomains
 * @member {Boolean} allow-subdomains
 */
GatewayCreateProducerCertificateAutomation.prototype['allow-subdomains'] = undefined;

/**
 * Allowed domains
 * @member {Array.<String>} allowed-domains
 */
GatewayCreateProducerCertificateAutomation.prototype['allowed-domains'] = undefined;

/**
 * Auto generated folder
 * @member {String} auto-generated-folder
 */
GatewayCreateProducerCertificateAutomation.prototype['auto-generated-folder'] = undefined;

/**
 * Automatic admin credentials rotation
 * @member {Boolean} enable-admin-rotation
 * @default false
 */
GatewayCreateProducerCertificateAutomation.prototype['enable-admin-rotation'] = false;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerCertificateAutomation.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GatewayCreateProducerCertificateAutomation.prototype['password'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerCertificateAutomation.prototype['producer-encryption-key-name'] = undefined;

/**
 * Root first in chain
 * @member {Boolean} root-first-in-chain
 */
GatewayCreateProducerCertificateAutomation.prototype['root-first-in-chain'] = undefined;

/**
 * Use Akeyless PKI issuer or Venafi issuer
 * @member {Boolean} sign-using-akeyless-pki
 */
GatewayCreateProducerCertificateAutomation.prototype['sign-using-akeyless-pki'] = undefined;

/**
 * Signer key name
 * @member {String} signer-key-name
 */
GatewayCreateProducerCertificateAutomation.prototype['signer-key-name'] = undefined;

/**
 * Store private key
 * @member {Boolean} store-private-key
 */
GatewayCreateProducerCertificateAutomation.prototype['store-private-key'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayCreateProducerCertificateAutomation.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerCertificateAutomation.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerCertificateAutomation.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerCertificateAutomation.prototype['uid-token'] = undefined;

/**
 * User TTL in time.Duration format (2160h / 129600m / etc...). When using sign-using-akeyless-pki certificates created will have this validity period, otherwise the user-ttl is taken from the Validity Period field of the Zone's' Issuing Template. When using cert-manager it is advised to have a TTL of above 60 days (1440h). For more information - https://cert-manager.io/docs/usage/certificate/
 * @member {String} user-ttl
 */
GatewayCreateProducerCertificateAutomation.prototype['user-ttl'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GatewayCreateProducerCertificateAutomation.prototype['username'] = undefined;

/**
 * Venafi API key
 * @member {String} venafi-api-key
 */
GatewayCreateProducerCertificateAutomation.prototype['venafi-api-key'] = undefined;

/**
 * Venafi Baseurl
 * @member {String} venafi-baseurl
 */
GatewayCreateProducerCertificateAutomation.prototype['venafi-baseurl'] = undefined;

/**
 * Venafi Password
 * @member {String} venafi-password
 */
GatewayCreateProducerCertificateAutomation.prototype['venafi-password'] = undefined;

/**
 * Venafi using TPP
 * @member {Boolean} venafi-use-tpp
 */
GatewayCreateProducerCertificateAutomation.prototype['venafi-use-tpp'] = undefined;

/**
 * Venafi Username
 * @member {String} venafi-username
 */
GatewayCreateProducerCertificateAutomation.prototype['venafi-username'] = undefined;

/**
 * Venafi Zone
 * @member {String} venafi-zone
 */
GatewayCreateProducerCertificateAutomation.prototype['venafi-zone'] = undefined;






export default GatewayCreateProducerCertificateAutomation;

