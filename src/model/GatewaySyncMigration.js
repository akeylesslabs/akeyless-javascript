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
 * The GatewaySyncMigration model module.
 * @module model/GatewaySyncMigration
 * @version 3.2.4
 */
class GatewaySyncMigration {
    /**
     * Constructs a new <code>GatewaySyncMigration</code>.
     * gatewaySyncMigration is a command that sync migration
     * @alias module:model/GatewaySyncMigration
     * @param name {String} Migration name
     */
    constructor(name) { 
        
        GatewaySyncMigration.initialize(this, name);
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
     * Constructs a <code>GatewaySyncMigration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewaySyncMigration} obj Optional instance to populate.
     * @return {module:model/GatewaySyncMigration} The populated <code>GatewaySyncMigration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewaySyncMigration();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('start-sync')) {
                obj['start-sync'] = ApiClient.convertToType(data['start-sync'], 'Boolean');
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
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewaySyncMigration.prototype['json'] = false;

/**
 * Migration name
 * @member {String} name
 */
GatewaySyncMigration.prototype['name'] = undefined;

/**
 * true, for starting synchronization, false for stopping
 * @member {Boolean} start-sync
 */
GatewaySyncMigration.prototype['start-sync'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewaySyncMigration.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewaySyncMigration.prototype['uid-token'] = undefined;






export default GatewaySyncMigration;

