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
import GCPPayload from './GCPPayload';
import MigrationGeneral from './MigrationGeneral';

/**
 * The GCPSecretsMigration model module.
 * @module model/GCPSecretsMigration
 * @version 4.1.0
 */
class GCPSecretsMigration {
    /**
     * Constructs a new <code>GCPSecretsMigration</code>.
     * @alias module:model/GCPSecretsMigration
     */
    constructor() { 
        
        GCPSecretsMigration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GCPSecretsMigration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GCPSecretsMigration} obj Optional instance to populate.
     * @return {module:model/GCPSecretsMigration} The populated <code>GCPSecretsMigration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GCPSecretsMigration();

            if (data.hasOwnProperty('general')) {
                obj['general'] = MigrationGeneral.constructFromObject(data['general']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = GCPPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MigrationGeneral} general
 */
GCPSecretsMigration.prototype['general'] = undefined;

/**
 * @member {module:model/GCPPayload} payload
 */
GCPSecretsMigration.prototype['payload'] = undefined;






export default GCPSecretsMigration;

