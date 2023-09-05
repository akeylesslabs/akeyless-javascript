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
 * The CreateAuthMethodK8S model module.
 * @module model/CreateAuthMethodK8S
 * @version 3.3.17
 */
class CreateAuthMethodK8S {
    /**
     * Constructs a new <code>CreateAuthMethodK8S</code>.
     * createAuthMethodK8S is a command that creates a new auth method that will be able to authenticate using K8S.
     * @alias module:model/CreateAuthMethodK8S
     * @param name {String} Auth Method name
     */
    constructor(name) { 
        
        CreateAuthMethodK8S.initialize(this, name);
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
     * Constructs a <code>CreateAuthMethodK8S</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodK8S} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodK8S} The populated <code>CreateAuthMethodK8S</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodK8S();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('bound-namespaces')) {
                obj['bound-namespaces'] = ApiClient.convertToType(data['bound-namespaces'], ['String']);
            }
            if (data.hasOwnProperty('bound-pod-names')) {
                obj['bound-pod-names'] = ApiClient.convertToType(data['bound-pod-names'], ['String']);
            }
            if (data.hasOwnProperty('bound-sa-names')) {
                obj['bound-sa-names'] = ApiClient.convertToType(data['bound-sa-names'], ['String']);
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('gen-key')) {
                obj['gen-key'] = ApiClient.convertToType(data['gen-key'], 'String');
            }
            if (data.hasOwnProperty('gw-bound-ips')) {
                obj['gw-bound-ips'] = ApiClient.convertToType(data['gw-bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('jwt-ttl')) {
                obj['jwt-ttl'] = ApiClient.convertToType(data['jwt-ttl'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('public-key')) {
                obj['public-key'] = ApiClient.convertToType(data['public-key'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
CreateAuthMethodK8S.prototype['access-expires'] = 0;

/**
 * The audience in the Kubernetes JWT that the access is restricted to
 * @member {String} audience
 */
CreateAuthMethodK8S.prototype['audience'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethodK8S.prototype['bound-ips'] = undefined;

/**
 * A list of namespaces that the access is restricted to
 * @member {Array.<String>} bound-namespaces
 */
CreateAuthMethodK8S.prototype['bound-namespaces'] = undefined;

/**
 * A list of pod names that the access is restricted to
 * @member {Array.<String>} bound-pod-names
 */
CreateAuthMethodK8S.prototype['bound-pod-names'] = undefined;

/**
 * A list of service account names that the access is restricted to
 * @member {Array.<String>} bound-sa-names
 */
CreateAuthMethodK8S.prototype['bound-sa-names'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethodK8S.prototype['force-sub-claims'] = undefined;

/**
 * Automatically generate key-pair for K8S configuration. If set to false, a public key needs to be provided [true/false]
 * @member {String} gen-key
 * @default 'true'
 */
CreateAuthMethodK8S.prototype['gen-key'] = 'true';

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
CreateAuthMethodK8S.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateAuthMethodK8S.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
CreateAuthMethodK8S.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodK8S.prototype['name'] = undefined;

/**
 * Base64-encoded or PEM formatted public key data for K8S authentication method is required [RSA2048]
 * @member {String} public-key
 */
CreateAuthMethodK8S.prototype['public-key'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAuthMethodK8S.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAuthMethodK8S.prototype['uid-token'] = undefined;






export default CreateAuthMethodK8S;

