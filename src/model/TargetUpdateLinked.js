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
 * The TargetUpdateLinked model module.
 * @module model/TargetUpdateLinked
 * @version 4.2.1
 */
class TargetUpdateLinked {
    /**
     * Constructs a new <code>TargetUpdateLinked</code>.
     * @alias module:model/TargetUpdateLinked
     * @param name {String} Linked Target name
     */
    constructor(name) { 
        
        TargetUpdateLinked.initialize(this, name);
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
     * Constructs a <code>TargetUpdateLinked</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetUpdateLinked} obj Optional instance to populate.
     * @return {module:model/TargetUpdateLinked} The populated <code>TargetUpdateLinked</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetUpdateLinked();

            if (data.hasOwnProperty('add-hosts')) {
                obj['add-hosts'] = ApiClient.convertToType(data['add-hosts'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('hosts')) {
                obj['hosts'] = ApiClient.convertToType(data['hosts'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('parent-target-name')) {
                obj['parent-target-name'] = ApiClient.convertToType(data['parent-target-name'], 'String');
            }
            if (data.hasOwnProperty('rm-hosts')) {
                obj['rm-hosts'] = ApiClient.convertToType(data['rm-hosts'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A comma seperated list of new server hosts and server descriptions joined by semicolon ';' that will be added to the Linked Target hosts.
 * @member {String} add-hosts
 */
TargetUpdateLinked.prototype['add-hosts'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
TargetUpdateLinked.prototype['description'] = undefined;

/**
 * A comma seperated list of server hosts and server descriptions joined by semicolon ';' (i.e. 'server-dev.com;My Dev server,server-prod.com;My Prod server description')
 * @member {String} hosts
 */
TargetUpdateLinked.prototype['hosts'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetUpdateLinked.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
TargetUpdateLinked.prototype['keep-prev-version'] = undefined;

/**
 * Linked Target name
 * @member {String} name
 */
TargetUpdateLinked.prototype['name'] = undefined;

/**
 * New Linked Target name
 * @member {String} new-name
 */
TargetUpdateLinked.prototype['new-name'] = undefined;

/**
 * The parent Target name
 * @member {String} parent-target-name
 */
TargetUpdateLinked.prototype['parent-target-name'] = undefined;

/**
 * Comma separated list of existing hosts that will be removed from Linked Target hosts.
 * @member {String} rm-hosts
 */
TargetUpdateLinked.prototype['rm-hosts'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetUpdateLinked.prototype['token'] = undefined;

/**
 * Specifies the hosts type, relevant only when working without parent target
 * @member {String} type
 */
TargetUpdateLinked.prototype['type'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetUpdateLinked.prototype['uid-token'] = undefined;






export default TargetUpdateLinked;

