const validDataTypes = ["int","string","datetime","date"]
const validResponseObjectTypes = ["Dictionary","List"]
const validHttpMethods = ["GET","POST","PATCH","DELETE"]
function validateAppsJSON(appsJSON){
    for(let app of appsJSON){
        const appName = app["app_name"]
        missingRequiredParam(app,'app_name',appName,undefined,"")
        missingRequiredParam(app,'app_code',appName,undefined,"")
        missingRequiredParam(app,'apis',appName,undefined,"")
        if(isNotEmpty(app['apis'])){
            for(let api of app['apis']){
                const apiName = api["api_name"]
                missingRequiredParam(api,'api_name',appName,apiName,"")
                missingRequiredParam(api,'api_description',appName,apiName,"")
                missingRequiredParam(api,'curl',appName,apiName,"")
                missingRequiredParam(api,'api_code',appName,apiName,"")
                missingRequiredParam(api,'http_method',appName,apiName,"")
                missingRequiredParam(api,'path',appName,apiName,"")
                missingRequiredParam(api,'header',appName,apiName,"")
                missingRequiredParam(api,'response',appName,apiName,"")
                missingRequiredParam(api,'error_handling',appName,apiName,"")
                checkParamSection(api["header"],appName,apiName,"header")
                if (isNotEmpty(api["header"])) {
                    checkHeaderParameters(api,appName,apiName)
                }
                checkParamSection(api["path_params"],appName,apiName,"path_params")
                checkParamSection(api["payload"],appName,apiName,"payload")
                checkParamSection(api["query_string"],appName,apiName,"query_string")
                if(paramExistAndContains(api["path"],'/{')){
                    missingRequiredParam(api,'path_params',appName,apiName,"")
                }
                if(isNotEmpty(api['query_string']) && isNotEmpty(api['payload'])){
                    warn('to have both payload and query_string',appName,apiName,"")
                }              
                if(isEmpty(api['user_roles']) || !api['user_roles'].length>0){
                    error('missing user roles ',appName,apiName,"")                                    
                }
                checkResponseSection(api["response"],appName,apiName)
                checkForHttpMethod(api["http_method"],appName,apiName)
                checkParameterForHttpMethod(api,appName,apiName) 
                checkErrorHandlingSection(api["error_handling"],appName,apiName)
            }
        }
    }
}

function checkParamSection(section,appName,apiName,other){
    if(isNotEmpty(section)){
        missingRequiredParam(section,'title',appName,apiName)                
        missingRequiredParam(section,'parameters',appName,apiName)
        if(isNotEmpty(section['parameters'])){
            checkForParamAttributes(section['parameters'],appName,apiName,other) 
            checkForDataType(section['parameters'],appName,apiName,other)
        }
    }
}

function checkHeaderParameters(api,appName,apiName) {
    checkHeaderAuthenticationParameters(api['header'],appName,apiName)
    if (api['http_method']==="POST") {
        checkHeaderContentTypeParameters(api['header'],appName,apiName)
    }
}

function checkHeaderAuthenticationParameters(header,appName,apiName) {
    let paramAuthorizationNotFound = true
    for(let param of header["parameters"]){
        if (param['parameter_name']==="Authorization") {
            paramAuthorizationNotFound = false
        }
    }
    if (paramAuthorizationNotFound) {
        error(`missing parameter [Authorization]`,appName,apiName,"header")
    }
}

function checkHeaderContentTypeParameters(header,appName,apiName) {
    let paramContentTypeNotFound = true
    for(let param of header["parameters"]){
        if (param['parameter_name']==="Content-Type") {
            paramContentTypeNotFound = false
        }
    }
    if (paramContentTypeNotFound) {
        error(`missing parameter [Content-Type]`,appName,apiName,"header")
    }
}

function checkResponseSection(section,appName,apiName){
    if(isNotEmpty(section)){
        missingRequiredParam(section,'response_code',appName,apiName)
    }
    checkForResponseObjectType(section['response_object_type'],appName,apiName)
}

function checkErrorHandlingSection(section,appName,apiName){
    for (let error of section) {
        missingOptionalParam(error,'error_response_params',appName,apiName,"")
    }
}

function checkForParamAttributes(params,appName,apiName,other){
    for(let param of params){
        missingRequiredParam(param,'parameter_name',appName,apiName,other)
        missingOptionalParam(param,'description',appName,apiName,other)
        missingOptionalParam(param,'example',appName,apiName,other)
        missingOptionalParam(param,'references',appName,apiName,other)
    }
}

function checkForDataType(params,appName,apiName,other){
    for(let param of params){
        if(isNotEmpty(param['data_type']) && !validDataTypes.includes(param['data_type'])){
            error(`to have invalid data type [${param['data_type']}] `,appName,apiName,other)
        }
    }
}

function checkForResponseObjectType(responseObjectType,appName,apiName){
    if(isNotEmpty(responseObjectType) && !validResponseObjectTypes.includes(responseObjectType)){
        error(`to have invalid response object type [${responseObjectType}] `,appName,apiName,"")
    }
}

function checkForHttpMethod(httpMethod,appName,apiName){
    if(isNotEmpty(httpMethod) && !validHttpMethods.includes(httpMethod)){
        error(`to have invalid HTTP method [${httpMethod}] `,appName,apiName,"")
    }
}

function checkParameterForHttpMethod(api,appName,apiName){
    if(isNotEmpty(api['http_method']) && validHttpMethods.includes(api['http_method'])){
        switch(api['http_method']) {
            case "GET":
                if (isEmpty(api['query_string'])){
                    warn(`missing [query_string] `,appName,apiName,"")
                }
                break;
            case "PATCH":
            case "POST":
                if (isEmpty(api['payload'])){
                    warn(`missing [payload] `,appName,apiName,"")
                }
                break;
            default:
                break;
        }
    }
}

function getPlace(appName,apiName,other){
    let extra = isNotEmpty(other)?` in ${other} area`:""
    if(appName===undefined && apiName=== undefined){
        return(`Given app or api ${extra}`)
    }else if(appName===undefined){
        return(`[${apiName}] of given app ${extra}`)
    }else if(apiName === undefined){
        return(`Given api of [${appName}] application ${extra}`)            
    }else{
        return(`Api of [${apiName}] in [${appName}] application ${extra}`)
    }
}

function isNotEmpty(param){
    return !isEmpty(param);
}

function paramExistAndContains(param,searchFor){
    return !isEmpty(param) && (JSON.stringify(param).includes(searchFor));
}

function missingRequiredParam(source,look_for,appName,apiName,other){
    if(isEmpty(source[look_for])){
        error(`missing the param [${look_for}]`,appName,apiName,other)
    }
}
function missingOptionalParam(source,look_for,appName,apiName,other){
    if(source.hasOwnProperty(look_for) && isEmpty(source[look_for])){
        warn(`missing the value of the param [${look_for}]. Either enter the value or remove the key.`,appName,apiName,other)
    }
}

function warn(warning,appName,apiName,other){
    console.warn(`${getPlace(appName,apiName,other)} seems ${warning}`)
}


function error(error,appName,apiName,other){
    console.error(`${getPlace(appName,apiName,other)} seems  ${error}`)
}