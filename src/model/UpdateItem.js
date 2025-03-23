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
 * The UpdateItem model module.
 * @module model/UpdateItem
 * @version 5.0.1
 */
class UpdateItem {
    /**
     * Constructs a new <code>UpdateItem</code>.
     * @alias module:model/UpdateItem
     * @param name {String} Current item name
     */
    constructor(name) { 
        
        UpdateItem.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['accessibility'] = 'regular';
        obj['description'] = 'default_metadata';
        obj['json'] = false;
        obj['name'] = name;
        obj['new-metadata'] = 'default_metadata';
        obj['rotate-after-disconnect'] = 'false';
        obj['secure-access-web-browsing'] = false;
        obj['secure-access-web-proxy'] = false;
    }

    /**
     * Constructs a <code>UpdateItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateItem} obj Optional instance to populate.
     * @return {module:model/UpdateItem} The populated <code>UpdateItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateItem();

            if (data.hasOwnProperty('ProviderType')) {
                obj['ProviderType'] = ApiClient.convertToType(data['ProviderType'], 'String');
            }
            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('add-tag')) {
                obj['add-tag'] = ApiClient.convertToType(data['add-tag'], ['String']);
            }
            if (data.hasOwnProperty('cert-file-data')) {
                obj['cert-file-data'] = ApiClient.convertToType(data['cert-file-data'], 'String');
            }
            if (data.hasOwnProperty('certificate-format')) {
                obj['certificate-format'] = ApiClient.convertToType(data['certificate-format'], 'String');
            }
            if (data.hasOwnProperty('change-event')) {
                obj['change-event'] = ApiClient.convertToType(data['change-event'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('expiration-event-in')) {
                obj['expiration-event-in'] = ApiClient.convertToType(data['expiration-event-in'], ['String']);
            }
            if (data.hasOwnProperty('host-provider')) {
                obj['host-provider'] = ApiClient.convertToType(data['host-provider'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-metadata')) {
                obj['new-metadata'] = ApiClient.convertToType(data['new-metadata'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('rm-tag')) {
                obj['rm-tag'] = ApiClient.convertToType(data['rm-tag'], ['String']);
            }
            if (data.hasOwnProperty('rotate-after-disconnect')) {
                obj['rotate-after-disconnect'] = ApiClient.convertToType(data['rotate-after-disconnect'], 'String');
            }
            if (data.hasOwnProperty('secure-access-add-host')) {
                obj['secure-access-add-host'] = ApiClient.convertToType(data['secure-access-add-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-allow-external-user')) {
                obj['secure-access-allow-external-user'] = ApiClient.convertToType(data['secure-access-allow-external-user'], 'String');
            }
            if (data.hasOwnProperty('secure-access-allow-port-forwading')) {
                obj['secure-access-allow-port-forwading'] = ApiClient.convertToType(data['secure-access-allow-port-forwading'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-api')) {
                obj['secure-access-api'] = ApiClient.convertToType(data['secure-access-api'], 'String');
            }
            if (data.hasOwnProperty('secure-access-aws-account-id')) {
                obj['secure-access-aws-account-id'] = ApiClient.convertToType(data['secure-access-aws-account-id'], 'String');
            }
            if (data.hasOwnProperty('secure-access-aws-native-cli')) {
                obj['secure-access-aws-native-cli'] = ApiClient.convertToType(data['secure-access-aws-native-cli'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-aws-region')) {
                obj['secure-access-aws-region'] = ApiClient.convertToType(data['secure-access-aws-region'], 'String');
            }
            if (data.hasOwnProperty('secure-access-bastion-api')) {
                obj['secure-access-bastion-api'] = ApiClient.convertToType(data['secure-access-bastion-api'], 'String');
            }
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-bastion-ssh')) {
                obj['secure-access-bastion-ssh'] = ApiClient.convertToType(data['secure-access-bastion-ssh'], 'String');
            }
            if (data.hasOwnProperty('secure-access-certificate-issuer')) {
                obj['secure-access-certificate-issuer'] = ApiClient.convertToType(data['secure-access-certificate-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-cluster-endpoint')) {
                obj['secure-access-cluster-endpoint'] = ApiClient.convertToType(data['secure-access-cluster-endpoint'], 'String');
            }
            if (data.hasOwnProperty('secure-access-dashboard-url')) {
                obj['secure-access-dashboard-url'] = ApiClient.convertToType(data['secure-access-dashboard-url'], 'String');
            }
            if (data.hasOwnProperty('secure-access-db-name')) {
                obj['secure-access-db-name'] = ApiClient.convertToType(data['secure-access-db-name'], 'String');
            }
            if (data.hasOwnProperty('secure-access-db-schema')) {
                obj['secure-access-db-schema'] = ApiClient.convertToType(data['secure-access-db-schema'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-gateway')) {
                obj['secure-access-gateway'] = ApiClient.convertToType(data['secure-access-gateway'], 'String');
            }
            if (data.hasOwnProperty('secure-access-host')) {
                obj['secure-access-host'] = ApiClient.convertToType(data['secure-access-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-rd-gateway-server')) {
                obj['secure-access-rd-gateway-server'] = ApiClient.convertToType(data['secure-access-rd-gateway-server'], 'String');
            }
            if (data.hasOwnProperty('secure-access-rdp-domain')) {
                obj['secure-access-rdp-domain'] = ApiClient.convertToType(data['secure-access-rdp-domain'], 'String');
            }
            if (data.hasOwnProperty('secure-access-rdp-user')) {
                obj['secure-access-rdp-user'] = ApiClient.convertToType(data['secure-access-rdp-user'], 'String');
            }
            if (data.hasOwnProperty('secure-access-rm-host')) {
                obj['secure-access-rm-host'] = ApiClient.convertToType(data['secure-access-rm-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-ssh')) {
                obj['secure-access-ssh'] = ApiClient.convertToType(data['secure-access-ssh'], 'String');
            }
            if (data.hasOwnProperty('secure-access-ssh-creds')) {
                obj['secure-access-ssh-creds'] = ApiClient.convertToType(data['secure-access-ssh-creds'], 'String');
            }
            if (data.hasOwnProperty('secure-access-ssh-creds-user')) {
                obj['secure-access-ssh-creds-user'] = ApiClient.convertToType(data['secure-access-ssh-creds-user'], 'String');
            }
            if (data.hasOwnProperty('secure-access-url')) {
                obj['secure-access-url'] = ApiClient.convertToType(data['secure-access-url'], 'String');
            }
            if (data.hasOwnProperty('secure-access-use-internal-bastion')) {
                obj['secure-access-use-internal-bastion'] = ApiClient.convertToType(data['secure-access-use-internal-bastion'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-use-internal-ssh-access')) {
                obj['secure-access-use-internal-ssh-access'] = ApiClient.convertToType(data['secure-access-use-internal-ssh-access'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
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

    /**
     * Validates the JSON data with respect to <code>UpdateItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateItem.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ProviderType'] && !(typeof data['ProviderType'] === 'string' || data['ProviderType'] instanceof String)) {
            throw new Error("Expected the field `ProviderType` to be a primitive type in the JSON string but got " + data['ProviderType']);
        }
        // ensure the json data is a string
        if (data['accessibility'] && !(typeof data['accessibility'] === 'string' || data['accessibility'] instanceof String)) {
            throw new Error("Expected the field `accessibility` to be a primitive type in the JSON string but got " + data['accessibility']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['add-tag'])) {
            throw new Error("Expected the field `add-tag` to be an array in the JSON data but got " + data['add-tag']);
        }
        // ensure the json data is a string
        if (data['cert-file-data'] && !(typeof data['cert-file-data'] === 'string' || data['cert-file-data'] instanceof String)) {
            throw new Error("Expected the field `cert-file-data` to be a primitive type in the JSON string but got " + data['cert-file-data']);
        }
        // ensure the json data is a string
        if (data['certificate-format'] && !(typeof data['certificate-format'] === 'string' || data['certificate-format'] instanceof String)) {
            throw new Error("Expected the field `certificate-format` to be a primitive type in the JSON string but got " + data['certificate-format']);
        }
        // ensure the json data is a string
        if (data['change-event'] && !(typeof data['change-event'] === 'string' || data['change-event'] instanceof String)) {
            throw new Error("Expected the field `change-event` to be a primitive type in the JSON string but got " + data['change-event']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['expiration-event-in'])) {
            throw new Error("Expected the field `expiration-event-in` to be an array in the JSON data but got " + data['expiration-event-in']);
        }
        // ensure the json data is a string
        if (data['host-provider'] && !(typeof data['host-provider'] === 'string' || data['host-provider'] instanceof String)) {
            throw new Error("Expected the field `host-provider` to be a primitive type in the JSON string but got " + data['host-provider']);
        }
        // ensure the json data is a string
        if (data['max-versions'] && !(typeof data['max-versions'] === 'string' || data['max-versions'] instanceof String)) {
            throw new Error("Expected the field `max-versions` to be a primitive type in the JSON string but got " + data['max-versions']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-metadata'] && !(typeof data['new-metadata'] === 'string' || data['new-metadata'] instanceof String)) {
            throw new Error("Expected the field `new-metadata` to be a primitive type in the JSON string but got " + data['new-metadata']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['rm-tag'])) {
            throw new Error("Expected the field `rm-tag` to be an array in the JSON data but got " + data['rm-tag']);
        }
        // ensure the json data is a string
        if (data['rotate-after-disconnect'] && !(typeof data['rotate-after-disconnect'] === 'string' || data['rotate-after-disconnect'] instanceof String)) {
            throw new Error("Expected the field `rotate-after-disconnect` to be a primitive type in the JSON string but got " + data['rotate-after-disconnect']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['secure-access-add-host'])) {
            throw new Error("Expected the field `secure-access-add-host` to be an array in the JSON data but got " + data['secure-access-add-host']);
        }
        // ensure the json data is a string
        if (data['secure-access-allow-external-user'] && !(typeof data['secure-access-allow-external-user'] === 'string' || data['secure-access-allow-external-user'] instanceof String)) {
            throw new Error("Expected the field `secure-access-allow-external-user` to be a primitive type in the JSON string but got " + data['secure-access-allow-external-user']);
        }
        // ensure the json data is a string
        if (data['secure-access-api'] && !(typeof data['secure-access-api'] === 'string' || data['secure-access-api'] instanceof String)) {
            throw new Error("Expected the field `secure-access-api` to be a primitive type in the JSON string but got " + data['secure-access-api']);
        }
        // ensure the json data is a string
        if (data['secure-access-aws-account-id'] && !(typeof data['secure-access-aws-account-id'] === 'string' || data['secure-access-aws-account-id'] instanceof String)) {
            throw new Error("Expected the field `secure-access-aws-account-id` to be a primitive type in the JSON string but got " + data['secure-access-aws-account-id']);
        }
        // ensure the json data is a string
        if (data['secure-access-aws-region'] && !(typeof data['secure-access-aws-region'] === 'string' || data['secure-access-aws-region'] instanceof String)) {
            throw new Error("Expected the field `secure-access-aws-region` to be a primitive type in the JSON string but got " + data['secure-access-aws-region']);
        }
        // ensure the json data is a string
        if (data['secure-access-bastion-api'] && !(typeof data['secure-access-bastion-api'] === 'string' || data['secure-access-bastion-api'] instanceof String)) {
            throw new Error("Expected the field `secure-access-bastion-api` to be a primitive type in the JSON string but got " + data['secure-access-bastion-api']);
        }
        // ensure the json data is a string
        if (data['secure-access-bastion-issuer'] && !(typeof data['secure-access-bastion-issuer'] === 'string' || data['secure-access-bastion-issuer'] instanceof String)) {
            throw new Error("Expected the field `secure-access-bastion-issuer` to be a primitive type in the JSON string but got " + data['secure-access-bastion-issuer']);
        }
        // ensure the json data is a string
        if (data['secure-access-bastion-ssh'] && !(typeof data['secure-access-bastion-ssh'] === 'string' || data['secure-access-bastion-ssh'] instanceof String)) {
            throw new Error("Expected the field `secure-access-bastion-ssh` to be a primitive type in the JSON string but got " + data['secure-access-bastion-ssh']);
        }
        // ensure the json data is a string
        if (data['secure-access-certificate-issuer'] && !(typeof data['secure-access-certificate-issuer'] === 'string' || data['secure-access-certificate-issuer'] instanceof String)) {
            throw new Error("Expected the field `secure-access-certificate-issuer` to be a primitive type in the JSON string but got " + data['secure-access-certificate-issuer']);
        }
        // ensure the json data is a string
        if (data['secure-access-cluster-endpoint'] && !(typeof data['secure-access-cluster-endpoint'] === 'string' || data['secure-access-cluster-endpoint'] instanceof String)) {
            throw new Error("Expected the field `secure-access-cluster-endpoint` to be a primitive type in the JSON string but got " + data['secure-access-cluster-endpoint']);
        }
        // ensure the json data is a string
        if (data['secure-access-dashboard-url'] && !(typeof data['secure-access-dashboard-url'] === 'string' || data['secure-access-dashboard-url'] instanceof String)) {
            throw new Error("Expected the field `secure-access-dashboard-url` to be a primitive type in the JSON string but got " + data['secure-access-dashboard-url']);
        }
        // ensure the json data is a string
        if (data['secure-access-db-name'] && !(typeof data['secure-access-db-name'] === 'string' || data['secure-access-db-name'] instanceof String)) {
            throw new Error("Expected the field `secure-access-db-name` to be a primitive type in the JSON string but got " + data['secure-access-db-name']);
        }
        // ensure the json data is a string
        if (data['secure-access-db-schema'] && !(typeof data['secure-access-db-schema'] === 'string' || data['secure-access-db-schema'] instanceof String)) {
            throw new Error("Expected the field `secure-access-db-schema` to be a primitive type in the JSON string but got " + data['secure-access-db-schema']);
        }
        // ensure the json data is a string
        if (data['secure-access-enable'] && !(typeof data['secure-access-enable'] === 'string' || data['secure-access-enable'] instanceof String)) {
            throw new Error("Expected the field `secure-access-enable` to be a primitive type in the JSON string but got " + data['secure-access-enable']);
        }
        // ensure the json data is a string
        if (data['secure-access-gateway'] && !(typeof data['secure-access-gateway'] === 'string' || data['secure-access-gateway'] instanceof String)) {
            throw new Error("Expected the field `secure-access-gateway` to be a primitive type in the JSON string but got " + data['secure-access-gateway']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['secure-access-host'])) {
            throw new Error("Expected the field `secure-access-host` to be an array in the JSON data but got " + data['secure-access-host']);
        }
        // ensure the json data is a string
        if (data['secure-access-rd-gateway-server'] && !(typeof data['secure-access-rd-gateway-server'] === 'string' || data['secure-access-rd-gateway-server'] instanceof String)) {
            throw new Error("Expected the field `secure-access-rd-gateway-server` to be a primitive type in the JSON string but got " + data['secure-access-rd-gateway-server']);
        }
        // ensure the json data is a string
        if (data['secure-access-rdp-domain'] && !(typeof data['secure-access-rdp-domain'] === 'string' || data['secure-access-rdp-domain'] instanceof String)) {
            throw new Error("Expected the field `secure-access-rdp-domain` to be a primitive type in the JSON string but got " + data['secure-access-rdp-domain']);
        }
        // ensure the json data is a string
        if (data['secure-access-rdp-user'] && !(typeof data['secure-access-rdp-user'] === 'string' || data['secure-access-rdp-user'] instanceof String)) {
            throw new Error("Expected the field `secure-access-rdp-user` to be a primitive type in the JSON string but got " + data['secure-access-rdp-user']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['secure-access-rm-host'])) {
            throw new Error("Expected the field `secure-access-rm-host` to be an array in the JSON data but got " + data['secure-access-rm-host']);
        }
        // ensure the json data is a string
        if (data['secure-access-ssh'] && !(typeof data['secure-access-ssh'] === 'string' || data['secure-access-ssh'] instanceof String)) {
            throw new Error("Expected the field `secure-access-ssh` to be a primitive type in the JSON string but got " + data['secure-access-ssh']);
        }
        // ensure the json data is a string
        if (data['secure-access-ssh-creds'] && !(typeof data['secure-access-ssh-creds'] === 'string' || data['secure-access-ssh-creds'] instanceof String)) {
            throw new Error("Expected the field `secure-access-ssh-creds` to be a primitive type in the JSON string but got " + data['secure-access-ssh-creds']);
        }
        // ensure the json data is a string
        if (data['secure-access-ssh-creds-user'] && !(typeof data['secure-access-ssh-creds-user'] === 'string' || data['secure-access-ssh-creds-user'] instanceof String)) {
            throw new Error("Expected the field `secure-access-ssh-creds-user` to be a primitive type in the JSON string but got " + data['secure-access-ssh-creds-user']);
        }
        // ensure the json data is a string
        if (data['secure-access-url'] && !(typeof data['secure-access-url'] === 'string' || data['secure-access-url'] instanceof String)) {
            throw new Error("Expected the field `secure-access-url` to be a primitive type in the JSON string but got " + data['secure-access-url']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

UpdateItem.RequiredProperties = ["name"];

/**
 * @member {String} ProviderType
 */
UpdateItem.prototype['ProviderType'] = undefined;

/**
 * for personal password manager
 * @member {String} accessibility
 * @default 'regular'
 */
UpdateItem.prototype['accessibility'] = 'regular';

/**
 * List of the new tags that will be attached to this item
 * @member {Array.<String>} add-tag
 */
UpdateItem.prototype['add-tag'] = undefined;

/**
 * PEM Certificate in a Base64 format. Used for updating RSA keys' certificates.
 * @member {String} cert-file-data
 */
UpdateItem.prototype['cert-file-data'] = undefined;

/**
 * @member {String} certificate-format
 */
UpdateItem.prototype['certificate-format'] = undefined;

/**
 * Trigger an event when a secret value changed [true/false] (Relevant only for Static Secret)
 * @member {String} change-event
 */
UpdateItem.prototype['change-event'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
UpdateItem.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 * @default 'default_metadata'
 */
UpdateItem.prototype['description'] = 'default_metadata';

/**
 * How many days before the expiration of the certificate would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
UpdateItem.prototype['expiration-event-in'] = undefined;

/**
 * Host provider type [explicit/target], Default Host provider is explicit, Relevant only for Secure Remote Access of ssh cert issuer, ldap rotated secret and ldap dynamic secret
 * @member {String} host-provider
 */
UpdateItem.prototype['host-provider'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateItem.prototype['json'] = false;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
UpdateItem.prototype['max-versions'] = undefined;

/**
 * Current item name
 * @member {String} name
 */
UpdateItem.prototype['name'] = undefined;

/**
 * Deprecated - use description
 * @member {String} new-metadata
 * @default 'default_metadata'
 */
UpdateItem.prototype['new-metadata'] = 'default_metadata';

/**
 * New item name
 * @member {String} new-name
 */
UpdateItem.prototype['new-name'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
UpdateItem.prototype['rm-tag'] = undefined;

/**
 * Rotate the value of the secret after SRA session ends [true/false]
 * @member {String} rotate-after-disconnect
 * @default 'false'
 */
UpdateItem.prototype['rotate-after-disconnect'] = 'false';

/**
 * List of the new hosts that will be attached to SRA servers host
 * @member {Array.<String>} secure-access-add-host
 */
UpdateItem.prototype['secure-access-add-host'] = undefined;

/**
 * Allow providing external user for a domain users [true/false]
 * @member {String} secure-access-allow-external-user
 */
UpdateItem.prototype['secure-access-allow-external-user'] = undefined;

/**
 * Enable Port forwarding while using CLI access (relevant only for EKS/GKE/K8s Dynamic-Secret)
 * @member {Boolean} secure-access-allow-port-forwading
 */
UpdateItem.prototype['secure-access-allow-port-forwading'] = undefined;

/**
 * Bastion's SSH control API endpoint. E.g. https://my.sra-server:9900 (relevant only for ssh cert issuer)
 * @member {String} secure-access-api
 */
UpdateItem.prototype['secure-access-api'] = undefined;

/**
 * The AWS account id (relevant only for aws)
 * @member {String} secure-access-aws-account-id
 */
UpdateItem.prototype['secure-access-aws-account-id'] = undefined;

/**
 * The AWS native cli (relevant only for aws)
 * @member {Boolean} secure-access-aws-native-cli
 */
UpdateItem.prototype['secure-access-aws-native-cli'] = undefined;

/**
 * The AWS region (relevant only for aws)
 * @member {String} secure-access-aws-region
 */
UpdateItem.prototype['secure-access-aws-region'] = undefined;

/**
 * Deprecated. use secure-access-api
 * @member {String} secure-access-bastion-api
 */
UpdateItem.prototype['secure-access-bastion-api'] = undefined;

/**
 * Deprecated. use secure-access-certificate-issuer
 * @member {String} secure-access-bastion-issuer
 */
UpdateItem.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Deprecated. use secure-access-ssh
 * @member {String} secure-access-bastion-ssh
 */
UpdateItem.prototype['secure-access-bastion-ssh'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Secure Access
 * @member {String} secure-access-certificate-issuer
 */
UpdateItem.prototype['secure-access-certificate-issuer'] = undefined;

/**
 * The K8s cluster endpoint URL (relevant only for EKS/GKE/K8s Dynamic-Secret)
 * @member {String} secure-access-cluster-endpoint
 */
UpdateItem.prototype['secure-access-cluster-endpoint'] = undefined;

/**
 * The K8s dashboard url (relevant only for k8s)
 * @member {String} secure-access-dashboard-url
 */
UpdateItem.prototype['secure-access-dashboard-url'] = undefined;

/**
 * The DB name (relevant only for DB Dynamic-Secret)
 * @member {String} secure-access-db-name
 */
UpdateItem.prototype['secure-access-db-name'] = undefined;

/**
 * The DB schema (relevant only for DB Dynamic-Secret)
 * @member {String} secure-access-db-schema
 */
UpdateItem.prototype['secure-access-db-schema'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
UpdateItem.prototype['secure-access-enable'] = undefined;

/**
 * @member {String} secure-access-gateway
 */
UpdateItem.prototype['secure-access-gateway'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
UpdateItem.prototype['secure-access-host'] = undefined;

/**
 * RD Gateway server (relevant only for rdp)
 * @member {String} secure-access-rd-gateway-server
 */
UpdateItem.prototype['secure-access-rd-gateway-server'] = undefined;

/**
 * Required when the Dynamic Secret is used for a domain user (relevant only for RDP Dynamic-Secret)
 * @member {String} secure-access-rdp-domain
 */
UpdateItem.prototype['secure-access-rdp-domain'] = undefined;

/**
 * Override the RDP Domain username
 * @member {String} secure-access-rdp-user
 */
UpdateItem.prototype['secure-access-rdp-user'] = undefined;

/**
 * List of the existent hosts that will be removed from SRA servers host
 * @member {Array.<String>} secure-access-rm-host
 */
UpdateItem.prototype['secure-access-rm-host'] = undefined;

/**
 * Bastion's SSH server. E.g. my.sra-server:22 (relevant only for ssh cert issuer)
 * @member {String} secure-access-ssh
 */
UpdateItem.prototype['secure-access-ssh'] = undefined;

/**
 * Secret values contains SSH Credentials, either Private Key or Password [password/private-key] (relevant only for Static-Secret or Rotated-secret)
 * @member {String} secure-access-ssh-creds
 */
UpdateItem.prototype['secure-access-ssh-creds'] = undefined;

/**
 * SSH username to connect to target server, must be in 'Allowed Users' list (relevant only for ssh cert issuer)
 * @member {String} secure-access-ssh-creds-user
 */
UpdateItem.prototype['secure-access-ssh-creds-user'] = undefined;

/**
 * Destination URL to inject secrets
 * @member {String} secure-access-url
 */
UpdateItem.prototype['secure-access-url'] = undefined;

/**
 * Deprecated. Use secure-access-use-internal-ssh-access
 * @member {Boolean} secure-access-use-internal-bastion
 */
UpdateItem.prototype['secure-access-use-internal-bastion'] = undefined;

/**
 * Use internal SSH Access
 * @member {Boolean} secure-access-use-internal-ssh-access
 */
UpdateItem.prototype['secure-access-use-internal-ssh-access'] = undefined;

/**
 * Secure browser via Akeyless's Secure Remote Access (SRA)
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
UpdateItem.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless's Secure Remote Access (SRA)
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
UpdateItem.prototype['secure-access-web-proxy'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateItem.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateItem.prototype['uid-token'] = undefined;






export default UpdateItem;

