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
 * The DynamicSecretCreateChef model module.
 * @module model/DynamicSecretCreateChef
 * @version 4.0.0
 */
class DynamicSecretCreateChef {
    /**
     * Constructs a new <code>DynamicSecretCreateChef</code>.
     * dynamicSecretCreateChef is a command that creates chef dynamic secret
     * @alias module:model/DynamicSecretCreateChef
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretCreateChef.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>DynamicSecretCreateChef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretCreateChef} obj Optional instance to populate.
     * @return {module:model/DynamicSecretCreateChef} The populated <code>DynamicSecretCreateChef</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretCreateChef();

            if (data.hasOwnProperty('chef-orgs')) {
                obj['chef-orgs'] = ApiClient.convertToType(data['chef-orgs'], 'String');
            }
            if (data.hasOwnProperty('chef-server-key')) {
                obj['chef-server-key'] = ApiClient.convertToType(data['chef-server-key'], 'String');
            }
            if (data.hasOwnProperty('chef-server-url')) {
                obj['chef-server-url'] = ApiClient.convertToType(data['chef-server-url'], 'String');
            }
            if (data.hasOwnProperty('chef-server-username')) {
                obj['chef-server-username'] = ApiClient.convertToType(data['chef-server-username'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('skip-ssl')) {
                obj['skip-ssl'] = ApiClient.convertToType(data['skip-ssl'], 'Boolean');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Organizations
 * @member {String} chef-orgs
 */
DynamicSecretCreateChef.prototype['chef-orgs'] = undefined;

/**
 * Server key
 * @member {String} chef-server-key
 */
DynamicSecretCreateChef.prototype['chef-server-key'] = undefined;

/**
 * Server URL
 * @member {String} chef-server-url
 */
DynamicSecretCreateChef.prototype['chef-server-url'] = undefined;

/**
 * Server username
 * @member {String} chef-server-username
 */
DynamicSecretCreateChef.prototype['chef-server-username'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
DynamicSecretCreateChef.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretCreateChef.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretCreateChef.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretCreateChef.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
DynamicSecretCreateChef.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretCreateChef.prototype['producer-encryption-key-name'] = undefined;

/**
 * Skip SSL
 * @member {Boolean} skip-ssl
 * @default true
 */
DynamicSecretCreateChef.prototype['skip-ssl'] = true;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretCreateChef.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretCreateChef.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretCreateChef.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretCreateChef.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretCreateChef.prototype['user-ttl'] = '60m';






export default DynamicSecretCreateChef;

