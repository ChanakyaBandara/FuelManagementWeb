const PropertyAPIs =  {//Property Management
    "app_name":"Property Management",
    "app_code":"3.12",
    "application_description":"",
    "apis":[
        {//New Tenant
            "api_name":"New Tenant",
            "api_description":"This API allows you to create new Tenant in the system",
            "curl":`curl -X POST “http://GenAPI.com/vis/property/v1/tenants” -H    "Authorization: APIKEY <GenAPI API key>” -H "Content-Type: application/json" --data '{"TenantID":"TN01245","TenantLegalName":"Adidas","TenantTradingName":"Adidas Sri Lanka"}'`,
            "api_code":"3.12.1",
            "http_method":"POST",
            "path":"property/v1/tenants",
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
                        "parameter_name":"TenantID",
                        "data_type":"string",
                        "description":"ID of the Tenant",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"TenantLegalName",
                        "data_type":"string",
                        "description":"Legal Name"
                    },
                    {
                        "parameter_name":"TenantTradingName",
                        "data_type":"string",
                        "description":"Trading Name"
                    }
                ]
            },
            "user_roles":[
                "Allow to register Tenants"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"TenantKey",
                                "data_type":"int",
                                "description":"Primary Key of Tenant",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Tenant Created Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "status":"Tenant Created Successfully",
                    "TenantKey":"12",
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
                                ["TenantID"]
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
                            "param_value":"Error message, occurs when try to create Tenant with the already exist Tenant ID",
                        } 
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Tenant ID already exists!"
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
                            "param_value":"Error message, occurs when try to create Tenant with the already exist Tenant ID",
                        } 
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Cannot Reject this request. Already Rejected!"
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
                                {"Field": "TenantID", "ValideLength": "255"}
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
        {//Get Tenants
            "api_name":"Get Tenants",
            "api_description":"This API returns all the Tenants configured in the system.",
            "curl":`curl -X GET “http://GenAPI.com/vis/property/v1/tenants? max=10&last=5&fields= TenantLegalName, TenantID, TenantTradingName, FirstContactUserFullName” -H    "Authorization: APIKEY <GenAPI API key>" `,
            "api_code":"3.12.2",
            "http_method":"GET",
            "path":"property/v1/tenants",
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
                        "description":"SQL Like search on Tenant Name, Legal Name, Trading Name",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Tenants Search Page"
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
                                "parameter_name":"TenantKey",
                                "data_type":"int",
                                "description":"Primary Key of Tenant",
                            },
                            {
                                "parameter_name":"TenantID",
                                "data_type":"string",
                                "description":"Tenant ID",
                            },
                            {
                                "parameter_name":"TenantLegalName",
                                "data_type":"string",
                                "description":"Legal Name of the Tenant",
                            },
                            {
                                "parameter_name":"TenantTradingName",
                                "data_type":"string",
                                "description":"Trading Name of the Tenant",
                            },
                            {
                                "parameter_name":"FirstContactUserKey",
                                "data_type":"int",
                                "description":"Primary Key of First Contact User of Tenant",
                            },
                            {
                                "parameter_name":"FirstContactUserFullName",
                                "data_type":"string",
                                "description":"Full Name of First Contact User of Tenant",
                            },
                            {
                                "parameter_name":"SecondContactUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Second Contact User of Tenant",
                            },
                            {
                                "parameter_name":"SecondContactUserFullName",
                                "data_type":"string",
                                "description":"Full Name of Second Contact User of Tenant",
                            },
                            {
                                "parameter_name":"ThirdContactUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Third Contact User of Tenant",
                            },
                            {
                                "parameter_name":"ThirdContactUserFullName",
                                "data_type":"string",
                                "description":"Full Name of Third Contact User of Tenant",
                            },
                            {
                                "parameter_name":"FourthContactUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Fourth Contact User of Tenant",
                            },
                            {
                                "parameter_name":"FourthContactUserFullName",
                                "data_type":"string",
                                "description":"Full Name of Fourth Contact User of Tenant",
                            },
                            {
                                "parameter_name":"FifthContactUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Fifth Contact User of Tenant",
                            },
                            {
                                "parameter_name":"FifthContactUserFullName",
                                "data_type":"string",
                                "description":"Full Name of Fifth Contact User of Tenant",
                            },
                            {
                                "parameter_name":"Hidden",
                                "data_type":"int",
                                "description":"Tenant Hidden status. Tenants with Hidden status will not be available for other Services or Applications [1: Hidden, 0: Not Hidden]",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "TenantID":"Tenant 01", 
                        "TenantLegalName": "Tenant 01 pvt", 
                        "TenantTradingName": "Tenant 01 SL"
                    },
                    {
                        "TenantID":"Tenant 02", 
                        "TenantLegalName": "Tenant 02 pvt", 
                        "TenantTradingName": "Tenant 02 SL"
                    },
                    {
                        "TenantID":"Tenant 03", 
                        "TenantLegalName": "Tenant 03 pvt", 
                        "TenantTradingName": "Tenant 03 SL"
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
        {//Get Tenant Details
            "api_name":"Get Tenant Details",
            "api_description":"This API returns a Tenant’s details",
            "curl":`curl -X GET “http://GenAPI.com/vis/property/v1/tenants/5? fields= TenantLegalName, TenantID, TenantTradingName, FirstContactUserFullName” -H    "Authorization: APIKEY <GenAPI API key>" `,
            "api_code":"3.12.3",
            "http_method":"GET",
            "path":"/property/v1/tenants/{tk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{tk}",
                        "data_type":"int",
                        "description":"Tenant Primary Key"
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
                "Allow to view Tenant Details"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"TenantKey",
                                "data_type":"int",
                                "description":"Primary Key of Tenant",
                            },
                            {
                                "parameter_name":"TenantID",
                                "data_type":"string",
                                "description":"Tenant ID",
                            },
                            {
                                "parameter_name":"TenantLegalName",
                                "data_type":"string",
                                "description":"Legal Name of the Tenant",
                            },
                            {
                                "parameter_name":"TenantTradingName",
                                "data_type":"string",
                                "description":"Trading Name of the Tenant",
                            },
                            {
                                "parameter_name":"FirstContactUserKey",
                                "data_type":"int",
                                "description":"Primary Key of First Contact User of Tenant",
                            },
                            {
                                "parameter_name":"FirstContactUserFullName",
                                "data_type":"string",
                                "description":"Full Name of First Contact User of Tenant",
                            },
                            {
                                "parameter_name":"SecondContactUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Second Contact User of Tenant",
                            },
                            {
                                "parameter_name":"SecondContactUserFullName",
                                "data_type":"string",
                                "description":"Full Name of Second Contact User of Tenant",
                            },
                            {
                                "parameter_name":"ThirdContactUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Third Contact User of Tenant",
                            },
                            {
                                "parameter_name":"ThirdContactUserFullName",
                                "data_type":"string",
                                "description":"Full Name of Third Contact User of Tenant",
                            },
                            {
                                "parameter_name":"FourthContactUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Fourth Contact User of Tenant",
                            },
                            {
                                "parameter_name":"FourthContactUserFullName",
                                "data_type":"string",
                                "description":"Full Name of Fourth Contact User of Tenant",
                            },
                            {
                                "parameter_name":"FifthContactUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Fifth Contact User of Tenant",
                            },
                            {
                                "parameter_name":"FifthContactUserFullName",
                                "data_type":"string",
                                "description":"Full Name of Fifth Contact User of Tenant",
                            },
                            {
                                "parameter_name":"Hidden",
                                "data_type":"int",
                                "description":"Tenant Hidden status. Tenants with Hidden status will not be available for other Services or Applications [1: Hidden, 0: Not Hidden]",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "TenantID":"Tenant 01", 
                        "TenantLegalName": "Tenant 01 pvt", 
                        "TenantTradingName": "Tenant 01 pvt SL",
                        "FirstContactUserFullName": "Tenant01 pvt SL",
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
                                ["tk"]
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
        {//Update Tenant
            "api_name":"Update Tenant",
            "api_description":"This API allows you to update Tenant in the system",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/propertymanagement/v1/tenants/12” -H    "Authorization: APIKEY <GenAPI API key>” -H "Content-Type: application/json" --data '{"TenantLegalName”: John Keels (Pvt)","TenantTradingName": "John Keels (Pvt) SL","FirstContactUserKey":"1"}'`,
            "api_code":"3.12.4",
            "http_method":"PATCH",
            "path":"property/v1/tenants/{tk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{tk}",
                        "data_type":"int",
                        "description":"Tenant Key"
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
                        "parameter_name":"TenantID",
                        "data_type":"string",
                        "description":"ID of Tenant, when this parameter gets passed, it cannot be Null or empty",
                        "mandatory":{
                            "status":false
                        }
                    },
                    {
                        "parameter_name":"TenantLegalName",
                        "data_type":"string",
                        "description":"Legal Name",
                        "mandatory":{
                            "status":false
                        }
                    },
                    {
                        "parameter_name":"TenantTradingName",
                        "data_type":"string",
                        "description":"Trading Name",
                    },
                    {
                        "parameter_name":"FirstContactUserKey",
                        "data_type":"int",
                        "description":"First Contact User"
                    },
                    {
                        "parameter_name":"SecondContactUserKey",
                        "data_type":"int",
                        "description":"Second Contact User"
                    },
                    {
                        "parameter_name":"ThirdContactUserKey",
                        "data_type":"int",
                        "description":"Third Contact User"
                    },
                    {
                        "parameter_name":"FourthContactUserKey",
                        "data_type":"int",
                        "description":"Fourth Contact User"
                    },
                    {
                        "parameter_name":"FifthContactUserKey",
                        "data_type":"int",
                        "description":"Fifth Contact User"
                    }
                ]
            },
            "user_roles":[
                "Allow to modify Tenants"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"TenantKey",
                                "data_type":"int",
                                "description":"Primary Key of Tenant",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Tenant Updated Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"Tenant Details Updated Successfully",
                    "TenantKey":"12"
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
                            "ErrorFields": [["TenantID"]]
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
                            "param_value":"This error message gets when try to create Tenant with the already exist tenant ID",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Tenant ID already exists!"
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
                                {"Field": "FirstContactUserKey", "ValidDataType": "INT"}, 
                                {"Field": "SecondContactUserKey", "ValidDataType": "INT"}, 
                                {"Field": "ThirdContactUserKey", "ValidDataType": "INT"}, 
                                {"Field": "FourthContactUserKey", "ValidDataType": "INT"}, 
                                {"Field": "FifthContactUserKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "FirstContactUserKey", "ValidDataType": "INT"}, 
                                {"Field": "SecondContactUserKey", "ValidDataType": "INT"}, 
                                {"Field": "ThirdContactUserKey", "ValidDataType": "INT"}
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
                            "param_value":"List of fields which are validated with the database values.",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid data provided!",
                            "ErrorFields": [
                                ["FirstContactUserKey", "tk"], 
                                ["SecondContactUserKey", "tk"], 
                                ["ThirdContactUserKey", "tk"], 
                                ["FourthContactUserKey", "tk"], 
                                ["FifthContactUserKey", "tk"]
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid data provided!",
                            "ErrorFields": [
                                ["FirstContactUserKey", "tk"], 
                                ["SecondContactUserKey", "tk"]
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
                                {"Field": "TenantID", "ValideLength": "255"}, 
                                {"Field": " TenantLegalName", "ValideLength": "255"}, 
                                {"Field": "TenantTradingName", "ValideLength": "255"}
                            ]
                        },
                        {
                            "ErrorMessage": " Valid maximum character length has been exceeded!",
                            "ErrorFields": [{"Field": "TenantTradingName", "ValideLength": "255"}]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"Text",
                    "error_category":"No Updatable Fields Found Error",
                    "examples":[
                        {
                            "ErrorMessage":"No updatable fields found",
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
                            "ErrorFields": [["tk"]]
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
        {//Delete Tenant
            "api_name":"Delete Tenant",
            "api_description":"This API allows you to delete Tenant(s) from the system. Note that if this tenant is being used in any other applications, you may not able to delete the same.",
            "curl":`curl -X DELETE http://GenAPI.com/vis/property/v1/tenants/5 -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.12.5",
            "http_method":"DELETE",
            "path":"/property/v1/tenants/{tk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{tk}",
                        "data_type":"int",
                        "description":"Tenant Key"
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
                "Allow to delete Tenants"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"TenantKey",
                                "data_type":"int",
                                "description":"Primary Key of Deleted Tenant",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Tenant Deleted Successfully",
                            }
                        ]
                    },
                },
                "example_response":[ 
                    {
                        "Status": "Tenant Deleted Successfully", 
                        "TenantKey": "5"
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
                            "param_value":"This occurs when try to delete tenant which is in use",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Record for given TenantKey is in use and cannot be deleted!"
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
                            "ErrorFields": [["tk"]]
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
        {//New Tenant User
            "api_name":"New Tenant User",
            "api_description":"This API allows you to create new Tenant User in the system",
            "curl":`curl -X POST “http://GenAPI.com/vis/Property/v1/tenants/1/users” -H    "Authorization: APIKEY <GenAPI API key>” -H "Content-Type: application/json" --data '{"FirstName":"T User1","IdentificationNumber":"TC0001", "SiteKey": 1,”UserGroupKey”:1,”DateFormat”:”Y/M/D”,”TimeFormat”:”24”,”CurrencyFormat”:” 3:2:,:.”,”Language”:”en”}'`,
            "api_code":"3.12.6",
            "http_method":"POST",
            "path":"/property/v1/tenants/{tk}/users",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{tk}",
                        "data_type":"int",
                        "description":"Tenant Primary Key"
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
                        "parameter_name":"FirstName",
                        "data_type":"string",
                        "description":"First Name of Tenant User",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"LastName",
                        "data_type":"string",
                        "description":"Last name of Tenant User"
                    },
                    {
                        "parameter_name":"IdentificationNumber",
                        "data_type":"string",
                        "description":"Identification Number/ Passport NO",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"Email",
                        "data_type":"string",
                        "description":"Email"
                    },
                    {
                        "parameter_name":"Mobile",
                        "data_type":"string",
                        "description":"Mobile Phone Number"
                    },
                    {
                        "parameter_name":"OfficePhone",
                        "data_type":"string",
                        "description":"Office Phone Number"
                    },
                    {
                        "parameter_name":"SiteKey",
                        "data_type":"int",
                        "description":"Primary Key of corresponding Site",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"UserGroupKey",
                        "data_type":"int",
                        "description":"Primary Key of corresponding User Group",
                        "mandatory":{
                            "status":true
                        }
                    },
                    {
                        "parameter_name":"DateFormat",
                        "data_type":"string",
                        "description":"The Date Formats (Y/M/D),(D/M/Y),(Mon Day, Year),(D-Month-Year)",
                        "mandatory":{
                            "status":true
                        },
                        "references":[
                            {
                                "title":"Refer Appendix",
                                "app_code":"appendix"
                            }
                        ]
                    },
                    {
                        "parameter_name":"TimeFormat",
                        "data_type":"string",
                        "description":"The Time Formats (12 or 24 format)",
                        "mandatory":{
                            "status":true
                        },
                        "references":[
                            {
                                "title":"Refer Appendix",
                                "app_code":"appendix"
                            }
                        ]
                    },
                    {
                        "parameter_name":"CurrencyFormat",
                        "data_type":"string",
                        "description":"The Currency Formats (* Code 1- 3:2:,:. ex 123,456.78  * Code 2- 3,2:2:,:. ex 1,23,456.78   * Code 3- 3:2:.:, ex 123.456,78   * Code 4- 3:3:,:. ex 123,456.780)",
                        "mandatory":{
                            "status":true
                        },
                        "references":[
                            {
                                "title":"Refer Appendix",
                                "app_code":"appendix"
                            }
                        ]
                    },
                    {
                        "parameter_name":"Language",
                        "data_type":"string",
                        "description":"Available Languages (hu, ar-sa, fr, en)",
                        "mandatory":{
                            "status":true
                        },
                        "references":[
                            {
                                "title":"Refer Appendix",
                                "app_code":"appendix"
                            }
                        ]
                    }
                ]
            },
            "user_roles":[
                "Allow to register Tenant Users"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"TenantUserKey",
                                "data_type":"int",
                                "description":"Primary Key of tenant User",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Tenant User Created Successfully",
                            }                               
                        ]
                    },
                },
                "example_response":{
                    "Status":"Tenant User Created Successfully",
                    "TenantUserKey":"12"
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
                                ["FirstName"], 
                                ["IdentificationNumber"], 
                                ["SiteKey", "SiteLocationFullName"], 
                                ["UserGroupKey", "UserGroupID"], 
                                ["CurrencyFormat"], ["DateFormat"], ["TimeFormat"], 
                                ["Language"]
                            ]
                        },
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["SiteKey", "SiteLocationFullName"], 
                                ["UserGroupKey", "UserGroupID"], 
                                ["DateFormat"], 
                                ["TimeFormat"], 
                                ["Language"]
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
                                {"Field": "SiteKey", "ValidDataType": "INT"}, 
                                {"Field": "UserGroupKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "SiteKey", "ValidDataType": "INT"}
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
                                {"Field": "IdentificationNumber", "ValideLength": "255"}, 
                                {"Field": "LastName", "ValideLength": "255"}, 
                                {"Field": "FirstName", "ValideLength": "255"}, 
                                {"Field": "Email", "ValideLength": "255"}, 
                                {"Field": "Mobile", "ValideLength": "255"}, 
                                {"Field": "OfficePhone", "ValideLength": "255"} 
                            ]
                        },
                        {
                            "ErrorMessage":" Valid maximum character length has been exceeded!",
                            "ErrorFields": [
                                {"Field": "IdentificationNumber", "ValideLength": "255"}, 
                                {"Field": "LastName", "ValideLength": "255"},
                                {"Field": "FirstName", "ValideLength": "255"}
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
                            "param_value":"Error message for incorrect format",
                        } 
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Email address format is incorrect: yourname@example.com!"
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
                            "param_value":"Error message occurs when try to use already exist identification number to register a user",
                        } 
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"IdentificationNumber already exists!"
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
                            "param_value":"Error message for incorrect format",
                        } 
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"Phone Number format is incorrect!"
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
                            "ErrorFields": [["tk"]]
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
        {//Get Tenant Users 
            "api_name":"Get Tenant Users ",
            "api_description":"This API returns all the Tenant Users configured in the system",
            "curl":`curl -X GET “http://GenAPI.com/vis/Property/v1/tenants/1/users? fields=TenantID, TenantKey, FirstName, LastName, TenantUserKey &max=10&last=5” -H    "Authorization: APIKEY <GenAPI API key>" `,
            "api_code":"3.12.7",
            "http_method":"GET",
            "path":"/property/v1/tenants/{tk}/users",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{tk}",
                        "data_type":"int",
                        "description":"Tenant Primary Key"
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
                        "description":"SQL Like search on Tenant User Name",
                    },
                    {
                        "parameter_name":"Hidden",
                        "data_type":"int",
                        "description":"Default is 0 (non- hidden Users) if value is 1, hidden users will be returned.",
                        "default_value":"0",
                        "applicable_value":"0 or 1"
                    }
                ]
            },
            "user_roles":[
                "Allow to view Tenant Users Search Page"
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
                                "parameter_name":"TenantUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Tenant User"
                            },
                            {
                                "parameter_name":"FirstName",
                                "data_type":"string",
                                "description":"First Name of Tenant User"
                            },
                            {
                                "parameter_name":"LastName",
                                "data_type":"string",
                                "description":"Last name of Tenant User"
                            },
                            {
                                "parameter_name":"TenantKey",
                                "data_type":"int",
                                "description":"Primary Key of Tenant "
                            },
                            {
                                "parameter_name":"TenantID",
                                "data_type":"string",
                                "description":"ID of the Tenant"
                            },
                            {
                                "parameter_name":"IdentificationNumber",
                                "data_type":"string",
                                "description":"Identification Number/ Passport NO"
                            },
                            {
                                "parameter_name":"Email",
                                "data_type":"string",
                                "description":"Email"
                            },
                            {
                                "parameter_name":"Mobile",
                                "data_type":"string",
                                "description":"Mobile Phone Number"
                            },
                            {
                                "parameter_name":"OfficePhone",
                                "data_type":"string",
                                "description":"Office Phone Number"
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Primary Key of corresponding Site"
                            },
                            {
                                "parameter_name":"UserGroupKey",
                                "data_type":"int",
                                "description":"Primary Key of corresponding User Group"
                            },
                            {
                                "parameter_name":"DateFormat",
                                "data_type":"string",
                                "description":"The Date Formats (Y/M/D),(D/M/Y),(Mon Day, Year),(D-Month-Year)",
                                "references":[
                                    {
                                        "title":"Refer Appendix",
                                        "app_code":"appendix"
                                    }
                                ]
                            },
                            {
                                "parameter_name":"TimeFormat",
                                "data_type":"string",
                                "description":"The Time Formats (12 or 24 format)",
                                "references":[
                                    {
                                        "title":"Refer Appendix",
                                        "app_code":"appendix"
                                    }
                                ]
                            },
                            {
                                "parameter_name":"CurrencyFormat",
                                "data_type":"string",
                                "description":"The Currency Formats (* Code 1- 3:2:,:. ex 123,456.78  * Code 2- 3,2:2:,:. ex 1,23,456.78   * Code 3- 3:2:.:, ex 123.456,78   * Code 4- 3:3:,:. ex 123,456.780)",
                                "references":[
                                    {
                                        "title":"Refer Appendix",
                                        "app_code":"appendix"
                                    }
                                ]
                            },
                            {
                                "parameter_name":"Language",
                                "data_type":"string",
                                "description":"Available Languages (hu, ar-sa, fr, en)",
                                "references":[
                                    {
                                        "title":"Refer Appendix",
                                        "app_code":"appendix"
                                    }
                                ]
                            },
                            {
                                "parameter_name":"Hidden",
                                "data_type":"int",
                                "description":"Tenant User Hidden status. Tenant Users with Hidden status will not be available for other Services or Applications [1: Hidden, 0: Not Hidden]"
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "TenantID":"Tenant01", 
                        "TenantKey": "1",
                        "FirstName":"John", 
                        "LastName": "Doe",
                        "TenantUserKey": "1"
                    },
                    {
                        "TenantID":"Tenant02", 
                        "TenantKey": "2",
                        "FirstName":"Johny", 
                        "LastName": "Doel",
                        "TenantUserKey": "2"
                    },
                    {
                        "TenantID":"Tenant03", 
                        "TenantKey": "3",
                        "FirstName":"Joh", 
                        "LastName": "Doeny",
                        "TenantUserKey": "3"
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
                                {"Field": "Hidden", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "ItemKey", "ValidDataType": "INT"}, 
                                {"Field": "Hidden", "ValidDataType": "INT"}
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
                                ["tk"]
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
        {//Get Tenant User Details
            "api_name":"Get Tenant User Details",
            "api_description":"This API returns all the Tenant User Details configured in the system",
            "curl":`curl -X GET “http://GenAPI.com/vis/property/v1/tenants/1/users/1?fields=TenantID,TenantKey,FirstName,LastName,TenantUserKey &max=10&last=5” -H    "Authorization: APIKEY <GenAPI API key>" `,
            "api_code":"3.12.8",
            "http_method":"GET",
            "path":"property/ v1/tenants/{tk}/users/{tuk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{tk}",
                        "data_type":"int",
                        "description":"Tenant Key"
                    },
                    {
                        "parameter_name":"{tuk}",
                        "data_type":"int",
                        "description":"Primary key of Tenant User"
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
                        "description":"Fields to be returned in a comma separated string.If any specific field(s) not specified, API will return all the Default fields",
                    }   
                ]
            },
            "user_roles":[
                "Allow to view Tenant User Details"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"TenantUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Tenant User"
                            },
                            {
                                "parameter_name":"FirstName",
                                "data_type":"string",
                                "description":"First Name of Tenant User"
                            },
                            {
                                "parameter_name":"LastName",
                                "data_type":"string",
                                "description":"Last name of Tenant User"
                            },
                            {
                                "parameter_name":"TenantKey",
                                "data_type":"int",
                                "description":"Primary Key of Tenant "
                            },
                            {
                                "parameter_name":"TenantID",
                                "data_type":"string",
                                "description":"ID of the Tenant"
                            },
                            {
                                "parameter_name":"IdentificationNumber",
                                "data_type":"string",
                                "description":"Identification Number/ Passport NO"
                            },
                            {
                                "parameter_name":"Email",
                                "data_type":"string",
                                "description":"Email"
                            },
                            {
                                "parameter_name":"Mobile",
                                "data_type":"string",
                                "description":"Mobile Phone Number"
                            },
                            {
                                "parameter_name":"OfficePhone",
                                "data_type":"string",
                                "description":"Office Phone Number"
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Primary Key of corresponding Site"
                            },
                            {
                                "parameter_name":"UserGroupKey",
                                "data_type":"int",
                                "description":"Primary Key of corresponding User Group"
                            },
                            {
                                "parameter_name":"DateFormat",
                                "data_type":"string",
                                "description":"The Date Formats (Y/M/D),(D/M/Y),(Mon Day, Year),(D-Month-Year)",
                                "references":[
                                    {
                                        "title":"Refer Appendix",
                                        "app_code":"appendix"
                                    }
                                ]
                            },
                            {
                                "parameter_name":"TimeFormat",
                                "data_type":"string",
                                "description":"The Time Formats (12 or 24 format)",
                                "references":[
                                    {
                                        "title":"Refer Appendix",
                                        "app_code":"appendix"
                                    }
                                ]
                            },
                            {
                                "parameter_name":"CurrencyFormat",
                                "data_type":"string",
                                "description":"The Currency Formats (* Code 1- 3:2:,:. ex 123,456.78  * Code 2- 3,2:2:,:. ex 1,23,456.78   * Code 3- 3:2:.:, ex 123.456,78   * Code 4- 3:3:,:. ex 123,456.780)",
                                "references":[
                                    {
                                        "title":"Refer Appendix",
                                        "app_code":"appendix"
                                    }
                                ]
                            },
                            {
                                "parameter_name":"Language",
                                "data_type":"string",
                                "description":"Available Languages (hu, ar-sa, fr, en)",
                                "references":[
                                    {
                                        "title":"Refer Appendix",
                                        "app_code":"appendix"
                                    }
                                ]
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "TenantID":"Tenant01", 
                        "TenantKey": "1",
                        "FirstName":"John", 
                        "LastName": "Doe",
                        "TenantUserKey": "1"
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
                                ["tk","tuk"]
                            ]
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
        {//Update Tenant User
            "api_name":"Update Tenant User",
            "api_description":"This API allows you to update Tenant User in the system",
            "curl":`curl -X PATCH “http://GenAPI.com/vis/property/v1/tenants/1/users/1” -H    "Authorization: APIKEY <GenAPI API key>” -H "Content-Type: application/json" --data '{"FirstName": "John", "LastName": "Doe",” PhoneNumber”:”0772215452”}'`,
            "api_code":"3.12.9",
            "http_method":"PATCH",
            "path":"property/ v1/tenants/{tk}/users/{tuk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{tk}",
                        "data_type":"int",
                        "description":"Tenant Key"
                    },
                    {
                        "parameter_name":"{tuk}",
                        "data_type":"int",
                        "description":"Tenant User Key"
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
                        "parameter_name":"FirstName",
                        "data_type":"string",
                        "description":"First Name of Tenant User"
                    },
                    {
                        "parameter_name":"LastName",
                        "data_type":"string",
                        "description":"Last name of Tenant User"
                    },
                    {
                        "parameter_name":"IdentificationNumber",
                        "data_type":"string",
                        "description":"Identification Number/ Passport NO"
                    },
                    {
                        "parameter_name":"Email",
                        "data_type":"string",
                        "description":"Email"
                    },
                    {
                        "parameter_name":"Mobile",
                        "data_type":"string",
                        "description":"Mobile Phone Number"
                    },
                    {
                        "parameter_name":"OfficePhone",
                        "data_type":"string",
                        "description":"Office Phone Number"
                    },
                    {
                        "parameter_name":"SiteKey",
                        "data_type":"int",
                        "description":"Primary Key of corresponding Site"
                    },
                    {
                        "parameter_name":"UserGroupKey",
                        "data_type":"int",
                        "description":"Primary Key of corresponding User Group"
                    },
                    {
                        "parameter_name":"DateFormat",
                        "data_type":"string",
                        "description":"The Date Formats (Y/M/D),(D/M/Y),(Mon Day, Year),(D-Month-Year)",
                        "references":[
                            {
                                "title":"Refer Appendix",
                                "app_code":"appendix"
                            }
                        ]
                    },
                    {
                        "parameter_name":"TimeFormat",
                        "data_type":"string",
                        "description":"The Time Formats (12 or 24 format)",
                        "references":[
                            {
                                "title":"Refer Appendix",
                                "app_code":"appendix"
                            }
                        ]
                    },
                    {
                        "parameter_name":"CurrencyFormat",
                        "data_type":"string",
                        "description":"The Currency Formats (* Code 1- 3:2:,:. ex 123,456.78  * Code 2- 3,2:2:,:. ex 1,23,456.78   * Code 3- 3:2:.:, ex 123.456,78   * Code 4- 3:3:,:. ex 123,456.780)",
                        "references":[
                            {
                                "title":"Refer Appendix",
                                "app_code":"appendix"
                            }
                        ]
                    },
                    {
                        "parameter_name":"Language",
                        "data_type":"string",
                        "description":"Available Languages (hu, ar-sa, fr, en)",
                        "references":[
                            {
                                "title":"Refer Appendix",
                                "app_code":"appendix"
                            }
                        ]
                    }
                ]
            },
            "user_roles":[
                "Allow to modify Tenant Users"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"TenantUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Tenant User",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Tenant User Updated Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"Tenant User Updated Successfully",
                    "TenantUserKey":"1"
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
                                ["FirstName"], 
                                ["IdentificationNumber"], 
                                ["SiteKey", "SiteLocationFullName"], 
                                ["UserGroupKey", "UserGroupID"], 
                                ["CurrencyFormat"], 
                                ["DateFormat"], 
                                ["TimeFormat"], 
                                ["Language"]
                            ]
                        },
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["SiteKey", "SiteLocationFullName"], 
                                ["UserGroupKey", "UserGroupID"],
                                ["DateFormat"], 
                                ["TimeFormat"], 
                                ["Language"]
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
                            "param_value":"Error message for incorrect format",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Email address format is incorrect: yourname@example.com!"
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
                            "param_value":"Error message occurs when try to use already exist identification number to register a user",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Identification Number already exists for another User."
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
                            "param_value":"Error message for incorrect format",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Phone Number format is incorrect."
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
                                {"Field": "SiteKey", "ValidDataType": "INT"}, 
                                {"Field": "UserGroupKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "SiteKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": " Invalid Data Type provided!",
                            "ErrorFields": [
                                {"Field": "tk", "ValidDataType": "INT"}, 
                                {"Field": "tuk", "ValidDataType": "INT"}
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
                            "param_value":"List of fields which are validated with the database values.",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Invalid data provided!",
                            "ErrorFields": [
                                ["SiteKey"], 
                                ["UserGroupKey"]
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
                                {"Field": "IdentificationNumber", "ValideLength": "255"}, 
                                {"Field": "LastName", "ValideLength": "255"}, 
                                {"Field": "FirstName", "ValideLength": "255"}, 
                                {"Field": "Email", "ValideLength": "255"}, 
                                {"Field": "Mobile", "ValideLength": "255"}, 
                                {"Field": "OfficePhone", "ValideLength": "255"}
                            ]
                        },
                        {
                            "ErrorMessage": " Valid maximum character length has been exceeded!",
                            "ErrorFields": [
                                {"Field": "IdentificationNumber", "ValideLength": "255"}, 
                                {"Field": "LastName", "ValideLength": "255"}, 
                                {"Field": "FirstName", "ValideLength": "255"}
                            ]
                        }
                    ]
                },
                {
                    "error_code":"400",
                    "error_response_type":"Text",
                    "error_category":"No Updatable Fields Found Error",
                    "examples":[
                        {
                            "ErrorMessage":"No updatable fields found",
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
                            "ErrorFields": [["tk"]]
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
        {//Delete Tenant User
            "api_name":"Delete Tenant User",
            "api_description":"This API allows you to delete Tenant User from the system. Note that if this tenant user is in use in any of other application, you may not able to delete the same.",
            "curl":`curl -X DELETE “http://GenAPI.com/vis/property/ v1/tenants/1/users/5” -H    "Authorization: API key APIKEY <GenAPI >"  `,
            "api_code":"3.12.10",
            "http_method":"DELETE",
            "path":"/property/v1/tenants/{tk}/users/{tuk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{tk}",
                        "data_type":"int",
                        "description":"Tenant Key"
                    },
                    {
                        "parameter_name":"{tuk}",
                        "data_type":"int",
                        "description":"Tenant User Key"
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
                "Allow to delete Tenant Users"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"TenantUserKey",
                                "data_type":"int",
                                "description":"Primary Key of Tenant",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Tenant User deleted Successfully",
                            }
                        ]
                    },
                },
                "example_response":[ 
                    {
                        "Status": "Tenant User Deleted Successfully", 
                        "TenantUserKey": "5"
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
                            "param_value":"This occurs when try to delete tenant user who is in use",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Record for given TenantUserKey is in use and cannot be deleted!"
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
                                {"Field": "tk", "ValidDataType": "INT"}, 
                                {"Field": "tuk", "ValidDataType": "INT"}
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
                            "ErrorFields": [["tk","tuk"]]
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
    ]
}