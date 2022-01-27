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
 * The GatewayCreateProducerCustom model module.
 * @module model/GatewayCreateProducerCustom
 * @version 2.15.25
 */
class GatewayCreateProducerCustom {
    /**
     * Constructs a new <code>GatewayCreateProducerCustom</code>.
     * @alias module:model/GatewayCreateProducerCustom
     * @param createSyncUrl {String} URL of an endpoint that implements /sync/create method, for example https://webhook.example.com/sync/create
     * @param name {String} Producer name
     * @param revokeSyncUrl {String} URL of an endpoint that implements /sync/revoke method, for example https://webhook.example.com/sync/revoke
     */
    constructor(createSyncUrl, name, revokeSyncUrl) { 
        
        GatewayCreateProducerCustom.initialize(this, createSyncUrl, name, revokeSyncUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createSyncUrl, name, revokeSyncUrl) { 
        obj['create-sync-url'] = createSyncUrl;
        obj['name'] = name;
        obj['revoke-sync-url'] = revokeSyncUrl;
    }

    /**
     * Constructs a <code>GatewayCreateProducerCustom</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerCustom} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerCustom} The populated <code>GatewayCreateProducerCustom</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerCustom();

            if (data.hasOwnProperty('create-sync-url')) {
                obj['create-sync-url'] = ApiClient.convertToType(data['create-sync-url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('revoke-sync-url')) {
                obj['revoke-sync-url'] = ApiClient.convertToType(data['revoke-sync-url'], 'String');
            }
            if (data.hasOwnProperty('rotate-sync-url')) {
                obj['rotate-sync-url'] = ApiClient.convertToType(data['rotate-sync-url'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('timeout-sec')) {
                obj['timeout-sec'] = ApiClient.convertToType(data['timeout-sec'], 'Number');
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
        }
        return obj;
    }


}

/**
 * URL of an endpoint that implements /sync/create method, for example https://webhook.example.com/sync/create
 * @member {String} create-sync-url
 */
GatewayCreateProducerCustom.prototype['create-sync-url'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerCustom.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GatewayCreateProducerCustom.prototype['password'] = undefined;

/**
 * Secret payload to be sent with each create/revoke webhook request
 * @member {String} payload
 */
GatewayCreateProducerCustom.prototype['payload'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerCustom.prototype['producer-encryption-key-name'] = undefined;

/**
 * URL of an endpoint that implements /sync/revoke method, for example https://webhook.example.com/sync/revoke
 * @member {String} revoke-sync-url
 */
GatewayCreateProducerCustom.prototype['revoke-sync-url'] = undefined;

/**
 * URL of an endpoint that implements /sync/rotate method, for example https://webhook.example.com/sync/rotate
 * @member {String} rotate-sync-url
 */
GatewayCreateProducerCustom.prototype['rotate-sync-url'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayCreateProducerCustom.prototype['tags'] = undefined;

/**
 * Maximum allowed time in seconds for the webhook to return the results
 * @member {Number} timeout-sec
 * @default 60
 */
GatewayCreateProducerCustom.prototype['timeout-sec'] = 60;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerCustom.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerCustom.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerCustom.prototype['user-ttl'] = '60m';

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GatewayCreateProducerCustom.prototype['username'] = undefined;






export default GatewayCreateProducerCustom;

