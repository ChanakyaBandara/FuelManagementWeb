const LocationAPIs =  {//Location
    "app_name":"Location",
    "app_code":"3.2",
    "application_description":"",
    "apis":[
        {//Get Location Types
            "api_name":"Get Location Types",
            "api_description":"This API returns all the Location Types configured in the system",
            "curl":`curl -X GET http://GenAPI.com/vis/location/v1/locationtypes?fields=LocationTypeKey,LocationType” -H "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.2.1",
            "http_method":"GET",
            "path":"/location/v1/locationtypes",
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
                        "description":"Text filter on LocationType (SQL like search will be performed)",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    }
                ]
            },
            "user_roles":[
                "Allow to view Location Types"
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
                                "parameter_name":"LocationTypeKey",
                                "data_type":"int",
                                "description":"Primary Key of the Location Type configured in the System",
                            },
                            {
                                "parameter_name":"LocationType",
                                "data_type":"string",
                                "description":"Corresponding Location Type Name (for LocationTypeKey)",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "LocationTypeKey": "6", 
                        "LocationType": "Site"
                    }, 
                    {
                        "LocationTypeKey": "7", 
                        "LocationType": "Building"
                    }, 
                    {
                        "LocationTypeKey": "8", 
                        "LocationType": "Floor"
                    }, 
                    {
                        "LocationTypeKey": "9", 
                        "LocationType": "Room"
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
        {//Create Location
            "api_name":"Create Location",
            "api_description":"This API allows creating Locations in the system.",
            "curl":`curl -X POST “http://GenAPI.com/vis/location/v1/locations” -H    "Authorization: APIKEY <GenAPI API key>” -H "Content-Type: application/json" --data'{"LocationName": "Sri Lanka","LocationTypeKey":"1","SecondName":"Ceylon","Currency":"LKR", "TimeZone": "LK"}'`,
            "api_code":"3.2.2",
            "http_method":"POST",
            "path":"/location/v1/locations",
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
                        "parameter_name":"LocationName",
                        "data_type":"string",
                        "description":"Name of the Location",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"LocationTypeKey",
                        "data_type":"int",
                        "description":"A Location Type configured in the system.",
                        "mandatory":{
                            "status":true,
                            "description":"Except when LocationTypeName is provided"
                        },
                        "references":[
                            {
                                "title":"Using 3.2.1 API, we can get all the Location Types configured in the System",
                                "app_code":"3.2",
                                "api_code":"3.2.1"
                            }
                        ]
                    },
                    {
                        "parameter_name":"LocationTypeName",
                        "data_type":"string",
                        "description":"A Location Type configured in the system. Can be provided as an alternative to LocationTypeKey. If LocationTypeKey is provided, the LocationTypeName attribute will be ignored",
                        "mandatory":{
                            "status":true,
                            "description":"Except when LocationTypeKey is provided"
                        }
                    },
                    {
                        "parameter_name":"SecondName",
                        "data_type":"string",
                        "description":"Second Name (Display Name) of the Location. If this is not given, the default will be the Location Name. As an option, you can use this to generate the Location Hierarchy (App Configuration Setting)",
                    },
                    {
                        "parameter_name":"Currency",
                        "data_type":"string",
                        "description":"This parameter is mandatory when a “SITE” Location is created.",
                        "references":[
                            {
                                "title":"Available currency format can be found from the 3.1.2 API.",
                                "app_code":"3.1",
                                "api_code":"3.1.2"
                            }
                        ]
                    },
                    {
                        "parameter_name":"TimeZone",
                        "data_type":"string",
                        "description":"This parameter is mandatory when a “SITE” Location is created.",
                        "references":[
                            {
                                "title":"Available TimeZone can be found from the 3.1.1 API.",
                                "app_code":"3.1",
                                "api_code":"3.1.1"
                            }
                        ]
                    },
                    {
                        "parameter_name":"ParentLocationKey",
                        "data_type":"int",
                        "description":"Parent Location Key. If provided then the new Location will be created as a Child Location of this Parent Location.",
                    },
                    {
                        "parameter_name":"ParentLocationFullName",
                        "data_type":"string",
                        "description":"Full Location Name of the Parent Location. This can be provided as an alternative to ParentLocationKey. If ParentLocationKey is provided, ParentLocationFullName attribute wll be ignored.",
                    }
                ]
            },
            "user_roles":[
                "Allow to register Locations"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Primary Key of the New Location",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Location Created Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "LocationKey":"1",
                    "status":"Location Created Successfully"
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
                            "ErrorFields": [["LocationName"], ["LocationTypeKey", "LocationTypeName"]]
                        },
                        {
                            "ErrorMessage": "Not all mandatory fields are filled!",
                            "ErrorFields": [["Currency"], ["TimeZone"]]
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
                                {
                                    "Field": "ParentLocationKey",
                                    "ValidDataType": "INT"
                                },
                                {
                                    "Field": "LocationTypeKey",
                                    "ValidDataType": "INT"
                                }
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {
                                    "Field": "ParentLocationKey",
                                    "ValidDataType": "INT"
                                }
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
                            "ErrorMessage": "Valid maximum character length has been exceeded!",
                            "ErrorFields": [{"Field": "LocationName", "ValideLength": "255"}, {"Field": "SecondName", "ValideLength": "255"}]
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
                                    "plk",
                                    "LocationTypeKey"
                                ],
                                [
                                    "ParentLocationFullName"
                                ],
                                [
                                    "LocationTypeName"
                                ]
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data provided!",
                            "ErrorFields": [
                                [
                                    "ParentLocationKey"
                                ],
                                [
                                    "LocationTypeKey"                               
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
                            "param_value":"Error message, occurs when try to register a location from the already existing location name",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "LocationName already exists! "
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
        {//Create Child Location
            "api_name":"Create Child Location",
            "api_description":"This API allows creating Child Locations in the system",
            "curl":`curl -X POST “http://GenAPI.com/vis/location/v1/locations/1/children” -H “Authorization: APIKEY <GenAPI API key>” -H “Content-Type: application/json” --data '{“LocationName”: “Colombo”, “LocationTypeKey”: “2”, “SecondName”: “Capital City”}'`,
            "api_code":"3.2.3",
            "http_method":"POST",
            "path":"/location/v1/locations/{plk}/children",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{plk}",
                        "data_type":"int",
                        "description":"Parent Location Key"
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
                        "parameter_name":"LocationName",
                        "data_type":"string",
                        "description":"Name of the Location",
                        "mandatory":{
                            "status":true,
                        }
                    },
                    {
                        "parameter_name":"LocationTypeKey",
                        "data_type":"int",
                        "description":"A Location Type configured in the system.",
                        "mandatory":{
                            "status":true,
                            "description":"Except when LocationTypeName is provided"
                        },
                        "references":[
                            {
                                "title":"Using 3.2.1 API, we can get all the Location Types configured in the System",
                                "app_code":"3.2",
                                "api_code":"3.2.1"
                            }
                        ]
                    },
                    {
                        "parameter_name":"SecondName",
                        "data_type":"string",
                        "description":"Second Name (Display Name) of the Location. If this is not given, the default will be the Location Name. As an option, you can use this to generate the Location Hierarchy (App Configuration Setting)",
                    },
                    {
                        "parameter_name":"Currency",
                        "data_type":"string",
                        "description":"This parameter is mandatory when a “SITE” Location is created.",
                        "references":[
                            {
                                "title":"Available currency format can be found from the 3.1.2 API.",
                                "app_code":"3.1",
                                "api_code":"3.1.2"
                            }
                        ]
                    },
                    {
                        "parameter_name":"TimeZone",
                        "data_type":"string",
                        "description":"This parameter is mandatory when a “SITE” Location is created.",
                        "references":[
                            {
                                "title":"Available TimeZone can be found from the 3.1.1 API.",
                                "app_code":"3.1",
                                "api_code":"3.1.1"
                            }
                        ]
                    }
                ]
            },
            "user_roles":[
                "Allow to add Child Locations"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Primary Key of the New Location",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"Location Created Successfully",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status": "Location Created Successfully",
                    "LocationKey": 208
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
                            "ErrorFields": [["LocationName"], ["LocationTypeKey", "LocationTypeName"]]
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
                                {
                                    "Field": "LocationTypeKey",
                                    "ValidDataType": "INT"
                                },
                                {
                                    "Field": "plk",
                                    "ValidDataType": "INT"
                                }
                            ]
                        },
                        {
                            "ErrorMessage": "Invalid Data Type provided!",
                            "ErrorFields": [
                                {
                                    "Field": "plk",
                                    "ValidDataType": "INT"
                                }
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
                            "ErrorMessage": "Valid maximum character length has been exceeded!",
                            "ErrorFields": [{"Field": "LocationName", "ValideLength": "255"}, {"Field": "SecondName", "ValideLength": "255"}]
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
                                    "LocationTypeKey"                               
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
                            "param_value":"Error message, occurs when try to register a location from the already existing location name",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "LocationName already exists! "
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
                    "error_category":"URL Object Reffrence Validation",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"Error message for URL Object Reference validation",
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage": "Object is not found in the system!",
                            "ErrorFields": [["plk"]]
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
        {//Get Locations
            "api_name":"Get Locations",
            "api_description":"This API returns all the Locations configured in the system.",
            "curl":`curl -X GET “http://GenAPI.com/vis/location/v1/locations?max=5&last=0&fields=LocationKey,LocationName,FullName,LocationType,LocationTypeKey” -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.2.4",
            "http_method":"GET",
            "path":"/location/v1/locations",
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
                        "description":"Special Location search function performed to get most likelihood results on following fields FullName, SecondName",
                    },
                    {
                        "parameter_name":"fields",
                        "data_type":"string",
                        "description":"Fields to be returned in a comma separated string. If any specific field(s) not specified, API will return all the Default fields",
                    },
                    {
                        "parameter_name":"SiteKey",
                        "data_type":"int",
                        "description":"When filter is applied, it will filter Locations underneath this Site Location"
                    },
                    {
                        "parameter_name":"LocationTypeKey",
                        "data_type":"int",
                        "description":"When filter is applied, it will list all the Locations on selected Location Types (Location Types can be found on API 1_Get_all_Location)"
                    }
                ]
            },
            "user_roles":[
                "Allow to view Locations Search Page"
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
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Primary Key of the Location",
                            },
                            {
                                "parameter_name":"LocationName",
                                "data_type":"string",
                                "description":"Name of the Location",
                            },
                            {
                                "parameter_name":"SecondName",
                                "data_type":"string",
                                "description":"Second Name of the Location (optional at configuration time)"
                            },
                            {
                                "parameter_name":"LocationFullName",
                                "data_type":"string",
                                "description":"Full Location Name generated by the system when creating Location. This is the 2nd API signature used by GenAPI to identify the Location in the system. ‘Full Location Name’ can be used as a unique name to identify the Location."
                            },
                            {
                                "parameter_name":"Address",
                                "data_type":"string",
                                "description":"Address of the Location"
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description of the Location"
                            },
                            {
                                "parameter_name":"MobilePrefix",
                                "data_type":"string",
                                "description":"Site based Mobile number prefix. GenAPI uses this information when creating User Objects"
                            },
                            {
                                "parameter_name":"Currency",
                                "data_type":"string",
                                "description":"This parameter is mandatory when a “SITE” Location is created."
                            },
                            {
                                "parameter_name":"TimeZone",
                                "data_type":"string",
                                "description":"This parameter is mandatory when a “SITE” Location is created."
                            },
                            {
                                "parameter_name":"LocationCode",
                                "data_type":"string",
                                "description":"Location Code of the Location"
                            },
                            {
                                "parameter_name":"FloorSize",
                                "data_type":"float",
                                "description":"Floor area configured in the system in m2 "
                            },
                            {
                                "parameter_name":"GeoMap",
                                "data_type":"string",
                                "description":"URL of a Geo Map for the respective Location, such as Google map or similar web application"
                            },
                            {
                                "parameter_name":"LocationTypeKey",
                                "data_type":"int",
                                "description":"A Location Type configured in the system."
                            },
                            {
                                "parameter_name":"LocationTypeName",
                                "data_type":"string",
                                "description":"A Location Type configured in the system. Can be provided as an alternative to LocationTypeKey. If LocationTypeKey is provided, the LocationTypeName attribute will be ignored"
                            },
                            {
                                "parameter_name":"ParentLocationKey",
                                "data_type":"int",
                                "description":"Immediate Parent Location Key (if exists)",
                            },
                            {
                                "parameter_name":"ParentLocationFullName",
                                "data_type":"string",
                                "description":"Full Location Name of the Parent Location. This can be provided as an alternative to ParentLocationKey. If ParentLocationKey is provided, ParentLocationFullName attribute wll be ignored.",
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Site Key of the Location",
                            },
                            {
                                "parameter_name":"SiteLocationFullName",
                                "data_type":"string",
                                "description":"Full name of the Site Location",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "LocationKey": "1", 
                        "LocationName": "Sri Lanka",
                        "FullName": "Sri Lanka",
                        "LocationType": "Site",
                        "LocationTypeKey": "1"
                    }, 
                    {
                        "LocationKey": "2", 
                        "LocationName": "Colombo",
                        "FullName": "Sri Lanka.Colombo",
                        "LocationType": "City",
                        "LocationTypeKey": "2"
                    }, 
                    {
                        "LocationKey": "3", 
                        "LocationName": "WTC",
                        "FullName": "Sri Lanka.Colombo.WTC",
                        "LocationType": "Building",
                        "LocationTypeKey": "3"
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
                                    "LocationFullName"
                                ],
                                [
                                    "ParentLocationFullName"
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
        {//Get Location Details
            "api_name":"Get Location Details",
            "api_description":"This API returns the details of a particular Location.",
            "curl":`curl -X GET “http://GenAPI.com/vis/location/v1/locations/2?fields= LocationKey, LocationName, FullName, LocationType, LocationTypeKey” -H    "Authorization: APIKEY <GenAPI API key>"`,
            "api_code":"3.2.5",
            "http_method":"GET",
            "path":"/location/v1/locations/{lk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{lk}",
                        "data_type":"int",
                        "description":"Location Primary Key"
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
                "Allow to view Location  Details"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Primary Key of the Location",
                            },
                            {
                                "parameter_name":"LocationName",
                                "data_type":"string",
                                "description":"Name of the Location",
                            },
                            {
                                "parameter_name":"SecondName",
                                "data_type":"string",
                                "description":"Second Name of the Location (optional at configuration time)"
                            },
                            {
                                "parameter_name":"LocationFullName",
                                "data_type":"string",
                                "description":"Full Location Name generated by the system when creating Location. This is the 2nd API signature used by GenAPI to identify the Location in the system. ‘Full Location Name’ can be used as a unique name to identify the Location."
                            },
                            {
                                "parameter_name":"LocationCode",
                                "data_type":"string",
                                "description":"Location Code of the Location"
                            },
                            {
                                "parameter_name":"FloorSize",
                                "data_type":"float",
                                "description":"Floor area configured in the system in m2 "
                            },
                            {
                                "parameter_name":"Address",
                                "data_type":"string",
                                "description":"Address of the Location"
                            },
                            {
                                "parameter_name":"Description",
                                "data_type":"string",
                                "description":"Description of the Location"
                            },
                            {
                                "parameter_name":"MobilePrefix",
                                "data_type":"string",
                                "description":"Site based Mobile number prefix. GenAPI uses this information when creating User Objects"
                            },
                            {
                                "parameter_name":"Currency",
                                "data_type":"string",
                                "description":"This parameter is mandatory when a “SITE” Location is created."
                            },
                            {
                                "parameter_name":"TimeZone",
                                "data_type":"string",
                                "description":"This parameter is mandatory when a “SITE” Location is created."
                            },
                            {
                                "parameter_name":"GeoMap",
                                "data_type":"string",
                                "description":"URL of a Geo Map for the respective Location, such as Google map or similar web application"
                            },
                            {
                                "parameter_name":"LocationTypeKey",
                                "data_type":"int",
                                "description":"A Location Type configured in the system."
                            },
                            {
                                "parameter_name":"LocationTypeName",
                                "data_type":"string",
                                "description":"A Location Type configured in the system. Can be provided as an alternative to LocationTypeKey. If LocationTypeKey is provided, the LocationTypeName attribute will be ignored"
                            },
                            {
                                "parameter_name":"ParentLocationKey",
                                "data_type":"int",
                                "description":"Immediate Parent Location Key (if exists)",
                            },
                            {
                                "parameter_name":"ParentLocationFullName",
                                "data_type":"string",
                                "description":"Full Location Name of the Parent Location. This can be provided as an alternative to ParentLocationKey. If ParentLocationKey is provided, ParentLocationFullName attribute wll be ignored.",
                            },
                            {
                                "parameter_name":"SiteKey",
                                "data_type":"int",
                                "description":"Site Key of the Location",
                            },
                            {
                                "parameter_name":"SiteLocationFullName",
                                "data_type":"string",
                                "description":"Full name of the Site Location",
                            }
                        ]
                    },
                },
                "example_response":{
                    "LocationKey": "2", 
                    "LocationName": "Colombo",
                    "FullName": "Sri Lanka.Colombo",
                    "LocationType": "City",
                    "LocationTypeKey": "2"
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
                            "ErrorFields": [["lk"]]
                        }
                    ]
                },
                {
                    "error_code":"406",
                    "error_response_type":"JSON",
                    "error_category":"Content Type Error",
                    "examples":[
                        "No resource found to process API request'"
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
        {//Update Location
            "api_name":"Update Location",
            "api_description":"This API allows updating the Location information.",
            "curl":`curl -X PATCH http://GenAPI.com/vis/location/v1/locations/2 -H "Authorization: APIKEY <GenAPI API key>" -H "Content-Type: application/json" --data ' {"LocationName":"SriLanka","SecondName":"Ceylon","Currency":"LKR","TimeZone": "LK”, Address": "447/7",LocationCode: "",FloorSize: "2500","Description": "Only location in Asia pacific region"}'`,
            "api_code":"3.2.6",
            "http_method":"PATCH",
            "path":"/location/v1/locations/{lk}",
            "path_params":{
                "title":"Path Params",
                "parameters":[
                    {
                        "parameter_name":"{lk}",
                        "data_type":"int",
                        "description":"Primary Key of Location Key"
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
                        "parameter_name":"LocationName",
                        "data_type":"string",
                        "description":"Name of the Location",
                    },
                    {
                        "parameter_name":"SecondName",
                        "data_type":"string",
                        "description":"Second Name of the Location (optional at configuration time)"
                    },
                    {
                        "parameter_name":"Currency",
                        "data_type":"string",
                        "description":"This parameter is mandatory when a “SITE” Location is created."
                    },
                    {
                        "parameter_name":"TimeZone",
                        "data_type":"string",
                        "description":"This parameter is mandatory when a “SITE” Location is created."
                    },
                    {
                        "parameter_name":"MobilePrefix",
                        "data_type":"string",
                        "description":"Site based Mobile number prefix. GenAPI uses this information when creating User Objects"
                    },
                    {
                        "parameter_name":"FloorSize",
                        "data_type":"float",
                        "description":"Floor area configured in the system in m2 "
                    },
                    {
                        "parameter_name":"Address",
                        "data_type":"string",
                        "description":"Address of the Location"
                    },
                    {
                        "parameter_name":"LocationCode",
                        "data_type":"string",
                        "description":"Location Code of the Location"
                    },
                    {
                        "parameter_name":"Description",
                        "data_type":"string",
                        "description":"Description of the Location"
                    }
                ]
            },
            "user_roles":[
                "Allow to modify Locations"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"LocationKey",
                                "data_type":"int",
                                "description":"Primary Key of Updated Location",
                            },
                            {
                                "parameter_name":"Status",
                                "data_type":"string",
                                "description":"“Location Updated Successfully” or “Only Site Locations allow to update Time Zone or Currency information, Update Not Done!” or “Only Site Locations allow to update Time Zone or Currency information, Update partially Done! ",
                            }
                        ]
                    },
                },
                "example_response":{
                    "Status":"Location Updated Successfully",
                    "LocationKey":"2",
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
                                [[["ProblemTypeKey", "ProblemTypeName"], ["ServiceCategoryKey", "ServiceCategoryName"]]], 
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
                    "error_category":"No Updatable Fields Found Error",
                    "error_response_params":[
                        {
                            "param_name":"ErrorMessage",
                            "param_value":"No updatable fields found"
                        }
                    ],
                    "examples":[
                        {
                            "ErrorMessage":"No updatable fields found"
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
                            "ErrorMessage":"Location for the Parent Location with the same name already exists!",
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
                            "ErrorFields": [["lk"]]
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
        {//Get Location App-configuration
            "api_name":"Get Location App-configuration",
            "api_description":"This API will get the Location app configuration, which is already done and will return the Site Location Type configuration (Site Settings).",
            "curl":`curl -X GET http://GenAPI.com/vis/location/v1/appconfiguration -H "Authorization:  APIKEY <GenAPI API key>"`,
            "api_code":"3.2.7",
            "http_method":"GET",
            "path":"/location/v1/appconfiguration ",
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
                "Allow to get App Configuration Details via API"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"Dictionary",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"SiteLocationTypeKey",
                                "data_type":"int",
                                "description":"Primary Key of Location Type",
                            },
                            {
                                "parameter_name":"SiteLocationType",
                                "data_type":"string",
                                "description":"Location Type Name",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "SiteLocationTypeKey": "6", 
                        "SiteLocationType": "Site"
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
    ],
}