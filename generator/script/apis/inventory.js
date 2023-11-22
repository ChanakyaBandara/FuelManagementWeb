const InventoryAPIs =  {//Inventory
    "app_name":"Inventory Management",
    "app_code":"3.11",
    "application_description":"",
    "apis":[
        {//New Item
            "api_name":"New Item",
            "api_description":"This API allows you to create new Items in the system",
            "curl":`curl -X POST http://GenAPI.com/vis/inventory/v1/items -H "Authorization:  APIKEY <GenAPI API key>"  -H "Content-Type: application/json" --data '{"ItemName ":"Computers","ItemTypeKey":"3","ItemClassKey":"2","IssuingMethod":"FIFO", "CostingMethod":"Average","SiteKey":"3","Unit":"Count"}'`,
            "api_code":"3.11.1",
            "http_method":"POST",
            "path":"inventory/v1/items",
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    },
                    {
                        "parameter_name":"Content-Type",
                        "example":"application/json",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "payload":{
                "title":"Payload",
                "parameters":[
                    {
                        "parameter_name":"ItemName",
                        "data_type":"string",
                        "description":"Item Name (refer to Item Code from UI)",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"Description",
                        "data_type":"string",
                        "description":"Description about the item",
                        "mandatory":{
                            "status":false,
                        }
                    },
                    {
                        "parameter_name":"ItemTypeKey",
                        "data_type":"int",
                        "description":"Primary key of the corresponding Item Type.",
                        "mandatory":{
                            "status":true
                        },
                        "references":[
                            {
                                "title":"Refer API 3.11.4 to get available Item Types",
                                "app_code":"3.11",
                                "api_code":"3.11.4"
                            }
                        ]
                    },
                    {
                        "parameter_name":"ItemClassKey",
                        "data_type":"int",
                        "description":"Primary Key of corresponding Item Class.",
                        "mandatory":{
                            "status":true
                        },
                        "references":[
                            {
                                "title":"Refer API 3.11.5 to get available Item Classes",
                                "app_code":"3.11",
                                "api_code":"3.11.5"
                            }
                        ]
                    },
                    {
                        "parameter_name":"IssuingMethod",
                        "data_type":"string",
                        "description":"Should be one of the methods FIFO, LIFO",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"CostingMethod",
                        "data_type":"string",
                        "description":"Should be one of the methods FIFO/LIFO, Average, Specific, Standard",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"SiteKey",
                        "data_type":"int",
                        "description":"If not passed, it will be considered as All Sites are available",
                        "mandatory":{
                            "status":false
                        }
                    },
                    {
                        "parameter_name":"Unit",
                        "data_type":"string",
                        "description":"Name of the Unit. ",
                        "mandatory":{
                            "status":true
                        },
                        "references":[
                            {
                                "title":"Refer API 3.1.3 to get available Units",
                                "app_code":"3.1",
                                "api_code":"3.1.3"
                            }
                        ]
                    },
                    {
                        "parameter_name":"Make",
                        "data_type":"string",
                        "description":"The manufacturer or trade name of a product",
                    },
                    {
                        "parameter_name":"Model",
                        "data_type":"string",
                        "description":"Model of the product",
                    },
                    {
                        "parameter_name":"StockNumber",
                        "data_type":"string",
                        "description":"Stock Number",
                    },
                    {
                        "parameter_name":"BarCode",
                        "data_type":"string",
                        "description":"BarCode",
                    },
                    {
                        "parameter_name":"IsConsumable",
                        "data_type":"boolean",
                        "description":"1: Consumable | 0: None Consumable",
                    },
                    {
                        "parameter_name":"IsReturnable",
                        "data_type":"boolean",
                        "description":"1: Returnable | 0: None Returnable",
                    }
                ]
            },
            "user_roles":[
                "Allow to add Items to Reservations"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"ItemKey",
                                "data_type":"int",
                                "description":"Primary Key of Created Item",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Item Created Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"Item Created Successfully",
                    "ItemKey":"15",
                    
                }
                
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Mandatory Validation ",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for mandatory validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of mandatory fields, which are not provided",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["ItemName"], ["ItemTypeKey"], ["ItemClassKey"], ["IssuingMethod"], ["CostingMethod"], ["Unit"]
                            ]
                        },
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [["ItemName"],["IssuingMethod"], ["CostingMethod"], ["Unit"]]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "SiteKey", "ValidDataType": "INT"}, 
                                {"Field": "ItemTypeKey,", "ValidDataType": "INT"}, 
                                {"Field": " IsConsumable", "ValidDataType": "BOOLEAN"}, 
                                {"Field": "IsReturnable", "ValidDataType": "BOOLEAN"} 
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "ItemTypeKey,", "ValidDataType": "INT"}, 
                                {"Field": " IsConsumable", "ValidDataType": "BOOLEAN"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Input Values Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for input value validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Invalid data provided!",
                            "ErrorFields": [
                                [
                                    "Unit"
                                ], 
                                [
                                    "ItemTypeKey"
                                ], 
                                [
                                    "ItemClassKey"
                                ] ,
                                [
                                    "SiteKey"
                                ]
                            ]
                        },
                        {
                            "ErrorMessage":"Invalid data provided!",
                            "ErrorFields": [
                                [
                                    "ItemTypeKey"
                                ], 
                                [
                                    "ItemClassKey"
                                ]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message, occurs when try to create item with the already exist ItemName",
                        } 
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"ItemName already exists!"
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Text Field Maximum Length Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for the maximum length of text field validation.",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Valid maximum character length has been exceeded!",
                            "ErrorFields": [
                                {"Field": "Description", "ValideLength": "1024"}, 
                                {"Field": "ItemName", "ValideLength": "255"},
                                {"Field": "Make", "ValideLength": "255"},
                                {"Field": "Model", "ValideLength": "255"},
                                {"Field": "StockNumber", "ValideLength": "255"}, 
                                {"Field": "BarCode", "ValideLength": "255"}
                            ]
                        },
                        {
                            "ErrorMessage":" Valid maximum character length has been exceeded!",
                            "ErrorFields": [
                                {"Field": "Description", "ValideLength": "1024"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        {
                            "ErrorMessage":"Unable to retrieve login details",
                        }
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"406",
                    "error_response_type":"JSON",
                    "error_category":"Content Type Error",
                    "examples":[
                        "Invalid content type 'text/plain'"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                       {"ErrorMessage":"Internal Server Error"} 
                    ]
                }
            ]
        },
        {//Get Items
            "api_name":"Get Items",
            "api_description":"This API returns all the Items configured in the system.",
            "curl":`curl -X GET http://GenAPI.com/vis/inventory/v1/items?Fields=ItemKey, ItemName, BarCode, SiteKey&max=10&last=5” -H    "Authorization: APIKEY <GenAPI API key>" `,
            "api_code":"3.11.2",
            "http_method":"GET",
            "path":"/inventory/v1/items",
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "query_string":{
                "title":"Query String",
                "parameters":[
                    {
                        "parameter_name":"ItemTypeKey",
                        "data_type":"int",
                        "description":"Primary Key of Item type",
                    },
                    {
                        "parameter_name":"Unit",
                        "data_type":"string",
                        "description":"Unit filter",
                    },
                    {
                        "parameter_name":"max",
                        "data_type":"int",
                        "description":"Number of records need to be retrieved at once",
                        "default_value":"8"
                    },
                    {
                        "parameter_name":"last",
                        "data_type":"int",
                        "description":"Last Record retrieved",
                        "default_value":"0"
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string",
                    },
                    {
                        "parameter_name":"q",
                        "data_type":"string",
                        "description":"Like search using Item Name",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Items Search Page"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "header":{
                        "title":"Response Headers",
                        "parameters":[
                            {
                                "parameter_name":"X-Total-Count",
                                "data_type":"int",
                                "description":"Total record count available in the system according to the given filters."
                            }
                        ]
                    },
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"ItemKey",
                                "data_type":"int",
                                "description":"Primary Key of Item Key",
                            },
                            {
                                "parameter_name":"ItemTypeKey",
                                "data_type":"int",
                                "description":"Primary key of corresponding Item Type",
                            },
                            {
                                "parameter_name":"ItemName",
                                "data_type":"string",
                                "description":"Corresponding Item Name (for ItemKey). (refer to Item Code from UI)",
                            },
                            {
                                "parameter_name":"ItemTypeName",
                                "data_type":"string",
                                "description":"Corresponding Item Type Name (for ItemTypeKey)",
                            },
                            {
                                "parameter_name":"ItemClassKey",
                                "data_type":"int",
                                "description":"Primary Key of Item Class",
                            },
                            {
                                "parameter_name":"ItemClassName",
                                "data_type":"string",
                                "description":"Corresponding Item Class Name (for ItemClassKey)",
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description of Item",
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Primary Key of corresponding Site",
                            },
                            {
                                "parameter_name":"LocationFullName",
                                "data_type":"string",
                                "description":"Corresponding Full Location Name (for SiteKey)",
                            },
                            {
                                "parameter_name":"IssuingMethod",
                                "data_type":"string",
                                "description":"Will be one of FIFO, LIFO",
                            },
                            {
                                "parameter_name":"CostingMethod",
                                "data_type":"string",
                                "description":"Method of costing",
                            },
                            {
                                "parameter_name":"Unit",
                                "data_type":"string",
                                "description":"Unit of Measuring",
                            },
                            {
                                "parameter_name":"Make",
                                "data_type":"int",
                                "description":"The manufacturer or trade name of a product",
                            },
                            {
                                "parameter_name":"IsConsumable",
                                "data_type":"int",
                                "description":"Determine that the item is consumable",
                            },
                            {
                                "parameter_name":"IsReturnable",
                                "data_type":"int",
                                "description":"Determine whether the item can be returnable",
                            },
                            {
                                "parameter_name":"Model",
                                "data_type":"string",
                                "description":"Model of the Product",
                            },
                            {
                                "parameter_name":"StockNumber",
                                "data_type":"string",
                                "description":"Stock Number",
                            },
                            {
                                "parameter_name":"BarCode",
                                "data_type":"string",
                                "description":"BarCode",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "ItemKey":"1", 
                        "ItemName": "laptop", 
                        "Barcode": "15468da8s15351s8", 
                        "SiteKey": "3"
                    },
                    {
                        "ItemKey":"1", 
                        "ItemName": "phone", 
                        "Barcode": "cell021sdfzzza001", 
                        "SiteKey": "3"
                    },
                    {
                        "ItemKey":"1", 
                        "ItemName": "speakers", 
                        "Barcode": "1125000584121", 
                        "SiteKey": "3"
                    },
                    {
                        "ItemKey":"1", 
                        "ItemName": "scanner", 
                        "Barcode": "hpscanner0001iy15472", 
                        "SiteKey": "3"
                    }  
                ]
            }, 
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}, 
                                {"Field": "max", "ValidDataType": "INT"}, 
                                {"Field": "ItemTypeKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "max", "ValidDataType": "INT"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//Get Item Details
            "api_name":"Get Item Details",
            "api_description":"This API returns all the Item Details corresponding to the Passed ItemKey",
            "curl":`curl -X GET http://GenAPI.com/vis/inventory/v1/items/1? Fields=ItemKey, ItemName, BarCode, SiteKey” -H    "Authorization: APIKEY <GenAPI API key>" `,
            "api_code":"3.11.3",
            "http_method":"GET",
            "path":"/inventory/v1/items/{ik}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{ik}",
                        "data_type":"int",
                        "description":"Item Key"
                    }
                ]
            },
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "query_string":{
                "title":"Query String",
                "parameters":[
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string",
                    }   
                ]
            },
            "user_roles":[
                "Allow to view Item Details"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"ItemKey",
                                "data_type":"int",
                                "description":"Primary Key of Item Key",
                            },
                            {
                                "parameter_name":"ItemTypeKey",
                                "data_type":"int",
                                "description":"Primary key of corresponding Item Type",
                            },
                            {
                                "parameter_name":"ItemName",
                                "data_type":"string",
                                "description":"Corresponding Item Name (for ItemKey). (refer to Item Code from UI)",
                            },
                            {
                                "parameter_name":"ItemTypeName",
                                "data_type":"string",
                                "description":"Corresponding Item Type Name (for ItemTypeKey)",
                            },
                            {
                                "parameter_name":"ItemClassKey",
                                "data_type":"int",
                                "description":"Primary Key of Item Class",
                            },
                            {
                                "parameter_name":"ItemClassName",
                                "data_type":"string",
                                "description":"Corresponding Item Class Name (for ItemClassKey)",
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description of Item",
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Primary Key of corresponding Site",
                            },
                            {
                                "parameter_name":"LocationFullName",
                                "data_type":"string",
                                "description":"Corresponding Full Location Name (for SiteKey)",
                            },
                            {
                                "parameter_name":"IssuingMethod",
                                "data_type":"string",
                                "description":"Will be one of FIFO, LIFO",
                            },
                            {
                                "parameter_name":"CostingMethod",
                                "data_type":"string",
                                "description":"Method of costing",
                            },
                            {
                                "parameter_name":"Unit",
                                "data_type":"string",
                                "description":"Unit of Measuring",
                            },
                            {
                                "parameter_name":"Make",
                                "data_type":"string",
                                "description":"The manufacturer or trade name of a product",
                            },
                            {
                                "parameter_name":"IsConsumable",
                                "data_type":"boolean",
                                "description":"Determine item is a consumable",
                            },
                            {
                                "parameter_name":"IsReturnable",
                                "data_type":"boolean",
                                "description":"Determine item can be return in defects",
                            },
                            {
                                "parameter_name":"Model",
                                "data_type":"string",
                                "description":"Model of the Product",
                            },
                            {
                                "parameter_name":"StockNumber",
                                "data_type":"string",
                                "description":"Stock Number",
                            },
                            {
                                "parameter_name":"BarCode",
                                "data_type":"string",
                                "description":"Barcode",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "ItemKey":"1", 
                        "ItemName": "laptop", 
                        "Barcode": "15468da8s15351s8", 
                        "SiteKey": "3"
                    }
                ]
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}, 
                                {"Field": "max", "ValidDataType": "INT"}, 
                                {"Field": "ItemTypeKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "max", "ValidDataType": "INT"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Object Referance Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [
                                ["ik"]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//Get Item Types
            "api_name":"Get Item Types",
            "api_description":"This API returns all the Item Types configured in the system.",
            "curl":`curl -X GET http://GenAPI.com/vis/inventory/v1/itemtypes?max=10&last=5” -H "Authorization: APIKEY <GenAPI API key>" `,
            "api_code":"3.11.4",
            "http_method":"GET",
            "path":"/inventory/v1/itemtypes",
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "query_string":{
                "title":"Query String",
                "parameters":[
                    {
                        "parameter_name":"max",
                        "data_type":"int",
                        "description":"Number of records need to be retrieved at once",
                        "default_value":"8"
                    },
                    {
                        "parameter_name":"last",
                        "data_type":"int",
                        "description":"Last Record retrieved",
                        "default_value":"0"
                    },
                    {
                        "parameter_name":"q",
                        "data_type":"string",
                        "description":"Text filter on Item Type Name (Search similar to SQL search will be performed)",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Item Types Search Page"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "header":{
                        "title":"Response Headers",
                        "parameters":[
                            {
                                "parameter_name":"X-Total-Count",
                                "data_type":"int",
                                "description":"Total record count available in the system according to the given filters."
                            }
                        ]
                    },
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"ItemTypeKey",
                                "data_type":"int",
                                "description":"Primary Key of Item Type",
                            },
                            {
                                "parameter_name":"ItemTypeName",
                                "data_type":"string",
                                "description":"Name of Item Type",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "ItemTypeKey":"1", 
                        "ItemTypeName":"Electric"
                    }, 
                    {
                        "ItemTypeKey":"2", 
                        "ItemTypeName":"Stationary"
                    }, 
                    {
                        "ItemTypeKey":"3", 
                        "ItemTypeName":"Furniture"
                    }, 
                    {
                        "ItemTypeKey":"4", 
                        "ItemTypeName":"Office Equipment"
                    }, 
                    {
                        "ItemTypeKey":"5", 
                        "ItemTypeName":"Computer"
                    }, 
                ]
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [{"Field": "last", "ValidDataType": "INT"}, {"Field": "max", "ValidDataType": "INT"}]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [{"Field": "max", "ValidDataType": "INT"}]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//Get Item Classes
            "api_name":"Get Item Classes",
            "api_description":"This API returns all the Item Classes configured in the system.",
            "curl":`curl -X GET http://GenAPI.com/vis/inventory/v1/itemclasses?max=10&last=5” -H "Authorization: APIKEY <GenAPI API key>" `,
            "api_code":"3.11.5",
            "http_method":"GET",
            "path":"inventory/v1/itemclasses",
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "query_string":{
                "title":"Query String",
                "parameters":[
                    {
                        "parameter_name":"max",
                        "data_type":"int",
                        "description":"Number of records need to be retrieved at once",
                        "default_value":"8"
                    },
                    {
                        "parameter_name":"last",
                        "data_type":"int",
                        "description":"Last Record retrieved",
                        "default_value":"0"
                    },
                    {
                        "parameter_name":"q",
                        "data_type":"string",
                        "description":"Text filter on Item Class Name (This Search works similar to the mechanism in SQL search/ Google search)",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Item Classes Search Page"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "header":{
                        "title":"Response Headers",
                        "parameters":[
                            {
                                "parameter_name":"X-Total-Count",
                                "data_type":"int",
                                "description":"Total record count available in the system according to the given filters."
                            }
                        ]
                    },
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"ItemClassKey",
                                "data_type":"int",
                                "description":"Primary Key of Item Class",
                            },
                            {
                                "parameter_name":"ItemClassName",
                                "data_type":"string",
                                "description":"Name of Item Class",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "ItemClassKey":"1", 
                        "ItemClassName":"Electric"
                    }, 
                    {
                        "ItemClassKey":"2", 
                        "ItemClassName":"Stationary"
                    }, 
                    {
                        "ItemClassKey":"3", 
                        "ItemClassName":"Furniture"
                    }, 
                    {
                        "ItemClassKey":"4", 
                        "ItemClassName":"Office Equipment"
                    }, 
                    {
                        "ItemClassKey":"5", 
                        "ItemClassName":"Computer"
                    }, 
                ]
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [{"Field": "last", "ValidDataType": "INT"}, {"Field": "max", "ValidDataType": "INT"}]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [{"Field": "max", "ValidDataType": "INT"}]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//Update Item
            "api_name":"Update Item",
            "api_description":"This API allows you to update information of Items",
            "curl":`curl -X PATCH http://GenAPI.com/vis/inventory/v1/items/6” -H    "Authorization: APIKEY <GenAPI API key>” -H "Content-Type: application/json" --data '{"ItemName":"LapTopComputer","ItemTypeKey":"3","ItemClassKey":"2”,"SiteKey":"3"}'`,
            "api_code":"3.11.6",
            "http_method":"PATCH",
            "path":"inventory/v1/items/{ik}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{ik}",
                        "data_type":"int",
                        "description":"Item Key"
                    }
                ]
            },
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    },
                    {
                        "parameter_name":"Content-Type",
                        "example":"application/json",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "payload":{
                "title":"Payload",
                "parameters":[
                    {
                        "parameter_name":"ItemName",
                        "data_type":"string",
                        "description":"Item Name (refer to Item Code from UI)",
                        "mandatory":{
                            "status":false
                        }
                    },
                    {
                        "parameter_name":"ItemDescription",
                        "data_type":"string",
                        "description":"Description of Item",
                        "mandatory":{
                            "status":false
                        }
                    },
                    {
                        "parameter_name":"ItemTypeKey",
                        "data_type":"int",
                        "references":[
                            {
                                "title":"Refer API 3.11.4 to get available Item Types",
                                "app_code":"3.11",
                                "api_code":"3.11.4"
                            }
                        ]
                    },
                    {
                        "parameter_name":"ItemClassKey",
                        "data_type":"int",
                        "references":[
                            {
                                "title":"Refer API 3.11.5 to get available Item Types",
                                "app_code":"3.11",
                                "api_code":"3.11.5"
                            }
                        ]
                    },
                    {
                        "parameter_name":"IssuingMethod",
                        "data_type":"string",
                        "description":"FIFO, LIFO"
                    },
                    {
                        "parameter_name":"CostingMethod",
                        "data_type":"string",
                        "description":"FIFO/LIFO, Average, Specific, Standard"
                    },
                    {
                        "parameter_name":"SiteKey",
                        "data_type":"int",
                        "description":"Primary Key of Corresponding Site"
                    },
                    {
                        "parameter_name":"Unit",
                        "data_type":"string",
                        "description":"Primary Key of Priority",
                        "references":[
                            {
                                "title":"Refer API 3.1.3 to get available Units",
                                "app_code":"3.1",
                                "api_code":"3.1.3"
                            }
                        ]
                    },
                    {
                        "parameter_name":"Make",
                        "data_type":"string",
                        "description":"The manufacturer or trade name of a product"
                    },
                    {
                        "parameter_name":"Model",
                        "data_type":"string",
                        "description":"Model of the Product"
                    },
                    {
                        "parameter_name":"StockNumber",
                        "data_type":"string",
                        "description":"Stock Number"
                    },
                    {
                        "parameter_name":"BarCode",
                        "data_type":"string",
                        "description":"BarCode"
                    },
                    {
                        "parameter_name":"IsConsumable",
                        "data_type":"boolean",
                        "description":"1: Consumable | 0: None-Consumable"
                    },
                    {
                        "parameter_name":"IsReturnableItem",
                        "data_type":"boolean",
                        "description":"1: Returnable | 0: None-Returnable"
                    }
                ]
            },
            "user_roles":[
                "Allow to modify Items"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"ItemKey",
                                "data_type":"int",
                                "description":"Primary Key of the Updated Item",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Item Updated Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"Item Updated Successfully",
                    "ItemKey":"6",
                }
                
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Mandatory Validation ",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for mandatory validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of mandatory fields, which are not provided",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [["ItemName"], ["ItemTypeKey"], ["ItemClassKey"], ["Unit"]]
                        },
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [["ItemName"], ["ItemTypeKey"]]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "ItemTypeKey", "ValidDataType": "INT"}, 
                                {"Field": "ItemTypeClass,", "ValidDataType": "INT"}, 
                                {"Field": " SiteKey", "ValidDataType": "INT"}, 
                                {"Field": "IsConsumable", "ValidDataType": "BOOLEAN"}, 
                                {"Field": "IsReturnable", "ValidDataType": "BOOLEAN"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "ItemTypeKey,", "ValidDataType": "INT"}, 
                                {"Field": " IsConsumable", "ValidDataType": "BOOLEAN"}
                            ]
                        }   
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Input Values Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for input value validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid data provided!",
                            "ErrorFields": [
                                ["Unit"], 
                                ["ItemTypeKey"], 
                                ["ItemClassKey"] ,
                                ["SiteKey"]
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid data provided!",
                            "ErrorFields": [
                                ["ItemTypeKey"], 
                                ["ItemClassKey"]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Text Field Maximum Length Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for the maximum length of text field validation.",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": " Valid maximum character length has been exceeded!",
                            "ErrorFields": [
                                {"Field": "ItemDescription", "ValideLength": "1024"}, 
                                {"Field": "ItemName", "ValideLength": "255"},
                                {"Field": "Make", "ValideLength": "255"},
                                {"Field": "Model", "ValideLength": "255"},
                                {"Field": "StockNumber", "ValideLength": "255"}, 
                                {"Field": "BarCode", "ValideLength": "255"}
                            ]
                        },
                        {
                            "ErrorMessage": " Valid maximum character length has been exceeded!",
                            "ErrorFields": [{"Field": "ItemDescription", "ValideLength": "1024"}]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        {
                            "ErrorMessage":"Unable to retrieve login details",
                        }
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Object Referance Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [["ik"]]
                        }
                    ]
                },
                {
                    "error_code":"406",
                    "error_response_type":"JSON",
                    "error_category":"Content Type Error",
                    "examples":[
                        "Invalid content type 'text/plain'"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                       {"ErrorMessage":"Internal Server Error"} 
                    ]
                }
            ]
        },
        {//Delete Item
            "api_name":"Delete Item",
            "api_description":"This API is used to delete Item. If an Item is already in use in any other places or applications, you will not be able to delete it.",
            "curl":`curl -X DELETE http://GenAPI.com/vis/inventory/v1/items/5 -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.11.7",
            "http_method":"DELETE",
            "path":"inventory/v1/items/{ik}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{ik}",
                        "data_type":"int",
                        "description":"Item Key"
                    }
                ]
            },
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    },
                    {
                        "parameter_name":"Content-Type",
                        "example":"application/json",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to delete Items"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"ItemKey",
                                "data_type":"int",
                                "description":"Primary key of the Item",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Item Deleted Successfully",
                            }
                        ]
                    },
                },
                "example_response":[ 
                    {
                        "Status": "Item Deleted Successfully", 
                        "ItemKey": "5"
                    }
                ]
                    
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message, occurs when try to delete item if already used ",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "This item is in use and cannot be deleted!"
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Object Referance Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [["ik"]]
                        }
                    ]
                },
                {
                    "error_code":"406",
                    "error_response_type":"JSON",
                    "error_category":"Content Type Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//Get Stores
            "api_name":"Get Stores",
            "api_description":"This API returns all the Item Stores configured in the system",
            "curl":`curl -X GET http://GenAPI.com/vis/inventory/v1/stores?max=10& last=5, fields='StoreName, LocationKey, StoreKey' -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.11.8",
            "http_method":"GET",
            "path":"/inventory/v1/stores",
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "query_string":{
                "title":"Query String",
                "parameters":[
                    {
                        "parameter_name":"max",
                        "data_type":"int",
                        "description":"Number of records need to be retrieved at once",
                        "default_value":"8"
                    },
                    {
                        "parameter_name":"last",
                        "data_type":"int",
                        "description":"Last Record retrieved",
                        "default_value":"0"
                    },
                    {
                        "parameter_name":"q",
                        "data_type":"string",
                        "description":"SQL Like search on Store Name"
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string"
                    },
                    {
                        "parameter_name":"LocationKey",
                        "data_type":"int",
                        "description":"Store Location filter "
                    },
                    {
                        "parameter_name":"OperationalStatus",
                        "data_type":"boolean",
                        "description":"One of the following status, [1: Operational,0: Non-Operational]",
                         "default_value":"0",
                        "applicable_value":"0 or 1"
                    }
                ]
            },
            "user_roles":[
                "Allow to view Stores Search Page"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "header":{
                        "title":"Response Headers",
                        "parameters":[
                            {
                                "parameter_name":"X-Total-Count",
                                "data_type":"int",
                                "description":"Total record count available in the system according to the given filters."
                            }
                        ]
                    },
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"StoreKey",
                                "data_type":"int",
                                "description":"Store Primary Key",
                            },
                            {
                                "parameter_name":"StoreName",
                                "data_type":"string",
                                "description":"Name of Store",
                            },
                            {
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Primary Key of store Location",
                            },
                            {
                                "parameter_name":"LocationFullName",
                                "data_type":"string",
                                "description":"Full Name of Store Location",
                            },
                            {
                                "parameter_name":"KeeperKey",
                                "data_type":"int",
                                "description":"Primary Key of Store Keeper",
                            },
                            {
                                "parameter_name":"KeeperID",
                                "data_type":"string",
                                "description":"Id of Store Keeper",
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description about Store",
                            },
                            {
                                "parameter_name":"Method",
                                "data_type":"string",
                                "description":"Store item Issuing Method",
                            },
                            {
                                "parameter_name":"OperationalMode",
                                "data_type":"int",
                                "description":"Store Operational, Non-Operational status",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "StoreName": "Store1",
                        "LocationKey": "1", 
                        "StoreKey": "1"
                    }, 
                    {
                        "StoreName": "Store2",
                        "LocationKey": "1", 
                        "StoreKey": "2"
                    },
                    {
                        "StoreName": "Department Store",
                        "LocationKey": "1", 
                        "StoreKey": "3"
                    }
                ]                        
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}, 
                                {"Field": "max", "ValidDataType": "INT"}, 
                                {"Field": "ItemTypeKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "max", "ValidDataType": "INT"}
                            ]
                        }   
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//Get Store Details
            "api_name":"Get Store Details",
            "api_description":"This API returns Item Store Details",
            "curl":`curl -X GET http://GenAPI.com/vis/inventory/v1/stores/2? max=10& last=5, fields='StoreName, LocationKey, StoreKey' -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.11.9",
            "http_method":"GET",
            "path":"/inventory/v1/stores/{sk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{sk}",
                        "data_type":"int",
                        "description":"Primary key of Store"
                    }
                ]
            },
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "query_string":{
                "title":"Query String",
                "parameters":[
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string"
                    }
                ]
            },
            "user_roles":[
                "Allow to view Stores Details"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary ",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"StoreKey",
                                "data_type":"int",
                                "description":"Store Primary Key",
                            },
                            {
                                "parameter_name":"StoreName",
                                "data_type":"string",
                                "description":"Name of Store",
                            },
                            {
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Primary Key of store Location",
                            },
                            {
                                "parameter_name":"LocationFullName",
                                "data_type":"string",
                                "description":"Full Name of Store Location",
                            },
                            {
                                "parameter_name":"KeeperKey",
                                "data_type":"int",
                                "description":"Primary Key of Store Keeper",
                            },
                            {
                                "parameter_name":"KeeperID",
                                "data_type":"string",
                                "description":"Id of Store Keeper",
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description about Store",
                            },
                            {
                                "parameter_name":"Method",
                                "data_type":"string",
                                "description":"Store Item Issuing Method",
                            },
                            {
                                "parameter_name":"OperationalMode",
                                "data_type":"int",
                                "description":"Store Operational, Non-Operational status",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "StoreName": "Store the One", 
                        "LocationKey": "1", 
                        "StoreKey":"1"
                    }
                ]                        
            },
            "error_handling":[
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Object Referance Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [["sk"]]
                        }
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//New Batch
            "api_name":"New Batch",
            "api_description":"This API allows you to create new Batch in the system",
            "curl":`curl -X POST http://GenAPI.com/vis/inventory/v1/batches -H “Authorization:  APIKEY <GenAPI API key>” -H “Content-Type: application/json” --data '{"StoreKey":"1","ItemKey":"3","StoreLocationKey":"4","BatchPrice":"45.00", "BatchQuantityPrice":"12","BatchUnitPrice":"321.00"}'`,
            "api_code":"3.11.10",
            "http_method":"POST",
            "path":"inventory/v1/batches",
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    },
                    {
                        "parameter_name":"Content-Type",
                        "example":"application/json",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "payload":{
                "title":"Payload",
                "parameters":[
                    {
                        "parameter_name":"StoreKey",
                        "data_type":"int",
                        "description":"Primary Key of Store",
                        "mandatory":{
                            "status":true,
                            "description":"Except when StoreName is provided"
                        }
                    },
                    {
                        "parameter_name":"StoreName",
                        "data_type":"string",
                        "description":"Name of the store. Can be provided as an alternative to StoreKey. If StoreKey is provided, the StoreName attribute will be ignored.",
                        "mandatory":{
                            "status":true,
                            "description":"Except when StoreKey is provided"
                        }
                    },
                    {
                        "parameter_name":"ItemKey",
                        "data_type":"int",
                        "description":"Item Code Key, Note that the Item Code should be within the selected store.",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"StoreLocationKey",
                        "data_type":"int",
                        "description":"Primary Key of corresponding StoreLocation in which the new batch must be added. Note that the StoreLocation is the location within the store, into which the batch of items must be added",
                        "mandatory":{
                            "status":true,
                            "description":"Except when StoreLocationName is provided"
                        }
                    },
                    {
                        "parameter_name":"StoreLocationName",
                        "data_type":"string",
                        "description":"Name of the location within the store into which the batch of items must be added.If StoreLocationKey is provided, the StoreLocationName will be ignored. ",
                        "mandatory":{
                            "status":true,
                            "description":"Except when StoreLocationKey is provided"
                        }
                    },
                    {
                        "parameter_name":"ExpireDate",
                        "data_type":"date",
                        "description":"Date of Expire",
                        "mandatory":{
                            "status":false
                        }
                    },
                    {
                        "parameter_name":"BatchPrice",
                        "data_type":"float",
                        "description":"Price of Batch",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"BatchQuantity",
                        "data_type":"int",
                        "description":"Quantity of Batch",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"BatchUnitPrice",
                        "data_type":"float",
                        "description":"Unit Price of the Batch",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"Remarks",
                        "data_type":"string",
                        "description":"Remarks about Batch",
                    },
                    {
                        "parameter_name":"VendorKey",
                        "data_type":"int",
                        "description":"Primary Key of Vendor",
                    },
                    {
                        "parameter_name":"InvoiceReference",
                        "data_type":"string",
                        "description":"Corresponding Invoice Reference",
                    },
                    {
                        "parameter_name":"StoreItemPrice",
                        "data_type":"float",
                        "description":"Price of Store Item",
                    },
                    {
                        "parameter_name":"StoreItemSellingPrice",
                        "data_type":"float",
                        "description":"Selling Price of Store Item",
                    }
                ]
            },
            "user_roles":[
                "Allow to configure Batches"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"BatchID",
                                "data_type":"string",
                                "description":"ID of Batch",
                            },
                            {
                                "parameter_name":"BatchKey",
                                "data_type":"int",
                                "description":"Primary Key of BatchKey",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Batch Created Successfully",
                            }                                
                        ]
                    },
                },
                "example_response":{
                    "Status":"Batch Created Successfully",
                    "BatchKey":"1",
                    "BatchID":"Batch01"
                }
                
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Mandatory Validation ",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for mandatory validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of mandatory fields, which are not provided",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["StoreKey", "StoreName"], 
                                ["ItemKey"], 
                                ["StoreLocationKey", "StoreLocationName"], 
                                ["BatchPrice"], 
                                ["BatchQuantity"], 
                                ["BatchUnitPrice"]
                            ]
                        },
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [["StoreKey", "StoreName"], ["ItemKey"]]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "SiteKey", "ValidDataType": "INT"}, 
                                {"Field": "ItemTypeKey,", "ValidDataType": "INT"}, 
                                {"Field": " IsConsumable", "ValidDataType": "BOOLEAN"}, 
                                {"Field": "IsReturnable", "ValidDataType": "BOOLEAN"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "SiteKey", "ValidDataType": "INT"}, 
                                {"Field": "ItemTypeKey,", "ValidDataType": "INT"}, 
                                {"Field": " IsConsumable", "ValidDataType": "BOOLEAN"}, 
                                {"Field": "IsReturnable", "ValidDataType": "BOOLEAN"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Input Values Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for input value validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Invalid data provided!",
                            "ErrorFields": [
                                [
                                    "Unit"
                                ], 
                                [
                                    "ItemTypeKey"
                                ], 
                                [
                                    "ItemClassKey"
                                ] ,
                                [
                                    "SiteKey"
                                ]
                            ]
                        },
                        {
                            "ErrorMessage":"Invalid data provided!",
                            "ErrorFields": [
                                [
                                    ["StoreLocation","Store"]
                                ], 
                                [
                                    ["Store","Item"]
                                ]
                            ]
                        },
                        {
                            "ErrorMessage":"Invalid data provided!",
                            "ErrorFields": [
                                [
                                    ["ItemTypeKey"]
                                ], 
                                [
                                    ["ItemClassKey"]
                                ]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Text Field Maximum Length Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for the maximum length of text field validation.",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Valid maximum character length has been exceeded!",
                            "ErrorFields": [
                                {"Field": "Remarks", "ValideLength": "255"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for provided invalid values",
                        } 
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Invalid values found! Fields: [BatchPrice] should be [BatchQuantity] * [BatchUnitPrice]"
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        {
                            "ErrorMessage":"Unable to retrieve login details",
                        }
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                       {"ErrorMessage":"Internal Server Error"} 
                    ]
                }
            ]
        },
        {//Get Batches 
            "api_name":"Get Batches ",
            "api_description":"This API returns all the Batches configured in the system.",
            "curl":`curl -X GET "http://GenAPI.com/vis/inventory/v1/batches?max=10&last=5&fields=BactchID,RemaingQty” -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.11.11",
            "http_method":"GET",
            "path":"inventory/v1/batches",
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "query_string":{
                "title":"Query String",
                "parameters":[
                    {
                        "parameter_name":"StoreKey",
                        "data_type":"int",
                        "description":"Store Key filter",
                    },
                    {
                        "parameter_name":"ItemKey",
                        "data_type":"int",
                        "description":"Item Key filter",
                    },
                    {
                        "parameter_name":"max",
                        "data_type":"int",
                        "description":"Number of records need to be retrieved at once",
                        "default_value":"8"
                    },
                    {
                        "parameter_name":"last",
                        "data_type":"int",
                        "description":"Last Record retrieved",
                        "default_value":"0"
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string",
                    },
                    {
                        "parameter_name":"q",
                        "data_type":"string",
                        "description":"SQL Like search on Batch ID",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Batches Search Page"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "header":{
                        "title":"Response Headers",
                        "parameters":[
                            {
                                "parameter_name":"X-Total-Count",
                                "data_type":"int",
                                "description":"Total record count available in the system according to the given filters."
                            }
                        ]
                    },
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"BatchKey",
                                "data_type":"int",
                                "description":"Primary Key of Batch"
                            },
                            {
                                "parameter_name":"BatchID",
                                "data_type":"string",
                                "description":"ID of the Batch"
                            },
                            {
                                "parameter_name":"BatchPrice",
                                "data_type":"float",
                                "description":"Price of the Batch"
                            },
                            {
                                "parameter_name":"BatchQuantity",
                                "data_type":"int",
                                "description":"Quantity of the Batch"
                            },
                            {
                                "parameter_name":"ItemKey",
                                "data_type":"int",
                                "description":"Primary Key of the Item"
                            },
                            {
                                "parameter_name":"ItemName",
                                "data_type":"string",
                                "description":"Corresponding Name of the Item (for ItemKey) (refer to Item Code from UI)"
                            },
                            {
                                "parameter_name":"BatchItemPrice",
                                "data_type":"float",
                                "description":"Item Price"
                            },
                            {
                                "parameter_name":"BatchItemSellingPrice",
                                "data_type":"float",
                                "description":"Item Selling Price"
                            },
                            {
                                "parameter_name":"StoreKey",
                                "data_type":"int",
                                "description":"Primary Key of Batch stored Store"
                            },
                            {
                                "parameter_name":"StoreName",
                                "data_type":"string",
                                "description":"Corresponding Name of the Store (for StoreKey)"
                            },
                            {
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Primary Key of Store Location"
                            },
                            {
                                "parameter_name":"LocationFullName",
                                "data_type":"string",
                                "description":"Corresponding Store Location Full Name (for Store LocationKey)"
                            },
                            {
                                "parameter_name":"Remarks",
                                "data_type":"string",
                                "description":"Remarks about the Batch"
                            },
                            {
                                "parameter_name":"IssuedQty",
                                "data_type":"int",
                                "description":"Quantity issued"
                            },
                            {
                                "parameter_name":"ReservedQty",
                                "data_type":"int",
                                "description":"Quantity Reserved"
                            },
                            {
                                "parameter_name":"RemainQty",
                                "data_type":"int",
                                "description":"Quantity Remain"
                            },
                            {
                                "parameter_name":"Unit",
                                "data_type":"string",
                                "description":"Item unit"
                            },
                            {
                                "parameter_name":"ExpireDate",
                                "data_type":"datetime",
                                "description":"Expiry Date"
                            },
                            {
                                "parameter_name":"CreatedDateTime",
                                "data_type":"datetime",
                                "description":"Date Created"
                            },
                            {
                                "parameter_name":"CreatedUserKey",
                                "data_type":"int",
                                "description":"Batch Created User Primary Key"
                            },
                            {
                                "parameter_name":"CreatedUserFullname",
                                "data_type":"string",
                                "description":"Full Name of Batch Created User"
                            },
                            {
                                "parameter_name":"ModifiedDateTime",
                                "data_type":"datetime",
                                "description":"Modified Date"
                            },
                            {
                                "parameter_name":"ModifiedUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Batch Modified User"
                            },
                            {
                                "parameter_name":"ModifiedUserFullName",
                                "data_type":"string",
                                "description":"Full name of Batch Modified User"
                            },
                            {
                                "parameter_name":"Hidden",
                                "data_type":"boolean",
                                "description":"Batch Hidden status. Batches with Hidden status will not be available for other Services or Applications [1: Hidden, 0: Not Hidden]"
                            },
                            {
                                "parameter_name":"VendorKey",
                                "data_type":"int",
                                "description":"Supply Vendor Key"
                            },
                            {
                                "parameter_name":"VendorName",
                                "data_type":"string",
                                "description":"Corresponding Vendor Name (for VendorKey)"
                            },
                            {
                                "parameter_name":"InvoiceReference",
                                "data_type":"string",
                                "description":"Invoice Reference Number"
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "BatchID":"Batch001", 
                        "RemainQty": "21"
                    },
                    {
                        "BatchID":"Batch002", 
                        "RemainQty": "3"
                    },
                    {
                        "BatchID":"Batch003", 
                        "RemainQty": "7"
                    },
                    {
                        "BatchID":"Batch004", 
                        "RemainQty": "15"
                    }  
                ]
            }, 
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}, 
                                {"Field": "max", "ValidDataType": "INT"}, 
                                {"Field": "StoreKey", "ValidDataType": "INT"},
                                {"Field": "ItemKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "ItemKey", "ValidDataType": "INT"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//Get Batch Details
            "api_name":"Get Batch Details",
            "api_description":"This API returns details about a Batch configured in the system",
            "curl":`curl -X GET "http://GenAPI.com/vis/inventory/v1/batches/2?max=10&last=5&fields=BactchID,RemaingQty” -H    "Authorization: APIKEY <GenAPI API key>" `,
            "api_code":"3.11.12",
            "http_method":"GET",
            "path":"inventory/v1/batches/{bk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{bk}",
                        "data_type":"int",
                        "description":"Primary Key of Batch"
                    }
                ]
            },
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "query_string":{
                "title":"Query String",
                "parameters":[
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string",
                    }   
                ]
            },
            "user_roles":[
                "Allow to view Batch Details"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"BatchKey",
                                "data_type":"int",
                                "description":"Primary Key of Batch",
                            },
                            {
                                "parameter_name":"BatchID",
                                "data_type":"string",
                                "description":"ID of the Batch",
                            },
                            {
                                "parameter_name":"BatchPrice",
                                "data_type":"float",
                                "description":"Price of the Batch",
                            },
                            {
                                "parameter_name":"BatchQuantity",
                                "data_type":"int",
                                "description":"Quantity of the Batch",
                            },
                            {
                                "parameter_name":"ItemKey",
                                "data_type":"int",
                                "description":"Primary Key of the Item",
                            },
                            {
                                "parameter_name":"ItemName",
                                "data_type":"string",
                                "description":"Corresponding Name of the Item (for ItemKey) (refer to Item Code from UI)",
                            },
                            {
                                "parameter_name":"BatchItemPrice",
                                "data_type":"float",
                                "description":"Item Price",
                            },
                            {
                                "parameter_name":"BatchItemSellingPrice",
                                "data_type":"float",
                                "description":"Item Selling Price",
                            },
                            {
                                "parameter_name":"StoreKey",
                                "data_type":"int",
                                "description":"Primary Key of Batch stored Store",
                            },
                            {
                                "parameter_name":"StoreName",
                                "data_type":"string",
                                "description":"Corresponding Name of the Store (for StoreKey)",
                            },
                            {
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Primary Key of Store Location",
                            },
                            {
                                "parameter_name":"LocationFullName",
                                "data_type":"string",
                                "description":"Corresponding Store Location’s Full Name (for Store LocationKey)",
                            },
                            {
                                "parameter_name":"Remarks",
                                "data_type":"string",
                                "description":"Remarks about the Batch",
                            },
                            {
                                "parameter_name":"IssuedQty",
                                "data_type":"int",
                                "description":"Quantity issued",
                            },
                            {
                                "parameter_name":"ReservedQty",
                                "data_type":"int",
                                "description":"Quantity Reserved",
                            },
                            {
                                "parameter_name":"RemainQty",
                                "data_type":"int",
                                "description":"Quantity Remain",
                            },
                            {
                                "parameter_name":"Unit",
                                "data_type":"string",
                                "description":"Item unit",
                            },
                            {
                                "parameter_name":"ExpireDate",
                                "data_type":"datetime",
                                "description":"Expiry Date",
                            },
                            {
                                "parameter_name":"CreatedDateTime",
                                "data_type":"datetime",
                                "description":"Date Created",
                            },
                            {
                                "parameter_name":"CreatedUserKey",
                                "data_type":"int",
                                "description":"Batch Created User Primary Key",
                            },
                            {
                                "parameter_name":"CreatedUserFullname",
                                "data_type":"String",
                                "description":"Full Name of Batch Created User",
                            },
                            {
                                "parameter_name":"ModifiedDateTime",
                                "data_type":"datetime",
                                "description":"Modified Date",
                            },
                            {
                                "parameter_name":"ModifiedUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Batch Modified",
                            },
                            {
                                "parameter_name":"ModifiedUserFullName",
                                "data_type":"string",
                                "description":"Full name of Batch Modified User",
                            },
                            {
                                "parameter_name":"Hidden",
                                "data_type":"boolean",
                                "description":"Batch Hidden status. Batches with Hidden status will not be available for other Services or Applications [1: Hidden, 0: Not Hidden]",
                            },
                            {
                                "parameter_name":"VendorKey",
                                "data_type":"int",
                                "description":"Supply Vendor Key",
                            },
                            {
                                "parameter_name":"VendorName",
                                "data_type":"string",
                                "description":"Supply Vendor Key Corresponding Vendor Name (for VendorKey)",
                            },
                            {
                                "parameter_name":"InvoiceReference",
                                "data_type":"string",
                                "description":"Invoice Reference Number",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "BatchID":"Batch001", 
                        "RemainQty": "21"
                    }
                ]
            },
            "error_handling":[
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Object Referance Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [
                                ["bk"]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//Get Store Items
            "api_name":"Get Store Items",
            "api_description":"This API returns all the Items belong to a Store",
            "curl":`curl -X GET “http://GenAPI.com/vis/inventory/v1/stores/1/items? max=10&last=5&fields=StoreKey,ItemTypeKey,ItemName,ItemKey -H    "Authorization: APIKEY <GenAPI API key>" `,
            "api_code":"3.11.13",
            "http_method":"GET",
            "path":"/inventory/v1/stores/{stk}/items",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{stk}",
                        "data_type":"int",
                        "description":"Store Key"
                    }
                ]
            },
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "query_string":{
                "title":"Query String",
                "parameters":[
                    {
                        "parameter_name":"max",
                        "data_type":"int",
                        "description":"Number of records need to be retrieved at once",
                        "default_value":"8"
                    },
                    {
                        "parameter_name":"last",
                        "data_type":"int",
                        "description":"Last Record retrieved",
                        "default_value":"0"
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string",
                    },
                    {
                        "parameter_name":"q",
                        "data_type":"string",
                        "description":"SQL Like search on Item Name",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Items Search Page"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "header":{
                        "title":"Response Headers",
                        "parameters":[
                            {
                                "parameter_name":"X-Total-Count",
                                "data_type":"int",
                                "description":"Total record count available in the system according to the given filters."
                            }
                        ]
                    },
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"StoreKey",
                                "data_type":"int",
                                "description":"Store Primary Key",
                            },
                            {
                                "parameter_name":"StoreName",
                                "data_type":"string",
                                "description":"Name of Store",
                            },
                            {
                                "parameter_name":"ItemKey",
                                "data_type":"int",
                                "description":"Item Primary Key",
                            },
                            {
                                "parameter_name":"ItemName",
                                "data_type":"string",
                                "description":"Name of the Item (refer to Item Code from UI)",
                            },
                            {
                                "parameter_name":"ItemDescription",
                                "data_type":"string",
                                "description":"Description About the item",
                            },
                            {
                                "parameter_name":"ItemTypeKey",
                                "data_type":"int",
                                "description":"Primary key of corresponding Item Type",
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Primary key of the corresponding Site",
                            },
                            {
                                "parameter_name":"ItemClass",
                                "data_type":"int",
                                "description":"Class which the Item Belongs",
                            },
                            {
                                "parameter_name":"IssuableQuantity",
                                "data_type":"string",
                                "description":"Issuable Quantity",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "StoreKey": "1", 
                        "ItemTypeKey": "1", 
                        "ItemName":"Item 1", 
                        "ItemKey":"1"
                    },
                    {
                        "StoreKey": "1", 
                        "ItemTypeKey": "51", 
                        "ItemName":"Item 2", 
                        "ItemKey":"2"
                    },
                    {
                        "StoreKey": "1", 
                        "ItemTypeKey": "9", 
                        "ItemName":"Item 3", 
                        "ItemKey":"3"
                    },
                    {
                        "StoreKey": "1", 
                        "ItemTypeKey": "5", 
                        "ItemName":"Item 4", 
                        "ItemKey":"4"
                    },                        
                ]                        
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "max", "ValidDataType": "INT"}, 
                                {"Field": "last", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [{"Field": "max", "ValidDataType": "INT"}]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Object Referance Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [["stk"]]
                        }
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//Stock Adjustment
            "api_name":"Stock Adjustment",
            "api_description":"This API allows you to adjust Batch in the system",
            "curl":`curl -X POST “http://GenAPI.com/vis/inventory/v1/stores/1/adjustments” -H    "Authorization: APIKEY <GenAPI API key>” -H "Content-Type: application/json" --data '{"RemainQty":"9","IssuedQty":"3","BatchUnitPrice":"35.00","StoreLocationKey":"6"}'`,
            "api_code":"3.11.14",
            "http_method":"POST",
            "path":"inventory/v1/stores/{stk}/adjustments",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{stk}",
                        "data_type":"int",
                        "description":"Store Key"
                    }
                ]
            },
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    },
                    {
                        "parameter_name":"Content-Type",
                        "example":"application/json",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "payload":{
                "title":"Payload",
                "parameters":[
                    {
                        "parameter_name":"ItemKey",
                        "data_type":"int",
                        "description":"Store Item Key",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"BatchKey",
                        "data_type":"int",
                        "description":"Batch Key that needs to be adjusted",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"RequestByUserKey",
                        "data_type":"int",
                        "description":"Requesting User Key",
                    },
                    {
                        "parameter_name":"RemainQty",
                        "data_type":"float",
                        "description":"Adjustment of Remaining Stock Quantity",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"IssuedQty",
                        "data_type":"float",
                        "description":"Issuing Quantity",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"BatchUnitPrice",
                        "data_type":"float",
                        "description":"Batch Unit Price of Batch",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"StoreLocationKey",
                        "data_type":"int",
                        "description":"Location Key of Store whose current stock is moved. Note that the StoreLocation is NOT the location of the store, but the location within the store into which the batch of items must be moved",
                        "mandatory":{
                            "status":true,
                            "description":"Except when StoreLocationName is provided"
                        }
                    },
                    {
                        "parameter_name":"StoreLocationName",
                        "data_type":"string",
                        "description":"Name of the Location within the Store into which the batch of items must be moved. If StoreLocationKey is provided, the StoreLocationName will be ignored.",
                        "mandatory":{
                            "status":true,
                            "description":"Except when StoreLocationKey is provided"
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to create new Stock Adjustment Request"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"AdjustmentKey",
                                "data_type":"int",
                                "description":"Primary key of Adjustment ",
                            },
                            {
                                "parameter_name":"StoreKey",
                                "data_type":"int",
                                "description":"Primary Key of Store",
                            },
                            {
                                "parameter_name":"SARequestID",
                                "data_type":"string",
                                "description":"Stock adjustment Request ID",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Stock Adjustment Request Created Successfully",
                            }                                
                        ]
                    },
                },
                "example_response":{
                    "Status":"Stock Adjustment Request Created Successfully",
                    "AdjustmentKey":"1",
                    "SARequestID":"INVE20180820001"
                }
                
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Mandatory Validation ",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for mandatory validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of mandatory fields, which are not provided",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["ItemKey"], 
                                ["BatchKey"], 
                                ["RemainQty"], 
                                ["IssuedQty"], 
                                ["BatchUnitPrice"], 
                                ["StoreLocationKey", "StoreLocationName"]
                            ]
                        },
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["ItemKey"], 
                                ["BatchKey"],
                                ["StoreLocationKey", "StoreLocationName"]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "StoreLocationKey", "ValidDataType": "INT"}, 
                                {"Field": "ItemKey,", "ValidDataType": "INT"}, 
                                {"Field": " BatchKey", "ValidDataType": "INT"} , 
                                {"Field": "RequestByUserKey", "ValidDataType": "INT"}, 
                                {"Field": "BatchUnitPrice", "ValidDataType": "FLOAT"}, 
                                {"Field": "IssuedQty", "ValidDataType": "FLOAT"}, 
                                {"Field": "RemainQty", "ValidDataType": "FLOAT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "ItemTypeKey,", "ValidDataType": "INT"}, 
                                {"Field": " IsConsumable", "ValidDataType": "BOOLEAN"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Input Values Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for input value validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Invalid data provided!",
                            "ErrorFields": [
                                [
                                    "BatchKey", 
                                    "ItemKey", 
                                    "stk"
                                ], 
                                [
                                    "RequestByUserKey"
                                ], 
                                [
                                    "StoreLocationName"
                                ]
                            ]
                        },
                        {
                            "ErrorMessage":"Invalid data provided!",
                            "ErrorFields": [
                                [
                                    "BatchKey", 
                                    "ItemKey", 
                                    "stk"
                                ], 
                                [
                                    "RequestByUserKey"
                                ], 
                                [
                                    "StoreLocationKey"
                                ]
                            ]
                        }
                    ]
                },  
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        {
                            "ErrorMessage":"Unable to retrieve login details",
                        }
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Object Referance Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [["stk"]]
                        }
                    ]
                },
                {
                    "error_code":"406",
                    "error_response_type":"JSON",
                    "error_category":"Content Type Error",
                    "examples":[
                        "Invalid content type 'text/plain'"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                       {"ErrorMessage":"Internal Server Error"} 
                    ]
                }
            ]
        },  
        {//Get Adjustments 
            "api_name":"Get Adjustments",
            "api_description":"This API returns all the Item Batch Adjustments belong to a Store.",
            "curl":`curl -X GET “http://GenAPI.com/vis/inventory/v1/batch/ {1}/adjustments? max=10& last=5& fields= AdjustmentKey, ItemName, RemainQty, CurrentStockQty” -H    "Authorization: APIKEY <GenAPI API key>" `,
            "api_code":"3.11.15",
            "http_method":"GET",
            "path":"/inventory/v1/stores/{stk}/adjustments",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{stk}",
                        "data_type":"int",
                        "description":"Store Key"
                    }
                ]
            },
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "query_string":{
                "title":"Query String",
                "parameters":[
                    {
                        "parameter_name":"max",
                        "data_type":"int",
                        "description":"Number of records need to be retrieved at once",
                        "default_value":"8"
                    },
                    {
                        "parameter_name":"last",
                        "data_type":"int",
                        "description":"Last Record retrieved",
                        "default_value":"0"
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string",
                    },
                    {
                        "parameter_name":"q",
                        "data_type":"string",
                        "description":"Text filter on Stock Adjustment Request ID (SQL like search will be performed)",
                    } 
                ]
            },
            "user_roles":[
                "Allow to view Stock Adjustment Request Search Page"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "header":{
                        "title":"Response Headers",
                        "parameters":[
                            {
                                "parameter_name":"X-Total-Count",
                                "data_type":"int",
                                "description":"Total record count available in the system according to the given filters."
                            }
                        ]
                    },
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"AdjustmentKey",
                                "data_type":"int",
                                "description":"Adjustment Key",
                            },
                            {
                                "parameter_name":"SARequestID",
                                "data_type":"string ",
                                "description":"Stock Adjustment Request ID",
                            },
                            {
                                "parameter_name":"ItemKey",
                                "data_type":"int",
                                "description":"Store Item Key",
                            },
                            {
                                "parameter_name":"ItemName",
                                "data_type":"string",
                                "description":"Corresponding Item Name (for ItemKey) (refer to Item Code from UI)",
                            },
                            {
                                "parameter_name":"BatchKey",
                                "data_type":"int",
                                "description":"Batch Key that need to adjust",
                            },
                            {
                                "parameter_name":"BatchID",
                                "data_type":"string",
                                "description":"Corresponding Batch ID (for BatchKey)",
                            },
                            {
                                "parameter_name":"RequestByUserKey",
                                "data_type":"int",
                                "description":"Requesting User Key",
                            },
                            {
                                "parameter_name":"RequestByUserFullName",
                                "data_type":"string",
                                "description":"Corresponding User Full Name (for RequestByUserKey)",
                            },
                            {
                                "parameter_name":"RemainQty",
                                "data_type":"float",
                                "description":"Remaining Quantity",
                            },
                            {
                                "parameter_name":"IssuedQty",
                                "data_type":"float",
                                "description":"Quantity Issued",
                            },
                            {
                                "parameter_name":"BatchUnitPrice",
                                "data_type":"float",
                                "description":"Unit Price of a Batch",
                            },
                            {
                                "parameter_name":"StoreLocationKey",
                                "data_type":"int",
                                "description":"New Store Location Key",
                            },
                            {
                                "parameter_name":"StoreLocationFullName",
                                "data_type":"string",
                                "description":"New Store Location Full Name",
                            },
                            {
                                "parameter_name":"VendorKey",
                                "data_type":"int",
                                "description":"Primary Key of Vendor",
                            },
                            {
                                "parameter_name":"VendorName",
                                "data_type":"String",
                                "description":"Vendor Name",
                            },
                            {
                                "parameter_name":"InvoiceReference",
                                "data_type":"string",
                                "description":"Invoice Reference ",
                            },
                            {
                                "parameter_name":"CurrentStockQty",
                                "data_type":"float",
                                "description":"Quantity of Current Stock",
                            },
                            {
                                "parameter_name":"CurrentIssuedQty",
                                "data_type":"float",
                                "description":"Issued Quantity of Current Stock",
                            },
                            {
                                "parameter_name":"CurrentBatchUnitPrice",
                                "data_type":"float",
                                "description":"Unit Price of Current Stock",
                            },
                            {
                                "parameter_name":"CurrentStoreLocationKey",
                                "data_type":"int",
                                "description":"Stored Location of Current Stock",
                            },
                            {
                                "parameter_name":"CurrentStoreLocationFullName",
                                "data_type":"string",
                                "description":"Current Store Location Full Name",
                            },
                            {
                                "parameter_name":"StoreKey",
                                "data_type":"int",
                                "description":"Store Key",
                            },
                            {
                                "parameter_name":"StoreName",
                                "data_type":"string",
                                "description":"Corresponding Store Name  (for StoreKey)",
                            },
                            {
                                "parameter_name":"IsApproved",
                                "data_type":"int",
                                "description":"Approval Status [1: approved, 0 : not approved]",
                            },
                            {
                                "parameter_name":"IsReject",
                                "data_type":"int",
                                "description":"Determine adjustment rejected  [1: rejected , 0 : not rejected]",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "AdjusmentKey":"25",
                        "ItemName":"Computers",
                        "RemainQty":"25", 
                        "CurrentStockQty":"50"
                    },
                    {
                        "AdjusmentKey":"26",
                        "ItemName":"Bulbs",
                        "RemainQty":"90", 
                        "CurrentStockQty":"110"
                    },
                    {
                        "AdjusmentKey":"27",
                        "ItemName":"Locks",
                        "RemainQty":"75", 
                        "CurrentStockQty":"120"
                    },
                    {
                        "AdjusmentKey":"28",
                        "ItemName":"Mouse",
                        "RemainQty":"250", 
                        "CurrentStockQty":"500"
                    }

                ]
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}, 
                                {"Field": "max", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "max", "ValidDataType": "INT"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Object Referance Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [
                                ["stk"]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },   
        {//Get Adjustment Details
            "api_name":"Get Adjustment Details",
            "api_description":"This API returns all the Items belong to a Store",
            "curl":`curl -X GET “http://GenAPI.com/vis/inventory/v1/batch/1/adjustments/3? fields= AdjustmentKey, ItemName, RemainQty, CurrentStockQty” -H    "Authorization: APIKEY <GenAPI API key>" `,
            "api_code":"3.11.16",
            "http_method":"GET",
            "path":"/inventory/v1/stores/{stk}/adjustments/{ajk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{stk}",
                        "data_type":"int",
                        "description":"Store Key"
                    },
                    {
                        "parameter_name":"{ajk}",
                        "data_type":"int",
                        "description":"Adjustment Key"
                    }
                ]
            },
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "query_string":{
                "title":"Query String",
                "parameters":[
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string",
                    }   
                ]
            },
            "user_roles":[
                "Allow to view Stock Adjustment Request Details"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"AdjustmentKey",
                                "data_type":"int",
                                "description":"Adjustment Key",
                            },
                            {
                                "parameter_name":"SARequestID",
                                "data_type":"string ",
                                "description":"Stock Adjustment Request ID",
                            },
                            {
                                "parameter_name":"ItemKey",
                                "data_type":"int",
                                "description":"Store Item Key",
                            },
                            {
                                "parameter_name":"ItemName",
                                "data_type":"string",
                                "description":"Corresponding Item Name (for ItemKey) (refer to Item Code from UI)",
                            },
                            {
                                "parameter_name":"BatchKey",
                                "data_type":"int",
                                "description":"Batch Key that need to adjust",
                            },
                            {
                                "parameter_name":"BatchID",
                                "data_type":"string",
                                "description":"Corresponding Batch ID (for BatchKey)",
                            },
                            {
                                "parameter_name":"RequestByUserKey",
                                "data_type":"int",
                                "description":"Requesting User Key",
                            },
                            {
                                "parameter_name":"RequestByUserFullName",
                                "data_type":"string",
                                "description":"Corresponding User Full Name (for RequestByUserKey)",
                            },
                            {
                                "parameter_name":"RemainQty",
                                "data_type":"float",
                                "description":"Remaining Quantity",
                            },
                            {
                                "parameter_name":"IssuedQty",
                                "data_type":"float",
                                "description":"Quantity Issued",
                            },
                            {
                                "parameter_name":"BatchUnitPrice",
                                "data_type":"float",
                                "description":"Unit Price of a Batch",
                            },
                            {
                                "parameter_name":"StoreLocationKey",
                                "data_type":"int",
                                "description":"New Store Location Key",
                            },
                            {
                                "parameter_name":"StoreLocationFullName",
                                "data_type":"string",
                                "description":"New Store Location Full Name",
                            },
                            {
                                "parameter_name":"VendorKey",
                                "data_type":"int",
                                "description":"Primary Key of Vendor",
                            },
                            {
                                "parameter_name":"VendorName",
                                "data_type":"String",
                                "description":"Vendor Name",
                            },
                            {
                                "parameter_name":"InvoiceReference",
                                "data_type":"string",
                                "description":"Invoice Reference ",
                            },
                            {
                                "parameter_name":"CurrentStockQty",
                                "data_type":"float",
                                "description":"Quantity of Current Stock",
                            },
                            {
                                "parameter_name":"CurrentIssuedQty",
                                "data_type":"float",
                                "description":"Issued Quantity of Current Stock",
                            },
                            {
                                "parameter_name":"CurrentBatchUnitPrice",
                                "data_type":"float",
                                "description":"Unit Price of Current Stock",
                            },
                            {
                                "parameter_name":"CurrentStoreLocationKey",
                                "data_type":"int",
                                "description":"Stored Location of Current Stock",
                            },
                            {
                                "parameter_name":"CurrentStoreLocationFullName",
                                "data_type":"string",
                                "description":"Current Store Location Full Name",
                            },
                            {
                                "parameter_name":"StoreKey",
                                "data_type":"int",
                                "description":"Store Key",
                            },
                            {
                                "parameter_name":"StoreName",
                                "data_type":"string",
                                "description":"Corresponding Store Name  (for StoreKey)",
                            },
                            {
                                "parameter_name":"IsApproved",
                                "data_type":"int",
                                "description":"Approval Status [1: approved, 0 : not approved]",
                            },
                            {
                                "parameter_name":"IsReject",
                                "data_type":"int",
                                "description":"Determine adjustment rejected  [1: rejected , 0 : not rejected]",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "AdjusmentKey":"1", 
                        "ItemName": "Computers", 
                        "RemainQty": "25", 
                        "CurrentStockQty": "50"
                    }
                ]
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}, 
                                {"Field": "max", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "max", "ValidDataType": "INT"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Object Referance Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [
                                ["ajk","stk"]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },    
        {//Stock Adjustment Approve
            "api_name":"Stock Adjustment Approve",
            "api_description":"This API allows you to approve adjustment request",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/inventory/v1/stores/1/adjustments/12” -H    "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.11.17",
            "http_method":"PATCH",
            "path":"/inventory/v1/stores/{stk}/adjustments/{ajk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{stk}",
                        "data_type":"int",
                        "description":"Store Key"
                    },
                    {
                        "parameter_name":"{ajk}",
                        "data_type":"int",
                        "description":"Adjustment Key"
                    }
                ]
            },
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    },
                    {
                        "parameter_name":"Content-Type",
                        "example":"application/json",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to approve Stock Adjustment Requests"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"AdjustmentKey",
                                "data_type":"int",
                                "description":"Primary key of Adjustment ",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Stock Adjustment Request Approved Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"Stock Adjustment Request Approved Successfully",
                    "AdjustmentKey":"12",
                }
                
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {
                                    "Field": "stk",
                                    "ValidDataType": "INT"
                                },
                                {
                                    "Field": "ajk",
                                    "ValidDataType": "INT"
                                }
                              
                            ]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        {
                            "ErrorMessage":"Unable to retrieve login details",
                        }
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Object Referance Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [["ajk","stk"]]
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Object Referance Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [["stk","ajk"]]
                        }
                    ]
                },
                {
                    "error_code":"406",
                    "error_response_type":"JSON",
                    "error_category":"Content Type Error",
                    "examples":[
                        "Invalid content type 'text/plain'"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                       {"ErrorMessage":"Internal Server Error"} 
                    ]
                }
            ]
        },  
        {//Stock Adjustment Reject
            "api_name":"Stock Adjustment Reject",
            "api_description":"This API allows you to approve adjustment request",
            "curl":`curl -X DELETE “http://GenAPI.com/vis/inventory/v1/stores/1/adjustments/12” -H    "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.11.18",
            "http_method":"DELETE",
            "path":"/inventory/v1/stores/{stk}/adjustments/{ajk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{stk}",
                        "data_type":"int",
                        "description":"Store Key"
                    },
                    {
                        "parameter_name":"{ajk}",
                        "data_type":"int",
                        "description":"Adjustment Key"
                    }
                ]
            },
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    },
                    {
                        "parameter_name":"Content-Type",
                        "example":"application/json",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to reject Stock Adjustment Requests"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"AdjustmentKey",
                                "data_type":"int",
                                "description":"Primary key of Adjustment ",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Stock Adjustment Request Rejected Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"Stock Adjustment Request Rejected Successfully",
                    "AdjustmentKey":"12",
                }
                
            },
            "error_handling":[
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        {
                            "ErrorMessage":"Unable to retrieve login details",
                        }
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Object Referance Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [["stk","ajk"]]
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Object Referance Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [["ajk","stk"]]
                        }
                    ]
                },
                {
                    "error_code":"406",
                    "error_response_type":"JSON",
                    "error_category":"Content Type Error",
                    "examples":[
                        "Invalid content type 'text/plain'"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                       {"ErrorMessage":"Internal Server Error"} 
                    ]
                }
            ]
        },   
        {//Create Store Location Type
            "api_name":"Create Store Location Type",
            "api_description":"This API allows creating a Store Location Type in the system.",
            "curl":`curl -X POST “http://GenAPI.com/vis/Inventory/v1/storelocationtypes” -H "Authorization: APIKEY <GenAPI API key>" -H "Content-Type: application/json" --data '{ “StoreLocationType “:”StoreLocationType1”}'`,
            "api_code":"3.11.19",
            "http_method":"POST",
            "path":"/inventory/v1/storelocationtypes",
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    },
                    {
                        "parameter_name":"Content-Type",
                        "example":"application/json",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "payload":{
                "title":"Payload",
                "parameters":[
                    {
                        "parameter_name":"StoreLocationType",
                        "data_type":"string",
                        "description":"Name of the new Store Location Type to be created.",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to configure Store Location Types"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"StoreLocationTypeKey",
                                "data_type":"int",
                                "description":"Primary Key of the New Store Location Type",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Store Location Type Created Successfully ",
                            }
                        ]
                    },
                },
                "example_response":{
                    "StoreLocationTypeKey":"7",
                    "status":"Store Location Type Created Successfully"
                }
                
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Mandatory Validation ",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for mandatory validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of mandatory fields, which are not provided",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["StoreLocationType"]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message occurs when try to create Store Location Type which is already exists",
                        } 
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Given StoreLocationType is already exists!"
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Text Field Maximum Length Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for the maximum length of text field validation.",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Valid maximum character length has been exceeded!",
                            "ErrorFields": [
                                {"Field": "StoreLocationType", "ValideLength": "255"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        {
                            "ErrorMessage":"Unable to retrieve login details",
                        }
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"406",
                    "error_response_type":"JSON",
                    "error_category":"Content Type Error",
                    "examples":[
                        "Invalid content type 'text/plain'"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                       {"ErrorMessage":"Internal Server Error"} 
                    ]
                }
            ]
        },            
        {//Get Store Location Types
            "api_name":"Get Store Location Types",
            "api_description":"This API returns all the Store Location Types configured in the system",
            "curl":`curl -X GET “http://GenAPI.com/vis/Inventory/v1/storelocationtypes” -H "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.11.20",
            "http_method":"GET",
            "path":"/inventory/v1/storelocationtypes",
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "query_string":{
                "title":"Query String",
                "parameters":[
                    {
                        "parameter_name":"max",
                        "data_type":"int",
                        "description":"Number of records need to be retrieved at once",
                        "default_value":"8"
                    },
                    {
                        "parameter_name":"last",
                        "data_type":"int",
                        "description":"Last Record retrieved",
                        "default_value":"0"
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string",
                    },
                    {
                        "parameter_name":"q",
                        "data_type":"string",
                        "description":"Special Location search function performs to get most likelyhood results on the following fields StoreLocationType",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Store Location Types Search Page"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "header":{
                        "title":"Response Headers",
                        "parameters":[
                            {
                                "parameter_name":"X-Total-Count",
                                "data_type":"int",
                                "description":"Total record count available in the system according to the given filters."
                            }
                        ]
                    },
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"StoreLocationTypeKey",
                                "data_type":"int",
                                "description":"Primary Key of the Store Location Type",
                            },
                            {
                                "parameter_name":"StoreLocationType",
                                "data_type":"string",
                                "description":"Name of the Store Location Type",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "StoreLocationType": "Rack", 
                        "StoreLocationTypeKey": "1"
                    },
                    {
                        "StoreLocationType": "Cabinet", 
                        "StoreLocationTypeKey": "2"
                    }                       
                ]                        
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "max", "ValidDataType": "INT"}, 
                                {"Field": "last", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [{"Field": "max", "ValidDataType": "INT"}]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//Create Store Location
            "api_name":"Create Store Location",
            "api_description":"This API allows creating a Store Location in the system",
            "curl":`curl -X POST “http://GenAPI.com/vis/Inventory/v1/storelocations” -H "Authorization: APIKEY <GenAPI API key>" -H "Content-Type: application/json" --data '{ "StoreLocationName": "Rack01", "StoreLocationTypeKey": "1", "StoreKey": "2", "ParentLocationKey": "1", "LocationFullName": "Space01.Cupbourd01.Rack01" }'`,
            "api_code":"3.11.21",
            "http_method":"POST",
            "path":"/inventory/v1/storelocations",
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    },
                    {
                        "parameter_name":"Content-Type",
                        "example":"application/json",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "payload":{
                "title":"Payload",
                "parameters":[
                    {
                        "parameter_name":"StoreLocationName",
                        "data_type":"string",
                        "description":"Name of the new Store Location to be created.",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"StoreLocationTypeKey",
                        "data_type":"int",
                        "description":"Type of the new Store Location. Must be an existing Store Location Type, configured in the system. Existing Store Location Type Keys can be retrieved by calling. GET/Inventory/v1/storelocationtypes",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"StoreKey",
                        "data_type":"int",
                        "description":"Primary Key of the Store in which the Store Location must be added.Existing Store Keys can be retrieved by calling.GET/Inventory/v1/stores",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"ParentLocationKey",
                        "data_type":"int",
                        "description":"Key of the Parent Store Location."
                    },
                    {
                        "parameter_name":"LocationFullName",
                        "data_type":"string",
                        "description":"Store Location Full Name according to the hierarchy.",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to configure Store Locations"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"StoreLocationKey",
                                "data_type":"int",
                                "description":"Primary Key of the New Store Location",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Store Location Created Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "status":"Store Location Created Successfully",
                    "StoreLocationTypeKey":"12"
                }
                
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Mandatory Validation ",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for mandatory validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of mandatory fields, which are not provided",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                [
                                    "StoreLocationName"
                                ], 
                                [
                                    "StoreLocationTypeKey", "StoreLocationType"
                                ], 
                                [
                                    "StoreKey"
                                ], 
                                [
                                    "LocationFullName"
                                ]
                            ]
                        },
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                [
                                    "StoreLocationName"
                                ], 
                                [
                                    "StoreLocationTypeKey", "StoreLocationType"
                                ]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "StoreLocationTypeKey", "ValidDataType": "INT"}, 
                                {"Field": "StoreKey", "ValidDataType": "INT"}, 
                                {"Field": "ParentLocationKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "StoreKey", "ValidDataType": "INT"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Input Values Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for input value validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data provided!",
                            "ErrorFields": [
                                ["StoreLocationTypeKey"], 
                                ["StoreKey"], 
                                ["ParentLocationKey"]
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data provided!",
                            "ErrorFields": [
                                [
                                    "StoreLocationTypeKey"
                                ]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message occurs when try to create Store Location Type which is already exists",
                        } 
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Given StoreLocationName is already exists!"
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Text Field Maximum Length Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for the maximum length of text field validation.",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Valid maximum character length has been exceeded!",
                            "ErrorFields": [
                                {"Field": "StoreLocationName", "ValideLength": "255"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        {
                            "ErrorMessage":"Unable to retrieve login details",
                        }
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"406",
                    "error_response_type":"JSON",
                    "error_category":"Content Type Error",
                    "examples":[
                        "Invalid content type 'text/plain'"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                       {"ErrorMessage":"Internal Server Error"} 
                    ]
                }
            ]
        },
        {//Get Store Locations
            "api_name":"Get Store Locations",
            "api_description":"This API returns all the Store Location Types configured in the system",
            "curl":`curl -X GET “http://GenAPI.com/vis/Inventory/v1/storelocations” -H "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.11.22",
            "http_method":"GET",
            "path":"/inventory/v1/storelocations",
            "header":{
                "title":"Headers",
                "parameters":[
                    {
                        "parameter_name":"Authorization",
                        "example":"APIKEY <GenAPI API key>",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "query_string":{
                "title":"Query String",
                "parameters":[
                    {
                        "parameter_name":"max",
                        "data_type":"int",
                        "description":"Number of records need to be retrieved at once",
                        "default_value":"8"
                    },
                    {
                        "parameter_name":"last",
                        "data_type":"int",
                        "description":"Last Record retrieved",
                        "default_value":"0"
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string",
                    },
                    {
                        "parameter_name":"q",
                        "data_type":"string",
                        "description":"Special Location search function performs to get most likelyhood results on the following fields; StoreLocationFullName, StoreLocationName",
                    },
                    {
                        "parameter_name":"StoreLocationTypeKey",
                        "data_type":"int",
                        "description":"When filter is applied, it will filter Store Locations of this Store Location Type. Existing Store Location Type Keys can be retrieved by calling. GET/Inventory/v1/storelocationtypes",
                    },
                    {
                        "parameter_name":"StoreKey",
                        "data_type":"int",
                        "description":"When filter is applied, it will list all the Store Locations of this Store. Existing Store Keys can be retrieved by calling.GET/Inventory/v1/stores",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Store Locations Search Page"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "header":{
                        "title":"Response Headers",
                        "parameters":[
                            {
                                "parameter_name":"X-Total-Count",
                                "data_type":"int",
                                "description":"Total record count available in the system according to the given filters."
                            }
                        ]
                    },
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"StoreLocationKey",
                                "data_type":"int",
                                "description":"Primary Key of the Store Location",
                            },
                            {
                                "parameter_name":"StoreLocationName",
                                "data_type":"string",
                                "description":"Name of the Store Location",
                            },
                            {
                                "parameter_name":"ParentStoreLocationKey",
                                "data_type":"int",
                                "description":"Primary Key of the Parent Store Location",
                            },
                            {
                                "parameter_name":"StoreLocationFullname",
                                "data_type":"string",
                                "description":"Full Name of the Store Location ",
                            },
                            {
                                "parameter_name":"StoreKey",
                                "data_type":"int",
                                "description":"Primary Key of the Store of the Store Location",
                            },
                            {
                                "parameter_name":"StoreLocationTypeKey",
                                "data_type":"int",
                                "description":"Primary Key of the Store Location Type of the Store Location.",
                            },
                            {
                                "parameter_name":"StoreLocationType",
                                "data_type":"string",
                                "description":"Type of the Store Location",
                            },
                            {
                                "parameter_name":"StoreName",
                                "data_type":"string",
                                "description":"Store Name of the Store Location",
                            },
                            {
                                "parameter_name":"StoreLocationParentName",
                                "data_type":"string",
                                "description":"Name of the Parent Store Location",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "StoreLocationKey": "12", 
                        "StoreLocationKey": "ST_location",
                        "ParentStoreLocationKey": "2",
                        "StoreLocationFullname": "ST_location", 
                        "StoreKey": "1",
                        "StoreLocationTypeKey": "4",
                        "StoreLocationType": "Rack", 
                        "StoreName": "Cyber World",
                        "StoreLocationParentName": "ST1_location"

                    },                  
                ]                        
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}, 
                                {"Field": "max", "ValidDataType": "INT"}, 
                                {"Field": "StoreLocationTypeKey", "ValidDataType": "INT"}, 
                                {"Field": "StoreKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [{"Field": "StoreLocationTypeKey", "ValidDataType": "INT"}]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Type Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for data type validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are not in correct Data Type",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "max", "ValidDataType": "INT"}, 
                                {"Field": "last,", "ValidDataType": "INT"}, 
                                {"Field": " StoreLocationTypeKey", "ValidDataType": "INT"}, 
                                {"Field": "StoreKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": " StoreLocationTypeKey", "ValidDataType": "INT"}, 
                                {"Field": "StoreKey", "ValidDataType": "INT"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Input Values Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for input value validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data provided!",
                            "ErrorFields": [
                                [
                                    "StoreLocationTypeKey"
                                ],
                                [
                                    "StoreKey"
                                ]
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data provided!",
                            "ErrorFields": [
                                [
                                    "StoreKey"
                                ]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"401",
                    "error_response_type":"Text",
                    "error_category":"Authentication Error",
                    "examples":[
                        "Unable to retrieve login details"
                    ]
                },
                {
                    "error_code":"403",
                    "error_response_type":"JSON",
                    "error_category":"User Role Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for User Role validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "The supplied authentication is not authorized to perform the specific action"
                        }
                    ]
                },
                {
                    "error_code":"404",
                    "error_response_type":"JSON",
                    "error_category":"URL Route Error",
                    "examples":[
                        "No resource found to process API request"
                    ]
                },
                {
                    "error_code":"500",
                    "error_response_type":"JSON/Text",
                    "error_category":"Server Error",
                    "examples":[
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },            
    ]
}