/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import K8SPayload from './K8SPayload';
import MigrationGeneral from './MigrationGeneral';

/**
 * The K8SMigration model module.
 * @module model/K8SMigration
 * @version 5.0.6
 */
class K8SMigration {
    /**
     * Constructs a new <code>K8SMigration</code>.
     * @alias module:model/K8SMigration
     */
    constructor() { 
        
        K8SMigration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>K8SMigration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/K8SMigration} obj Optional instance to populate.
     * @return {module:model/K8SMigration} The populated <code>K8SMigration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new K8SMigration();

            if (data.hasOwnProperty('general')) {
                obj['general'] = MigrationGeneral.constructFromObject(data['general']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = K8SPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>K8SMigration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>K8SMigration</code>.
     */
    static validateJSON(data) {
        // validate the optional field `general`
        if (data['general']) { // data not null
          MigrationGeneral.validateJSON(data['general']);
        }
        // validate the optional field `payload`
        if (data['payload']) { // data not null
          K8SPayload.validateJSON(data['payload']);
        }

        return true;
    }


}



/**
 * @member {module:model/MigrationGeneral} general
 */
K8SMigration.prototype['general'] = undefined;

/**
 * @member {module:model/K8SPayload} payload
 */
K8SMigration.prototype['payload'] = undefined;






export default K8SMigration;

