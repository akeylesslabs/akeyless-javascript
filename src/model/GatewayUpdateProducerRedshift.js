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
 * The GatewayUpdateProducerRedshift model module.
 * @module model/GatewayUpdateProducerRedshift
 * @version 2.16.0
 */
class GatewayUpdateProducerRedshift {
    /**
     * Constructs a new <code>GatewayUpdateProducerRedshift</code>.
     * gatewayUpdateProducerRedshift is a command that updates redshift producer
     * @alias module:model/GatewayUpdateProducerRedshift
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerRedshift.initialize(this, name);
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
     * Constructs a <code>GatewayUpdateProducerRedshift</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerRedshift} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerRedshift} The populated <code>GatewayUpdateProducerRedshift</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerRedshift();

            if (data.hasOwnProperty('creation-statements')) {
                obj['creation-statements'] = ApiClient.convertToType(data['creation-statements'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key')) {
                obj['producer-encryption-key'] = ApiClient.convertToType(data['producer-encryption-key'], 'String');
            }
            if (data.hasOwnProperty('redshift-db-name')) {
                obj['redshift-db-name'] = ApiClient.convertToType(data['redshift-db-name'], 'String');
            }
            if (data.hasOwnProperty('redshift-host')) {
                obj['redshift-host'] = ApiClient.convertToType(data['redshift-host'], 'String');
            }
            if (data.hasOwnProperty('redshift-password')) {
                obj['redshift-password'] = ApiClient.convertToType(data['redshift-password'], 'String');
            }
            if (data.hasOwnProperty('redshift-port')) {
                obj['redshift-port'] = ApiClient.convertToType(data['redshift-port'], 'String');
            }
            if (data.hasOwnProperty('redshift-username')) {
                obj['redshift-username'] = ApiClient.convertToType(data['redshift-username'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-host')) {
                obj['secure-access-host'] = ApiClient.convertToType(data['secure-access-host'], ['String']);
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
        }
        return obj;
    }


}

/**
 * Redshift Creation statements
 * @member {String} creation-statements
 */
GatewayUpdateProducerRedshift.prototype['creation-statements'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerRedshift.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerRedshift.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key
 */
GatewayUpdateProducerRedshift.prototype['producer-encryption-key'] = undefined;

/**
 * Redshift DB Name
 * @member {String} redshift-db-name
 */
GatewayUpdateProducerRedshift.prototype['redshift-db-name'] = undefined;

/**
 * Redshift Host
 * @member {String} redshift-host
 * @default '127.0.0.1'
 */
GatewayUpdateProducerRedshift.prototype['redshift-host'] = '127.0.0.1';

/**
 * Redshift Password
 * @member {String} redshift-password
 */
GatewayUpdateProducerRedshift.prototype['redshift-password'] = undefined;

/**
 * Redshift Port
 * @member {String} redshift-port
 * @default '5439'
 */
GatewayUpdateProducerRedshift.prototype['redshift-port'] = '5439';

/**
 * Redshift Username
 * @member {String} redshift-username
 */
GatewayUpdateProducerRedshift.prototype['redshift-username'] = undefined;

/**
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerRedshift.prototype['secure-access-enable'] = undefined;

/**
 * @member {Array.<String>} secure-access-host
 */
GatewayUpdateProducerRedshift.prototype['secure-access-host'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerRedshift.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerRedshift.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerRedshift.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerRedshift.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerRedshift.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerRedshift;

