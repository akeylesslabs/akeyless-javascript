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
 * The GatewayCreateProducerRedshift model module.
 * @module model/GatewayCreateProducerRedshift
 * @version 3.3.5
 */
class GatewayCreateProducerRedshift {
    /**
     * Constructs a new <code>GatewayCreateProducerRedshift</code>.
     * gatewayCreateProducerRedshift is a command that creates redshift producer
     * @alias module:model/GatewayCreateProducerRedshift
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayCreateProducerRedshift.initialize(this, name);
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
     * Constructs a <code>GatewayCreateProducerRedshift</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerRedshift} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerRedshift} The populated <code>GatewayCreateProducerRedshift</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerRedshift();

            if (data.hasOwnProperty('creation-statements')) {
                obj['creation-statements'] = ApiClient.convertToType(data['creation-statements'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
            if (data.hasOwnProperty('ssl')) {
                obj['ssl'] = ApiClient.convertToType(data['ssl'], 'Boolean');
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
GatewayCreateProducerRedshift.prototype['creation-statements'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
GatewayCreateProducerRedshift.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayCreateProducerRedshift.prototype['json'] = false;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerRedshift.prototype['name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key
 */
GatewayCreateProducerRedshift.prototype['producer-encryption-key'] = undefined;

/**
 * Redshift DB Name
 * @member {String} redshift-db-name
 */
GatewayCreateProducerRedshift.prototype['redshift-db-name'] = undefined;

/**
 * Redshift Host
 * @member {String} redshift-host
 * @default '127.0.0.1'
 */
GatewayCreateProducerRedshift.prototype['redshift-host'] = '127.0.0.1';

/**
 * Redshift Password
 * @member {String} redshift-password
 */
GatewayCreateProducerRedshift.prototype['redshift-password'] = undefined;

/**
 * Redshift Port
 * @member {String} redshift-port
 * @default '5439'
 */
GatewayCreateProducerRedshift.prototype['redshift-port'] = '5439';

/**
 * Redshift Username
 * @member {String} redshift-username
 */
GatewayCreateProducerRedshift.prototype['redshift-username'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
GatewayCreateProducerRedshift.prototype['secure-access-enable'] = undefined;

/**
 * Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts)
 * @member {Array.<String>} secure-access-host
 */
GatewayCreateProducerRedshift.prototype['secure-access-host'] = undefined;

/**
 * Enable/Disable SSL [true/false]
 * @member {Boolean} ssl
 * @default false
 */
GatewayCreateProducerRedshift.prototype['ssl'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayCreateProducerRedshift.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerRedshift.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerRedshift.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerRedshift.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerRedshift.prototype['user-ttl'] = '60m';






export default GatewayCreateProducerRedshift;

