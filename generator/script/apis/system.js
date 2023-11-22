const SystemAPIs =  {//System
    "app_name":"System",
    "app_code":"3.1",
    "application_description":"",
    "apis":[
        {//Get Available Time Zones
            "api_name":"Get Available Time Zones",
            "api_description":"This API response contains a parameter named ‘Code’ which returns the available Time Zone formats. These Time Zone formats are supported by GenAPI. Rest of the APIs shall use the “Code” parameter as an input value to get available Time Zones.",
            "curl":`curl -X GET http://GenAPI.com/vis/system/v1/timezones -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.1.1",
            "http_method":"GET",
            "path":"/system/v1/timezones",
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
                "Allow to view all Time Zone via API"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"Code",
                                "data_type":"string",
                                "description":"Time Zone Code",
                            },
                            {
                                "parameter_name":"SystemName",
                                "data_type":"string",
                                "description":"Standard Time Zone Name",
                            },
                            {
                                "parameter_name":"Text",
                                "data_type":"string",
                                "description":"Display Name",
                            }
                        ]
                    },
                }, 
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
        {//Get Available Currency Types
            "api_name":"Get Available Currency Types",
            "api_description":"This API returns the available Currency which will be supported by GenAPI. Rest of the APIs shall use the “Code” parameter from this API response as an input value.",
            "curl":`curl -X GET http://GenAPI.com/vis/system/v1/currencytypes -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.1.2",
            "http_method":"GET",
            "path":"/system/v1/currencytypes",
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
                "Allow to view all Currencies via API"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"Code",
                                "data_type":"string",
                                "description":"Currency type Code",
                            },
                            {
                                "parameter_name":"Symbol",
                                "data_type":"string",
                                "description":"Currency Symbol",
                            },
                            {
                                "parameter_name":"Text",
                                "data_type":"string",
                                "description":"Currency description",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "Code": "USD", 
                        "Text": "United States of America, Dollars", 
                        "Symbol": "$"
                    }, 
                    {
                        "Code": "EUR", 
                        "Text": "Euro Member Countries, Euro", 
                        "Symbol": ""
                    }, 
                    {
                        "Code": "AED", 
                        "Text": "United Arab Emirates, Dirhams", 
                        "Symbol": ""
                    },
                    {
                        "Code": "AFN", 
                        "Text": "Afghanistan, Afghanis", 
                        "Symbol": ""
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
        {//Get Available Units
            "api_name":"Get Available Units",
            "api_description":"This API returns the available Units which will be supported by GenAPI. Rest of the APIs shall use the “Unit” parameter from this API response as an input value.",
            "curl":`curl -X GET http://GenAPI.com/vis/system/v1/units -H “Authorization: APIKEY <GenAPI API key>”`,
            "api_code":"3.1.3",
            "http_method":"GET",
            "path":"/system/v1/units",
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
                "Allow to view all Measurements via API"
            ],
            "response":{
                "response_code":"200 OK",
                "response_object_type":"List",
                "response_data":{
                    "body":{
                        "title":"Response Body",
                        "parameters":[
                            {
                                "parameter_name":"Unit",
                                "data_type":"string",
                                "description":"Unit of Measuring",
                            },
                            {
                                "parameter_name":"Name",
                                "data_type":"string",
                                "description":"Name of the Unit",
                            },
                            {
                                "parameter_name":"DisplayName",
                                "data_type":"string",
                                "description":"Display name of the unit",
                            }
                        ]
                    },
                },
                "example_response":[
                    {
                        "Unit": "m",
                        "Name": "Meter",
                        "DisplayName": "Meter (m)"
                    }, 
                    {
                        "Unit": "mm",
                        "Name": "Millimeter",
                        "DisplayName": "Millimeter (mm)"
                    }, 
                    {
                        "Unit": "Pc",
                        "Name": "Pieces",
                        "DisplayName": "Pieces (P)"
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
        }
    ]
};