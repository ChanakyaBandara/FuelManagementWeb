const UserAPIs =  {//User
    "app_name":"User Management",
    "app_code":"3.3",
    "application_description":"",
    "apis":[
        {//Get Users
            "api_name":"Get Users",
            "api_description":"This API returns all the Users configured in the system.",
            "curl":`curl -X GET “http://GenAPI.com/vis/user/v1/users?last=5&max=10&fields=UserKey,FirstName, LastName &q= Peter” -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.3.1",
            "http_method":"GET",
            "path":"/user/v1/users",
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
                        "description":"Text filter on LoginID, FirstName, LastName,Phone, IdentificationNumber (This Search mechanism works similar to SQL search/ Google search mechanism)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    },
                    {
                        "parameter_name":"UserType",
                        "data_type":"string",
                        "description":"When this filter is applied, it will return the Users of the selected User Type only. You need to use the 3.3.3 ‘Get User Types’ API to get the available User Types beforehand.",
                    },
                    {
                        "parameter_name":"UserGroupKey",
                        "data_type":"int",
                        "description":"Primary Key of User Group. When this filter is applied, it will return the Users of the provided User Group only.",
                    },
                    {
                        "parameter_name":"Hidden",
                        "data_type":"Boolean",
                        "description":"If the value is 1, only the Hidden Users will be returned. Non-Hidden users will be returned if the value is 0 or the parameter is not passed.",
                    }      
                ]
            },
            "user_roles":[
                "Allow to view Users Search Page"
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
                                "parameter_name":"UserKey",
                                "data_type":"int",
                                "description":"Primary Key of the User. This will be used in almost all the places where you need to specify User",
                            },
                            {
                                "parameter_name":"LoginID",
                                "data_type":"string",
                                "description":"User Login ID",
                            },
                            {
                                "parameter_name":"FirstName",
                                "data_type":"string",
                                "description":"First Name of the User",
                            },
                            {
                                "parameter_name":"LastName",
                                "data_type":"string",
                                "description":"Last Name of the User",
                            },
                            {
                                "parameter_name":"DisplayName",
                                "data_type":"string",
                                "description":"Display name of the User",
                            },
                            {
                                "parameter_name":"LegalName",
                                "data_type":"string",
                                "description":"Legal Name of the User",
                            },
                            {
                                "parameter_name":"Phone",
                                "data_type":"string",
                                "description":"Phone Number of the User",
                            },
                            {
                                "parameter_name":"Email",
                                "data_type":"string",
                                "description":"Email of the User",
                            },
                            {
                                "parameter_name":"OfficePhone",
                                "data_type":"string",
                                "description":"Office Phone of the User ",
                            },
                            {
                                "parameter_name":"UserType",
                                "data_type":"string",
                                "description":"User Type of User",
                            },
                            {
                                "parameter_name":"UserGroupKey",
                                "data_type":"int",
                                "description":"User Group (All the privileges will be handled using this)",
                            },
                            {
                                "parameter_name":"UserGroupID",
                                "data_type":"string",
                                "description":"User Login ID",
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Site Key preferred by the User. (This is user’s preference and User can change it in User Profile) ",
                            },
                            {
                                "parameter_name":"SiteLocationFullName",
                                "data_type":"string",
                                "description":"Full Name of the Site Location",
                            },
                            {
                                "parameter_name":"TimeFormat",
                                "data_type":"string",
                                "description":"Time Format preferred by the User (This is user’s preference and User can change it in User Profile)",
                            },
                            {
                                "parameter_name":"DateFormat",
                                "data_type":"string",
                                "description":"Date Format preferred by the User (This is user’s preference and User can change it in User Profile)",
                            },
                            {
                                "parameter_name":"CurrencyFormat",
                                "data_type":"string",
                                "description":"Currency Format preferred by the User (This is user’s preference and User can change it in User Profile)",
                            },
                            {
                                "parameter_name":"Language",
                                "data_type":"string",
                                "description":"Language preferred by the User (This is user’s preference and User can change it in User Profile)",
                            },
                            {
                                "parameter_name":"IdentificationNumber",
                                "data_type":"string",
                                "description":"User Identification Number",
                            },
                            {
                                "parameter_name":"IsLoginDisabled",
                                "data_type":"int",
                                "description":"If Login is disabled, Users cannot log in to GenAPI [1: Disabled, 0: Not Disabled]",
                            },
                            {
                                "parameter_name":"LastLoginDate",
                                "data_type":"datetime",
                                "description":"Last Login Date Time (UTC)",
                            },
                            {
                                "parameter_name":"Hidden",
                                "data_type":"int",
                                "description":"User Hidden status. Users with Hidden status will not be available for other Services or Applications [1: Hidden, 0: Not Hidden]",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "UserKey": "2", 
                        "FirstName": "Peter",
                        "LastName": "Smith"
                    }, 
                    {
                        "UserKey": "3", 
                        "FirstName": "Peter",
                        "LastName": "Kael"
                    }, 
                    {
                        "UserKey": "44", 
                        "FirstName": "Peter",
                        "LastName": "Sen"
                    }, 
                    {
                        "UserKey": "91", 
                        "FirstName": "Peter",
                        "LastName": "Won"
                    }, 
                    {
                        "UserKey": "102", 
                        "FirstName": "John",
                        "LastName": "Peter"
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
                                {"Field": "Hidden", "ValidDataType": "BOOLEAN"}, {"Field": "last", "ValidDataType": "INT"}, {"Field": "max", "ValidDataType": "INT"}, 
                                {"Field": "UserGroupKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [{"Field": "UserGroupKey", "ValidDataType": "INT"}]
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
                    "error_category":"URL Route Error",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [["UserGroupKey"]]
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
        {//Get User Details
            "api_name":"Get User Details",
            "api_description":"This API returns the information of a single User",
            "curl":`curl -X GET “http://GenAPI.com/vis/user/v1/users/15?fields=FirstName,LastName” -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.3.2",
            "http_method":"GET",
            "path":"/user/v1/users/{uk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{uk}",
                        "data_type":"int",
                        "description":"User Key"
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
                "Allow to view User Details"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"UserKey",
                                "data_type":"int",
                                "description":"Primary Key of the User. This will be used in almost all the places where you need to specify User",
                            },
                            {
                                "parameter_name":"LoginID",
                                "data_type":"string",
                                "description":"User Login ID",
                            },
                            {
                                "parameter_name":"FirstName",
                                "data_type":"string",
                                "description":"First Name of the User",
                            },
                            {
                                "parameter_name":"LastName",
                                "data_type":"string",
                                "description":"Last Name of the User",
                            },
                            {
                                "parameter_name":"DisplayName",
                                "data_type":"string",
                                "description":"Display name of the User",
                            },
                            {
                                "parameter_name":"LegalName",
                                "data_type":"string",
                                "description":"Legal Name of the User",
                            },
                            {
                                "parameter_name":"Phone",
                                "data_type":"string",
                                "description":"Phone Number of the User",
                            },
                            {
                                "parameter_name":"Email",
                                "data_type":"string",
                                "description":"Email of the User",
                            },
                            {
                                "parameter_name":"OfficePhone",
                                "data_type":"string",
                                "description":"Office Phone of the User ",
                            },
                            {
                                "parameter_name":"UserType",
                                "data_type":"string",
                                "description":"User Type of User",
                            },
                            {
                                "parameter_name":"UserGroupKey",
                                "data_type":"int",
                                "description":"User Group (All the privileges will be handled using this)",
                            },
                            {
                                "parameter_name":"UserGroupID",
                                "data_type":"string",
                                "description":"User Login ID",
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Site Key preferred by the User. (This is user’s preference and User can change it in User Profile) ",
                            },
                            {
                                "parameter_name":"SiteLocationFullName",
                                "data_type":"string",
                                "description":"Full Name of the Site Location",
                            },
                            {
                                "parameter_name":"TimeFormat",
                                "data_type":"string",
                                "description":"Time Format preferred by the User (This is user’s preference and User can change it in User Profile)",
                            },
                            {
                                "parameter_name":"DateFormat",
                                "data_type":"string",
                                "description":"Date Format preferred by the User (This is user’s preference and User can change it in User Profile)",
                            },
                            {
                                "parameter_name":"CurrencyFormat",
                                "data_type":"string",
                                "description":"Currency Format preferred by the User (This is user’s preference and User can change it in User Profile)",
                            },
                            {
                                "parameter_name":"Language",
                                "data_type":"string",
                                "description":"Language preferred by the User (This is user’s preference and User can change it in User Profile)",
                            },
                            {
                                "parameter_name":"IdentificationNumber",
                                "data_type":"string",
                                "description":"User Identification Number",
                            },
                            {
                                "parameter_name":"IsLoginDisabled",
                                "data_type":"int",
                                "description":"If Login is disabled, Users cannot log in to GenAPI [1: Disabled, 0: Not Disabled]",
                            },
                            {
                                "parameter_name":"LastLoginDate",
                                "data_type":"datetime",
                                "description":"Last Login Date Time (UTC)",
                            },
                            {
                                "parameter_name":"Hidden",
                                "data_type":"int",
                                "description":"User Hidden status. Users with Hidden status will not be available for other Services or Applications [1: Hidden, 0: Not Hidden]",
                            }
                        ]
                    },
                },
                "example_response":{
                    "FirstName":"Peter", 
                    "LastName": "Smith"
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
                            "ErrorFields": [["uk"]]
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
        {//Get User Types
            "api_name":"Get User Types",
            "api_description":"This API returns all User Types",
            "curl":`curl -X GET http://GenAPI.com/vis/user/v1/usertypes?{Query String} -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.3.3",
            "http_method":"GET",
            "path":"/user/v1/usertypes",
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
                        "description":"Text filter on UserType (This Search mechanism works similar to SQL search/ Google search mechanism)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }     
                ]
            },
            "user_roles":[
                "Allow to view User Types"
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
                                "parameter_name":"UserType",
                                "data_type":"string",
                                "description":"User Type",
                            },
                            {
                                "parameter_name":"Published",
                                "data_type":"int",
                                "description":"1: Created from Other apps, 0: Create from User App",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "UserType": "Staff", 
                        "Published": "1"
                    }, 
                    {
                        "UserType": "Vendor", 
                        "Published": "1"
                    }, 
                    {
                        "UserType": "Security", 
                        "Published": "0"
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
                                {"Field": "last", "ValidDataType": "INT"}, {"Field": "max", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
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
        {//Get User Groups
            "api_name":"Get User Groups",
            "api_description":"This API returns all User Groups configured in the system",
            "curl":`curl -X GET http://GenAPI.com/vis/user/v1/usergroups -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.3.4",
            "http_method":"GET",
            "path":"/user/v1/usergroups",
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
                        "description":"Text filter on User Group ID (This Search works similar to SQL search/ Google search mechanism)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }     
                ]
            },
            "user_roles":[
                "Allow to view User Groups Search Page"
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
                                "parameter_name":"UserGroupKey",
                                "data_type":"int",
                                "description":"Primary Key of user Group",
                            },
                            {
                                "parameter_name":"UserGroupID",
                                "data_type":"string",
                                "description":"ID of User groups",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "UserGroupKey": "1", 
                        "UserGroupID": "UserGroup01"
                    }, 
                    {
                        "UserGroupKey": "2", 
                        "UserGroupID": "UserGroup02"
                    }, 
                    {
                        "UserGroupKey": "3", 
                        "UserGroupID": "UserGroup03"
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
                                {"Field": "last", "ValidDataType": "INT"}, {"Field": "max", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
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
        {//Get User Roles
            "api_name":"Get User Roles",
            "api_description":"This API returns all User Roles configured in the system",
            "curl":`curl -X GET http://GenAPI.com/vis/user/v1/userroles -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.3.5",
            "http_method":"GET",
            "path":"/user/v1/userroles",
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
                        "description":"Text filter on User Role ID (This Search works similar to SQL search/ Google search mechanism)",
                    },
                    {
                        "parameter_name":"UserGroupKey",
                        "data_type":"int",
                        "description":"Corresponding User Group Key",
                    },
                    {
                        "parameter_name":"UserKey",
                        "data_type":"int",
                        "description":"Primary Key of User",
                    }     
                ]
            },
            "user_roles":[
                "Allow to view User Roles tab in Users"
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
                                "parameter_name":"UserRoleKey",
                                "data_type":"int",
                                "description":"Primary Key of user Role.",
                            },
                            {
                                "parameter_name":"UserRoleID",
                                "data_type":"string",
                                "description":"ID of User Role.",
                            },
                            {
                                "parameter_name":"AppName",
                                "data_type":"string",
                                "description":"Application Name",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "UserRoleKey": "1", 
                        "UserRoleID": "Administrator",
                        "AppName": "Asset"
                    }, 
                    {
                        "UserRoleKey": "2", 
                        "UserRoleID": "User",
                        "AppName": "Location"
                    }, 
                    {
                        "UserRoleKey": "3", 
                        "UserRoleID": "Visitor",
                        "AppName": "Visitor"
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
                                {"Field": "last", "ValidDataType": "INT"}, {"Field": "max", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [{"Field": "UserGroupKey", "ValidDataType": "INT"},{"Field": "UserKey", "ValidDataType": "INT"}]
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
        {//Get App Roles
            "api_name":"Get App Roles",
            "api_description":"This API returns all the App Roles configured in the system",
            "curl":`curl -X GET http://GenAPI.com/vis/user/v1/approles -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.3.6",
            "http_method":"GET",
            "path":"/user/v1/approles",
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
                        "description":"Text filter on AppRoleID (This Search works similar to SQL search/ Google search mechanism)",
                    },
                    {
                        "parameter_name":"UserRoleKey",
                        "data_type":"int",
                        "description":"Corresponding User Role Key",
                    }     
                ]
            },
            "user_roles":[
                "Allow to view User Roles tab in Users"
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
                                "parameter_name":"AppRoleKey",
                                "data_type":"int",
                                "description":"Primary Key of App Role.",
                            },
                            {
                                "parameter_name":"UserRoleKey",
                                "data_type":"int",
                                "description":"Key of User Role.",
                            },
                            {
                                "parameter_name":"UserRoleID",
                                "data_type":"string",
                                "description":"ID of UserRole",
                            },
                            {
                                "parameter_name":"AppRoleID",
                                "data_type":"string",
                                "description":"ID of Application Role",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "AppRoleKey": "9503", 
                        "UserRoleKey": "3",
                        "UserRoleID": "Administrator",
                        "AppRoleID": "canview"
                    }, 
                    {
                        "AppRoleKey": "9504", 
                        "UserRoleKey": "4",
                        "UserRoleID": "Normal User",
                        "AppRoleID": "canoperate"
                    }, 
                    {
                        "AppRoleKey": "9508", 
                        "UserRoleKey": "5",
                        "UserRoleID": "Guest User",
                        "AppRoleID": "canedit"
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
                                {"Field": "last", "ValidDataType": "INT"}, {"Field": "max", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [{"Field": "UserRoleKey", "ValidDataType": "INT"}
                            ]
                        },
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [
                                ["UserRoleKey"]
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
        {//User Credential Validation
            "api_name":"User Credential Validation",
            "api_description":"This API authenticates any User configured in the System by providing Login ID and Password. When this API is called, the system validates the credentials and generates an API key for the user. User can use this API Key while calling any API exposed from GenAPI. The API Key impersonates the User object where the call is coming from.",
            "curl":`curl -X POST http://GenAPI.com/hook/user/v1/authenticate -H "Content-Type: application/json" --data '{ "LoginID": "value", "Password": "value" }'`,
            "api_code":"3.3.7",
            "http_method":"POST",
            "path":"/user/v1/authenticate",
            "header":{
                "title":"Headers",
                "parameters":[
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
                        "parameter_name":"LoginID",
                        "data_type":"string",
                        "description":"Login ID of the User",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"Password",
                        "data_type":"string",
                        "description":"Password of the User Login",
                        "mandatory":{
                            "status":true
                        }
                    }
                ]
            },
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"APIKey",
                                "data_type":"string",
                                "description":"Newly generated API Key for the authenticated user.",
                            },
                            {
                                "parameter_name":"UserKey",
                                "data_type":"int",
                                "description":"Primary Key of Logged in User",
                            }
                        ]
                    },
                },
                "example_response":{
                    "APIKey":"SC:epf:598dce90de432se3",
                    "UserKey":"1"
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
                            "param_value":"List of fields, which are not in correct Data Type.",
                        },
                        
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [["LoginID"], ["Password"]]
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
        }
    ],
}