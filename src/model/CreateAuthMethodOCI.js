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
 * The CreateAuthMethodOCI model module.
 * @module model/CreateAuthMethodOCI
 * @version 4.0.0
 */
class CreateAuthMethodOCI {
    /**
     * Constructs a new <code>CreateAuthMethodOCI</code>.
     * createAuthMethodOCI is a command that Creates a new Oracle Auth Method that will be used in the account using OCI principle and groups.
     * @alias module:model/CreateAuthMethodOCI
     * @param groupOcid {Array.<String>} A list of required groups ocids
     * @param name {String} Auth Method name
     * @param tenantOcid {String} The Oracle Cloud tenant ID
     */
    constructor(groupOcid, name, tenantOcid) { 
        
        CreateAuthMethodOCI.initialize(this, groupOcid, name, tenantOcid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, groupOcid, name, tenantOcid) { 
        obj['group-ocid'] = groupOcid;
        obj['name'] = name;
        obj['tenant-ocid'] = tenantOcid;
    }

    /**
     * Constructs a <code>CreateAuthMethodOCI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodOCI} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodOCI} The populated <code>CreateAuthMethodOCI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodOCI();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('group-ocid')) {
                obj['group-ocid'] = ApiClient.convertToType(data['group-ocid'], ['String']);
            }
            if (data.hasOwnProperty('gw-bound-ips')) {
                obj['gw-bound-ips'] = ApiClient.convertToType(data['gw-bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('jwt-ttl')) {
                obj['jwt-ttl'] = ApiClient.convertToType(data['jwt-ttl'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('product-type')) {
                obj['product-type'] = ApiClient.convertToType(data['product-type'], ['String']);
            }
            if (data.hasOwnProperty('tenant-ocid')) {
                obj['tenant-ocid'] = ApiClient.convertToType(data['tenant-ocid'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
CreateAuthMethodOCI.prototype['access-expires'] = 0;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethodOCI.prototype['bound-ips'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
CreateAuthMethodOCI.prototype['description'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethodOCI.prototype['force-sub-claims'] = undefined;

/**
 * A list of required groups ocids
 * @member {Array.<String>} group-ocid
 */
CreateAuthMethodOCI.prototype['group-ocid'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
CreateAuthMethodOCI.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateAuthMethodOCI.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
CreateAuthMethodOCI.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodOCI.prototype['name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
CreateAuthMethodOCI.prototype['product-type'] = undefined;

/**
 * The Oracle Cloud tenant ID
 * @member {String} tenant-ocid
 */
CreateAuthMethodOCI.prototype['tenant-ocid'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAuthMethodOCI.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAuthMethodOCI.prototype['uid-token'] = undefined;






export default CreateAuthMethodOCI;

