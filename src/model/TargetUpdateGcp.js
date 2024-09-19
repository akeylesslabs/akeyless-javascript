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
 * The TargetUpdateGcp model module.
 * @module model/TargetUpdateGcp
 * @version 4.2.4
 */
class TargetUpdateGcp {
    /**
     * Constructs a new <code>TargetUpdateGcp</code>.
     * @alias module:model/TargetUpdateGcp
     * @param name {String} Target name
     */
    constructor(name) { 
        
        TargetUpdateGcp.initialize(this, name);
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
     * Constructs a <code>TargetUpdateGcp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetUpdateGcp} obj Optional instance to populate.
     * @return {module:model/TargetUpdateGcp} The populated <code>TargetUpdateGcp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetUpdateGcp();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('gcp-key')) {
                obj['gcp-key'] = ApiClient.convertToType(data['gcp-key'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
 * Description of the object
 * @member {String} description
 */
TargetUpdateGcp.prototype['description'] = undefined;

/**
 * Base64-encoded service account private key text
 * @member {String} gcp-key
 */
TargetUpdateGcp.prototype['gcp-key'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetUpdateGcp.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
TargetUpdateGcp.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetUpdateGcp.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetUpdateGcp.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetUpdateGcp.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
TargetUpdateGcp.prototype['new-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetUpdateGcp.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetUpdateGcp.prototype['uid-token'] = undefined;

/**
 * @member {Boolean} use-gw-cloud-identity
 */
TargetUpdateGcp.prototype['use-gw-cloud-identity'] = undefined;






export default TargetUpdateGcp;

