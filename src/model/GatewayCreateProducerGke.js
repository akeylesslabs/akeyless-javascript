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
 * The GatewayCreateProducerGke model module.
 * @module model/GatewayCreateProducerGke
 * @version 2.16.3
 */
class GatewayCreateProducerGke {
    /**
     * Constructs a new <code>GatewayCreateProducerGke</code>.
     * gatewayCreateProducerGke is a command that creates gke producer
     * @alias module:model/GatewayCreateProducerGke
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayCreateProducerGke.initialize(this, name);
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
     * Constructs a <code>GatewayCreateProducerGke</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerGke} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerGke} The populated <code>GatewayCreateProducerGke</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerGke();

            if (data.hasOwnProperty('gke-account-key')) {
                obj['gke-account-key'] = ApiClient.convertToType(data['gke-account-key'], 'String');
            }
            if (data.hasOwnProperty('gke-cluster-cert')) {
                obj['gke-cluster-cert'] = ApiClient.convertToType(data['gke-cluster-cert'], 'String');
            }
            if (data.hasOwnProperty('gke-cluster-endpoint')) {
                obj['gke-cluster-endpoint'] = ApiClient.convertToType(data['gke-cluster-endpoint'], 'String');
            }
            if (data.hasOwnProperty('gke-cluster-name')) {
                obj['gke-cluster-name'] = ApiClient.convertToType(data['gke-cluster-name'], 'String');
            }
            if (data.hasOwnProperty('gke-service-account-email')) {
                obj['gke-service-account-email'] = ApiClient.convertToType(data['gke-service-account-email'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('secure-access-allow-port-forwading')) {
                obj['secure-access-allow-port-forwading'] = ApiClient.convertToType(data['secure-access-allow-port-forwading'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-cluster-endpoint')) {
                obj['secure-access-cluster-endpoint'] = ApiClient.convertToType(data['secure-access-cluster-endpoint'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web')) {
                obj['secure-access-web'] = ApiClient.convertToType(data['secure-access-web'], 'Boolean');
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
 * GKE Service Account key file path
 * @member {String} gke-account-key
 */
GatewayCreateProducerGke.prototype['gke-account-key'] = undefined;

/**
 * GKE cluster CA certificate
 * @member {String} gke-cluster-cert
 */
GatewayCreateProducerGke.prototype['gke-cluster-cert'] = undefined;

/**
 * GKE cluster URL endpoint
 * @member {String} gke-cluster-endpoint
 */
GatewayCreateProducerGke.prototype['gke-cluster-endpoint'] = undefined;

/**
 * GKE cluster name
 * @member {String} gke-cluster-name
 */
GatewayCreateProducerGke.prototype['gke-cluster-name'] = undefined;

/**
 * GKE service account email
 * @member {String} gke-service-account-email
 */
GatewayCreateProducerGke.prototype['gke-service-account-email'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerGke.prototype['name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerGke.prototype['producer-encryption-key-name'] = undefined;

/**
 * @member {Boolean} secure-access-allow-port-forwading
 */
GatewayCreateProducerGke.prototype['secure-access-allow-port-forwading'] = undefined;

/**
 * @member {String} secure-access-bastion-issuer
 */
GatewayCreateProducerGke.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * @member {String} secure-access-cluster-endpoint
 */
GatewayCreateProducerGke.prototype['secure-access-cluster-endpoint'] = undefined;

/**
 * @member {String} secure-access-enable
 */
GatewayCreateProducerGke.prototype['secure-access-enable'] = undefined;

/**
 * @member {Boolean} secure-access-web
 */
GatewayCreateProducerGke.prototype['secure-access-web'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayCreateProducerGke.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerGke.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerGke.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerGke.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerGke.prototype['user-ttl'] = '60m';






export default GatewayCreateProducerGke;

