const WorkRequestAPIs =  {//Work Request
    "app_name":"Work Request",
    "app_code":"3.6",
    "application_description":"",
    "apis":[
        {//Create a Work Request
            "api_name":"Create a Work Request Vihan",
            "api_description":"This API is used to create Work Requests.",
            "curl":`curl -X POST http://GenAPI.com/vis/workrequest/v1/wrs -H "Authorization: APIKEY <GenAPI API key>" -H "Content-Type: application/json" --data'{ "RequesterObjectKey":"1", "RequesterObjectType":"staff", "ProblemKey":"5", "ReporterKey":"1", " ServiceCategoryKey":"3", "Subject":"damaged glass", "LocationKey":"3", "AppointmentScheduleOn":"2021-03-23T00:00:00Z", "Description":"Rain is coming in side from the broken glass" }'`,
            "api_code":"3.6.1",
            "http_method":"POST",
            "path":"/workrequest/v1/wrs",
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
                        },
                        "references":[
                            {
                                "title":"Refer API 3.6.4 to get available Requesters for Work Request",
                                "app_code":"3.6",
                                "api_code":"3.6.4"
                            }
                        ]
                    },
                    {
                        "parameter_name":"ProblemTypeKey",
                        "data_type":"int",
                        "description":"Problem Type Key ",
                        "mandatory":{
                            "status":true,
                            "description":"Except when ProblemTypeName is provided"
                        }
                    },
                    {
                        "parameter_name":"ProblemTypeName",
                        "data_type":"string",
                        "description":"Name of the Problem Type. Can be provided as an alternative to ProblemTypeKey. If ProblemTypeKey is provided, ProblemTypeName attribute wll be ignored.",
                        "mandatory":{
                            "status":true,
                            "description":"Except when ProblemTypeKey is provided"
                        }
                    },
                    {
                        "parameter_name":"ReporterKey",
                        "data_type":"int",
                        "description":"Reported User Key",
                    },
                    {
                        "parameter_name":"ServiceCategoryKey",
                        "data_type":"int",
                        "description":"Service Category Key",
                        "mandatory":{
                            "status":true,
                            "description":"Except if ServiceCategoryName is provided"
                        }
                    },
                    {
                        "parameter_name":"ServiceCategoryName",
                        "data_type":"string",
                        "description":"Service Category Name. Can be provided as an alternative to ServiceCategoryKey. If ServiceCategoryKey is provided, the ServiceCategoryName attribute will be ignored",
                        "mandatory":{
                            "status":true,
                            "description":"Except when ServiceCategoryKey is provided"
                        }
                    },
                    {
                        "parameter_name":"Subject",
                        "data_type":"string",
                        "description":"Subject of Work Request",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"LocationKey",
                        "data_type":"int",
                        "description":"Location of Problem found",
                        "mandatory":{
                            "status":true,
                            "description":"Except when LocationFullName is provided"
                        }
                    },
                    {
                        "parameter_name":"LocationFullName",
                        "data_type":"string",
                        "description":"Location of Problem found. Can be provided as an alternative to LocationKey. If LocationKey is provided, the LocationFullName attribute is ignored.",
                        "mandatory":{
                            "status":true,
                            "description":"Except when LocationKey is provided"
                        }
                    },
                    {
                        "parameter_name":"AppointmentScheduleOn",
                        "data_type":"datetime",
                        "description":"Appointment Schedule On Datetime",
                    },
                    {
                        "parameter_name":"Description",
                        "data_type":"string",
                        "description":"Description about Work Request",
                    },
                    {
                        "parameter_name":"PriorityKey",
                        "data_type":"int",
                        "description":"Priority Key",
                    },
                    {
                        "parameter_name":"PriorityName",
                        "data_type":"string",
                        "description":"Priority configured in the System. Can be provided as an alternative to PriorityKey. If PriorityKey is provided, the PriorityName attribute will be ignored.",
                    }
                ]
            },
            "user_roles":[
                "Allow to register Work Requests"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Work Request Created Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "WRKey":"7",
                    "status":"Work Request Created Successfully"
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
                                ["RequesterObjectKey"],
                                ["RequesterObjectType"], 
                                ["Subject"], 
                                ["LocationKey", "LocationFullName"], 
                                ["ProblemTypeKey", "ProblemTypeName"], 
                                ["ServiceCategoryKey", "ServiceCategoryName"] 
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
                            "param_value":"List of fields, when several records are existing for same field",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "There are several records exist for following fields. Please provide Keys instead of names",
                            "ErrorFields": [
                                "ServiceCategoryName"
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
                                {"Field": "WorkCoordinatorKey", "ValidDataType": "INT"}, 
                                {"Field": "RequesterObjectKey", "ValidDataType": "INT"}, 
                                {"Field": "ProblemTypeKey", "ValidDataType": "INT"}, 
                                {"Field": "PriorityKey", "ValidDataType": "INT"}, 
                                {"Field": "ServiceCategoryKey", "ValidDataType": "INT"}, 
                                {"Field": "ReporterKey", "ValidDataType": "INT"}, 
                                {"Field": "AppointmentScheduleOn ", "ValidDataType": " Datetime"} 
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
                                        ["ProblemTypeKey", "ProblemTypeName"], 
                                        ["ServiceCategoryKey", "ServiceCategoryName"]
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
                        },
                        {
                            "ErrorMessage":"Invalid Data provided!",
                            "ErrorFields": [
                                ["ServiceCategoryName"],
                                ["LocationFullName"],
                                ["ProblemTypeName"]
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
        {//Get Work Request Details
            "api_name":"Get Work Request Details",
            "api_description":"This API is used to get Work Request Details",
            "curl":`curl -X GET http://GenAPI.com/vis/workrequest/v1/wrs/{wrk}?{Query String} -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.6.2",
            "http_method":"GET",
            "path":"/workrequest/v1/wrs/{wrk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Work Request Key"
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
                "Allow to view Work Request Details"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of Work Request",
                            },
                            {
                                "parameter_name":"WRID",
                                "data_type":"string",
                                "description":"Work Request ID",
                            },
                            {
                                "parameter_name":"ParentWRKey",
                                "data_type":"int",
                                "description":"Parent Work Request Key (if Exists)",
                            },
                            {
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Location Key of Work Request",
                            },
                            {
                                "parameter_name":"LocationFullName",
                                "data_type":"string",
                                "description":"Corresponding Location Name (for LocationKey)",
                            },
                            {
                                "parameter_name":"Subject",
                                "data_type":"string",
                                "description":"Subject of the Work Request",
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description about Work Request",
                            },
                            {
                                "parameter_name":"Stage",
                                "data_type":"string",
                                "description":"Current Stage of Work Request",
                            },
                            {
                                "parameter_name":"ProblemTypeKey",
                                "data_type":"int",
                                "description":"Problem Type Key",
                            },
                            {
                                "parameter_name":"ProblemType",
                                "data_type":"string",
                                "description":"Corresponding ProblemType(for ProblemTypeKey)",
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Site Location Key",
                            },
                            {
                                "parameter_name":"SiteLocationFullName",
                                "data_type":"string",
                                "description":"Site Location Full Name",
                            },
                            {
                                "parameter_name":"ServiceCategoryKey",
                                "data_type":"int",
                                "description":"PrimaryKey of Service Category",
                            },
                            {
                                "parameter_name":"ServiceCategoryName",
                                "data_type":"string",
                                "description":"Corresponding Service Category(for ServiceCategoryKey)",
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
                                "parameter_name":"AppointmentScheduleOn",
                                "data_type":"datetime",
                                "description":"Appointment Schedule On DateTime",
                            },
                            {
                                "parameter_name":"WorkCoordinatorKey",
                                "data_type":"int",
                                "description":"Work Coordinator User Key",
                            },
                            {
                                "parameter_name":"WorkCoordinatorFullName",
                                "data_type":"string",
                                "description":"Work Coordinator Full Name",
                            },
                            {
                                "parameter_name":"PriorityKey",
                                "data_type":"int",
                                "description":"Priority of WR",
                            },
                            {
                                "parameter_name":"PriorityID",
                                "data_type":"string",
                                "description":"Corresponding Priority ID for PriorityKey",
                            },
                            {
                                "parameter_name":"CreatedDateTime",
                                "data_type":"datetime",
                                "description":"WR Created DateTime",
                            },
                            {
                                "parameter_name":"IsSatisfied",
                                "data_type":"int",
                                "description":"Satisfied Status",
                            },
                            {
                                "parameter_name":"AssetKey",
                                "data_type":"int",
                                "description":"Key of the Asset",
                            },
                            {
                                "parameter_name":"AssetID",
                                "data_type":"string",
                                "description":"Name of the Asset",
                            }
                        ]
                    },
                },
                "example_response":{
                    "WRKey":"1", 
                    "WRID": "WR0001", 
                    "RequesterObjectType": "Staff", 
                    "RequesterObjectKey": "24",
                    "RequesterObjectID": "Nisala Madhusanka", 
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
                            "ErrorFields": [["wrk"]]
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
        {//Get Work Requests
            "api_name":"Get Work Requests",
            "api_description":"This API is used to get all the Work Requests created in the system.",
            "curl":`curl -X GET http://GenAPI.com/vis/workrequest/v1/wrs?fields={WRKey,WRID,RequesterObjectType,RequesterObjectKey,RequesterObjectID,LocationKey,AssetKey} -H "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.6.3",
            "http_method":"GET",
            "path":"/workrequest/v1/wrs",
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
                        "description":"Text filter on WRID, (This Search works similar to the mechanism in SQL search/ Google search)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    },
                    {
                        "parameter_name":"ReporterKey",
                        "data_type":"int",
                        "description":"Reporter Key User Object",
                        "default_value":"1"
                    },
                    {
                        "parameter_name":"LocationKey",
                        "data_type":"int",
                        "description":"WR Location Key",
                    },
                    {
                        "parameter_name":"ServiceCategoryKey",
                        "data_type":"int",
                        "description":"Service Category",
                        "references":[
                            {
                                "title":"Refer API 3.4.2",
                                "app_code":"3.4",
                                "api_code":"3.4.2"
                            }
                        ]
                    },
                    {
                        "parameter_name":"ProblemTypeKey",
                        "data_type":"int",
                        "description":"Problem Type",
                        "references":[
                            {
                                "title":"Refer API 3.4.4",
                                "app_code":"3.4",
                                "api_code":"3.4.4"
                            }
                        ]
                    },
                    {
                        "parameter_name":"IncludeInactive",
                        "data_type":"int",
                        "description":"Default (0 or not passed) only the Active items be showen. If the value is 1, it will include inactive items too",
                        "default_value":"0",
                        "applicable_value":"0 or 1"
                    },
                    {
                        "parameter_name":"StartDate",
                        "data_type":"date",
                        "description":"Start Date Filter. WRs created after this date will be returned",
                    },
                    {
                        "parameter_name":"EndDate",
                        "data_type":"date",
                        "description":"End Date Filter. WRs created before this date will be returned",
                    },
                    {
                        "parameter_name":"Stage",
                        "data_type":"string",
                        "description":"Stage Filter. WRs on this stage will be returned",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Work Requests Search Page"
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
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of Work Request",
                            },
                            {
                                "parameter_name":"WRID",
                                "data_type":"string",
                                "description":"Work Request ID",
                            },
                            {
                                "parameter_name":"ParentWRKey",
                                "data_type":"int",
                                "description":"Parent Work Request Key (if Exists)",
                            },
                            {
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Location Key of Work Request",
                            },
                            {
                                "parameter_name":"LocationFullName",
                                "data_type":"string",
                                "description":"Corresponding Location Name (for LocationKey)",
                            },
                            {
                                "parameter_name":"Subject",
                                "data_type":"string",
                                "description":"Short Description of Work Request",
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description about Work Request",
                            },
                            {
                                "parameter_name":"Stage",
                                "data_type":"string",
                                "description":"Current Stage of Work Request",
                            },
                            {
                                "parameter_name":"ProblemTypeKey",
                                "data_type":"int",
                                "description":"Problem Type Key",
                            },
                            {
                                "parameter_name":"ProblemType",
                                "data_type":"string",
                                "description":"Corresponding ProblemType(for ProblemTypeKey)",
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
                                "description":"Corresponding Service Category(for ServiceCategoryKey)",
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
                                "parameter_name":"AppointmentScheduleOn",
                                "data_type":"datetime",
                                "description":"Appointment Schedule On DateTime",
                            },
                            {
                                "parameter_name":"WorkCoordinatorKey",
                                "data_type":"int",
                                "description":"Work Coordinator's User Key",
                            },
                            {
                                "parameter_name":"WorkCoordinatorFullName",
                                "data_type":"string",
                                "description":"Work Coordinator's Full Name",
                            },
                            {
                                "parameter_name":"PriorityKey",
                                "data_type":"int",
                                "description":"Priority of WR",
                            },
                            {
                                "parameter_name":"PriorityID",
                                "data_type":"string",
                                "description":"Corresponding Priority ID for PriorityKey",
                            },
                            {
                                "parameter_name":"CreatedDateTime",
                                "data_type":"datetime",
                                "description":"WR Created DateTime",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "WRKey":"1", 
                        "WRID": "WR0001", 
                        "RequesterObjectType": "Staff", 
                        "RequesterObjectKey": "24",
                        "RequesterObjectID": "Nisala Madhusanka", 
                        "LocationKey": "2",
                        "AssetKey": "53"
                    },
                    {
                        "WRKey":"2", 
                        "WRID": "WR0002", 
                        "RequesterObjectType": "Staff", 
                        "RequesterObjectKey": "24",
                        "RequesterObjectID": "Nisala Madhusanka", 
                        "LocationKey": "2",
                        "AssetKey": "53"
                    },
                    {
                        "WRKey":"3", 
                        "WRID": "WR0003", 
                        "RequesterObjectType": "Staff", 
                        "RequesterObjectKey": "24",
                        "RequesterObjectID": "Nisala Madhusanka", 
                        "LocationKey": "2",
                        "AssetKey": "53"
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
                                {"Field": "ReporterKey", "ValidDataType": "INT"}, 
                                {"Field": "LocationKey", "ValidDataType": "INT"}, 
                                {"Field": "ServiceCategoryKey", "ValidDataType": "INT"}, 
                                {"Field": "ProblemTypeKey", "ValidDataType": "INT"}, 
                                {"Field": "StartDate", "ValidDataType": "DATE"}, 
                                {"Field": "EndDate", "ValidDataType": "DATE"} 
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "ReporterKey", "ValidDataType": "INT"}, 
                                {"Field": "LocationKey", "ValidDataType": "INT"},
                                {"Field": "StartDate", "ValidDataType": "DATE"}
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
        {//Get Work Requesters
            "api_name":"Get Work Requesters",
            "api_description":"This API returns Work Requester Object for Work Request.",
            "curl":`curl -X GET http://GenAPI.com/vis/workrequest/v1/requesters -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.6.4",
            "http_method":"GET",
            "path":"/workrequest/v1/requesters",
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
                        "parameter_name":"RequesterObjectType",
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
                                "parameter_name":"RequesterObjectID",
                                "data_type":"string",
                                "description":"Requester ID",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "RequesterObjectKey":"1", 
                        "RequesterObjectType":"Organization.OrgStaff",
                        "RequesterObjectID":"Nisala"
                    }, 
                    {
                        "RequesterObjectKey":"2",
                        "RequesterObjectType":"Organization.OrgStaff",
                        "RequesterObjectID":"Piyake"
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
        {//Update Work Request
            "api_name":"Update Work Request",
            "api_description":"This API is used to update the information of the Work Request created.",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workrequest/v1/wrs/3” -H    "Authorization: APIKEY <GenAPI API key>” -H "Content-Type: application/json" --data '{"Description": "The Glass is Broken", "ProblemTypeKey": "5", "AppointmentScheduleOn":"2021-03-23T00:00:00Z" }'`,
            "api_code":"3.6.5",
            "http_method":"PATCH",
            "path":"/workrequest/v1/wrs/{wrk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Work Request Key"
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
                        "description":"Primary Key of corresponding Location",
                        "mandatory":{
                            "status":false,
                            "description":"Except ProblemTypeKey (ProblemTypeName), ServiceCategoryKey (ServiceCategoryName) provided."
                        }
                    },
                    {
                        "parameter_name":"LocationFullName",
                        "data_type":"string",
                        "description":"Location of the Problem found. Can be provided as an alternative to LocationKey. If LocationKey is provided, the LocationFullName attribute will be ignored.",
                        "mandatory":{
                            "status":false,
                            "description":"Except ProblemTypeKey (ProblemTypeName), ServiceCategoryKey (ServiceCategoryName) provided and LocationKey not provided."
                        }
                    },
                    {
                        "parameter_name":"WorkCoordinatorKey",
                        "data_type":"int",
                        "description":"Primary Key of Work Coordinator",
                    },
                    {
                        "parameter_name":"RequesterObjectKey",
                        "data_type":"int",
                        "description":"Primary Key of Requester",
                        "mandatory":{
                            "status":false,
                            "description":"Except when RequesterObjectType is provided"
                        }
                    },
                    {
                        "parameter_name":"RequesterObjectType",
                        "data_type":"string",
                        "description":"Requester Type (If Requester Key is given, Requester Type also needs to be passed)",
                        "mandatory":{
                            "status":false,
                            "description":"Except when RequesterObjectKey is provided"
                        }
                    },
                    {
                        "parameter_name":"ProblemTypeKey",
                        "data_type":"int",
                        "description":"Primary Key of Problem Type",
                        "mandatory":{
                            "status":false,
                            "description":"Except LocationKey (LocationFullName), ServiceCategoryKey (ServiceCategoryName) provided."
                        }
                    },
                    {
                        "parameter_name":"ProblemTypeName",
                        "data_type":"string",
                        "description":"Name of the Problem Type. Can be provided as an alternative to ProblemTypeKey. If ProblemTypeKey is provided, ProblemTypeName attribute wll be ignored.",
                    },
                    {
                        "parameter_name":"PriorityKey",
                        "data_type":"int",
                        "description":"Primary Key of Priority",
                    },
                    {
                        "parameter_name":"PriorityName",
                        "data_type":"string",
                        "description":"Priority configured in the System. Can be provided as an alternative to PriorityKey. If PriorityKey is provided, the PriorityName attribute will be ignored.",
                    },
                    {
                        "parameter_name":"ServiceCategoryKey",
                        "data_type":"int",
                        "description":"Primary Key of Service Category Key",
                        "mandatory":{
                            "status":false,
                            "description":"Except LocationKey (LocationFullName), ProblemTypeKey (ProblemTypeName) provided."
                        }
                    },
                    {
                        "parameter_name":"ServiceCategoryName",
                        "data_type":"string",
                        "description":"Service Category Name. Can be provided as an alternative to ServiceCategoryKey. If ServiceCategoryKey is provided, the ServiceCategoryName attribute will be ignored",
                        "mandatory":{
                            "status":false,
                            "description":"Except LocationKey (LocationFullName), ProblemTypeKey (ProblemTypeName) provided and ServiceCategoryKey is not provided."
                        }
                    },
                    {
                        "parameter_name":"Subject",
                        "data_type":"string",
                        "description":"Subject of Work Request",
                    },
                    {
                        "parameter_name":"Description",
                        "data_type":"string",
                        "description":"Description about Work Request",
                    },
                    {
                        "parameter_name":"ReporterKey",
                        "data_type":"int",
                        "description":"Primary Key of Reporter",
                    },
                    {
                        "parameter_name":"AppointmentScheduleOn",
                        "data_type":"datetime",
                        "description":"Appointment Schedule On Datetime",
                    }
                ]
            },
            "user_roles":[
                "Allow to modify Work Requests"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of Updated Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Work Request Updated Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "WRKey":"3",
                    "Status":"Work Request Updated Successfully"
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
                                ["RequesterObjectType"], 
                                ["RequesterObjectKey"], 
                                ["ServiceCategoryKey", "ServiceCategoryName"], 
                                ["ProblemTypeKey", "ProblemTypeName"], 
                                ["LocationKey"]
                            ]
                        },
                        {
                            "ErrorMessage": "No Updatable Fields found"
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
                            "param_value":"List of fields, when several records are existing for same field",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "There are several records exist for following fields. Please provide Keys instead of names",
                            "ErrorFields": [
                                "ServiceCategoryName"
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
                            "param_value":"This error message gets triggered when invalid data is provided.",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Combination of Work Request Location,ServiceCategory and ProblemType is invalid"
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
                                {"Field": "LocationKey", "ValidDataType": "INT"}, 
                                {"Field": "WorkCoordinatorKey", "ValidDataType": "INT"}, 
                                {"Field": "RequesterObjectKey", "ValidDataType": "INT"}, 
                                {"Field": "ProblemTypeKey", "ValidDataType": "INT"}, 
                                {"Field": "PriorityKey", "ValidDataType": "INT"}, 
                                {"Field": "ServiceCategoryKey", "ValidDataType": "INT"}, 
                                {"Field": "ReporterKey", "ValidDataType": "INT"}, 
                                {"Field": "AppointmentScheduleOn", "ValidDataType": "Datetime "} 
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "ProblemTypeKey", "ValidDataType": "INT"}, 
                                {"Field": "PriorityKey", "ValidDataType": "INT"}, 
                                {"Field": "AppointmentScheduleOn", "ValidDataType": " Datetime "}
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
                                [[["ProblemTypeKey", "ProblemTypeName"], ["ServiceCategoryKey", "ServiceCategoryName"]]], 
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
                    "error_category":"Data Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message when try to modify the work request in modification is not allowed stage",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Cannot modify the Work Request in this Stage!"
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
                            "ErrorFields": [["wrk"]]
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
        {//Comment on Work Request
            "api_name":"Comment on Work Request",
            "api_description":"This API allows adding Comments on Work Requests created in the system.",
            "curl":`curl -X POST “http://GenAPI.com/vis/workrequest/v1/wrs/2/comments” -H    "Authorization: APIKEY <GenAPI API key>” -H "Content-Type: application/json" --data '{"Comment": "The Glass is Broken"}'`,
            "api_code":"3.6.6",
            "http_method":"POST",
            "path":"/workrequest/v1/wrs/{wrk}/comments",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Work Request Key"
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
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to comment on Work Requests"
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
                                "description":"Primary Key of the Comment",
                            },
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of corresponding Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Comment Added Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status": "Comment Added Successfully", 
                    "CommentKey": "7", 
                    "WRKey": "2"
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
                            "ErrorFields": [["Comment"]]
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
                            "ErrorFields": [{"Field": " Comment ", "ValideLength": "1024"}]
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
                            "param_value":"Error message for stages which does not allow to comment",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Cannot Comment on this Stage!",
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
                            "ErrorFields": [["wrk"]]
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
        {//Get Comments on Work Request
            "api_name":"Get Comments on Work Request",
            "api_description":"This API returns all the Comments given on Work Request. If WRKey is not sent, it will return all the Comments that have been entered.",
            "curl":`curl -X GET http://GenAPI.com/vis/workrequest/v1/wrs/{wrk}/comments” -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.6.7",
            "http_method":"GET",
            "path":"/workrequest/v1/wrs/{wrk}/comments",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Work Request Key"
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
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Comments tab in Work Requests"
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
                                "parameter_name":"CommentKey",
                                "data_type":"int",
                                "description":"Primary Key of comment",
                            },
                            {
                                "parameter_name":"Comment",
                                "data_type":"string",
                                "description":"Comment",
                            },
                            {
                                "parameter_name":"CommentedUserKey",
                                "data_type":"int",
                                "description":"Key of Commented User",
                            },
                            {
                                "parameter_name":"CommentedDateTime",
                                "data_type":"datetime",
                                "description":"Commented Date and Time",
                            }
                        ]
                    },
                },
                "example_response":[ 
                    {
                        "CommentKey": "1", 
                        "Comment": "Parts of the Broken Glass are still remaining on the frame", 
                        "CommentedUserKey": "14", 
                        "CommentedDateTime": "2021-07-30T12:34:17Z"
                    },
                    {
                        "CommentKey": "2", 
                        "Comment": "Air Blows very fast trough the broken window", 
                        "CommentedUserKey": "14", 
                        "CommentedDateTime": "2021-07-31T12:34:17Z"
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
                        }
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
                            "ErrorFields": [["wrk"]]
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
        {//Cancel Work Request
            "api_name":"Cancel Work Request",
            "api_description":"This API allows cancelling a Work Request",
            "curl":`curl -X DELETE “http://GenAPI.com/vis/workrequest/v1/wrs/22” -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.6.8",
            "http_method":"DELETE",
            "path":"/workrequest/v1/wrs/{wrk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Work Request Key"
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
                "Allow to cancel Work Requests"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of cancelled Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Work Request Cancelled Successfully",
                            }
                        ]
                    },
                },
                "example_response":[ 
                    {
                        "Status": "Work Request Cancelled Successfully", 
                        "WRKey": "34"
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
                            "param_value":"Error message for stages which cannot proceed cancel",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Cannot Cancel Work Request in this Stage!"
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
                            "param_value":"Error message when try to cancel a work request which is already cancelled",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Work Request is Already Cancelled!"
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
                            "ErrorFields": [["wrk"]]
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
        {//Add Attachment
            "api_name":"Add Attachment to a Work Request",
            "api_description":"This API allows to add attachments into a Work Request.",
            "curl":`curl -X POST http://GenAPI.com/vis/workrequest/v1/wrs/{wrk}/attachments -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.6.9",
            "http_method":"POST",
            "path":"/workrequest/v1/wrs/{wrk}/attachments",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                        "description":"Type of the file attachment",
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
                "Allow to upload Documents"
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
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of Work Request",
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
                    "WRKey": 4
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
                            "ErrorFields": [["wrk"]]
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
        {//Get Attachments
            "api_name":"Get Attachments on Work Request",
            "api_description":"This API allows to get attachments added into a WR.",
            "curl":`curl -X GET http://GenAPI.com/vis/workrequest/v1/wrs/{wrk}/attachments” -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.6.10",
            "http_method":"GET",
            "path":"/workrequest/v1/wrs/{wrk}/attachments",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                            "ErrorFields": [["wrk"]]
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
        {//Acknowledge
            "api_name":"Acknowledge Work Request",
            "api_description":"This API allows acknowledge a Work Request",
            "curl":`curl -X PATCH http://GenAPI.com/vis/workrequest/v1/wrs/{wrk}/acknowledge -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.6.11",
            "http_method":"PATCH",
            "path":"/workrequest/v1/wrs/{wrk}/acknowledge",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                        "parameter_name":"WorkCoordinatorKey",
                        "data_type":"int",
                        "description":"Key of Work Coordinator",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to acknowledge any Work Request"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Key of acknowledged Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Work Request acknowledged Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "WRKey":"4",
                    "Status":"Work Request acknowledged Successfully"
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
                            "ErrorFields": [["wrk"]]
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
        {
            "api_name":"Reject Work Request",
            "api_description":"This API allows reject a Work Request",
            "curl":`curl -X PATCH http://GenAPI.com/vis/workrequest/v1/wrs/{wrk}/reject -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.6.12",
            "http_method":"PATCH",
            "path":"/workrequest/v1/wrs/{wrk}/reject",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                        "parameter_name":"RejectReasonKey",
                        "data_type":"int",
                        "description":"Primary Key of Reject Reason",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to reject Work Requests"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of the rejected Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Work Request rejected Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "WRKey":"4",
                    "Status":"Work Request rejected Successfully"
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
                            "ErrorFields": [["wrk"]]
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
        {
            "api_name":"Add Action to a Work Request",
            "api_description":"This API allows to add attachments into a Work Request.",
            "curl":`curl -X POST http://GenAPI.com/vis/workrequest/v1/wrs/{wrk}/action -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.6.13",
            "http_method":"POST",
            "path":"/workrequest/v1/wrs/{wrk}/action",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                        "parameter_name":"Action",
                        "data_type":"string",
                        "description":"Description of the Action",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"AssignedUserKey",
                        "data_type":"int",
                        "description":"Primary Key of the User this action gets assigned",
                    }
                ]
            },
            "user_roles":[
                "Allow to add Actions to Work Requests"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"ActionKey",
                                "data_type":"int",
                                "description":"Primary Key of Action",
                            },
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Action added Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status": "Action added Successfully",
                    "ActionKey": 2, 
                    "WRKey": 4
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
                            "ErrorFields": [["Action"]] 
                        },
                        { 
                            "ErrorMessage": "Valid maximum character length has been exceeded!", 
                            "ErrorFields": [{"Field":"Action", "ValideLength":"255"}] 
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!", 
                            "ErrorFields": [{"Field":"AssignedUserKey","ValidDataType":"INT"}] 
                        },
                        { 
                            "ErrorMessage": "Invalid Data provided!", 
                            "ErrorFields": [ [ "AssignedUserKey" ] ] 
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
                            "ErrorFields": [["wrk"]]
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
        {
            "api_name":"Get Actions on Work Request",
            "api_description":"This API allows to get actions on Work Request.",
            "curl":`curl -X GET http://GenAPI.com/vis/workrequest/v1/wrs/{wrk}/action -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.6.14",
            "http_method":"GET",
            "path":"/workrequest/v1/wrs/{wrk}/action",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                "Allow to view Actions tab in Work Requests"
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
                                "parameter_name":"ActionKey",
                                "data_type":"int",
                                "description":"Primary Key of Task",
                            },
                            {
                                "parameter_name":"Action",
                                "data_type":"string",
                                "description":"Description of the Action",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Status of the Action (Completed or Not Completed)",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "ActionKey": 2, 
                        "Action": "Check Bolts properly fixed", 
                        "Status":"Completed"
                    }, 
                    {
                        "ActionKey": 4, 
                        "Action": "Check any burnt chips", 
                        "Status":"Not Completed" 
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
                            "ErrorFields": [["wrk"]]
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
        {
            "api_name":"Update Status of an Action on Work Request",
            "api_description":"This API allows change status of an action on Work Request",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workrequest/v1/wrs/4/action” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.6.15",
            "http_method":"PATCH",
            "path":"/workrequest/v1/wrs/{wrk}/action",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                        "parameter_name":"ActionKey",
                        "data_type":"int",
                        "description":"Primary Key of Action",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"Status",
                        "data_type":"string",
                        "description":"Status of the Action",
                        "applicable_value":"Completed or Not CompletedStatus of the Action (Completed or Not Completed)",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to complete own WR Action as Assignee"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"ActionKey",
                                "data_type":"int",
                                "description":"Primary Key of the Action",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Action status updated successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status": "Action status updated successfully", 
                    "ActionKey": 4 
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
                            "ErrorFields": [["ActionKey"],["Status"]] 
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!", 
                            "ErrorFields": [{"Field":"ActionKey","ValidDataType":"INT"}] 
                        },
                        { 
                            "ErrorMessage": "Invalid Data provided!", 
                            "ErrorFields": [ [ "ActionKey" ], "Status" ] 
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
                            "ErrorFields": [["wrk"]]
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
        {
            "api_name":"Coordinator Reject of a Work Request",
            "api_description":"This API allows to coordinator reject of a Work Request",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workrequest/v1/wrs/4/rejectascoordinator” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.6.16",
            "http_method":"PATCH",
            "path":"/workrequest/v1/wrs/{wrk}/rejectascoordinator",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                "Allow Coordinator to reject Work Requests"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of the rejected Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Work Request rejected successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status": "Work Request rejected successfully", 
                    "WRKey": 4 
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
                            "ErrorFields": [["wrk"]]
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
        {
            "api_name":"Finalize action on Work Request",
            "api_description":"This API allows to perform finalize actions of a Work Request",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workrequest/v1/wrs/4/finalize” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.6.17",
            "http_method":"PATCH",
            "path":"/workrequest/v1/wrs/{wrk}/finalize",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                "Allow to mark Work Requests as Finalized"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of the finalized Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Work Request finalized successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status": "Work Request finalized successfully", 
                    "WRKey": 4 
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
                            "ErrorFields": [["wrk"]]
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
        {
            "api_name":"Resolve a Work Request",
            "api_description":"This API allows to mark a Work Request as resolved",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workrequest/v1/wrs/4/resolve” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.6.18",
            "http_method":"PATCH",
            "path":"/workrequest/v1/wrs/{wrk}/resolve",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                "Allow to resolve Work Requests"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of the resolved Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Work Request resolved successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status": "Work Request resolved successfully", 
                    "WRKey": 4 
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
                            "ErrorFields": [["wrk"]]
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
        {
            "api_name":"Verify a Work Request",
            "api_description":"This API allows to mark a Work Request as verify to close",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workrequest/v1/wrs/4/verifytoclose” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.6.19",
            "http_method":"PATCH",
            "path":"/workrequest/v1/wrs/{wrk}/verifytoclose",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                        "parameter_name":"VerifiedSignature",
                        "data_type":"string",
                        "description":"Base64 String of Verified Signature attachment",
                        "mandatory":{
                            "status":true,
                        }
                    }
                ]
            },
            "user_roles":[
                "Allow to verify Work Requests"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of the verified Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Work Request verified successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status": "Work Request verified successfully", 
                    "WRKey": 4 
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
                            "ErrorFields": [["wrk"]]
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
        {
            "api_name":"Mark as Satisfied a Work Request",
            "api_description":"This API allows to mark a Work Request as satisfied",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workrequest/v1/wrs/4/satisfy” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.6.20",
            "http_method":"PATCH",
            "path":"/workrequest/v1/wrs/{wrk}/satisfy",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                "Allow to configure Satisfied Status of Work Requests"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of the satisfied Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Work Request marked as satisfied successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status": "Work Request marked as satisfied successfully", 
                    "WRKey": 4 
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
                            "ErrorFields": [["wrk"]]
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
        {
            "api_name":"Mark as Not Satisfied a Work Request",
            "api_description":"This API allows to mark a Work Request as not satisfied",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workrequest/v1/wrs/4/dissatisfy” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.6.21",
            "http_method":"PATCH",
            "path":"/workrequest/v1/wrs/{wrk}/dissatisfy",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                "Allow to configure Satisfied Status of Work Requests"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of the not satisfied Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Work Request marked as not satisfied successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status": "Work Request marked as not satisfied successfully", 
                    "WRKey": 4 
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
                            "ErrorFields": [["wrk"]]
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
        {
            "api_name":"Close Work Request",
            "api_description":"This API allows to close a Work Request",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/workrequest/v1/wrs/4/close” -H "Authorization:  APIKEY <GenAPI API key>" `,
            "api_code":"3.6.22",
            "http_method":"PATCH",
            "path":"/workrequest/v1/wrs/{wrk}/close",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                "Allow to resolve Work Requests"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"WRKey",
                                "data_type":"int",
                                "description":"Primary Key of the closed Work Request",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Work Request closed successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status": "Work Request closed successfully", 
                    "WRKey": 4 
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
                            "ErrorFields": [["wrk"]]
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
        {
            "api_name":"Get Related CWOs of a Work Request",
            "api_description":"This API allows to get related CWOs mapped into a Work Request.",
            "curl":`curl -X GET “http://GenAPI.com/vis/workrequest/v1/wrs/4/relatedcwo” -H "Authorization:  APIKEY <GenAPI API key>"`,
            "api_code":"3.6.23",
            "http_method":"GET",
            "path":"/workrequest/v1/wrs/{wrk}/relatedcwo",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{wrk}",
                        "data_type":"int",
                        "description":"Primary Key of Work Request"
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
                "Allow to view CWOs tab in Work Request"
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
                                "description":"ID of Corrective Work Order",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "CWOKey" : 2, 
                        "CWOID" : "CWO20210225004"
                    }, 
                    {
                        "CWOKey" : 4, 
                        "CWOID" : "CWO20210225004"
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
                            "ErrorFields": [["wrk"]]
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
        }
    ]
}