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
import WindowsServiceAttributes from './WindowsServiceAttributes';

/**
 * The WindowsService model module.
 * @module model/WindowsService
 * @version 4.3.0
 */
class WindowsService {
    /**
     * Constructs a new <code>WindowsService</code>.
     * @alias module:model/WindowsService
     */
    constructor() { 
        
        WindowsService.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WindowsService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WindowsService} obj Optional instance to populate.
     * @return {module:model/WindowsService} The populated <code>WindowsService</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WindowsService();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = WindowsServiceAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/WindowsServiceAttributes} attributes
 */
WindowsService.prototype['attributes'] = undefined;

/**
 * @member {String} host
 */
WindowsService.prototype['host'] = undefined;

/**
 * @member {String} name
 */
WindowsService.prototype['name'] = undefined;






export default WindowsService;

