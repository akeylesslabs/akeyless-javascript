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
import AWSPayload from './AWSPayload';
import MigrationGeneral from './MigrationGeneral';

/**
 * The AWSSecretsMigration model module.
 * @module model/AWSSecretsMigration
 * @version 4.2.1
 */
class AWSSecretsMigration {
    /**
     * Constructs a new <code>AWSSecretsMigration</code>.
     * @alias module:model/AWSSecretsMigration
     */
    constructor() { 
        
        AWSSecretsMigration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AWSSecretsMigration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AWSSecretsMigration} obj Optional instance to populate.
     * @return {module:model/AWSSecretsMigration} The populated <code>AWSSecretsMigration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AWSSecretsMigration();

            if (data.hasOwnProperty('general')) {
                obj['general'] = MigrationGeneral.constructFromObject(data['general']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = AWSPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MigrationGeneral} general
 */
AWSSecretsMigration.prototype['general'] = undefined;

/**
 * @member {module:model/AWSPayload} payload
 */
AWSSecretsMigration.prototype['payload'] = undefined;






export default AWSSecretsMigration;

