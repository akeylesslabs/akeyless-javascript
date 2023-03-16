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
import HashiPayload from './HashiPayload';
import MigrationGeneral from './MigrationGeneral';

/**
 * The HashiMigration model module.
 * @module model/HashiMigration
 * @version 3.3.0
 */
class HashiMigration {
    /**
     * Constructs a new <code>HashiMigration</code>.
     * @alias module:model/HashiMigration
     */
    constructor() { 
        
        HashiMigration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HashiMigration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HashiMigration} obj Optional instance to populate.
     * @return {module:model/HashiMigration} The populated <code>HashiMigration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HashiMigration();

            if (data.hasOwnProperty('general')) {
                obj['general'] = MigrationGeneral.constructFromObject(data['general']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = HashiPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MigrationGeneral} general
 */
HashiMigration.prototype['general'] = undefined;

/**
 * @member {module:model/HashiPayload} payload
 */
HashiMigration.prototype['payload'] = undefined;






export default HashiMigration;

