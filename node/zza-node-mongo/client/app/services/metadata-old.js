/**
 * Fill metadataStore with metadata
 * DO NOT USE!
 * This is the old version whose metadata were semi-generated in tortured fashion
 * from an EDM. The current version is metadata.js which defines metadata by hand
 *
 * Hold on to this version for reference
 */
(function(angular) {
    'use strict';

    angular.module("app").factory( 'metadata', factory );
    function factory(breeze) {
        setNamingConvention();
        return {
            fillStore: fillStore
        };

        function setNamingConvention() {
            // Translate certain zza property names between MongoDb names and client names
            var convention = new breeze.NamingConvention({
                serverPropertyNameToClient: function(serverPropertyName) {
                    switch (serverPropertyName) {
                        case '_id':   return 'id';
                        case 'qty':   return 'quantity';
                        case 'optionId':   return 'productOptionId';
                        case 'sizeId':   return 'productSizeId';
                        case 'items':   return 'orderItems';
                        case 'options':   return 'orderItemOptions';
                        default: return serverPropertyName;
                    }
                },
                clientPropertyNameToServer: function(clientPropertyName) {
                    switch (clientPropertyName) {
                        case 'id':   return '_id';
                        case 'quantity':   return 'qty';
                        case 'productOptionId':   return 'optionId';
                        case 'productSizeId':   return 'sizeId';
                        case 'orderItems':   return 'items';
                        case 'orderItemOptions':   return 'options';
                        default: return clientPropertyName;
                    }
                }
            });
            convention.setAsDefault();
        }

        function fillStore(store){
            // **************************************
            // Todo: define metadata on client in Breeze metadata format
            // Right now it is in CSDL format as if generated by EntityFramework.
            // **************************************
            store.importMetadata(getMetadata());
        }

        function getMetadata(){
            // Stringify metadata before importing (Breeze CSDL-metadata-format 'bug')
            return JSON.stringify({ "structuralTypes":[
                {
                    "shortName":"Address",
                    "namespace":"Zza.Model",
                    "isComplexType":true,
                    "dataProperties":[
                        {
                            "name":"street",
                            "dataType":"String",
                            "maxLength":100,
                            "validators":[
                                {
                                    "maxLength":100,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"city",
                            "dataType":"String",
                            "maxLength":100,
                            "validators":[
                                {
                                    "maxLength":100,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"state",
                            "dataType":"String",
                            "maxLength":2,
                            "validators":[
                                {
                                    "maxLength":2,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"zip",
                            "dataType":"String",
                            "maxLength":10,
                            "validators":[
                                {
                                    "maxLength":10,
                                    "name":"maxLength"
                                }
                            ]
                        }
                    ]
                },
                {
                    "shortName":"Customer",
                    "namespace":"Zza.Model",
                    "autoGeneratedKeyType":"None",
                    "defaultResourceName":"Customers",
                    "dataProperties":[
                        {
                            "name":"id",
                            "dataType":"MongoObjectId",
                            "isNullable":false,
                            "defaultValue":"",
                            "isPartOfKey":true,
                            "validators":[
                                {
                                    "name":"required"
                                }
                            ]
                        },
                        {
                            "name":"firstName",
                            "dataType":"String",
                            "maxLength":50,
                            "validators":[
                                {
                                    "maxLength":50,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"lastName",
                            "dataType":"String",
                            "maxLength":50,
                            "validators":[
                                {
                                    "maxLength":50,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"phone",
                            "dataType":"String",
                            "maxLength":100,
                            "validators":[
                                {
                                    "maxLength":100,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"email",
                            "dataType":"String",
                            "maxLength":255,
                            "validators":[
                                {
                                    "maxLength":255,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"address",
                            "complexTypeName":"Address:#Zza.Model",
                            "isScalar":true
                        }
                    ],
                    "navigationProperties":[
                        {
                            "name":"orders",
                            "entityTypeName":"Order:#Zza.Model",
                            "isScalar":false,
                            "associationName":"Order_Customer",
                            "invForeignKeyNames":[
                                "id"
                            ]
                        }
                    ]
                },
                {
                    "shortName":"Order",
                    "namespace":"Zza.Model",
                    "autoGeneratedKeyType":"Identity",
                    "defaultResourceName":"Orders",
                    "dataProperties":[
                        {
                            "name":"id",
                            "dataType":"MongoObjectId",
                            "isNullable":false,
                            "defaultValue":"",
                            "isPartOfKey":true,
                            "validators":[
                                {
                                    "name":"required"
                                }
                            ]
                        },
                        {
                            "name":"customerId",
                            "dataType":"MongoObjectId",
                            "isNullable":false,
                            "defaultValue":"",
                            "validators":[
                                {
                                    "name":"required"
                                }
                            ]
                        },
                        {
                            "name":"name",
                            "dataType":"String",
                            "isNullable":false,
                            "maxLength":50,
                            "validators":[
                                {
                                    "maxLength":50,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"statusId",
                            "dataType":"Int32",
                            "isNullable":false,
                            "defaultValue":0,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"int32"
                                }
                            ]
                        },
                        {
                            "name":"status",
                            "dataType":"String",
                            "isNullable":false,
                            "maxLength":20,
                            "validators":[
                                {
                                    "maxLength":20,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"ordered",
                            "dataType":"DateTime",
                            "isNullable":false,
                            "defaultValue":"1900-01-01T08:00:00Z",
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"date"
                                }
                            ]
                        },
                        {
                            "name":"phone",
                            "dataType":"String",
                            "maxLength":100,
                            "validators":[
                                {
                                    "maxLength":100,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"delivered",
                            "dataType":"DateTime",
                            "isNullable":false,
                            "defaultValue":"1900-01-01T08:00:00Z",
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"date"
                                }
                            ]
                        },
                        {
                            "name":"deliveryCharge",
                            "dataType":"Decimal",
                            "isNullable":false,
                            "defaultValue":0,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"number"
                                }
                            ]
                        },
                        {
                            "name":"deliveryAddress",
                            "complexTypeName":"Address:#Zza.Model",
                            "isScalar":true
                        },
                        {
                            "name":"itemsTotal",
                            "dataType":"Decimal",
                            "isNullable":false,
                            "defaultValue":0,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"number"
                                }
                            ]
                        },
                        {
                            "name":"orderItems",
                            "complexTypeName":"OrderItem:#Zza.Model",
                            "isScalar":false
                        }
                    ],
                    "navigationProperties":[
                        {
                            "name":"customer",
                            "entityTypeName":"Customer:#Zza.Model",
                            "isScalar":true,
                            "associationName":"Order_Customer",
                            "foreignKeyNames":[
                                "customerId"
                            ]
                        },
                        {
                            "name":"orderStatus",
                            "entityTypeName":"OrderStatus:#Zza.Model",
                            "isScalar":true,
                            "associationName":"Order_Status",
                            "foreignKeyNames":[
                                "statusId"
                            ]
                        }
                    ]
                },
                {
                    "shortName":"OrderItem",
                    "namespace":"Zza.Model",
                    "isComplexType":true,
                    "dataProperties":[
                        {
                            "name":"productId",
                            "dataType":"Int32",
                            "isNullable":false,
                            "defaultValue":0,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"int32"
                                }
                            ]
                        },
                        {
                            "name":"name",
                            "dataType":"String",
                            "isNullable":false,
                            "maxLength":50,
                            "validators":[
                                {
                                    "maxLength":50,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"type",
                            "dataType":"String",
                            "isNullable":false,
                            "maxLength":50,
                            "validators":[
                                {
                                    "maxLength":10,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"productSizeId",
                            "dataType":"Int32",
                            "isNullable":false,
                            "defaultValue":0,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"int32"
                                }
                            ]
                        },
                        {
                            "name":"size",
                            "dataType":"String",
                            "isNullable":false,
                            "maxLength":50,
                            "validators":[
                                {
                                    "maxLength":50,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"quantity",
                            "dataType":"Int32",
                            "isNullable":false,
                            "defaultValue":0,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"int32"
                                }
                            ]
                        },
                        {
                            "name":"unitPrice",
                            "dataType":"Decimal",
                            "isNullable":false,
                            "defaultValue":0,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"number"
                                }
                            ]
                        },
                        {
                            "name":"totalPrice",
                            "dataType":"Decimal",
                            "isNullable":false,
                            "defaultValue":0,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"number"
                                }
                            ]
                        },
                        {
                            "name":"instructions",
                            "dataType":"String",
                            "maxLength":255,
                            "validators":[
                                {
                                    "maxLength":255,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"orderItemOptions",
                            "complexTypeName":"OrderItemOption:#Zza.Model",
                            "isScalar":false
                        }
                    ]
                },
                {
                    "shortName":"OrderItemOption",
                    "namespace":"Zza.Model",
                    "isComplexType":true,
                    "dataProperties":[
                        {
                            "name":"productOptionId",
                            "dataType":"Int32",
                            "isNullable":false,
                            "defaultValue":0,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"int32"
                                }
                            ]
                        },
                        {
                            "name":"name",
                            "dataType":"String",
                            "isNullable":false,
                            "maxLength":50,
                            "validators":[
                                {
                                    "maxLength":50,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"quantity",
                            "dataType":"Int32",
                            "isNullable":false,
                            "defaultValue":0,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"int32"
                                }
                            ]
                        },
                        {
                            "name":"price",
                            "dataType":"Decimal",
                            "isNullable":false,
                            "defaultValue":0,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"number"
                                }
                            ]
                        }
                    ]
                },
                {
                    "shortName":"OrderStatus",
                    "namespace":"Zza.Model",
                    "autoGeneratedKeyType":"None",
                    "defaultResourceName":"OrderStatuses",
                    "dataProperties":[
                        {
                            "name":"id",
                            "dataType":"Int32",
                            "isNullable":false,
                            "defaultValue":0,
                            "isPartOfKey":true,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"int32"
                                }
                            ]
                        },
                        {
                            "name":"name",
                            "dataType":"String",
                            "isNullable":false,
                            "defaultValue":"",
                            "maxLength":50,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "maxLength":50,
                                    "name":"maxLength"
                                }
                            ]
                        }
                    ]
                },
                {
                    "shortName":"Product",
                    "namespace":"Zza.Model",
                    "autoGeneratedKeyType":"None",
                    "defaultResourceName":"Products",
                    "dataProperties":[
                        {
                            "name":"id",
                            "dataType":"Int32",
                            "isNullable":false,
                            "defaultValue":0,
                            "isPartOfKey":true,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"int32"
                                }
                            ]
                        },
                        {
                            "name":"type",
                            "dataType":"String",
                            "isNullable":false,
                            "defaultValue":"",
                            "maxLength":20,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "maxLength":20,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"name",
                            "dataType":"String",
                            "isNullable":false,
                            "defaultValue":"",
                            "maxLength":50,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "maxLength":50,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"description",
                            "dataType":"String",
                            "isNullable":false,
                            "defaultValue":"",
                            "maxLength":255,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "maxLength":255,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"image",
                            "dataType":"String",
                            "maxLength":50,
                            "validators":[
                                {
                                    "maxLength":50,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"hasOptions",
                            "dataType":"Boolean",
                            "isNullable":false,
                            "defaultValue":false,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"bool"
                                }
                            ]
                        },
                        {
                            "name":"isPremium",
                            "dataType":"Boolean",
                            "isNullable":false,
                            "defaultValue":false,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"bool"
                                }
                            ]
                        },
                        {
                            "name":"isVegetarian",
                            "dataType":"Boolean",
                            "validators":[
                                {
                                    "name":"bool"
                                }
                            ]
                        },
                        {
                            "name":"withTomatoSauce",
                            "dataType":"Boolean",
                            "validators":[
                                {
                                    "name":"bool"
                                }
                            ]
                        },
                        {
                            "name":"sizeIds",
                            "dataType":"Int32",
                            "isScalar":false
                        }
                    ]
                },
                {
                    "shortName":"ProductOption",
                    "namespace":"Zza.Model",
                    "autoGeneratedKeyType":"None",
                    "defaultResourceName":"ProductOptions",
                    "dataProperties":[
                        {
                            "name":"id",
                            "dataType":"Int32",
                            "isNullable":false,
                            "defaultValue":0,
                            "isPartOfKey":true,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"int32"
                                }
                            ]
                        },
                        {
                            "name":"type",
                            "dataType":"String",
                            "isNullable":false,
                            "defaultValue":"",
                            "maxLength":20,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "maxLength":20,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"name",
                            "dataType":"String",
                            "isNullable":false,
                            "defaultValue":"",
                            "maxLength":50,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "maxLength":50,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"factor",
                            "dataType":"Int32",
                            "isNullable":false,
                            "defaultValue":0,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"int32"
                                }
                            ]
                        },
                        {
                            "name":"productTypes",
                            "dataType":"String",
                            "isScalar":false
                        }
                    ]
                },
                {
                    "shortName":"ProductSize",
                    "namespace":"Zza.Model",
                    "autoGeneratedKeyType":"None",
                    "defaultResourceName":"ProductSizes",
                    "dataProperties":[
                        {
                            "name":"id",
                            "dataType":"Int32",
                            "isNullable":false,
                            "defaultValue":0,
                            "isPartOfKey":true,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"int32"
                                }
                            ]
                        },
                        {
                            "name":"type",
                            "dataType":"String",
                            "isNullable":false,
                            "defaultValue":"",
                            "maxLength":20,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "maxLength":20,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"name",
                            "dataType":"String",
                            "isNullable":false,
                            "defaultValue":"",
                            "maxLength":50,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "maxLength":50,
                                    "name":"maxLength"
                                }
                            ]
                        },
                        {
                            "name":"price",
                            "dataType":"Decimal",
                            "isNullable":false,
                            "defaultValue":0,
                            "validators":[
                                {
                                    "name":"required"
                                },
                                {
                                    "name":"number"
                                }
                            ]
                        },
                        {
                            "name":"premiumPrice",
                            "dataType":"Decimal",
                            "validators":[
                                {
                                    "name":"number"
                                }
                            ]
                        },
                        {
                            "name":"toppingPrice",
                            "dataType":"Decimal",
                            "validators":[
                                {
                                    "name":"number"
                                }
                            ]
                        },
                        {
                            "name":"isGlutenFree",
                            "dataType":"Boolean",
                            "validators":[
                                {
                                    "name":"bool"
                                }
                            ]
                        }
                    ]
                }
            ],
                "resourceEntityTypeMap":{
                    "Customers"      : "Customer:#Zza.Model",
                    "Orders"         : "Order:#Zza.Model",
                    "OrderStatuses"  : "OrderStatus:#Zza.Model",
                    "Products"       : "Product:#Zza.Model",
                    "ProductSizes"   : "ProductSize:#Zza.Model",
                    "ProductOptions" : "ProductOption:#Zza.Model"
                }
            });
        }
    }

}( this.angular ));