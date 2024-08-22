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
 * @version 4.2.3
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

