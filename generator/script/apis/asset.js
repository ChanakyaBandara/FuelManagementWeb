const AssetAPIs =  {//Asset Management
    "app_name":"Asset Management",
    "app_code":"3.15",
    "application_description":"",
    "apis":[
        {//Get Assets
            "api_name":"Get Assets",
            "api_description":"This API returns all the Assets configured in the system",
            "curl":`curl -X GET “http://GenAPI.com/vis/asset/v1/assets?max=5&last=0&fields=LocationKey,LocationName,FullName,LocationType,LocationTypeKey” -H    "Authorization: APIKEY <GenAPI API key>"  `,
            "api_code":"3.15.1",
            "http_method":"GET",
            "path":"/asset/v1/assets",
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
                        "parameter_name":"AssetCategoryKey",
                        "data_type":"int",
                        "description":"Key of Asset Category"
                    },
                    {
                        "parameter_name":"OperationalStatus",
                        "data_type":"string",
                        "description":"Operational Status of Asset [Operational, Non-Operational]"
                    },
                    {
                        "parameter_name":"WarrantyStatus",
                        "data_type":"string",
                        "description":"Warranty Status of Asset [Yes : No] "
                    },
                    {
                        "parameter_name":"LocationKey",
                        "data_type":"int",
                        "description":"All Assets underneath this Location"
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
                        "description":"Fields to be returned in a comma separated string"
                    },
                    {
                        "parameter_name":"q",
                        "data_type":"string",
                        "description":"Text filter on Asset Name, (This Search works similar to the mechanism in SQL search/ Google search)"
                    }
                ]
            },
            "user_roles":[
                "Allow to view Assets Search Page"
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
                                "parameter_name":"AssetKey",
                                "data_type":"int",
                                "description":"Primary Key of Asset"
                            },
                            {
                                "parameter_name":"AssetID",
                                "data_type":"string",
                                "description":"Name of the Asset"
                            },
                            {
                                "parameter_name":"AssetCategoryKey",
                                "data_type":"int",
                                "description":"Key of Asset Category."
                            },
                            {
                                "parameter_name":"AssetCategory",
                                "data_type":"string",
                                "description":"Corresponding Asset Category (for AssetCategoryKey)"
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description of the Asset"
                            },
                            {
                                "parameter_name":"OperationalStatus",
                                "data_type":"string",
                                "description":"Status whether the asset is Operational or Not.(Return values: Operational | Non-Operational)"
                            },
                            {
                                "parameter_name":"AssetGroupKey",
                                "data_type":"int",
                                "description":"Key of the Asset Group"
                            },
                            {
                                "parameter_name":"AssetGroup",
                                "data_type":"string",
                                "description":"Corresponding Asset Group Name (for AssetGroupKey)"
                            },
                            {
                                "parameter_name":"IsMobile",
                                "data_type":"boolean",
                                "description":"Returns whether the asset is Movable or not [Movable :1 - Not Movable :0]"
                            },
                            {
                                "parameter_name":"InstalledLocationKey",
                                "data_type":"int",
                                "description":"Key of the Asset Installed Location"
                            },
                            {
                                "parameter_name":"InstalledLocation",
                                "data_type":"string",
                                "description":"Full name of the Asset Installed Location"
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "AssetKey":"1", 
                        "AssetID": "AHU1", 
                        "OperationalStatus": "Operational", 
                        "AssetCategory": "AHU",
                        "AssetCategoryKey": "1"
                    },
                    {
                        "AssetKey":"2", 
                        "AssetID": "FCU1", 
                        "OperationalStatus": "Operational", 
                        "AssetCategory": "FCU",
                        "AssetCategoryKey": "2"
                    },
                    {
                        "AssetKey":"3", 
                        "AssetID": "Chiller1", 
                        "OperationalStatus": "Operational", 
                        "AssetCategory": "Chiller",
                        "AssetCategoryKey": "3"
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
                                {"Field": "last", "ValidDataType": "INT"}, 
                                {"Field": "AssetCategoryKey", "ValidDataType": "INT"}, 
                                {"Field": "LocationKey", "ValidDataType": "INT"}
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
        {//Get Asset Details
            "api_name":"Get Asset Details",
            "api_description":"This API returns details of the Asset configured in the system",
            "curl":`curl -X GET “http://GenAPI.com/vis//asset/v1/assets/1/fields= AssetKey, AssetID, AssetCategory, AssetCategoryKey,OperationalStatus” -H "Authorization: APIKEY <GenAPI API key>"  `,
            "api_code":"3.15.2",
            "http_method":"GET",
            "path":"/asset/v1/assets/{ak}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{ak}",
                        "data_type":"int",
                        "description":"Asset Key"
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
                        "description":"Fields to be returned in a comma separated string.If any specific field is not specified, API will return all the Default fields",
                    }   
                ]
            },
            "user_roles":[
                "Allow to view Asset Details"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"AssetKey",
                                "data_type":"int",
                                "description":"Primary Key of Asset"
                            },
                            {
                                "parameter_name":"AssetID",
                                "data_type":"string",
                                "description":"Name of the Asset"
                            },
                            {
                                "parameter_name":"AssetCategoryKey",
                                "data_type":"int",
                                "description":"Key of Asset Category."
                            },
                            {
                                "parameter_name":"AssetCategory",
                                "data_type":"string",
                                "description":"Corresponding Asset Category (for AssetCategoryKey)"
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description of the Asset"
                            },
                            {
                                "parameter_name":"OperationalStatus",
                                "data_type":"string",
                                "description":"Status whether the asset is Operational or Not.(Return values: Operational | Non-Operational)"
                            },
                            {
                                "parameter_name":"AssetGroupKey",
                                "data_type":"int",
                                "description":"Key of the Asset Group"
                            },
                            {
                                "parameter_name":"AssetGroup",
                                "data_type":"string",
                                "description":"Corresponding Asset Group Name (for AssetGroupKey)"
                            },
                            {
                                "parameter_name":"IsMobile",
                                "data_type":"boolean",
                                "description":"Returns whether the asset is Movable or not [Movable :1 - Not Movable :0]"
                            },
                            {
                                "parameter_name":"InstalledLocationKey",
                                "data_type":"int",
                                "description":"Key of the Asset Installed Location"
                            },
                            {
                                "parameter_name":"InstalledLocation",
                                "data_type":"string",
                                "description":"Full name of the Asset Installed Location"
                            },
                            {
                                "parameter_name":"Supplier",
                                "data_type":"string",
                                "description":"Supplier of the asset"
                            },
                            {
                                "parameter_name":"SupplierKey",
                                "data_type":"int",
                                "description":"Primary Key of Vendor Supplier"
                            },
                            {
                                "parameter_name":"Manufacturer",
                                "data_type":"string",
                                "description":"Manufacturer of the asset"
                            },
                            {
                                "parameter_name":"ParentAsset",
                                "data_type":"string",
                                "description":"Parent asset of corresponding asset"
                            },
                            {
                                "parameter_name":"ParentAssetKey",
                                "data_type":"int",
                                "description":"Key of the parent asset"
                            },
                            {
                                "parameter_name":"Barcode",
                                "data_type":"string",
                                "description":"Barcode of the Asset"
                            },
                            {
                                "parameter_name":"InstalledDate",
                                "data_type":"date",
                                "description":"Date of the Asset Installed"
                            },
                            {
                                "parameter_name":"CommissionedDate",
                                "data_type":"date",
                                "description":"Date of the Asset Commissioned"
                            },
                            {
                                "parameter_name":"Owner",
                                "data_type":"string",
                                "description":"Owner of the asset"
                            },
                            {
                                "parameter_name":"Make",
                                "data_type":"string",
                                "description":"Make of the asset"
                            },
                            {
                                "parameter_name":"Model",
                                "data_type":"string",
                                "description":"Model of the asset"
                            },
                            {
                                "parameter_name":"SerialNumber",
                                "data_type":"string",
                                "description":"Serial Number of the asset"
                            },
                            {
                                "parameter_name":"Specification",
                                "data_type":"string",
                                "description":"Specifications of the asset"
                            },
                            {
                                "parameter_name":"WarrantyStatus",
                                "data_type":"boolean",
                                "description":"[Within Warranty :1 – Warranty Expired :0]"
                            },
                            {
                                "parameter_name":"WarrantyExpiry",
                                "data_type":"datetime",
                                "description":"Warranty expiry datetime of the asset"
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "AssetKey":"1", 
                        "AssetID": "AHU1", 
                        "OperationalStatus": "Operational", 
                        "AssetCategory": "AHU",
                        "AssetCategoryKey": "1"
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
                                ["ak"]
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
        {//Update Asset Details
            "api_name":"Update Asset Details",
            "api_description":"This API allows updating the Asset information",
            "curl":`curl -X PATCH http://GenAPI.com/vis/asset/v1/assets/2 -H "Authorization: APIKEY <GenAPI API key>" -H "Content-Type: application/json" --data ' {"AssetID":"FCU1","AssetCategory":"FCU","AssetGroup":"Site1FCU", "Barcode": "B001”, “Manufacturer": "Alerton", ”Description”: "FCU Site 1", InstalledLocation: "Singapore"} '`,
            "api_code":"3.15.3",
            "http_method":"PATCH",
            "path":"/asset/v1/assets/{ak}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{ak}",
                        "data_type":"int",
                        "description":"Primary Key of Asset Key"
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
                        "parameter_name":"AssetID",
                        "data_type":"string",
                        "description":"Name of the Asset",
                        "mandatory":{
                            "status":false
                        }
                    },
                    {
                        "parameter_name":"AssetCategory",
                        "data_type":"string",
                        "description":"Asset Category Name. Can be provided as an alternative to AssetCategoryKey. (If AssetCategoryKey is provided, the AssetCategory attribute will be ignored.)",
                        "mandatory":{
                            "status":false,
                            "description":"If AssetCategoryKey is provided, the AssetCategory attribute will be ignored"
                        }
                    },
                    {
                        "parameter_name":"AssetCategoryKey",
                        "data_type":"int",
                        "description":"Primary Key of Asset Category  " 
                        
                    },
                    {
                        "parameter_name":"OperationalStatus",
                        "data_type":"string",
                        "description":"Operational Status of the asset.[Possible Values: Operational | Non-Operational]"
                    },
                    {
                        "parameter_name":"OperationalStatusChangeComment",
                        "data_type":"string",
                        "description":"Reason to change as Non-Operational",
                        "mandatory":{
                            "status":true,
                            "description":"when OperationalStatus value set to 'Non-Operational'"
                        }
                    },
                    {
                        "parameter_name":"IsMobile",
                        "data_type":"boolean",
                        "description":"Returns whether the asset is Movable or not [Movable : 1 - Not Movable : 0]"
                    },
                    {
                        "parameter_name":"SupplierKey",
                        "data_type":"int",
                        "description":"Primary Key of Vendor Supplier",
                        "references":[
                            {
                                "title":"Refer API 3.4.11 to get Vendors",
                                "app_code":"3.4",
                                "api_code":"3.4.11"
                            }
                        ]
                    },
                    {
                        "parameter_name":"ManufacturerKey",
                        "data_type":"int",
                        "description":"Primary Key of Vendor Manufacturer ",
                        "references":[
                            {
                                "title":"Refer API 3.4.11 to get Vendors",
                                "app_code":"3.4",
                                "api_code":"3.4.11"
                            }
                        ]
                    },
                    {
                        "parameter_name":"ParentAssetKey",
                        "data_type":"int",
                        "description":"Key of the parent asset"
                    },
                    {
                        "parameter_name":"Barcode",
                        "data_type":"string",
                        "description":"Barcode of the Asset"
                    },
                    {
                        "parameter_name":"InstalledDate",
                        "data_type":"date",
                        "description":"Date of the Asset Installed"
                    },
                    {
                        "parameter_name":"CommissionedDate",
                        "data_type":"date",
                        "description":"Date of the Asset Commissioned"
                    },
                    {
                        "parameter_name":"OwnerKey",
                        "data_type":"int",
                        "description":"Primary Key of the Owner Object."
                    },
                    {
                        "parameter_name":"OwnerType",
                        "data_type":"string",
                        "description":"Type of the corresponding Owner",
                        "mandatory":{
                            "status":true,
                            "description":"Only when OwnerKey is Provided."
                        }
                    },
                    {
                        "parameter_name":"Make",
                        "data_type":"string",
                        "description":"Make of the asset"
                    },
                    {
                        "parameter_name":"Model",
                        "data_type":"string",
                        "description":"Model of the asset"
                    },
                    {
                        "parameter_name":"SerialNumber",
                        "data_type":"string",
                        "description":"Serial Number of the asset"
                    },
                    {
                        "parameter_name":"Specification",
                        "data_type":"string",
                        "description":"Serial Number of the asset Specifications of the asset"
                    },
                    {
                        "parameter_name":"InstalledLocationKey",
                        "data_type":"int",
                        "description":"Key of the Asset Installed Location"
                    },
                    {
                        "parameter_name":"InstalledLocation",
                        "data_type":"string",
                        "description":"Full name of the Asset Installed Location"
                    },
                    {
                        "parameter_name":"Description",
                        "data_type":"string",
                        "description":"Description about the Asset."
                    }
                ]
            },
            "user_roles":[
                "Allow to modify Assets"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"AssetKey",
                                "data_type":"int",
                                "description":"Primary Key of Updated Asset",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Asset Updated Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "AssetKey":"2",
                    "Status":"Asset  Updated Successfully"
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
                            "param_value":"List of mandatory fields, which are not provided empty values",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["RequesterObjectType"], 
                                ["RequesterObjectKey"], 
                                ["ServiceCategoryKey", "ServiceCategoryName"], 
                                ["ProblemTypeKey", "ProblemTypeName"], 
                                ["LocationKey"]]
                        },
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["RequesterObjectType"], 
                                ["RequesterObjectKey"], 
                                ["LocationKey"]
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
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "ProblemTypeKey", "ValidDataType": "INT"}, 
                                {"Field": "PriorityKey", "ValidDataType": "INT"}, 
                                {"Field": "RequiredBy", "ValidDataType": "DATE"}
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
                                [["RequesterObjectKey", "RequesterObjectType"]], 
                                ["ReporterKey"], 
                                [[["ProblemTypeKey", "ProblemTypeName"], 
                                ["ServiceCategoryKey", "ServiceCategoryName"]]], 
                                ["LocationKey"], 
                                ["PriorityKey"]
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid data provided!",
                            "ErrorFields": [
                                [["RequesterObjectKey", "RequesterObjectType"]], 
                                ["PriorityKey"]
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
                                {"Field": "LocationName", "ValideLength": "255"}, 
                                {"Field": "SecondName", "ValideLength": "255"}
                            ]
                        },
                        {
                            "ErrorMessage": " Valid maximum character length has been exceeded!",
                            "ErrorFields": [
                                {"Field": "Description", "ValideLength": "1024"}, 
                                {"Field": "Subject", "ValideLength": "255"}
                            ]
                        },
                        {
                            "ErrorMessage": " Valid maximum character length has been exceeded!",
                            "ErrorFields": [
                                {"Field": "Description", "ValideLength": "1024"}
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
                            "param_value":"Error message, occurs when try to register a location from the already existing location name",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Location for the Parent Location with the same name already exists!"
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
                            "ErrorFields": [["ak"]]
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
        {//Get Related CWOs within an Asset
            "api_name":"Get Related CWOs within an Asset",
            "api_description":"This API allows to get related CWOs mapped into an Asset.",
            "curl":`curl -X GET “http://GenAPI.com/vis/asset/v1/assets/4/relatedcwo” -H "Authorization:  APIKEY <GenAPI API key>"`,
            "api_code":"3.15.4",
            "http_method":"GET",
            "path":"/asset/v1/assets/{ak}/relatedcwo",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{ak}",
                        "data_type":"int",
                        "description":"Primary key of Asset"
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
            "user_roles":[
                "Allow to view CWOs Search Page"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of Corrective Work Order",
                            },
                            {
                                "parameter_name":"CWOID",
                                "data_type":"string",
                                "description":"ID of Corrective Work Order",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "CWOKey": "1", 
                        "CWOID": "CWO20210225001"
                    },
                    {
                        "CWOKey": "2", 
                        "CWOID": "CWO20210225002"
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
                            "ErrorFields": [["ak"]]
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
        {//Get Asset Groups 
            "api_name":"Get Asset Groups ",
            "api_description":"This API returns all the Asset Groups configured in the system",
            "curl":`curl -X GET “http://GenAPI.com/vis/asset/v1/assetgroup?max=5&last=0&fields=AssetGroupKey,AssetGroupName” -H    "Authorization: APIKEY <GenAPI API key>"  `,
            "api_code":"3.15.5",
            "http_method":"GET",
            "path":"/asset/v1/assetgroup",
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
                        "description":"Fields to be returned in a comma separated string.If any specific Asset Group(s) not specified, API will return all the Asset Group fields.",
                    },
                    {
                        "parameter_name":"q",
                        "data_type":"string",
                        "description":"Text filter on AssetGroupName, (This Search works similar to the mechanism in SQL search/ Google search)",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Asset Groups Search Page"
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
                                "parameter_name":"AssetGroupKey",
                                "data_type":"int",
                                "description":"Primary Key of the Asset Group"
                            },
                            {
                                "parameter_name":"AssetGroupName",
                                "data_type":"string",
                                "description":"Name of the Asset Group"
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "AssetGroupKey":"1", 
                        "AssetGroupName": "AHU Group"
                    },
                    {
                        "AssetGroupKey":"2", 
                        "AssetGroupName": "FCU Group"
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
        {//Get Asset Categories
            "api_name":"Get Asset Categories",
            "api_description":"This API returns all the Asset Categories configured in the system.",
            "curl":`curl -X GET “http://GenAPI.com/vis/asset/v1/assetcategory?max=5&last=0&fields=AssetCategoryKey,AssetCategoryName,AssetGroupKey” -H    "Authorization: APIKEY <GenAPI API key>"  `,
            "api_code":"3.15.6",
            "http_method":"GET",
            "path":"/asset/v1/assetcategory",
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
                        "description":"Fields to be returned in a comma separated string.If any specific Asset Category(s) not specified, API will return all the Asset Category fields.",
                    },
                    {
                        "parameter_name":"q",
                        "data_type":"string",
                        "description":"Text filter on AssetCategoryName, (This Search works similar to the mechanism in SQL search/ Google search) ",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Asset Categories Search Page"
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
                                "parameter_name":"AssetCategoryKey",
                                "data_type":"int",
                                "description":"Primary Key of the Asset Category",
                            },
                            {
                                "parameter_name":"AssetCategoryName",
                                "data_type":"string",
                                "description":"Name of the Asset Category",
                            },
                            {
                                "parameter_name":"AssetGroupKey",
                                "data_type":"int",
                                "description":"Primary Key of Asset Group",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "AssetCategoryKey": "1", 
                        "AssetCategoryName": "AHU",
                        "AssetGroupKey": "2"
                    },
                    {
                        "AssetCategoryKey": "2", 
                        "AssetCategoryName": "FCU",
                        "AssetGroupKey": "3"
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
                    "examples":
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "max", "ValidDataType": "INT"}, 
                                {"Field": "last", "ValidDataType": "INT"}
                            ]
                        }
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
        }          
    ]
}