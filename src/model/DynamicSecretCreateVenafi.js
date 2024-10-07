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
 * The DynamicSecretCreateVenafi model module.
 * @module model/DynamicSecretCreateVenafi
 * @version 4.2.5
 */
class DynamicSecretCreateVenafi {
    /**
     * Constructs a new <code>DynamicSecretCreateVenafi</code>.
     * dynamicSecretCreateVenafi is a command that creates a Venafi dynamic secret to dynamically create certificates generated by Venafi or have Akeyless generated certificates using PKI be monitored by Venafi
     * @alias module:model/DynamicSecretCreateVenafi
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretCreateVenafi.initialize(this, name);
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
     * Constructs a <code>DynamicSecretCreateVenafi</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretCreateVenafi} obj Optional instance to populate.
     * @return {module:model/DynamicSecretCreateVenafi} The populated <code>DynamicSecretCreateVenafi</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretCreateVenafi();

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
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('enable-admin-rotation')) {
                obj['enable-admin-rotation'] = ApiClient.convertToType(data['enable-admin-rotation'], 'Boolean');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
            if (data.hasOwnProperty('venafi-access-token')) {
                obj['venafi-access-token'] = ApiClient.convertToType(data['venafi-access-token'], 'String');
            }
            if (data.hasOwnProperty('venafi-api-key')) {
                obj['venafi-api-key'] = ApiClient.convertToType(data['venafi-api-key'], 'String');
            }
            if (data.hasOwnProperty('venafi-baseurl')) {
                obj['venafi-baseurl'] = ApiClient.convertToType(data['venafi-baseurl'], 'String');
            }
            if (data.hasOwnProperty('venafi-client-id')) {
                obj['venafi-client-id'] = ApiClient.convertToType(data['venafi-client-id'], 'String');
            }
            if (data.hasOwnProperty('venafi-refresh-token')) {
                obj['venafi-refresh-token'] = ApiClient.convertToType(data['venafi-refresh-token'], 'String');
            }
            if (data.hasOwnProperty('venafi-use-tpp')) {
                obj['venafi-use-tpp'] = ApiClient.convertToType(data['venafi-use-tpp'], 'Boolean');
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
DynamicSecretCreateVenafi.prototype['admin-rotation-interval-days'] = 0;

/**
 * Allow subdomains
 * @member {Boolean} allow-subdomains
 */
DynamicSecretCreateVenafi.prototype['allow-subdomains'] = undefined;

/**
 * Allowed domains
 * @member {Array.<String>} allowed-domains
 */
DynamicSecretCreateVenafi.prototype['allowed-domains'] = undefined;

/**
 * Auto generated folder
 * @member {String} auto-generated-folder
 */
DynamicSecretCreateVenafi.prototype['auto-generated-folder'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretCreateVenafi.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretCreateVenafi.prototype['description'] = undefined;

/**
 * Automatic admin credentials rotation
 * @member {Boolean} enable-admin-rotation
 * @default false
 */
DynamicSecretCreateVenafi.prototype['enable-admin-rotation'] = false;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretCreateVenafi.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretCreateVenafi.prototype['name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretCreateVenafi.prototype['producer-encryption-key-name'] = undefined;

/**
 * Root first in chain
 * @member {Boolean} root-first-in-chain
 */
DynamicSecretCreateVenafi.prototype['root-first-in-chain'] = undefined;

/**
 * Use Akeyless PKI issuer or Venafi issuer
 * @member {Boolean} sign-using-akeyless-pki
 */
DynamicSecretCreateVenafi.prototype['sign-using-akeyless-pki'] = undefined;

/**
 * Signer key name
 * @member {String} signer-key-name
 */
DynamicSecretCreateVenafi.prototype['signer-key-name'] = undefined;

/**
 * Store private key
 * @member {Boolean} store-private-key
 */
DynamicSecretCreateVenafi.prototype['store-private-key'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretCreateVenafi.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretCreateVenafi.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretCreateVenafi.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretCreateVenafi.prototype['uid-token'] = undefined;

/**
 * User TTL in time.Duration format (2160h / 129600m / etc...). When using sign-using-akeyless-pki certificates created will have this validity period, otherwise the user-ttl is taken from the Validity Period field of the Zone's' Issuing Template. When using cert-manager it is advised to have a TTL of above 60 days (1440h). For more information - https://cert-manager.io/docs/usage/certificate/
 * @member {String} user-ttl
 * @default '2160h'
 */
DynamicSecretCreateVenafi.prototype['user-ttl'] = '2160h';

/**
 * Venafi Access Token to use to access the TPP environment (Relevant when using TPP)
 * @member {String} venafi-access-token
 */
DynamicSecretCreateVenafi.prototype['venafi-access-token'] = undefined;

/**
 * Venafi API key
 * @member {String} venafi-api-key
 */
DynamicSecretCreateVenafi.prototype['venafi-api-key'] = undefined;

/**
 * Venafi Baseurl
 * @member {String} venafi-baseurl
 */
DynamicSecretCreateVenafi.prototype['venafi-baseurl'] = undefined;

/**
 * Venafi Client ID that was used when the access token was generated
 * @member {String} venafi-client-id
 * @default 'akeyless'
 */
DynamicSecretCreateVenafi.prototype['venafi-client-id'] = 'akeyless';

/**
 * Venafi Refresh Token to use when the Access Token is expired (Relevant when using TPP)
 * @member {String} venafi-refresh-token
 */
DynamicSecretCreateVenafi.prototype['venafi-refresh-token'] = undefined;

/**
 * Venafi using TPP
 * @member {Boolean} venafi-use-tpp
 */
DynamicSecretCreateVenafi.prototype['venafi-use-tpp'] = undefined;

/**
 * Venafi Zone
 * @member {String} venafi-zone
 */
DynamicSecretCreateVenafi.prototype['venafi-zone'] = undefined;






export default DynamicSecretCreateVenafi;

