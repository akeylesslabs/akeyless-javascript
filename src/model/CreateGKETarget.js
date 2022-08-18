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
 * The CreateGKETarget model module.
 * @module model/CreateGKETarget
 * @version 2.18.0
 */
class CreateGKETarget {
    /**
     * Constructs a new <code>CreateGKETarget</code>.
     * @alias module:model/CreateGKETarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        CreateGKETarget.initialize(this, name);
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
     * Constructs a <code>CreateGKETarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateGKETarget} obj Optional instance to populate.
     * @return {module:model/CreateGKETarget} The populated <code>CreateGKETarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateGKETarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('use-gw-cloud-identity')) {
                obj['use-gw-cloud-identity'] = ApiClient.convertToType(data['use-gw-cloud-identity'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Comment about the target
 * @member {String} comment
 */
CreateGKETarget.prototype['comment'] = undefined;

/**
 * GKE Service Account key file path
 * @member {String} gke-account-key
 */
CreateGKETarget.prototype['gke-account-key'] = undefined;

/**
 * GKE cluster CA certificate
 * @member {String} gke-cluster-cert
 */
CreateGKETarget.prototype['gke-cluster-cert'] = undefined;

/**
 * GKE cluster URL endpoint
 * @member {String} gke-cluster-endpoint
 */
CreateGKETarget.prototype['gke-cluster-endpoint'] = undefined;

/**
 * GKE cluster name
 * @member {String} gke-cluster-name
 */
CreateGKETarget.prototype['gke-cluster-name'] = undefined;

/**
 * GKE service account email
 * @member {String} gke-service-account-email
 */
CreateGKETarget.prototype['gke-service-account-email'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateGKETarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateGKETarget.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateGKETarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateGKETarget.prototype['uid-token'] = undefined;

/**
 * @member {Boolean} use-gw-cloud-identity
 */
CreateGKETarget.prototype['use-gw-cloud-identity'] = undefined;






export default CreateGKETarget;

