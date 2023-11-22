const CwoAPIs =  {//Corrective Work Order
    "app_name":"Corrective Work Order",
    "app_code":"3.14",
    "application_description":"",
    "apis":[
        {//Get Requesters
            "api_name":"Get Requesters",
            "api_description":"This API returns all the CWO Requesters configured in the system",
            "curl":`curl -X GET “http://GenAPI.com/vis/workorder/v1/requesters? max=10&last=5” -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.14.1",
            "http_method":"GET",
            "path":"/workorder/v1/requesters",
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
                        "parameter_name":"RequesterType",
                        "data_type":"string",
                        "description":"When this filter is applied, it will only return the Objects of that Type",
                        "applicable_value":"Staff, Department, etc."
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Requesters via API"
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
                                "parameter_name":"RequesterKey",
                                "data_type":"int",
                                "description":"Primary Key of Requester Object. This key needs to use the other APIs where we need to specify Requester"
                            },
                            {
                                "parameter_name":"RequesterType",
                                "data_type":"string",
                                "description":"Corresponding Requester Type"
                            },
                            {
                                "parameter_name":"RequesterID",
                                "data_type":"string",
                                "description":"Corresponding Requester ID",
                            },
                            {
                                "parameter_name":"Hidden",
                                "data_type":"int",
                                "description":"User Hidden status. [1: Hidden, 0: Not Hidden]"
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "RequesterKey":"1", 
                        "RequesterType":"Organization.OrgStaff",
                        "RequesterID":"John",
                        "Hidden":"0"
                    }, 
                    {
                        "RequesterKey":"2", 
                        "RequesterType":"Organization.OrgDepartment",
                        "RequesterID":"Admin Dept",
                        "Hidden":"1"
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
        {//Get CWO Types
            "api_name":"Get CWO Types",
            "api_description":"This API returns all the CWO Types configured in the system",
            "curl":`curl -X GET “http://GenAPI.com/vis/workorder/v1/cwotypes?last=5&max=10”  -H    "Authorization:  APIKEY <GenAPI API key>"`,
            "api_code":"3.14.2",
            "http_method":"GET",
            "path":"/workorder/v1/cwotypes",
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
                        "description":"Text filter on CWOTypeName (Search is similar to the mechanism in SQL search)",
                    }
                ]
            },
            "user_roles":[
                "Allow to view CWO Type Details"
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
                                "parameter_name":"CWOTypeKey",
                                "data_type":"int",
                                "description":"Primary Key of CWO Type"
                            },
                            {
                                "parameter_name":"CWOTypeName",
                                "data_type":"string",
                                "description":"Name of CWO Type"
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "CWOTypeKey":"1", 
                        "CWOTypeName":"Audit"
                    }, 
                    {
                        "CWOTypeKey":"2", 
                        "CWOTypeName":"Corrective"
                    }, 
                    {
                        "CWOTypeKey":"3", 
                        "CWOTypeName":"General"
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
        {//Get CWO Reporters
            "api_name":"Get CWO Reporters",
            "api_description":"This API returns all the CWO Reporters configured in the system.",
            "curl":`curl -X GET “http://GenAPI.com/vis/workorder/v1/reporters? max=10&last=5” -H    “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.14.3",
            "http_method":"GET",
            "path":"/workorder/v1/reporters",
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
                        "description":"Text filter on ReporterName (This Search works similar to SQL search/ Google search mechanism)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }
                ]
            },
            "user_roles":[
                "Allow to view CWO Reporter Details"
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
                                "parameter_name":"ReporterKey",
                                "data_type":"int",
                                "description":"Primary Key of Reporter Object. This key needs to use the other APIs where we need to specify Reporter"
                            },
                            {
                                "parameter_name":"ReporterType",
                                "data_type":"string",
                                "description":"Corresponding Reporter Type"
                            },
                            {
                                "parameter_name":"ReporterName",
                                "data_type":"string",
                                "description":"Corresponding Reporter Name"
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "ReporterKey":"1", 
                        "ReporterType":"Organization.OrgStaff",
                        "ReporterName":"John Doe"
                    }, 
                    {
                        "ReporterKey":"2", 
                        "ReporterType":"Organization.OrgStaff",
                        "ReporterName":"Joh Doen"
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
        {//Create a Corrective Work Order
            "api_name":"Create a Corrective Work Order",
            "api_description":"This API is used to create Corrective Work Order.",
            "curl":`curl -X POST  “http://GenAPI.com/vis/workorder/v1/cwos” -H    “Authorization:  APIKEY <GenAPI API key>”  -H “Content-Type: application/json” –data’{“RequesterObjectKey”:”1”,”RequesterObjectType”: “staff” ,”ProblemKey”:”5” ,”ReporterKey”:”1”,” ServiceCategoryKey”:”3”,”Subject”:”Water Leak”,”LocationKey”:”3”,”Description”:”Water Leaking from Ceiling”}’`,
            "api_code":"3.14.4",
            "http_method":"POST",
            "path":"/workorder/v1/cwos",
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
                        "parameter_name":"RequesterObjectKey",
                        "data_type":"int",
                        "description":"Requester Primary Key",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"RequesterObjectType",
                        "data_type":"string",
                        "description":"Requester Object Type",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"ProblemTypeKey",
                        "data_type":"int",
                        "description":"Problem Type Key ",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"ReporterKey",
                        "data_type":"int",
                        "description":"Reported User Key",
                    },
                    {
                        "parameter_name":"ReporterObjectType",
                        "data_type":"string",
                        "description":"Reporter Object Type",
                    },
                    {
                        "parameter_name":"ServiceCategoryKey",
                        "data_type":"int",
                        "description":"Service Category Key",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"Subject",
                        "data_type":"string",
                        "description":"Subject of Work Order"
                    },
                    {
                        "parameter_name":"LocationKey",
                        "data_type":"int",
                        "description":"Location of work order to be created.",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"Description",
                        "data_type":"string",
                        "description":"Description about Work Order",
                    },
                    {
                        "parameter_name":"AssetKey",
                        "data_type":"int",
                        "description":"Primary Key of the Asset this Work Order related to.",
                    },
                    {
                        "parameter_name":"CWOTypeKey",
                        "data_type":"int",
                        "description":"Primary Key of CWO Type",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"PriorityKey",
                        "data_type":"int",
                        "description":"Primary Key of CWO Type",
                        "mandatory":{
                            "status":true
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to register CWOs for Requesters"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
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
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Corrective Work Order Created Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"Corrective Work Order Created Successfully",
                    "CWOKey":"3"
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
                                ["RequesterObjectKey","RequesterObjectType"],
                                ["PriorityKey"],
                                ["LocationKey"], 
                                ["ProblemTypeKey"], 
                                ["ServiceCategoryKey"] 
                            ]
                        },
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["RequesterObjectKey","RequesterObjectType"]
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
                                {"Field": "LocationKey", "ValidDataType": "INT"}, 
                                {"Field": "RequesterObjectKey", "ValidDataType": "INT"}, 
                                {"Field": "ProblemTypeKey", "ValidDataType": "INT"}, 
                                {"Field": "PriorityKey", "ValidDataType": "INT"}, 
                                {"Field": "ServiceCategoryKey", "ValidDataType": "INT"}, 
                                {"Field": "ReporterKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "PriorityKey", "ValidDataType": "INT"}, 
                                {"Field": "ProblemTypeKey", "ValidDataType": "INT"}
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
                                    ["RequesterObjectKey", "RequesterObjectType"]
                                ], 
                                [
                                    "ReporterKey"
                                ], 
                                [
                                    [
                                        ["ProblemTypeKey"], 
                                        ["ServiceCategoryKey"]
                                    ], 
                                    ["LocationKey"]
                                ], 
                                [
                                    "PriorityKey"
                                ]
                            ]
                        },
                        {
                            "ErrorMessage":"Invalid data provided!",
                            "ErrorFields": [
                                [
                                    ["RequesterObjectKey", "RequesterObjectType"]
                                ], 
                                [
                                    "PriorityKey"
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
                                {"Field": "Description", "ValideLength": "1024"}, 
                                {"Field": "Subject", "ValideLength": "255"}
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
        {//Get Corrective Work Orders 
            "api_name":"Get Corrective Work Orders ",
            "api_description":"This API is used to get all the Corrective Work Orders created in the system.",
            "curl":`curl -X GET http://GenAPI.com/vis/workorder/v1/cwos?fields={CWOKey, CWOID, RequesterObjectType, RequesterObjectKey, RequesterObjectID, LocationKey} -H "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.14.4.1",
            "http_method":"GET",
            "path":"/workorder/v1/cwos",
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
                        "description":"Text filter on CWO ID, (This Search works similar to the mechanism in SQL search/ Google search)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    },
                    {
                        "parameter_name":"RequesterKey",
                        "data_type":"int",
                        "description":"Requester User Object Key"
                    },    
                    {
                        "parameter_name":"RequesterType",
                        "data_type":"string",
                        "description":"Requester User ObjectType"
                    },
                    {
                        "parameter_name":"LocationKey",
                        "data_type":"int",
                        "description":"CWO Location Key",
                    },
                    {
                        "parameter_name":"ServiceCategoryKey",
                        "data_type":"int",
                        "description":"Primary Key of Service Category. "
                    },
                    {
                        "parameter_name":"IncludeInactive",
                        "data_type":"boolean",
                        "description":"Default (0 or not passed) only the Active items be showen. If the value is 1, it will include inactive items too",
                        "default_value":"0",
                        "applicable_value":"0 or 1"
                    },
                    {
                        "parameter_name":"StartDate",
                        "data_type":"date",
                        "description":"Start Date Filter. CWOs created after this date will be returned"
                    },
                    {
                        "parameter_name":"EndDate",
                        "data_type":"date",
                        "description":"End Date Filter. CWOs created before this date will be returned."
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
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of Corrective Work Order",
                            },
                            {
                                "parameter_name":"CWOID",
                                "data_type":"string",
                                "description":"Corrective Work Order ID",
                            },
                            {
                                "parameter_name":"ParentCWOKey",
                                "data_type":"int",
                                "description":"Parent Corrective Work Order Key (if Exists)",
                            },
                            {
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Location Key of Corrective Work Order",
                            },
                            {
                                "parameter_name":"LocationFullName",
                                "data_type":"string",
                                "description":"Corresponding Location Name (for LocationKey)",
                            },
                            {
                                "parameter_name":"Subject",
                                "data_type":"string",
                                "description":"Short Description of Corrective Work Order",
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description about Corrective Work Order",
                            },
                            {
                                "parameter_name":"Stage",
                                "data_type":"string",
                                "description":"Current Stage of Corrective Work Order",
                            },
                            {
                                "parameter_name":"ProblemTypeKey",
                                "data_type":"int",
                                "description":"Problem Type Key",
                            },
                            {
                                "parameter_name":"ProblemType",
                                "data_type":"string",
                                "description":"Corresponding ProblemType (for ProblemTypeKey)",
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Site Location Key",
                            },
                            {
                                "parameter_name":"SiteLocationFullName",
                                "data_type":"string",
                                "description":"Full Name of Site Location",
                            },
                            {
                                "parameter_name":"ServiceCategoryKey",
                                "data_type":"int",
                                "description":"Service Category Key",
                            },
                            {
                                "parameter_name":"ServiceCategoryName",
                                "data_type":"string",
                                "description":"Corresponding Service Category (for ServiceCategoryKey)",
                            },
                            {
                                "parameter_name":"IsActive",
                                "data_type":"int",
                                "description":"Active Status",
                            },
                            {
                                "parameter_name":"ReporterKey",
                                "data_type":"int",
                                "description":"Reporter User Key",
                            },
                            {
                                "parameter_name":"ReporterFullName",
                                "data_type":"string",
                                "description":"Full Name of Reporter",
                            },
                            {
                                "parameter_name":"ReporterObjectType",
                                "data_type":"string",
                                "description":"Reporter  Object Type",
                            },
                            {
                                "parameter_name":"RequesterObjectKey",
                                "data_type":"int",
                                "description":"Requester Key",
                            },
                            {
                                "parameter_name":"RequesterObjectID",
                                "data_type":"string",
                                "description":"Requester ID",
                            },
                            {
                                "parameter_name":"RequesterObjectType",
                                "data_type":"string",
                                "description":"Requester Object Type",
                            },
                            {
                                "parameter_name":"PriorityKey",
                                "data_type":"int",
                                "description":"Priority of Corrective Work Order",
                            },
                            {
                                "parameter_name":"PriorityID",
                                "data_type":"string",
                                "description":"Corresponding Priority ID for PriorityKey",
                            },
                            {
                                "parameter_name":"CreatedDateTime",
                                "data_type":"datetime",
                                "description":"Corrective Work Order Created DateTime",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "CWOKey":"1", 
                        "CWOID": "CWO0001", 
                        "RequesterObjectType": "Staff", 
                        "RequesterObjectKey": "24", 
                        "RequesterObjectID": "John Doe", 
                        "LocationKey": "2"
                    },
                    {
                        "CWOKey":"2", 
                        "CWOID": "CWO0002", 
                        "RequesterObjectType": "Staff", 
                        "RequesterObjectKey": "24", 
                        "RequesterObjectID": "John Doe", 
                        "LocationKey": "2"
                    },
                    {
                        "CWOKey":"3", 
                        "CWOID": "CWO0003", 
                        "RequesterObjectType": "Staff", 
                        "RequesterObjectKey": "24", 
                        "RequesterObjectID": "John Doe", 
                        "LocationKey": "2"
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
                                {"Field": "RequesterKey", "ValidDataType": "INT"}, 
                                {"Field": "LocationKey", "ValidDataType": "INT"}, 
                                {"Field": "ServiceCategoryKey", "ValidDataType": "INT"},
                                {"Field": "StartDate", "ValidDataType": "DATE"}, 
                                {"Field": "EndDate", "ValidDataType": "DATE"} ,
                                {"Field": "IncludeInactive", "ValidDataType": "BOOLEAN"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                ["ServiceCategoryKey"], 
                                ["LocationKey"], 
                                ["StartDate"], 
                                ["EndDate"], 
                                ["RequesterKey"], 
                                ["LocationKey"]
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
        {//Get Corrective Work Order Details
            "api_name":"Get Corrective Work Order Details",
            "api_description":"This API is used to get Corrective Work Order Details.",
            "curl":`curl -X GET “http://GenAPI.com/vis/workorder/v1/cwos/5?fields=CWOKey,CWOID, RequesterObjectType, RequesterObjectKey, RequesterObjectID, LocationKey” -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.14.5",
            "http_method":"GET",
            "path":"/workorder/v1/cwos/{cwok}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Corrective Work Order Key"
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
                "Allow to view CWO Details"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
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
                                "description":"Corrective Work Order ID",
                            },
                            {
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Location Key of Corrective Work Order",
                            },
                            {
                                "parameter_name":"LocationFullName",
                                "data_type":"string",
                                "description":"Corresponding Location Name (for LocationKey)",
                            },
                            {
                                "parameter_name":"Subject",
                                "data_type":"string",
                                "description":"Subject of Corrective Work Order",
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description about Corrective Work Order",
                            },
                            {
                                "parameter_name":"Stage",
                                "data_type":"string",
                                "description":"Current Stage of Corrective Work Order",
                            },
                            {
                                "parameter_name":"ProblemTypeKey",
                                "data_type":"int",
                                "description":"Problem Type Key",
                            },
                            {
                                "parameter_name":"ProblemType",
                                "data_type":"string",
                                "description":"Corresponding ProblemType (for ProblemTypeKey)",
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Site Location Key",
                            },
                            {
                                "parameter_name":"SiteLocationFullName",
                                "data_type":"string",
                                "description":"Full Name of Site Location",
                            },
                            {
                                "parameter_name":"ServiceCategoryKey",
                                "data_type":"int",
                                "description":"Service Category Key",
                            },
                            {
                                "parameter_name":"ServiceCategoryName",
                                "data_type":"string",
                                "description":"Corresponding Service Category (for ServiceCategoryKey)",
                            },
                            {
                                "parameter_name":"IsActive",
                                "data_type":"int",
                                "description":"Active Status",
                            },
                            {
                                "parameter_name":"ReporterKey",
                                "data_type":"int",
                                "description":"Reporter User Key",
                            },
                            {
                                "parameter_name":"ReporterFullName",
                                "data_type":"string",
                                "description":"Reported User Full Name",
                            },
                            {
                                "parameter_name":"RequesterObjectKey",
                                "data_type":"int",
                                "description":"Requester Key",
                            },
                            {
                                "parameter_name":"RequesterObjectID",
                                "data_type":"string",
                                "description":"Requester ID",
                            },
                            {
                                "parameter_name":"RequesterObjectType",
                                "data_type":"string",
                                "description":"Requester Object Type",
                            },
                            {
                                "parameter_name":"PriorityKey",
                                "data_type":"int",
                                "description":"Priority of Corrective Work Order",
                            },
                            {
                                "parameter_name":"PriorityID",
                                "data_type":"string",
                                "description":"Corresponding Priority ID for PriorityKey",
                            },
                            {
                                "parameter_name":"AssetID",
                                "data_type":"string",
                                "description":"Corresponding Asset Name",
                            },
                            {
                                "parameter_name":"CreatedDateTime",
                                "data_type":"datetime",
                                "description":"Corrective Work Order Created DateTime",
                            }
                        ]
                    },
                },
                "example_response":{
                        "CWOKey":"1", 
                        "CWOID": "CWO0001", 
                        "RequesterObjectType": "Staff", 
                        "RequesterObjectKey": "24", 
                        "RequesterObjectID": "John Doe", 
                        "LocationKey": "2"
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
                            "ErrorFields": [["cwok"]]
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
        {//Assign Corrective Work Order
            "api_name":"Assign Corrective Work Order",
            "api_description":"This API allows Assigning Servicer to the CWO",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/assign” -H "Authorization:  APIKEY <GenAPI API key>"`,
            "api_code":"3.14.6",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/assign",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"ServicerKey",
                        "data_type":"int",
                        "description":"Primary Key of the Servicer ",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"ServicerType",
                        "data_type":"string",
                        "description":"Servicer Object Type",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"CoordinatorKey",
                        "data_type":"int",
                        "description":"Primary Key of the Coordinator User, Should match with the provided Servicer Object Type."
                    },
                    {
                        "parameter_name":"SupervisorKey",
                        "data_type":"int",
                        "description":"Primary Key of the Supervisor User, Should match with the provided Servicer Object Type",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to assign/clear CWOs"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO Servicer Assignment Successful",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO Servicer Assignment Successful",
                    "CWOKey":"4"
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
                                [ "ServicerKey", "LocationKey", "SupervisorKey" ]
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
                                {"Field": " ServicerKey ", "ValidDataType": "INT"}, 
                                {"Field": " CoordinatorKey ", "ValidDataType": "INT"},
                                {"Field": " SupervisorKey ", "ValidDataType": "INT"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Invalid Data Validation",
                    "examples":[
                        {
                            "ErrorMessage": "Invalid data provided!",
                            "ErrorFields": [
                                [ "ServicerKey", "LocationKey", "SupervisorKey" ]
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid data provided!",
                            "ErrorFields": [
                                ["CoordinatorKey", "ServicerType"], 
                                ["SupervisorKey","ServicerType"]
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
                            "ErrorFields": [["cwok"]]
                        },
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [["ServicerKey"],["ServicerType"]]
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
        {//Re-Assign Corrective Work Order
            "api_name":"Re-Assign Corrective Work Order",
            "api_description":"This API allows Assigning Servicer to the CWO",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/reassign” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.14.7",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/reassign",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"ServicerKey",
                        "data_type":"int",
                        "description":"Primary Key of the Servicer ",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"ServicerType",
                        "data_type":"string",
                        "description":"Servicer Object Type",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"CoordinatorKey",
                        "data_type":"int",
                        "description":"Primary Key of the Coordinator User, Should match with the provided Servicer Object Type."
                    },
                    {
                        "parameter_name":"SupervisorKey",
                        "data_type":"int",
                        "description":"Primary Key of the Supervisor User, Should match with the provided Servicer Object Type",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to reassign servicer for CWOs"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO Servicer Re-Assigned Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO Servicer Re-Assigned Successfully",
                    "CWOKey":"4"
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
                                [ "ServicerKey", "LocationKey", "SupervisorKey" ]
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
                                {"Field": " ServicerKey ", "ValidDataType": "INT"}, 
                                {"Field": " CoordinatorKey ", "ValidDataType": "INT"},
                                {"Field": " SupervisorKey ", "ValidDataType": "INT"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Invalid Data Validation",
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
                                [ "ServicerKey", "LocationKey", "SupervisorKey" ]
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
                            "ErrorFields": [["cwok"]]
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
        {//Reject Servicer Assignment of Corrective Work Order
            "api_name":"Reject Servicer Assignment of Corrective Work Order",
            "api_description":"This API allows Rejecting Servicer Assignment of the CWO",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/servicerreject” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.14.8",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/servicerreject",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"RejectComment",
                        "data_type":"string",
                        "description":"Comment for Rejecting Servicer Assignment",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to reject CWOs"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO Servicer Assignment Rejected Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO Servicer Assignment Rejected Successfully",
                    "CWOKey":"4"
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
                                ["RejectComment"]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Length Validation",
                    "examples":[
                        {
                            "ErrorMessage": "Valid maximum character length has been exceeded!", 
                            "ErrorFields":{"Field": " RejectComment  ", "ValideLength": "1024"}
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
                            "ErrorFields": [["cwok"]]
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
        {//Hold Assignment of Corrective Work Order
            "api_name":"Hold Assignment of Corrective Work Order",
            "api_description":"This API allows Hold Servicer Assignment of the CWO",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/servicerhold” -H "Authorization:  APIKEY <GenAPI API key>"  `,
            "api_code":"3.14.9",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/servicerhold",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"HoldComment",
                        "data_type":"string",
                        "description":"Comment for Holding Servicer Assignment",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to hold Corrective Work Orders"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO Servicer Assignment Hold Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO Servicer Assignment Hold Successfully",
                    "CWOKey":"4"
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
                                ["HoldComment"]
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Data Length Validation",
                    "examples":[
                        {
                            "ErrorMessage": "Valid maximum character length has been exceeded!", 
                            "ErrorFields":{"Field": "HoldComment", "ValideLength": "1024"}
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
                            "ErrorFields": [["cwok"]]
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
        {//Technician Assignment of Corrective Work Order
            "api_name":"Technician Assignment of Corrective Work Order",
            "api_description":"This API allows Assigning Technician of the CWO",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/techassign ” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.14.10",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/techassign",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"WorkDescription",
                        "data_type":"string",
                        "description":"Description of the Work",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"ScheduleDateTime",
                        "data_type":"datetime",
                        "description":"Datetime workorder to be schedule on.",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"TechnicianKey",
                        "data_type":"int",
                        "description":"Primary Key of the Technician",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to assign and schedule Technicians and modify CWO Work Details in CWOs"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO Technician Assigned Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO Technician Assigned Successfully",
                    "CWOKey":"4"
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
                                [ "WorkDescription", "ScheduleDateTime", "TechnicianKey" ]
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
                                {"Field": " ScheduleDateTime ", "ValidDataType": "DATETIME"}, 
                                {"Field": " TechnicianKey  ", "ValidDataType": "INT"}
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
                            "ErrorFields":  {"Field": "WorkDescription", "ValideLength": "1024"}
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
                            "ErrorFields": [["cwok"]]
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
        {//Update Corrective Work Order
            "api_name":"Update Corrective Work Order",
            "api_description":"This API allows updating the Corrective Work Order information",
            "curl":`curl -X PATCH http://GenAPI.com/vis/workorder/v1/cwos/2 -H "Authorization: APIKEY <GenAPI API key>" -H "Content-Type: application/json" --data ' {" LocationKey" : 3, "LocationName":"Singapore.Block1", "Subject":"Basement lights not working", "Description": "Lights not working on Basement”, “ProblemTypeKey": 2, ”ProblemType”: "Lights not working", “ServiceCategory”: "Electrical"}'`,
            "api_code":"3.14.11",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"LocationKey",
                        "data_type":"int",
                        "description":"Location Key of Corrective Work Order"
                    },
                    {
                        "parameter_name":"LocationFullName",
                        "data_type":"string",
                        "description":"Corresponding Location Name (for LocationKey)"
                    },
                    {
                        "parameter_name":"Subject",
                        "data_type":"string",
                        "description":"Subject of the Corrective Work Order"
                    },
                    {
                        "parameter_name":"Description",
                        "data_type":"string",
                        "description":"Description about Corrective Work Order",
                    },
                    {
                        "parameter_name":"ProblemTypeKey",
                        "data_type":"int",
                        "description":"Problem Type Key "
                    },
                    {
                        "parameter_name":"ProblemType",
                        "data_type":"string",
                        "description":"Corresponding ProblemType (for ProblemTypeKey)"
                    },
                    {
                        "parameter_name":"PropertyKey",
                        "data_type":"int",
                        "description":"Key of Property attached to CWO"
                    },
                    {
                        "parameter_name":"PropertyID",
                        "data_type":"string",
                        "description":"Name of Property attached to CWO.Can be provided as an alternative to PropertyKey.If PropertyKey is provided, the PropertyID attribute will be ignored."
                    },
                    {
                        "parameter_name":"ServiceCategoryKey",
                        "data_type":"int",
                        "description":"Primary Key of Service Category"
                    },
                    {
                        "parameter_name":"ServiceCategoryName",
                        "data_type":"string",
                        "description":"Corresponding Service Category."
                    },
                    {
                        "parameter_name":"ReporterKey",
                        "data_type":"int",
                        "description":"Reported User Key",
                    },
                    {
                        "parameter_name":"ReporterObjectType",
                        "data_type":"string",
                        "description":"Reporter Object Type",
                    },
                    {
                        "parameter_name":"RequesterObjectKey",
                        "data_type":"int",
                        "description":"Requester Key",
                    },
                    {
                        "parameter_name":"RequesterObjectType",
                        "data_type":"string",
                        "description":"Requester Object Type",
                    },
                    {
                        "parameter_name":"PriorityKey",
                        "data_type":"int",
                        "description":"Priority Key of CWO",
                    },
                    {
                        "parameter_name":"PriorityID",
                        "data_type":"string",
                        "description":"Corresponding Priority ID for PriorityKey",
                    },
                    {
                        "parameter_name":"AssetKey",
                        "data_type":"int",
                        "description":"Primary Key of the Asset this Work Order related to.",
                    },
                    {
                        "parameter_name":"AssetID",
                        "data_type":"string",
                        "description":"Corresponding Asset Name. Can be provided as an alternative to AssetKey. If AssetKey is provided, the AssetID attribute will be ignored. ",
                    }
                    
                ]
            },
            "user_roles":[
                "Allow to modify CWO Problem Details, Allow to modify CWO Locations"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of Updated Asset",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Corrective Work Order Updated Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"Corrective Work Order Updated Successfully",
                    "CWOKey":"2"
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
                            "param_value":"List of mandatory fields, which are provided empty values.",
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
                                ["LocationKey"]
                            ]
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
                                ["PriorityKey"]]
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
                                {"Field": "Description", "ValideLength": "1024"}, 
                                {"Field": "Subject", "ValideLength": "255"}
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
                            "ErrorFields": [{"Field": "ProblemTypeKey", "ValidDataType": "INT"}, {"Field": "PriorityKey", "ValidDataType": "INT"}]
                          
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
                            "ErrorFields": [["cwok"]]
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
        {//Technician Acknowledge of Corrective Work Order
            "api_name":"Technician Acknowledge of Corrective Work Order",
            "api_description":"This API allows Technician Acknowledgement of the CWO",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/acknowledge” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.14.12",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/acknowledge",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"Signature",
                        "data_type":"string",
                        "description":"Signature value for acknowledge.(Base64 String of the Signature) ",
                        "mandatory":{
                            "status":true,
                            "description":"Only when “Enable signature verification-CWO acknowledge” configuration enabled in CWO app configuration. Otherwise NOT mandatory."
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to acknowledge CWOs"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO Technician Acknowledgement Successful",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO Technician Acknowledgement Successful",
                    "CWOKey":"4"
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
                            "ErrorFields": [["cwok"]]
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
        {//Technician Reject of Corrective Work Order
            "api_name":"Technician Reject of Corrective Work Order",
            "api_description":"This API allows Rejecting Servicer Assignment of the CWO",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/servicerreject” -H "Authorization:  APIKEY <GenAPI API key>"  `,
            "api_code":"3.14.13",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/techreject",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"RejectComment",
                        "data_type":"string",
                        "description":"Comment for Technician Rejection",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to reject CWOs"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO Technician Assignment Rejected Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO Technician Assignment Rejected Successfully",
                    "CWOKey":"4"
                }
                
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Text Field Maximum Length Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for the maximum length of text field validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Valid maximum character length has been exceeded!",
                            "ErrorFields": [{"Field": "RejectComment", "ValideLength": "1024"}]
                        } 
                    ]
                },
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
                            "ErrorFields": [["RejectComment"]]
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
                            "ErrorFields": [["cwok"]]
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
        {//Pause a Corrective Work Order
            "api_name":"Pause a Corrective Work Order",
            "api_description":"This API allows to mark CWO as paused.",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/pause” -H "Authorization:  APIKEY <GenAPI API key>"`,
            "api_code":"3.14.14",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/pause",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"PauseComment",
                        "data_type":"string",
                        "description":"Comment for Pausing CWO",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to pause/resume CWOs"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO marked as Paused Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO marked as Paused Successfully",
                    "CWOKey":"4"
                }
                
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Text Field Maximum Length Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for the maximum length of text field validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Valid maximum character length has been exceeded!",
                            "ErrorFields": [{"Field": "PauseComment", "ValideLength": "1024"}]
                        } 
                    ]
                },
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
                            "ErrorFields": [["PauseComment"]]
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
                            "ErrorFields": [["cwok"]]
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
        {//Resume a Corrective Work Order
            "api_name":"Resume a Corrective Work Order",
            "api_description":"This API allows to mark resumed the CWOs which are Paused and On Hold.",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/resume” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.14.15",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/resume",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"ResetSLA",
                        "data_type":"boolean",
                        "description":"If needs to reset SLA on resume send value as 1. If no needs to reset send as 0. If no value provided, GenAPI will recognize as 0. ‘ResetSLA’ flag will accept only on resume call done on a CWO which is on ‘On Hold’ stage. If a user performed resume call on a CWO which is paused ‘ResetSLA’ flag will be ignored."
                    }
                ]
            },
            "user_roles":[
                "Allow to resume Corrective Work Orders"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO marked as Resumed Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO marked as Resumed Successfully",
                    "CWOKey":"4"
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
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": {"Field": "ResetSLA", "ValidDataType": "BOOLEAN"}
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
                            "ErrorFields": [["cwok"]]
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
        {//Complete a Corrective Work Order
            "api_name":"Complete a Corrective Work Order",
            "api_description":"This API allows to mark CWOs as Completed.",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/complete” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.14.16",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/complete",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"CompletedComment",
                        "data_type":"string",
                        "description":"Comment for Complete CWO",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to complete CWOs"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO marked as Completed Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO marked as Completed Successfully",
                    "CWOKey":"4"
                }
                
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Text Field Maximum Length Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for the maximum length of text field validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Valid maximum character length has been exceeded!",
                            "ErrorFields": [{"Field": "CompletedComment", "ValideLength": "1024"}]
                        } 
                    ]
                },
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
                            "ErrorFields": [["CompletedComment"]]
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
                            "ErrorFields": [["cwok"]]
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
        {//Update Completion Rating of Corrective Work Order
            "api_name":"Update Completion Rating of Corrective Work Order",
            "api_description":" ",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/completedrating ” -H "Authorization:  APIKEY <GenAPI API key>"`,
            "api_code":"3.14.17",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/completedrating",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"Rating",
                        "data_type":"int",
                        "description":"Rating Value [1 - 5]",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to modify CWO rating"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Completed Rating has been modified",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"Completed Rating has been modified",
                    "CWOKey":"4"
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
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": {"Field": "Rating", "ValidDataType": "INT"}
                        }
                    ]
                },
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
                            "ErrorFields": [["Rating"]]
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
                            "ErrorFields": [["cwok"]]
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
        {//Verify & Close a Corrective Work Order
            "api_name":"Verify & Close a Corrective Work Order",
            "api_description":"This API allows to mark CWO as Verify and Closed.",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/close” -H "Authorization:  APIKEY <GenAPI API key>"`,
            "api_code":"3.14.18",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/close",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"ClosedComment",
                        "data_type":"string",
                        "description":"Comment for Close CWO",
                        "mandatory":{
                            status:true
                        }
                    },
                    {
                        "parameter_name":"Signature",
                        "data_type":"string",
                        "description":"Signature value for acknowledge.(Base64 String of the Signature)",
                        "mandatory":{
                            status:true,
                            "description":"Only when “Enable signature verification-CWO Close” configuration enabled in CWO app configuration. Otherwise NOT mandatory.",
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to Verify and Close the CWO"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO marked as Closed Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO marked as Closed Successfully",
                    "CWOKey":"4"
                }
                
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Text Field Maximum Length Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for the maximum length of text field validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Valid maximum character length has been exceeded!",
                            "ErrorFields": [{"Field": "ClosedComment", "ValideLength": "1024"}]
                        } 
                    ]
                },
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
                            "ErrorFields": [["ClosedComment"]]
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
                            "ErrorFields": [["cwok"]]
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
        {//Rework Corrective Work Order
            "api_name":"Rework Corrective Work Order",
            "api_description":"This API allows to mark CWO as rework.",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/rework” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.14.19",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/rework",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"ReworkComment",
                        "data_type":"string",
                        "description":"Comment for Rework CWO",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to rework Corrective Work Orders"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO marked as Rework Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO marked as Rework Successfully",
                    "CWOKey":"4"
                }
                
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Text Field Maximum Length Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for the maximum length of text field validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Valid maximum character length has been exceeded!",
                            "ErrorFields": [{"Field": "ReworkComment", "ValideLength": "1024"}]
                        } 
                    ]
                },
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
                            "ErrorFields": [["ReworkComment"]]
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
                            "ErrorFields": [["cwok"]]
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
        {//Rework & Reassign Corrective Work Order
            "api_name":"Rework & Reassign Corrective Work Order",
            "api_description":"This API allows to mark CWO as rework & reassign. After this done assigned Technician will get revoked and CWO stage will move to Assignment stage.",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/reworkandreassign” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.14.20",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/reworkandreassign",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"ReworkComment",
                        "data_type":"string",
                        "description":"Comment for Rework CWO",
                        "mandatory":{
                            status:true
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to rework & reassign Corrective Work Orders"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO marked as Rework and Reassign Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO marked as Rework and Reassign Successfully",
                    "CWOKey":"4"
                }
                
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"JSON",
                    "error_category":"Text Field Maximum Length Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for the maximum length of text field validation",
                        },
                        {
                            "param_name":"ErrorFields",
                            "param_value":"List of fields, which are validated against the database values.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Valid maximum character length has been exceeded!",
                            "ErrorFields": [{"Field": "ReworkComment", "ValideLength": "1024"}]
                        } 
                    ]
                },
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
                            "ErrorFields": [["ReworkComment"]]
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
                            "ErrorFields": [["cwok"]]
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
        {//Mark Corrective Work Order as Inactive
            "api_name":"Mark Corrective Work Order as Inactive",
            "api_description":"This API allows to mark CWO as inactive.",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workorder/v1/cwos/4/inactive” -H "Authorization:  APIKEY <GenAPI API key>"`,
            "api_code":"3.14.21",
            "http_method":"PATCH",
            "path":"/workorder/v1/cwos/{cwok}/inactive",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                "Allow to Inactivate the CWO"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO marked as Inactive Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"CWO marked as Inactive Successfully",
                    "CWOKey":"4"
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
                            "ErrorFields": [["cwok"]]
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
        {//Add Comment within a Corrective Work Order
            "api_name":"Add Comment within a Corrective Work Order",
            "api_description":"This API allows to add comments into a CWO",
            "curl":`curl -X POST “http://GenAPI.com/vis/workorder/v1/cwos/4/comments” -H "Authorization:  APIKEY <GenAPI API key>" -H "Content-Type: application/json" --data '{"Comment": "The Glass is Broken"}'`,
            "api_code":"3.14.22",
            "http_method":"POST",
            "path":"/workorder/v1/cwos/{cwok}/comments",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"Comment",
                        "data_type":"string",
                        "description":"Comment",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"CommentTypeKey",
                        "data_type":"int",
                        "description":"Primary Key of Comment Type"
                    }
                ]
            },
            "user_roles":[
                "Allow to make Comments in CWOs"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CommentKey",
                                "data_type":"int",
                                "description":"Primary Key of comment",
                            },
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Comment added Successfully",
                            }
                        ]
                    },
                },
                "example_response":[ 
                    {
                        "Status": "Comment added Successfully",
                        "CommentKey": "2", 
                        "CWOKey": "4"
                    }
                ]
                    
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"Text",
                    "error_category":"Data Validation",
                    "examples":[
                        { 
                            "ErrorMessage": "Not all mandatory fields are filled!", 
                            "ErrorFields": [["Comment"]] 
                        },
                        { 
                            "ErrorMessage": "Valid maximum character length has been exceeded!", 
                            "ErrorFields": [{"Field":"Comment", "ValideLength":"1024"}] 
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!", 
                            "ErrorFields": [{"Field":"CommentTypeKey","ValidDataType":"INT"}] 
                        },
                        { 
                            "ErrorMessage": "Invalid Data provided!", 
                            "ErrorFields": [ [ "CommentTypeKey" ] ] 
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
                            "ErrorFields": [["cwok"]]
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
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//Get Comments within a Corrective Work Order
            "api_name":"Get Comments within a Corrective Work Order",
            "api_description":"This API allows to get comments within a CWO.",
            "curl":`curl -X GET “http://GenAPI.com/vis/workorder/v1/cwos/4/comments? CommentTypeKey=3” -H "Authorization:  APIKEY <GenAPI API key>"`,
            "api_code":"3.14.23",
            "http_method":"GET",
            "path":"/workorder/v1/cwos/{cwok}/comments",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                "Allow to view CWO Comments tab"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CommentKey",
                                "data_type":"int",
                                "description":"Primary Key of Comment",
                            },
                            {
                                "parameter_name":"Comment",
                                "data_type":"string",
                                "description":"Comment Text",
                            },
                            {
                                "parameter_name":"CommentType",
                                "data_type":"string",
                                "description":"Description of Comment Type",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "CommentKey": 2, 
                        "Comment": "Water Leaking noticed", 
                        "CommentType":"Rework and Reassign"
                    }, 
                    {
                        "CommentKey": 4, 
                        "Comment": "Work not properly done", 
                        "CommentType":"Rework" 
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
                            "ErrorFields": [["cwok"]]
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
        {//Add Tasks within a Corrective Work Order
            "api_name":"Add Tasks within a Corrective Work Order",
            "api_description":"This API allows to add tasks into a CWO.",
            "curl":`curl -X POST “http://GenAPI.com/vis/workorder/v1/cwos/4/tasks” -H "Authorization:  APIKEY <GenAPI API key>" -H "Content-Type: application/json" --data '{"Task": "Check AHU Temperature"}'`,
            "api_code":"3.14.24",
            "http_method":"POST",
            "path":"/workorder/v1/cwos/{cwok}/tasks",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"Task",
                        "data_type":"string",
                        "description":"Description of the Task",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"Duration",
                        "data_type":"int",
                        "description":"Duration requires for Task in Minutes (min)",
                    },
                    {
                        "parameter_name":"SkillKey",
                        "data_type":"int",
                        "description":"Primary Key of Skill required for Task",
                    }
                ]
            },
            "user_roles":[
                "Allow to add Ad-hoc Tasks to CWOs"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"TaskKey",
                                "data_type":"int",
                                "description":"Primary Key of Task",
                            },
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Task added Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status": "Task added Successfully",
                    "TaskKey": 2, 
                    "CWOKey": 4
                }
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"Text",
                    "error_category":"Data Validation",
                    "examples":[
                        { 
                            "ErrorMessage": "Not all mandatory fields are filled!", 
                            "ErrorFields": [["Task"]] 
                        },
                        { 
                            "ErrorMessage": "Valid maximum character length has been exceeded!", 
                            "ErrorFields": [{"Field":"Task", "ValideLength":"1024"}] 
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!", 
                            "ErrorFields": [
                                {"Field":"Duration","ValidDataType":"INT"},
                                {"Field":"TaskKey","ValidDataType":"INT"}
                            ] 
                        },
                        { 
                            "ErrorMessage": "Invalid Data provided!", 
                            "ErrorFields": [ [ "TaskKey" ] ] 
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
                            "ErrorFields": [["cwok"]]
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
        {//Get Tasks within a Corrective Work Order
            "api_name":"Get Tasks within a Corrective Work Order",
            "api_description":"This API allows to get tasks within a CWO.",
            "curl":`curl -X GET “http://GenAPI.com/vis/workorder/v1/cwos/4/tasks” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.14.25",
            "http_method":"GET",
            "path":"/workorder/v1/cwos/{cwok}/tasks",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                "Allow to view CWO Tasks tab"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"TaskKey",
                                "data_type":"int",
                                "description":"Primary Key of Task",
                            },
                            {
                                "parameter_name":"Task",
                                "data_type":"string",
                                "description":"Description of the Task",
                            },
                            {
                                "parameter_name":"Duration",
                                "data_type":"int",
                                "description":"Duration requires for Task in Minutes (min)",
                            },
                            {
                                "parameter_name":"Skill",
                                "data_type":"string",
                                "description":"Type of Skill required for Task",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "TaskKey": 2, 
                        "Task": "Check Bolts properly fixed", 
                        "Duration":"4",
                        "Skill":"Engineering Skill"
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
                            "ErrorFields": [["cwok"]]
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
        {//Add Attachment into a Corrective Work Order
            "api_name":"Add Attachment into a Corrective Work Order",
            "api_description":"This API allows to add attachments into a CWO.",
            "curl":`curl -X POST “http://GenAPI.com/vis/workorder/v1/cwos/4/attachments” -H "Authorization:  APIKEY <GenAPI API key>" -H "Content-Type: application/json" --data '{"Description": "Broken Switch", “FileName”:”IMG-0564.jpg” “FileType”:”Image”, “Base64Input”:”==r5498hrjdn4893jj…”}'`,
            "api_code":"3.14.26",
            "http_method":"POST",
            "path":"/workorder/v1/cwos/{cwok}/attachments",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"Description",
                        "data_type":"string",
                        "description":"Description for attachment",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"FileName",
                        "data_type":"string",
                        "description":"Name of the attachment file with extension.",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"FileType",
                        "data_type":"string",
                        "description":"Type of the file attachment[Possible Values: Document, Image, Video, Audio]",
                        "applicable_value":"[Document, Image, Video, Audio]",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"Base64Input",
                        "data_type":"string",
                        "description":"Base64 String of the attachment",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to add Photo/Image"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"AttachmentKey",
                                "data_type":"int",
                                "description":"Primary Key of the Attachment",
                            },
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of Corrective Work Order ",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Attachment added Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status": "Attachment added Successfully",
                    "AttachmentKey": 2, 
                    "CWOKey": 4
                }
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"Text",
                    "error_category":"Data Validation",
                    "examples":[
                        { 
                            "ErrorMessage": "Not all mandatory fields are filled!", 
                            "ErrorFields": [["Description","FileName", "FileType", "Base64Input" ]] 
                        },
                        { 
                            "ErrorMessage": "Invalid Data provided!", 
                            "ErrorFields": [ [ "FileType","Base64Input" ] ] 
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
                            "ErrorFields": [["cwok"]]
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
        {//Get Attachments within a Corrective Work Order
            "api_name":"Get Attachments within a Corrective Work Order",
            "api_description":"This API allows to get attachments within a CWO",
            "curl":`curl -X GET “http://GenAPI.com/vis/workorder/v1/cwos/4/attachments” -H "Authorization:  APIKEY <GenAPI API key>"`,
            "api_code":"3.14.27",
            "http_method":"GET",
            "path":"/workorder/v1/cwos/{cwok}/attachments",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                "Allow to upload Documents"
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
                                "parameter_name":"AttachmentKey",
                                "data_type":"int",
                                "description":"Primary Key of Attachment",
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description of Attachment",
                            },
                            {
                                "parameter_name":"AttachmentURL",
                                "data_type":"string",
                                "description":"URL of the Attachment",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "AttachmentKey": 2,
                        "Description": "Door Hinge broken", 
                        "AttachmentURL": "https://GenAPI.com/resources/uploads/12354365_wrat_43.jpg"
                    }, 
                    {
                        "AttachmentKey": 4,
                        "Description": "Window broken", 
                        "AttachmentURL": "https://GenAPI.com/resources/uploads/12354365_wrat_46.jpg"
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
                            "ErrorFields": [["cwok"]]
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
        {//Get CWO Comment Types
            "api_name":"Get CWO Comment Types",
            "api_description":"This API allows to get CWO Comment Types.",
            "curl":`curl -X GET “http://GenAPI.com/vis/workorder/v1/commenttypes” -H "Authorization:  APIKEY <GenAPI API key>"`,
            "api_code":"3.14.28",
            "http_method":"GET",
            "path":"/workorder/v1/commenttypes",
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
                "Allow to view CWO Comment Types"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CommentTypeKey",
                                "data_type":"int",
                                "description":"Primary Key of Comment Type"
                            },
                            {
                                "parameter_name":"CommentType",
                                "data_type":"string",
                                "description":"Description of Comment Type"
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "CommentTypeKey":"1", 
                        "CommentType":"Rework Comment"
                    }, 
                    {
                        "CommentTypeKey":"2", 
                        "CommentType":"Close Comment"
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
        {//Create Follow up Work Order on a CWO.
            "api_name":"Create Follow up Work Order on a CWO",
            "api_description":"This API allows to create a follow up work order on a CWO.",
            "curl":`curl -X POST “http://GenAPI.com/vis/workorder/v1/cwos/4/followup” -H "Authorization:  APIKEY <GenAPI API key>" -H "Content-Type: application/json" --data '{"CWOKey": 3, “RequestDescription”: ”Creating follow up to the existing”}'`,
            "api_code":"3.14.29",
            "http_method":"POST",
            "path":"/workorder/v1/cwos/{cwok}/followup",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                        "parameter_name":"RequestDescription",
                        "data_type":"string",
                        "description":"Description for Follow up Work Order"
                    }
                ]
            },
            "user_roles":[
                "Allow to configure Follow-ups in CWOs"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of Follow Up Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Follow up work order created successfully",
                            }
                        ]
                    },
                },
                "example_response":[ 
                    {
                        "Status": "Follow up work order created successfully",
                        "CWOKey": "14"
                    }
                ]
                    
            },
            "error_handling":[
                {
                    "error_code":"400",
                    "error_response_type":"Text",
                    "error_category":"Data Length Validation",
                    "examples":[
                        { 
                            "ErrorMessage": "Valid maximum character length has been exceeded!", 
                            "ErrorFields": [{"Field":"RequestDescription", "ValideLength":"1024"}] 
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
                            "ErrorFields": [["cwok"]]
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
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        },
        {//Cancel Corrective Work Order
            "api_name":"Cancel Corrective Work Order",
            "api_description":"This API allows to mark CWO as Cancelled.",
            "curl":`curl -X DELETE “http://GenAPI.com/vis/workorder/v1/cwos/4” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.14.30",
            "http_method":"DELETE",
            "path":"/workorder/v1/cwos/{cwok}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{cwok}",
                        "data_type":"int",
                        "description":"Primary Key of Corrective Work Order"
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
                "Allow to cancel CWOs"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"CWOKey",
                                "data_type":"int",
                                "description":"Primary Key of the Corrective Work Order",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"CWO marked as cancelled Successfully",
                            }
                        ]
                    },
                },
                "example_response":[ 
                    {
                        "Status": "CWO marked as cancelled Successfully", 
                        "CWOKey": "34"
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
                            "ErrorFields": [["cwok"]]
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
                        {
                            "ErrorMessage":"Internal Server Error"
                        }
                    ]
                }
            ]
        }
    ]
}