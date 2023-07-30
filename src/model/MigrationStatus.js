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
 * The MigrationStatus model module.
 * @module model/MigrationStatus
 * @version 3.3.16
 */
class MigrationStatus {
    /**
     * Constructs a new <code>MigrationStatus</code>.
     * @alias module:model/MigrationStatus
     */
    constructor() { 
        
        MigrationStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MigrationStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MigrationStatus} obj Optional instance to populate.
     * @return {module:model/MigrationStatus} The populated <code>MigrationStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigrationStatus();

            if (data.hasOwnProperty('last_messages')) {
                obj['last_messages'] = ApiClient.convertToType(data['last_messages'], {'String': 'String'});
            }
            if (data.hasOwnProperty('last_reports')) {
                obj['last_reports'] = ApiClient.convertToType(data['last_reports'], {'String': 'String'});
            }
            if (data.hasOwnProperty('last_statuses')) {
                obj['last_statuses'] = ApiClient.convertToType(data['last_statuses'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, String>} last_messages
 */
MigrationStatus.prototype['last_messages'] = undefined;

/**
 * @member {Object.<String, String>} last_reports
 */
MigrationStatus.prototype['last_reports'] = undefined;

/**
 * @member {Object.<String, String>} last_statuses
 */
MigrationStatus.prototype['last_statuses'] = undefined;






export default MigrationStatus;

