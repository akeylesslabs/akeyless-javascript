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
import AcmeAccount from './AcmeAccount';

/**
 * The ListAcmeAccountsOutput model module.
 * @module model/ListAcmeAccountsOutput
 * @version 5.0.6
 */
class ListAcmeAccountsOutput {
    /**
     * Constructs a new <code>ListAcmeAccountsOutput</code>.
     * @alias module:model/ListAcmeAccountsOutput
     */
    constructor() { 
        
        ListAcmeAccountsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListAcmeAccountsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAcmeAccountsOutput} obj Optional instance to populate.
     * @return {module:model/ListAcmeAccountsOutput} The populated <code>ListAcmeAccountsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAcmeAccountsOutput();

            if (data.hasOwnProperty('accounts')) {
                obj['accounts'] = ApiClient.convertToType(data['accounts'], [AcmeAccount]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListAcmeAccountsOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListAcmeAccountsOutput</code>.
     */
    static validateJSON(data) {
        if (data['accounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['accounts'])) {
                throw new Error("Expected the field `accounts` to be an array in the JSON data but got " + data['accounts']);
            }
            // validate the optional field `accounts` (array)
            for (const item of data['accounts']) {
                AcmeAccount.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/AcmeAccount>} accounts
 */
ListAcmeAccountsOutput.prototype['accounts'] = undefined;






export default ListAcmeAccountsOutput;

