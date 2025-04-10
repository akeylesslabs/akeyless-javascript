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
 * The ConfigHash model module.
 * @module model/ConfigHash
 * @version 5.0.2
 */
class ConfigHash {
    /**
     * Constructs a new <code>ConfigHash</code>.
     * @alias module:model/ConfigHash
     */
    constructor() { 
        
        ConfigHash.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfigHash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigHash} obj Optional instance to populate.
     * @return {module:model/ConfigHash} The populated <code>ConfigHash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigHash();

            if (data.hasOwnProperty('admins')) {
                obj['admins'] = ApiClient.convertToType(data['admins'], 'String');
            }
            if (data.hasOwnProperty('cache')) {
                obj['cache'] = ApiClient.convertToType(data['cache'], 'String');
            }
            if (data.hasOwnProperty('customer_fragements')) {
                obj['customer_fragements'] = ApiClient.convertToType(data['customer_fragements'], 'String');
            }
            if (data.hasOwnProperty('general')) {
                obj['general'] = ApiClient.convertToType(data['general'], 'String');
            }
            if (data.hasOwnProperty('k8s_auths')) {
                obj['k8s_auths'] = ApiClient.convertToType(data['k8s_auths'], 'String');
            }
            if (data.hasOwnProperty('kmip')) {
                obj['kmip'] = ApiClient.convertToType(data['kmip'], 'String');
            }
            if (data.hasOwnProperty('ldap')) {
                obj['ldap'] = ApiClient.convertToType(data['ldap'], 'String');
            }
            if (data.hasOwnProperty('leadership')) {
                obj['leadership'] = ApiClient.convertToType(data['leadership'], 'String');
            }
            if (data.hasOwnProperty('log_forwarding')) {
                obj['log_forwarding'] = ApiClient.convertToType(data['log_forwarding'], 'String');
            }
            if (data.hasOwnProperty('m_queue')) {
                obj['m_queue'] = ApiClient.convertToType(data['m_queue'], 'String');
            }
            if (data.hasOwnProperty('migration_status')) {
                obj['migration_status'] = ApiClient.convertToType(data['migration_status'], 'String');
            }
            if (data.hasOwnProperty('migrations')) {
                obj['migrations'] = ApiClient.convertToType(data['migrations'], 'String');
            }
            if (data.hasOwnProperty('producers')) {
                obj['producers'] = ApiClient.convertToType(data['producers'], Object);
            }
            if (data.hasOwnProperty('producers_status')) {
                obj['producers_status'] = ApiClient.convertToType(data['producers_status'], 'String');
            }
            if (data.hasOwnProperty('rotators')) {
                obj['rotators'] = ApiClient.convertToType(data['rotators'], Object);
            }
            if (data.hasOwnProperty('saml')) {
                obj['saml'] = ApiClient.convertToType(data['saml'], 'String');
            }
            if (data.hasOwnProperty('universal_identity')) {
                obj['universal_identity'] = ApiClient.convertToType(data['universal_identity'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConfigHash</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConfigHash</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['admins'] && !(typeof data['admins'] === 'string' || data['admins'] instanceof String)) {
            throw new Error("Expected the field `admins` to be a primitive type in the JSON string but got " + data['admins']);
        }
        // ensure the json data is a string
        if (data['cache'] && !(typeof data['cache'] === 'string' || data['cache'] instanceof String)) {
            throw new Error("Expected the field `cache` to be a primitive type in the JSON string but got " + data['cache']);
        }
        // ensure the json data is a string
        if (data['customer_fragements'] && !(typeof data['customer_fragements'] === 'string' || data['customer_fragements'] instanceof String)) {
            throw new Error("Expected the field `customer_fragements` to be a primitive type in the JSON string but got " + data['customer_fragements']);
        }
        // ensure the json data is a string
        if (data['general'] && !(typeof data['general'] === 'string' || data['general'] instanceof String)) {
            throw new Error("Expected the field `general` to be a primitive type in the JSON string but got " + data['general']);
        }
        // ensure the json data is a string
        if (data['k8s_auths'] && !(typeof data['k8s_auths'] === 'string' || data['k8s_auths'] instanceof String)) {
            throw new Error("Expected the field `k8s_auths` to be a primitive type in the JSON string but got " + data['k8s_auths']);
        }
        // ensure the json data is a string
        if (data['kmip'] && !(typeof data['kmip'] === 'string' || data['kmip'] instanceof String)) {
            throw new Error("Expected the field `kmip` to be a primitive type in the JSON string but got " + data['kmip']);
        }
        // ensure the json data is a string
        if (data['ldap'] && !(typeof data['ldap'] === 'string' || data['ldap'] instanceof String)) {
            throw new Error("Expected the field `ldap` to be a primitive type in the JSON string but got " + data['ldap']);
        }
        // ensure the json data is a string
        if (data['leadership'] && !(typeof data['leadership'] === 'string' || data['leadership'] instanceof String)) {
            throw new Error("Expected the field `leadership` to be a primitive type in the JSON string but got " + data['leadership']);
        }
        // ensure the json data is a string
        if (data['log_forwarding'] && !(typeof data['log_forwarding'] === 'string' || data['log_forwarding'] instanceof String)) {
            throw new Error("Expected the field `log_forwarding` to be a primitive type in the JSON string but got " + data['log_forwarding']);
        }
        // ensure the json data is a string
        if (data['m_queue'] && !(typeof data['m_queue'] === 'string' || data['m_queue'] instanceof String)) {
            throw new Error("Expected the field `m_queue` to be a primitive type in the JSON string but got " + data['m_queue']);
        }
        // ensure the json data is a string
        if (data['migration_status'] && !(typeof data['migration_status'] === 'string' || data['migration_status'] instanceof String)) {
            throw new Error("Expected the field `migration_status` to be a primitive type in the JSON string but got " + data['migration_status']);
        }
        // ensure the json data is a string
        if (data['migrations'] && !(typeof data['migrations'] === 'string' || data['migrations'] instanceof String)) {
            throw new Error("Expected the field `migrations` to be a primitive type in the JSON string but got " + data['migrations']);
        }
        // ensure the json data is a string
        if (data['producers_status'] && !(typeof data['producers_status'] === 'string' || data['producers_status'] instanceof String)) {
            throw new Error("Expected the field `producers_status` to be a primitive type in the JSON string but got " + data['producers_status']);
        }
        // ensure the json data is a string
        if (data['saml'] && !(typeof data['saml'] === 'string' || data['saml'] instanceof String)) {
            throw new Error("Expected the field `saml` to be a primitive type in the JSON string but got " + data['saml']);
        }
        // ensure the json data is a string
        if (data['universal_identity'] && !(typeof data['universal_identity'] === 'string' || data['universal_identity'] instanceof String)) {
            throw new Error("Expected the field `universal_identity` to be a primitive type in the JSON string but got " + data['universal_identity']);
        }

        return true;
    }


}



/**
 * @member {String} admins
 */
ConfigHash.prototype['admins'] = undefined;

/**
 * @member {String} cache
 */
ConfigHash.prototype['cache'] = undefined;

/**
 * @member {String} customer_fragements
 */
ConfigHash.prototype['customer_fragements'] = undefined;

/**
 * @member {String} general
 */
ConfigHash.prototype['general'] = undefined;

/**
 * @member {String} k8s_auths
 */
ConfigHash.prototype['k8s_auths'] = undefined;

/**
 * @member {String} kmip
 */
ConfigHash.prototype['kmip'] = undefined;

/**
 * @member {String} ldap
 */
ConfigHash.prototype['ldap'] = undefined;

/**
 * @member {String} leadership
 */
ConfigHash.prototype['leadership'] = undefined;

/**
 * @member {String} log_forwarding
 */
ConfigHash.prototype['log_forwarding'] = undefined;

/**
 * @member {String} m_queue
 */
ConfigHash.prototype['m_queue'] = undefined;

/**
 * @member {String} migration_status
 */
ConfigHash.prototype['migration_status'] = undefined;

/**
 * @member {String} migrations
 */
ConfigHash.prototype['migrations'] = undefined;

/**
 * @member {Object} producers
 */
ConfigHash.prototype['producers'] = undefined;

/**
 * @member {String} producers_status
 */
ConfigHash.prototype['producers_status'] = undefined;

/**
 * @member {Object} rotators
 */
ConfigHash.prototype['rotators'] = undefined;

/**
 * @member {String} saml
 */
ConfigHash.prototype['saml'] = undefined;

/**
 * @member {String} universal_identity
 */
ConfigHash.prototype['universal_identity'] = undefined;






export default ConfigHash;

