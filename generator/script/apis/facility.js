const FMAPIs =  {//Facility
    "app_name":"Facility Management",
    "app_code":"3.4",
    "application_description":"",
    "apis":[
        {//Create New Problem Type
            "api_name":"Create New Problem Type",
            "api_description":"This API is used to create Problem Types",
            "curl":`curl -X POST http://GenAPI.com/fm/v1/problemtypes -H “Authorization:  APIKEY <GenAPI API key>” -H “Content-Type: application/json” --data ‘{“ProblemID”: “PROB00A”,“ServiceCategoryKey”: “3”,“SeverityKey”: “1”,“PriorityKey”: “2”}’'`,
            "api_code":"3.4.1",
            "http_method":"POST",
            "path":"/fm/v1/problemtypes",
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
                        "parameter_name":"ProblemType",
                        "data_type":"string",
                        "description":"Name of the Problem",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"ServiceCategoryKey",
                        "data_type":"int",
                        "description":"Service Category Configured in the System.",
                        "mandatory":{
                            "status":true,
                            "description":"Except when ServiceCategoryName is provided"
                        },
                        "references":[
                            {
                                "title":"Refer API 3.4.2 to get all the Service Categories",
                                "app_code":"3.4",
                                "api_code":"3.4.2"
                            }
                        ]
                    },
                    {
                        "parameter_name":"ServiceCategoryName",
                        "data_type":"string",
                        "description":"Service Category configured in the System. Can be provided as an alternative to ServiceCategoryKey.If ServiceCategoryKey is provided, the ServiceCategoryName attribute will be ignored.",
                        "mandatory":{
                            "status":true,
                            "description":"Except when ServiceCategoryKey is provided"
                        }
                    },
                    {
                        "parameter_name":"SeverityKey",
                        "data_type":"int",
                        "description":"Severity configured in the System. Using 3.4.7 API, you can get all the Severities configured in the system",
                        "mandatory":{
                            "status":true,
                            "description":"Except when SeverityName is provided"
                        },
                        "references":[
                            {
                                "title":"Refer API 3.4.7 to get all the Severities configured in the system",
                                "app_code":"3.4",
                                "api_code":"3.4.7"
                            }
                        ]
                    },
                    {
                        "parameter_name":"SeverityName",
                        "data_type":"string",
                        "description":"Severity configured in the System. Can be provided as an alternative to SeverityKey. If SeverityKey is provided, the SeverityName attribute will be ignored.",
                        "mandatory":{
                            "status":true,
                            "description":"Except when SeverityKey is provided"
                        },
                    },
                    {
                        "parameter_name":"PriorityKey",
                        "data_type":"int",
                        "description":"Priority configured in the System",
                        "mandatory":{
                            "status":true,
                            "description":"Except if PriorityName is provided"
                        },
                        "references":[
                            {
                                "title":"Refer API 3.4.9 to get all the Priorities configured in the system",
                                "app_code":"3.4",
                                "api_code":"3.4.9"
                            }
                        ]
                    },
                    {
                        "parameter_name":"PriorityName",
                        "data_type":"string",
                        "description":"Priority configured in the System.Can be provided as an alternative to PriorityKey. If PriorityKey is provided, the PriorityName attribute will be ignored.",
                        "mandatory":{
                            "status":true,
                            "description":"Except when PriorityKey is provided"
                        }
                    },
                    {
                        "parameter_name":"Description",
                        "data_type":"string",
                        "description":"Description about problem",
                    }
                ]
            },
            "user_roles":[
                "Allow to configure Problem Types"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"ProblemTypeKey",
                                "data_type":"int",
                                "description":"Primary Key of Created ProblemType",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Problem Type Created Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"Problem Type created Successfully",
                    "ProblemTypeKey":"12"
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
                                ["ProblemType"],
                                ["ServiceCategoryKey","ServiceCategoryName"], 
                                ["SeverityKey", "SeverityName"], 
                                ["PriorityKey", "PriorityName"]
                            ]
                        },
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["ProblemType"],
                                ["SeverityKey", "SeverityName"]
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
                            "param_value":"List of fields, which are not in correct Data Type.",
                        },
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                [
                                    {"Field": "ServiceCategoryKey", "ValidDataType": "INT"}, 
                                    {"Field": "SeverityKey", "ValidDataType": "INT"}, 
                                    {"Field": "PriorityKey", "ValidDataType": "INT"}
                                ]
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                [
                                    {"Field": "SeverityKey", "ValidDataType": "INT"}, 
                                    {"Field": "PriorityKey", "ValidDataType": "INT"}
                                ]
                            ]
                        },
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
                                    "PriorityKey"
                                ],
                                [
                                    "ServiceCategoryKey"
                                ],
                                [
                                    "SeverityKey"
                                ]
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data provided!",
                            "ErrorFields": [
                                [
                                    "ServiceCategoryKey"
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
                            "ErrorMessage": " Valid maximum character length has been exceeded!",
                            "ErrorFields": [
                                {"Field": "Description", "ValideLength": "1024"}, 
                                {"Field": "ProblemType", "ValideLength": "1024"}
                            ]
                        },
                        {
                            "ErrorMessage": " Valid maximum character length has been exceeded!",
                            "ErrorFields": [{"Field": "Description", "ValideLength": "1024"}]
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
                            "param_value":"Error message, occurs when try to register a Problem Type Name which is already exist in the selected service category",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": " Same ProblemTypeName already exists for the selected ServiceCategoryKey or ServiceCategoryName!"
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
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//Get Service Category Types
            "api_name":"Get Service Category Types",
            "api_description":"This API returns Service Category Types",
            "curl":`curl -X GET http://GenAPI.com/vis/fm/v1/servicecategorytypes -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.4.2",
            "http_method":"GET",
            "path":"/fm/v1/servicecategorytypes",
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
                        "description":"Text filter on ServiceCategoryType (This Search works similar to SQL search/ Google search mechanism)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Service Category Types List"
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
                            },
                        ]
                    },
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"ServiceCategoryTypeKey",
                                "data_type":"int",
                                "description":"Primary Key of Service Category Type",
                            },
                            {
                                "parameter_name":"ServiceCategoryType",
                                "data_type":"string",
                                "description":"Name of Service Category Type",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "ServiceCategoryTypeKey":"1", 
                        "ServiceCategoryType": "Hard Services"
                    },
                    {
                        "ServiceCategoryTypeKey":"2", 
                        "ServiceCategoryType": "Soft  Services"
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
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}
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
        {//Get Service Categories
            "api_name":"Get Service Categories",
            "api_description":"This API returns Service Categories",
            "curl":`curl -X GET “http://GenAPI.com/vis/fm/v1/servicecategories? max=10&last=5& fields=ServiceCategoryTypeKey, ServiceCategoryKey” -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.4.3",
            "http_method":"GET",
            "path":"/fm/v1/servicecategories",
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
                        "description":"Text filter on ServiceCategoryName (This Search works similar to SQL search/ Google search mechanism)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Service Categories Search Page"
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
                                "parameter_name":"ServiceCategoryKey",
                                "data_type":"int",
                                "description":"Primary Key of Service Category",
                            },
                            {
                                "parameter_name":"ServiceCategoryName",
                                "data_type":"string",
                                "description":"Name of Service Category",
                            },
                            {
                                "parameter_name":"ServiceCategoryTypeKey",
                                "data_type":"int",
                                "description":"Corresponding Primary Key of Service Category ",
                            },
                            {
                                "parameter_name":"ServiceCategoryTypeName",
                                "data_type":"string",
                                "description":"Name of Service Category Type",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "ServiceCategoryTypeKey":"1", 
                        "ServiceCategoryKey": "2"
                    },
                    {
                        "ServiceCategoryTypeKey":"2", 
                        "ServiceCategoryKey": "2"
                    },
                    {
                        "ServiceCategoryTypeKey":"3", 
                        "ServiceCategoryKey": "4"
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
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}
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
        {//Get Problem Types
            "api_name":"Get Problem Types",
            "api_description":"This API returns Problem Types configured in the system",
            "curl":`curl -X GET “http://GenAPI.com/vis/fm/v1/problemtypes? max=10 &last=5&fields= ProblemTypeKey, ProblemType” -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.4.4",
            "http_method":"GET",
            "path":"/fm/v1/problemtypes",
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
                        "description":"Text filter on ProblemType (This Search works similar to SQL search/ Google search mechanism)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Problem Types Search Page"
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
                                "parameter_name":"ProblemTypeKey",
                                "data_type":"int",
                                "description":"Primary Key of Problem Type",
                            },
                            {
                                "parameter_name":"ProblemType",
                                "data_type":"string",
                                "description":"Corresponding Problem Type (for ProblemTypeKey)",
                            },
                            {
                                "parameter_name":"PriorityKey",
                                "data_type":"int",
                                "description":"Priority Key",
                            },
                            {
                                "parameter_name":"PriorityID",
                                "data_type":"string",
                                "description":"Corresponding Priority ID (for PriorityKey)",
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description",
                            },
                            {
                                "parameter_name":"ServiceCategoryKey",
                                "data_type":"int",
                                "description":"Service Category Key",
                            },
                            {
                                "parameter_name":"ServiceCategoryName",
                                "data_type":"string",
                                "description":"Corresponding Service Category Name (for ServiceCategoryKey)",
                            },
                            {
                                "parameter_name":"SeverityKey",
                                "data_type":"int",
                                "description":"Severity Key",
                            },
                            {
                                "parameter_name":"SeverityID",
                                "data_type":"string",
                                "description":"Corresponding Severity ID (for SeverityKey)",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "ProblemTypeKey":"1", 
                        "ProblemType":"Electricity"
                    }, 
                    {
                        "ProblemTypeKey":"2", 
                        "ProblemType":"Air Condition"
                    }, 
                    {
                        "ProblemTypeKey":"3", 
                        "ProblemType":"Security"
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
                            "ErrorFields": [{"Field": "max", "ValidDataType": "INT"}, {"Field": "last", "ValidDataType": "INT"}]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [{"Field": "last", "ValidDataType": "INT"}]
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
        {//Update Problem Type
            "api_name":"Update Problem Type",
            "api_description":"This API is used to update Problem Type",
            "curl":`curl -X PATCH http://GenAPI.com/vis/fm/v1/problemtypes/12“ -H “Authorization:  APIKEY <GenAPI API key>”  -H “Content-Type: application/json” --data ‘{“PriorityKey”:“1”}’`,
            "api_code":"3.4.5",
            "http_method":"PATCH",
            "path":"/fm/v1/problemtypes/{ptk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{ptk}",
                        "data_type":"int",
                        "description":"Problem Type Key"
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
                        "parameter_name":"ServiceCategoryKey",
                        "data_type":"int",
                        "description":"Service Category Key",
                        "mandatory":{
                            "status":false
                         }
                    },
                    {
                        "parameter_name":"ServiceCategoryName",
                        "data_type":"string",
                        "description":"Service Category configured in the System. Can be provided as an alternative to ServiceCategoryKey.If ServiceCategoryKey is provided, the ServiceCategoryName attribute will be ignored. ",
                        "mandatory":{
                            "status":false
                        }
                    },
                    {
                        "parameter_name":"SeverityKey",
                        "data_type":"int",
                        "description":"Severity Key",
                    },
                    {
                        "parameter_name":"SeverityName",
                        "data_type":"string",
                        "description":"Severity configured in the System. Can be provided as an alternative to SeverityKey.  If SeverityKey is provided, the SeverityName attribute will be ignored.",
                        "mandatory":{
                            "status":false
                        }
                    },
                    {
                        "parameter_name":"PriorityKey",
                        "data_type":"int",
                        "description":"Priority Key",
                        "mandatory":{
                            "status":false
                        }
                    },
                    {
                        "parameter_name":"PriorityName",
                        "data_type":"string",
                        "description":"Priority configured in the System.Can be provided as an alternative to PriorityKey. If PriorityKey is provided, the PriorityName attribute will be ignored. ",
                    },
                    {
                        "parameter_name":"Description",
                        "data_type":"string",
                        "description":"Description",
                    },
                    {
                        "parameter_name":"ProblemType",
                        "data_type":"string",
                        "description":"NOTE: Problem Type should be Unique among all the Problem Types created",
                    }
                ]
            },
            "user_roles":[
                "Allow to modify Problem Types"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"ProblemTypeKey",
                                "data_type":"int",
                                "description":"Primary Key of Problem Type",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Problem Type Updated Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"Problem Type Updated Successfully",
                    "ProblemTypeKey":"12"
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
                            "param_value":"List of mandatory fields, which are contain empty values",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["ProblemType"], 
                                ["ServiceCategoryKey", "ServiceCategoryName"],
                                ["SeverityKey", "SeverityName"], 
                                ["PriorityKey", "PriorityName"]
                            ]
                        },
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["ProblemType"], 
                                ["SeverityKey", "SeverityName"]
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
                                {"Field": "ServiceCategoryKey", "ValidDataType": "INT"}, 
                                {"Field": "SeverityKey", "ValidDataType": "INT"}, 
                                {"Field": "PriorityKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "SeverityKey", "ValidDataType": "INT"}, 
                                {"Field": "PriorityKey", "ValidDataType": "INT"}
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
                                ["ServiceCategoryKey"],
                                ["SeverityKey"], 
                                ["PriorityKey"]]
                        },
                        {
                            "ErrorMessage": "Invalid data provided!",
                            "ErrorFields": [
                                ["ServiceCategoryName"], 
                                ["SeverityName"],
                                ["PriorityName"]
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid data provided!",
                            "ErrorFields": [
                                ["ServiceCategoryKey"]
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
                                {"Field": "Description", "ValideLength": "1024"}, 
                                {"Field": "ProblemType", "ValideLength": "1024"}
                            ]
                        },
                        {
                            "ErrorMessage": " Valid maximum character length has been exceeded!",
                            "ErrorFields": [{"Field": "Description", "ValideLength": "1024"}]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"Text",
                    "error_category":"No Updatable Fields Found Error",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"No updatable fields found",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"No updatable fields found",
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"Text",
                    "error_category":"Unique Validation Error",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"A ProblemTypeName already exists for the provided ServiceCategoryKey or ServiceCategoryName! ",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"A ProblemTypeName already exists for the provided ServiceCategoryKey or ServiceCategoryName!",
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
        {//Delete a Problem Type
            "api_name":"Delete a Problem Type",
            "api_description":"This API is used to delete a Problem Type. When this API is called, it will return the Primary Key for API. In this case it will return the ProblemTypeKey",
            "curl":`curl -X DELETE http://GenAPI.com/vis//fm/v1/problemtypes/12 “ -H “Authorization:  APIKEY <GenAPI API key>”`,
            "api_code":"3.4.6",
            "http_method":"DELETE",
            "path":"/fm/v1/problemtypes/{ptk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{ptk}",
                        "data_type":"int",
                        "description":"Problem Type Key"
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
                "Allow to delete Problem Types"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"ProblemTypeKey",
                                "data_type":"int",
                                "description":"Primary Key of Problem Type",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Problem Type Deleted Successfully",
                            }
                        ]
                    },
                },
                "example_response":[ 
                    {
                        "Status": "Problem Type Deleted Successfully", 
                        "ProblemTypeKey": "12"
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
                            "param_value":"Error message when try to delete a problem type which already use in other places",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Record for given ProblemTypeKey is in use and cannot be deleted!"
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
                            "ErrorFields": [["ptk"]]
                        }
                    ]
                },
                {
                    "error_code":"406",
                    "error_response_type":"JSON",
                    "error_category":"Content Type Error",
                    "examples":[
                        {
                            "ErrorMessage": "Invalid content type 'text/plain"
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
        {//Get Severities
            "api_name":"Get Severities",
            "api_description":"This API returns Severities configured in the system",
            "curl":`curl -X GET http://GenAPI.com/vis/fm/v1/severities” -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.4.7",
            "http_method":"GET",
            "path":"/fm/v1/severities",
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
                        "description":"Text filter on SeverityID (This Search works similar to SQL search/ Google search mechanism)",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Severities List"
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
                                "parameter_name":"SeverityID",
                                "data_type":"string",
                                "description":"Severity ID",
                            },
                            {
                                "parameter_name":"SeverityKey",
                                "data_type":"int",
                                "description":"Severity Key",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "SeverityID": "Critical",
                        "SeverityKey": "1"
                    }, 
                    {
                        "SeverityID": "Major",
                        "SeverityKey": "2"
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
                                {"Field": "max", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}
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
        {//Get Supervisors
            "api_name":"Get Supervisors",
            "api_description":"This API returns all the Supervisors configured in the system",
            "curl":`curl -X GET http://GenAPI.com/vis/fm/v1/supervisors?{Query String} -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.4.8",
            "http_method":"GET",
            "path":"/fm/v1/supervisors",
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
                        "description":"Text filter on User First Name, Last Name, LoginID, Email, Phone (This Search works similar to SQL search/ Google search mechanism)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Service Auditors Search Page"
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
                                "parameter_name":"SupervisorKey",
                                "data_type":"int",
                                "description":"Primary Key of Supervisor Object. This key needs to use the other APIs where we need to specify Supervisor",
                            },
                            {
                                "parameter_name":"UserKey",
                                "data_type":"int",
                                "description":"Corresponding User Object Key",
                            },
                            {
                                "parameter_name":"FirstName",
                                "data_type":"string",
                                "description":"Corresponding User First Name",
                            },
                            {
                                "parameter_name":"LastName",
                                "data_type":"string",
                                "description":"Corresponding Last Name",
                            },
                            {
                                "parameter_name":"FullName",
                                "data_type":"string",
                                "description":"Full Name of Supervisor",
                            },
                            {
                                "parameter_name":"LoginID",
                                "data_type":"string",
                                "description":"LoginID",
                            },
                            {
                                "parameter_name":"Email",
                                "data_type":"string",
                                "description":"Email Address",
                            },
                            {
                                "parameter_name":"Phone",
                                "data_type":"string",
                                "description":"Phone number of Supervisor",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "UserKey": "5", 
                        "SupervisorKey": "1", 
                        "FirstName":"John",
                        "LastName":"Doe"
                    }, 
                    {
                        "UserKey": "12", 
                        "SupervisorKey": "2", 
                        "FirstName":"Mike",
                        "LastName":"Johnson"
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
                                {"Field": "max", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}
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
        {//Get Priorities
            "api_name":"Get Priorities",
            "api_description":"This API returns the app Priorities configured in the system.",
            "curl":`curl -X GET http://GenAPI.com/vis/fm/v1/priorities -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.4.9",
            "http_method":"GET",
            "path":"/fm/v1/priorities",
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
                        "description":"Text filter on Priority (This Search works similar to the mechanism in SQL search/ Google search)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Priorities List"
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
                                "parameter_name":"PriorityKey",
                                "data_type":"int",
                                "description":"Primary Key of the Priority",
                            },
                            {
                                "parameter_name":"Priority",
                                "data_type":"string",
                                "description":"Priority",
                            },
                            {
                                "parameter_name":"MarkAsCritical",
                                "data_type":"int",
                                "description":"Define, Priority is a high or not [1: High Priority, 0: Normal Priority]",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "PriorityKey": "1", 
                        "MarkAsCritical": "1", 
                        "Priority":"Urgent"
                    }, 
                    {
                        "PriorityKey": "2", 
                        "MarkAsCritical": "0", 
                        "Priority":"Normal"
                    }, 
                    {
                        "PriorityKey": "3", 
                        "MarkAsCritical": "0", 
                        "Priority":"Low"
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
                                {"Field": "max", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}
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
        {//Get FM Operators
            "api_name":"Get FM Operators",
            "api_description":"This API returns all the Operators configured in the system.",
            "curl":`curl -X GET “http://GenAPI.com/vis/fm/v1/operators? max=10&last=0” -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.4.10",
            "http_method":"GET",
            "path":"/fm/v1/operators",
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
                        "description":"Text filter on User First Name, Last Name, Login ID, Email, Phone Number (This Search works similar to the mechanism in SQL search/ Google search)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }
                ]
            },
            "user_roles":[
                "Allow to view FM Operators Search Page"
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
                                "parameter_name":"OperatorKey",
                                "data_type":"int",
                                "description":"Primary key of the Operator",
                            },
                            {
                                "parameter_name":"UserKey",
                                "data_type":"int",
                                "description":"Primary key of the User",
                            },
                            {
                                "parameter_name":"FirstName",
                                "data_type":"string",
                                "description":"Corresponding User’s (Operator’s) First Name",
                            },
                            {
                                "parameter_name":"LastName",
                                "data_type":"string",
                                "description":"Corresponding Last Name",
                            },
                            {
                                "parameter_name":"LoginID",
                                "data_type":"string",
                                "description":"LoginID",
                            },
                            {
                                "parameter_name":"Email",
                                "data_type":"string",
                                "description":"Email Address",
                            },
                            {
                                "parameter_name":"Phone",
                                "data_type":"string",
                                "description":"Phone number of Supervisor",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "UserKey" : "5", 
                        "OperatorKey" : "1",
                        "FirstName" : "John",
                        "LastName" : "Doe",
                    }, 
                    {
                        "UserKey" : "12", 
                        "OperatorKey" : "2",
                        "FirstName" : "Mike",
                        "LastName" : "Johnson",
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
                                {"Field": "max", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}
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
                    "error_code":"406",
                    "error_response_type":"JSON",
                    "error_category":"Content Type Error",
                    "examples":[
                        "No resource found to process API request",
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
        {//Get All Vendors
            "api_name":"Get All Vendors",
            "api_description":"This API returns all the Vendors configured in the system.",
            "curl":`curl -X GET http://GenAPI.com/vis/fm/v1/vendors?http://GenAPI.com/vis/fm/v1/vendors? max=10&last=0&fields=VendorName,VendorKey, VendorID -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.4.11",
            "http_method":"GET",
            "path":"/fm/v1/vendors",
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
                        "description":"Text filter on VendorName, VendorID (This Search works similar to the mechanism in SQL search/ Google search)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Vendors Search Page"
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
                                "parameter_name":"VendorKey",
                                "data_type":"int",
                                "description":"Primary Key of Vendor",
                            },
                            {
                                "parameter_name":"VendorID",
                                "data_type":"string",
                                "description":"ID of Vendor",
                            },
                            {
                                "parameter_name":"VendorName",
                                "data_type":"string",
                                "description":"Name of Vendor",
                            },
                            {
                                "parameter_name":"CoordinatorKey",
                                "data_type":"int",
                                "description":"Primary Key of Vendor Coordinator",
                            },
                            {
                                "parameter_name":"CoordinatorFullName",
                                "data_type":"string",
                                "description":"Vendor Coordinator’s Full Name",
                            },
                            {
                                "parameter_name":"Phone",
                                "data_type":"string",
                                "description":"Telephone Number",
                            },
                            {
                                "parameter_name":"AverageRating",
                                "data_type":"int",
                                "description":"Average Rating of Vendor",
                            },
                            {
                                "parameter_name":"Mobile",
                                "data_type":"string",
                                "description":"Vendor’s Mobile Phone No",
                            },
                            {
                                "parameter_name":"Email",
                                "data_type":"string",
                                "description":"Email Address",
                            },
                            {
                                "parameter_name":"Fax",
                                "data_type":"string",
                                "description":"Fax",
                            },
                            {
                                "parameter_name":"Website",
                                "data_type":"string",
                                "description":"Website URL of Vendor",
                            },
                            {
                                "parameter_name":"Address",
                                "data_type":"string",
                                "description":"Address",
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description about Vendor",
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Primary Key of the Site which the Vendor belong to",
                            },
                            {
                                "parameter_name":"SiteLocationFullName",
                                "data_type":"string",
                                "description":"Name of corresponding Primary Key",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "VendorKey" : "5", 
                        "VendorName" : "Adidas",
                        "VendorID" : "Adidas"
                    }, 
                    {
                        "VendorKey" : "6", 
                        "VendorName" : "Apple",
                        "VendorID" : "JohVN0002"
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
                                {"Field": "max", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}
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
        {//Get Vendor Details
            "api_name":"Get Vendor Details",
            "api_description":"This API returns Details of Vendor.",
            "curl":`curl -X GET http://GenAPI.com/vis/fm/v1/vendors/6? max=10&last=0&fields=VendorName,VendorKey, VendorID -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.4.12",
            "http_method":"GET",
            "path":"/fm/v1/vendors/{vk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{vk}",
                        "data_type":"int",
                        "description":"Primary Key of Vendor"
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
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Vendor Details"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"VendorKey",
                                "data_type":"int",
                                "description":"Primary Key of Vendor",
                            },
                            {
                                "parameter_name":"VendorID",
                                "data_type":"string",
                                "description":"ID of Vendor",
                            },
                            {
                                "parameter_name":"VendorName",
                                "data_type":"string",
                                "description":"PName of Vendor",
                            },
                            {
                                "parameter_name":"CoordinatorKey",
                                "data_type":"int",
                                "description":"Vendor Coordinator Primary Key",
                            },
                            {
                                "parameter_name":"CoordinatorFullName",
                                "data_type":"string",
                                "description":"Vendor Coordinator’s Full Name",
                            },
                            {
                                "parameter_name":"Phone",
                                "data_type":"string",
                                "description":"Telephone Number",
                            },
                            {
                                "parameter_name":"AverageRating",
                                "data_type":"int",
                                "description":"Average Rating of Vendor",
                            },
                            {
                                "parameter_name":"Mobile",
                                "data_type":"string",
                                "description":"Vendor Mobile Phone No",
                            },
                            {
                                "parameter_name":"Email",
                                "data_type":"string",
                                "description":"Email Address",
                            },
                            {
                                "parameter_name":"Fax",
                                "data_type":"string",
                                "description":"Fax",
                            },
                            {
                                "parameter_name":"Website",
                                "data_type":"string",
                                "description":"Website URL of Vendor",
                            },
                            {
                                "parameter_name":"Address",
                                "data_type":"string",
                                "description":"Address",
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description about Vendor",
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Primary Key of the Site which the Vendor belong to ",
                            },
                            {
                                "parameter_name":"SiteLocationFullName",
                                "data_type":"string",
                                "description":"Name of corresponding Primary Key",
                            }
                        ]
                    },
                },
                "example_response":{
                    "VendorKey":"1", 
                    "VendorName": "Apple",
                    "VendorID": "VN0002"
                } 
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
                    "error_category":"URL Object Reference Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [["vk"]]
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
        {//Get Reject Reasons
            "api_name":"Get Reject Reasons",
            "api_description":"This API returns all the Reject Reasons configured in the system.",
            "curl":`curl -X GET http://GenAPI.com/vis/fm/v1/rejectreasons?max=5&last=0&fields=RejectReasonKey,RejeactReason” -H    "Authorization: APIKEY <GenAPI API key>"  `,
            "api_code":"3.4.13",
            "http_method":"GET",
            "path":"/fm/v1/rejectreasons",
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
                        "description":"Text filter on RejectReason, (This Search works similar to the mechanism in SQL search/ Google search) ",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific Reject Reason(s) not specified, API will return all the Assets fields.",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Reject Reasons List"
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
                                "parameter_name":"RejectReasonKey",
                                "data_type":"int",
                                "description":"Primary Key of the Reject Reason",
                            },
                            {
                                "parameter_name":"RejectReason",
                                "data_type":"string",
                                "description":"Reject Reason Text",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "RejectReasonKey" : "1", 
                        "RejectReason" : "Not Completed"
                    }, 
                    {
                        "RejectReasonKey" : "2", 
                        "RejectReason" : "Quality check failed"
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
        {//Get Skills
            "api_name":"Get Skills",
            "api_description":"This API returns all the Skills configured in the system. ",
            "curl":`curl -X GET http://GenAPI.com/vis/fm/v1/skills?max=5&last=0&fields=SkillKey,SkillName” -H    "Authorization: APIKEY <GenAPI API key>"  `,
            "api_code":"3.4.14",
            "http_method":"GET",
            "path":"/fm/v1/skills",
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
                        "description":"Text filter on SkillName, (This Search works similar to the mechanism in SQL search/ Google search)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific Skill(s) not specified, API will return all the Assets fields.",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Skills List"
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
                                "parameter_name":"SkillKey",
                                "data_type":"int",
                                "description":"Primary Key of the Skill",
                            },
                            {
                                "parameter_name":"SkillName",
                                "data_type":"string",
                                "description":"Name of the Skill",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "SkillKey" : "1", 
                        "SkillName" : "Plumbing"
                    }, 
                    {
                        "SkillKey" : "2", 
                        "SkillName" : "Cleaning"
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
        {//Get Service Auditors
            "api_name":"Get Service Auditors",
            "api_description":"This API returns all the FM Service Auditors configured in the system.",
            "curl":`curl -X GET http://GenAPI.com/vis/fm/v1/serviceauditors?max=10&last=5&fields=” -H    “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.4.15",
            "http_method":"GET",
            "path":"/fm/v1/serviceauditors",
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
                        "parameter_name":"ServiceCategoryKey",
                        "data_type":"int",
                        "description":"Primary key of Service Category,(if search from ServiceCategoryKey, will retrieve all  the data belongs to specified Servicecategory and any ServiceCategory)"
                    },
                    {
                        "parameter_name":"LocationKey",
                        "data_type":"int",
                        "description":"Primary Key of Location"
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
                        "parameter_name":"q",
                        "data_type":"string",
                        "description":"Text filter on ServiceAuditorName (This Search works similar to SQL search/ Google search mechanism)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Service Auditors Search Page"
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
                                "parameter_name":"ServiceAuditorKey",
                                "data_type":"int",
                                "description":"Primary Key of Service Auditor Object. This key needs to use the other APIs where we need to specify Service Auditor",
                            },
                            {
                                "parameter_name":"ServiceAuditorName",
                                "data_type":"string",
                                "description":"Corresponding Service Auditor Name",
                            },
                            {
                                "parameter_name":"ServiceCategoryName",
                                "data_type":"string",
                                "description":"Corresponding Service Category Name When Service Auditor applies for any Service Category the API will return name as ‘Any’.",
                            },
                            {
                                "parameter_name":"ServiceCategoryKey",
                                "data_type":"int",
                                "description":"Corresponding Service Category Primary Key. When Service Auditor applies for any Service Category the API will return Key as ‘0’.",
                            },
                            {
                                "parameter_name":"LocationName",
                                "data_type":"string",
                                "description":"Corresponding Location Name",
                            },
                            {
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Corresponding Location Primary Key",
                            }
                        ]
                    },
                },
                "example_response":{
                        "ServiceAuditorKey" : "1", 
                        "ServiceAuditorName" : "John Doe",
                        "ServiceAuditorKey" : "2",
                        "ServiceAuditorName" : "Mike Johnson"
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
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}, 
                                {"Field": "max", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}, 
                                {"Field": "max", "ValidDataType": "INT"},
                                {"Field": "ServiceCategoryKey", "ValidDataType": "INT"}, 
                                {"Field": "LocationKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                [ "ServiceCategoryKey" ], ["LocationKey"] 
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
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        }          
    ],
}