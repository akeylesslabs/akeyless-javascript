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
 * The DynamicSecretCreateK8s model module.
 * @module model/DynamicSecretCreateK8s
 * @version 3.6.3
 */
class DynamicSecretCreateK8s {
    /**
     * Constructs a new <code>DynamicSecretCreateK8s</code>.
     * dynamicSecretCreateK8s is a command that creates k8s dynamic secret
     * @alias module:model/DynamicSecretCreateK8s
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretCreateK8s.initialize(this, name);
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
     * Constructs a <code>DynamicSecretCreateK8s</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretCreateK8s} obj Optional instance to populate.
     * @return {module:model/DynamicSecretCreateK8s} The populated <code>DynamicSecretCreateK8s</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretCreateK8s();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('k8s-allowed-namespaces')) {
                obj['k8s-allowed-namespaces'] = ApiClient.convertToType(data['k8s-allowed-namespaces'], 'String');
            }
            if (data.hasOwnProperty('k8s-cluster-ca-cert')) {
                obj['k8s-cluster-ca-cert'] = ApiClient.convertToType(data['k8s-cluster-ca-cert'], 'String');
            }
            if (data.hasOwnProperty('k8s-cluster-endpoint')) {
                obj['k8s-cluster-endpoint'] = ApiClient.convertToType(data['k8s-cluster-endpoint'], 'String');
            }
            if (data.hasOwnProperty('k8s-cluster-token')) {
                obj['k8s-cluster-token'] = ApiClient.convertToType(data['k8s-cluster-token'], 'String');
            }
            if (data.hasOwnProperty('k8s-namespace')) {
                obj['k8s-namespace'] = ApiClient.convertToType(data['k8s-namespace'], 'String');
            }
            if (data.hasOwnProperty('k8s-predefined-role-name')) {
                obj['k8s-predefined-role-name'] = ApiClient.convertToType(data['k8s-predefined-role-name'], 'String');
            }
            if (data.hasOwnProperty('k8s-predefined-role-type')) {
                obj['k8s-predefined-role-type'] = ApiClient.convertToType(data['k8s-predefined-role-type'], 'String');
            }
            if (data.hasOwnProperty('k8s-rolebinding-yaml-def')) {
                obj['k8s-rolebinding-yaml-def'] = ApiClient.convertToType(data['k8s-rolebinding-yaml-def'], 'String');
            }
            if (data.hasOwnProperty('k8s-service-account')) {
                obj['k8s-service-account'] = ApiClient.convertToType(data['k8s-service-account'], 'String');
            }
            if (data.hasOwnProperty('k8s-service-account-type')) {
                obj['k8s-service-account-type'] = ApiClient.convertToType(data['k8s-service-account-type'], 'String');
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
            if (data.hasOwnProperty('secure-access-dashboard-url')) {
                obj['secure-access-dashboard-url'] = ApiClient.convertToType(data['secure-access-dashboard-url'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web')) {
                obj['secure-access-web'] = ApiClient.convertToType(data['secure-access-web'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
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
            if (data.hasOwnProperty('use-gw-service-account')) {
                obj['use-gw-service-account'] = ApiClient.convertToType(data['use-gw-service-account'], 'Boolean');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
DynamicSecretCreateK8s.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretCreateK8s.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretCreateK8s.prototype['json'] = false;

/**
 * Comma-separated list of allowed K8S namespaces for the generated ServiceAccount (relevant only for k8s-service-account-type=dynamic)
 * @member {String} k8s-allowed-namespaces
 */
DynamicSecretCreateK8s.prototype['k8s-allowed-namespaces'] = undefined;

/**
 * K8S cluster CA certificate
 * @member {String} k8s-cluster-ca-cert
 */
DynamicSecretCreateK8s.prototype['k8s-cluster-ca-cert'] = undefined;

/**
 * K8S cluster URL endpoint
 * @member {String} k8s-cluster-endpoint
 */
DynamicSecretCreateK8s.prototype['k8s-cluster-endpoint'] = undefined;

/**
 * K8S cluster Bearer token
 * @member {String} k8s-cluster-token
 */
DynamicSecretCreateK8s.prototype['k8s-cluster-token'] = undefined;

/**
 * K8S Namespace where the ServiceAccount exists.
 * @member {String} k8s-namespace
 */
DynamicSecretCreateK8s.prototype['k8s-namespace'] = undefined;

/**
 * The pre-existing Role or ClusterRole name to bind the generated ServiceAccount to (relevant only for k8s-service-account-type=dynamic)
 * @member {String} k8s-predefined-role-name
 */
DynamicSecretCreateK8s.prototype['k8s-predefined-role-name'] = undefined;

/**
 * Specifies the type of the pre-existing K8S role [Role, ClusterRole] (relevant only for k8s-service-account-type=dynamic)
 * @member {String} k8s-predefined-role-type
 */
DynamicSecretCreateK8s.prototype['k8s-predefined-role-type'] = undefined;

/**
 * Path to yaml file that contains definitions of K8S role and role binding (relevant only for k8s-service-account-type=dynamic)
 * @member {String} k8s-rolebinding-yaml-def
 */
DynamicSecretCreateK8s.prototype['k8s-rolebinding-yaml-def'] = undefined;

/**
 * K8S ServiceAccount to extract token from.
 * @member {String} k8s-service-account
 */
DynamicSecretCreateK8s.prototype['k8s-service-account'] = undefined;

/**
 * K8S ServiceAccount type [fixed, dynamic].
 * @member {String} k8s-service-account-type
 */
DynamicSecretCreateK8s.prototype['k8s-service-account-type'] = undefined;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretCreateK8s.prototype['name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretCreateK8s.prototype['producer-encryption-key-name'] = undefined;

/**
 * Enable Port forwarding while using CLI access
 * @member {Boolean} secure-access-allow-port-forwading
 */
DynamicSecretCreateK8s.prototype['secure-access-allow-port-forwading'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Bastion
 * @member {String} secure-access-bastion-issuer
 */
DynamicSecretCreateK8s.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * The K8s cluster endpoint URL
 * @member {String} secure-access-cluster-endpoint
 */
DynamicSecretCreateK8s.prototype['secure-access-cluster-endpoint'] = undefined;

/**
 * The K8s dashboard url
 * @member {String} secure-access-dashboard-url
 */
DynamicSecretCreateK8s.prototype['secure-access-dashboard-url'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
DynamicSecretCreateK8s.prototype['secure-access-enable'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
DynamicSecretCreateK8s.prototype['secure-access-web'] = false;

/**
 * Secure browser via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
DynamicSecretCreateK8s.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
DynamicSecretCreateK8s.prototype['secure-access-web-proxy'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretCreateK8s.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretCreateK8s.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretCreateK8s.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretCreateK8s.prototype['uid-token'] = undefined;

/**
 * Use the GW's service account
 * @member {Boolean} use-gw-service-account
 */
DynamicSecretCreateK8s.prototype['use-gw-service-account'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretCreateK8s.prototype['user-ttl'] = '60m';






export default DynamicSecretCreateK8s;

