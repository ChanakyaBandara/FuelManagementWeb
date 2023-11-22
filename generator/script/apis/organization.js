const OrganizationAPIs =  {//Organization
    "app_name":"Organization",
    "app_code":"3.5",
    "application_description":"",
    "apis":[
        {//Get Staff
            "api_name":"Get Staff",
            "api_description":"This API returns all the Staff configured in the system.",
            "curl":`curl -X GET http://GenAPI.com/vis/organization/v1/staff? max=10&last=5& fields=LoginID, FirstName, LastName, isVIP” -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.5.1",
            "http_method":"GET",
            "path":"/organization/v1/staff",
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
                        "description":"Text filter on FirstName, LastName, Phone Number, email, LoginID (This Search works similar to the mechanism in SQL search/ Google search)"
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields"
                    },
                    {
                        "parameter_name":"DepartmentKey",
                        "data_type":"int",
                        "description":"Department filter. Refer API 3.5.2",
                        "references":[
                            {
                                "title":"Refer API 3.5.2 to get available Department",
                                "app_code":"3.5",
                                "api_code":"3.5.2"
                            }
                        ]
                    },
                    {
                        "parameter_name":"LocationKey",
                        "data_type":"int",
                        "description":"Work Location filter"
                    },
                    {
                        "parameter_name":"Hidden",
                        "data_type":"Boolean",
                        "description":"If the value is 1, only the Hidden Staff will be returned. Non-Hidden Staff will be returned if the value is 0 or the parameter is not passed.",
                        "default_value":"0",
                        "applicable_value":"0 or 1",
                    }
                    
                ]
            },
            "user_roles":[
                "Allow to view Staff Details"
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
                                "description":"Last Name of The User",
                            },
                            {
                                "parameter_name":"DisplayName",
                                "data_type":"string",
                                "description":"Display Name of the User",
                            },
                            {
                                "parameter_name":"Hidden",
                                "data_type":"boolean",
                                "description":"User Hidden status. Users with Hidden status will not be available for other Services or Applications [1: Hidden, 0: Not Hidden]",
                            },
                            {
                                "parameter_name":"isVIP",
                                "data_type":"int",
                                "description":"User VIP status.  [1: VIP, 0: Not VIP]",
                            },
                            {
                                "parameter_name":"EmployeeNumber",
                                "data_type":"int",
                                "description":"Employee Number of User",
                            },
                            {
                                "parameter_name":"WorkLocationKey",
                                "data_type":"int",
                                "description":"Primary Key of User’s Work Location",
                            },
                            {
                                "parameter_name":"WorkLocationFullName",
                                "data_type":"String",
                                "description":"Corresponding Work Location’s Full Name (for WorkLocationKey)",
                            },
                            {
                                "parameter_name":"DepartmentKey",
                                "data_type":"int",
                                "description":"Primary Key of User Department which corresponding User belongs to",
                            },
                            {
                                "parameter_name":"DepartmentName",
                                "data_type":"string",
                                "description":"Name of the Department",
                            },
                            {
                                "parameter_name":"BranchKey",
                                "data_type":"int",
                                "description":"BranchKey",
                            },
                            {
                                "parameter_name":"BranchName",
                                "data_type":"string",
                                "description":"Corresponding Branch Name (for BranchKey)",
                            },
                            {
                                "parameter_name":"Phone",
                                "data_type":"string",
                                "description":"Phone Number of the Staff memeber",
                            },
                            {
                                "parameter_name":"Email",
                                "data_type":"string",
                                "description":"Email address of the Staff memeber",
                            },
                            {
                                "parameter_name":"Designation",
                                "data_type":"string",
                                "description":"Designation of Staff member",
                            },
                            {
                                "parameter_name":"OfficePhone",
                                "data_type":"string",
                                "description":"Office Phone number of Staff member",
                            },
                            {
                                "parameter_name":"ReportToUserKey",
                                "data_type":"int",
                                "description":"UserKey of User who the Staff member report to",
                            },
                            {
                                "parameter_name":"ReportToUserFullName",
                                "data_type":"string",
                                "description":"Full Name of the Corresponding User who the Staff member report to (for ReportToUserKey)",
                            }
                        
                        ]
                    },
                }, 
                "example_response":[
                    {
                        "UserKey" : "1", 
                        "FirstName" : "John",
                        "LastName" : "Doe",
                        "isVIP" : "1"
                    },
                    {
                        "UserKey" : "2", 
                        "FirstName" : "Mike",
                        "LastName" : "Johnson",
                        "isVIP" : "0"
                    },
                    {
                        "UserKey" : "42", 
                        "FirstName" : "John",
                        "LastName" : "Jorge",
                        "isVIP" : "0"
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
                            "ErrorFields": [
                                {"Field": "last", "ValidDataType": "INT"}, 
                                {"Field": "max", "ValidDataType": "INT"},
                                {"Field":"DepartmentKey", "ValidDataType": "INT"}, 
                                {"Field": "LocationKey ", "ValidDataType": "INT"}, 
                                {"Field": "Hidden ", "ValidDataType": "Boolean"}
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
        {//Get Departments
            "api_name":"Get Departments",
            "api_description":"This API returns all the Departments configured in the system. Departments can be used when filtering the Staff in Staff API.",
            "curl":`curl -X GET http://GenAPI.com/vis/organization/v1/departments?max=10&last=5&fields=DepartmentKey, CreatedUserKey, DepartmentName” -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.5.2",
            "http_method":"GET",
            "path":"/organization/v1/departments",
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
                        "description":"Text filter on DepartmentName, DepartmentFullName, Branch Name (This Search works similar to the mechanism in SQL search/ Google search)"
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields"
                    }  
                ]
            },
            "user_roles":[
                "Allow to view Department Details"
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
                                "parameter_name":"DepartmentKey",
                                "data_type":"int",
                                "description":"Primary Key of the Department",
                            },
                            {
                                "parameter_name":"DepartmentName",
                                "data_type":"string",
                                "description":"Name of the Department",
                            },
                            {
                                "parameter_name":"DepartmentFullName",
                                "data_type":"string",
                                "description":"Full Name of the Department generated by the system when creating the Department. This is the 2nd signature which is used by GenAPI to identify the Department in the system",
                            },
                            {
                                "parameter_name":"ParentDepartmentKey",
                                "data_type":"int",
                                "description":"Primary Key of Parent Department",
                            },
                            {
                                "parameter_name":"ParentDepartmentFullName",
                                "data_type":"string",
                                "description":"Name of the Parent Department",
                            },
                            {
                                "parameter_name":"DepartmentHeadKey",
                                "data_type":"int",
                                "description":"Primary Key of Head of the Department",
                            },
                            {
                                "parameter_name":"DepartmentHeadFullName",
                                "data_type":"string",
                                "description":"Corresponding Department Head Full Name (for DepartmentHeadKey)",
                            },
                            {
                                "parameter_name":"BranchKey",
                                "data_type":"int",
                                "description":"Primary Key of Branch",
                            },
                            {
                                "parameter_name":"BranchName",
                                "data_type":"string",
                                "description":"Organization Branch Name",
                            },
                            {
                                "parameter_name":"Hidden",
                                "data_type":"boolean",
                                "description":"Department Hidden status. Departments with Hidden status will not be available for other Services or Applications [1: Hidden, 0: Not Hidden]",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "DepartmentKey": "1", 
                        "BranchKey": "6", 
                        "DepartmentName": "Administration",
                        "DepartmentHeadKey": "2"
                    }, 
                    {
                        "DepartmentKey": "3", 
                        "BranchKey": "6", 
                        "DepartmentName": "Human Resource",
                        "DepartmentHeadKey": "4"
                    }, 
                    {
                        "DepartmentKey": "4", 
                        "BranchKey": "1", 
                        "DepartmentName": "Accounts",
                        "DepartmentHeadKey": "5"
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
        }
    ]
}