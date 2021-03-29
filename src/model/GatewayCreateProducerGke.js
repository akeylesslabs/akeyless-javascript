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
 * @version 2.0.14
 */
class GatewayCreateProducerGke {
    /**
     * Constructs a new <code>GatewayCreateProducerGke</code>.
     * gatewayCreateProducerGke is a command that creates gke producer
     * @alias module:model/GatewayCreateProducerGke
     * @param gkeClusterCert {String} GKE cluster CA certificate
     * @param gkeClusterEndpoint {String} GKE cluster URL endpoint
     * @param gkeClusterName {String} GKE cluster name
     * @param gkeServiceAccountEmail {String} GKE service account email
     * @param gkeServiceAccountKeyFilePath {String} GKE Service Account key faile path
     * @param name {String} Producer name
     */
    constructor(gkeClusterCert, gkeClusterEndpoint, gkeClusterName, gkeServiceAccountEmail, gkeServiceAccountKeyFilePath, name) { 
        
        GatewayCreateProducerGke.initialize(this, gkeClusterCert, gkeClusterEndpoint, gkeClusterName, gkeServiceAccountEmail, gkeServiceAccountKeyFilePath, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gkeClusterCert, gkeClusterEndpoint, gkeClusterName, gkeServiceAccountEmail, gkeServiceAccountKeyFilePath, name) { 
        obj['gke-cluster-cert'] = gkeClusterCert;
        obj['gke-cluster-endpoint'] = gkeClusterEndpoint;
        obj['gke-cluster-name'] = gkeClusterName;
        obj['gke-service-account-email'] = gkeServiceAccountEmail;
        obj['gke-service-account-key-file-path'] = gkeServiceAccountKeyFilePath;
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

            if (data.hasOwnProperty('gateway-url')) {
                obj['gateway-url'] = ApiClient.convertToType(data['gateway-url'], 'String');
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
            if (data.hasOwnProperty('gke-service-account-key-file-path')) {
                obj['gke-service-account-key-file-path'] = ApiClient.convertToType(data['gke-service-account-key-file-path'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
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
 * Gateway url
 * @member {String} gateway-url
 * @default 'http://localhost:8000'
 */
GatewayCreateProducerGke.prototype['gateway-url'] = 'http://localhost:8000';

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
 * GKE Service Account key faile path
 * @member {String} gke-service-account-key-file-path
 */
GatewayCreateProducerGke.prototype['gke-service-account-key-file-path'] = undefined;

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

