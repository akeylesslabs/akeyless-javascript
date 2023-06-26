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
import MigrationGeneral from './MigrationGeneral';
import MockPayload from './MockPayload';

/**
 * The MockMigration model module.
 * @module model/MockMigration
 * @version 3.3.10
 */
class MockMigration {
    /**
     * Constructs a new <code>MockMigration</code>.
     * @alias module:model/MockMigration
     */
    constructor() { 
        
        MockMigration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MockMigration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MockMigration} obj Optional instance to populate.
     * @return {module:model/MockMigration} The populated <code>MockMigration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MockMigration();

            if (data.hasOwnProperty('general')) {
                obj['general'] = MigrationGeneral.constructFromObject(data['general']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = MockPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MigrationGeneral} general
 */
MockMigration.prototype['general'] = undefined;

/**
 * @member {module:model/MockPayload} payload
 */
MockMigration.prototype['payload'] = undefined;






export default MockMigration;

