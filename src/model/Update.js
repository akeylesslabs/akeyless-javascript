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
 * The Update model module.
 * @module model/Update
 * @version 5.0.2
 */
class Update {
    /**
     * Constructs a new <code>Update</code>.
     * @alias module:model/Update
     */
    constructor() { 
        
        Update.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['json'] = false;
        obj['version'] = 'latest';
    }

    /**
     * Constructs a <code>Update</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Update} obj Optional instance to populate.
     * @return {module:model/Update} The populated <code>Update</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Update();

            if (data.hasOwnProperty('artifact-repository')) {
                obj['artifact-repository'] = ApiClient.convertToType(data['artifact-repository'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('show-changelog')) {
                obj['show-changelog'] = ApiClient.convertToType(data['show-changelog'], 'Boolean');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Update</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Update</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['artifact-repository'] && !(typeof data['artifact-repository'] === 'string' || data['artifact-repository'] instanceof String)) {
            throw new Error("Expected the field `artifact-repository` to be a primitive type in the JSON string but got " + data['artifact-repository']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }

        return true;
    }


}



/**
 * Alternative CLI repository url. e.g. https://artifacts.site2.akeyless.io
 * @member {String} artifact-repository
 */
Update.prototype['artifact-repository'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
Update.prototype['json'] = false;

/**
 * Show the changelog between the current version and the latest one and exit (update will not be performed)
 * @member {Boolean} show-changelog
 */
Update.prototype['show-changelog'] = undefined;

/**
 * The CLI version
 * @member {String} version
 * @default 'latest'
 */
Update.prototype['version'] = 'latest';






export default Update;

