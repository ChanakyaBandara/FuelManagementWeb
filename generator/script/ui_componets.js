function isEmpty(data) {
    return data === undefined || data === null || data === ""
}

const SideBarUI = {
    logo: function () {
        return `<div class="logo-height">
            <div class="row">
                <div class="col-sm">
                        
                            <span class="logo-section"></span>
                        </a>
                </div>
            </div>
        </div>`
    },
    title: function () {
        return `<div class="sidebar-topic">
            <span>${definition.sidebarTitle}</span>
        </div>`
    },
    brand: function () {
        return `<div class="sidebar-main active" data-app-code='brand'>
            <span>
                Welcome
            </span>
        </div>`
    },
    introduction: function () {
        return `<div class="sidebar-main" data-app-code='intro'>
            <span>
                Introduction
            </span>
        </div>`
    },
    appendix: function () {
        return `<div class="sidebar-main" data-app-code='appendix'>
            <span>
                Appendix
            </span>
        </div>`
    },
    appLink: function (content, code) {
        return `<div class="app-link" data-app-code="${code}">
            ${content}
        </div>`
    },
    appSectionDivider: function () {
        return `<div class="section-devider">
        </div>`
    },
    appTitle: function (appName) {
        return `<div class="sidebar-main">
            <span>
                ${appName}
            </span>
            <span class="sidebar-expand-icon"></span>
        </div>`
    },
    apiLink: function (apiName, code) {
        return `<div class="sidebar-subtopic" data-api-code="${code}">
            <span id="subTopic">
                ${apiName}
            </span>
        </div>`
    },
    apiLinkWrap: function (content) {
        return `<div class="sidebar-subtopic-wrap">
           ${content}
        </div>`
    }
}

const LoginUI = {
    page: function(){
        return`<div class="row">
        <div class="col-sm bg-image-03">
            <div class="login-left-column">
                <div class="login-page-heading">
                    <span>API Documentation Generator</span>
                </div>
                <div class="login-description">
                    <p>
                        Welcome to the secure login page for the API Documentation Generator. Seamlessly access your
                        account, simplify API documentation creation, and effortlessly enhance your development
                        process. Your portal to efficient documentation awaits.
                    </p>
                </div>
            </div>
        </div>
        <div class="col-sm">
            <div class="login-right">
                <div class="row">
                    <div class="logo-container">
                        <span class="logo-vihan"></span>
                    </div>
                </div>
                <div class="row">
                    <span class="hey-hello">
                        Hey, Hello...
                    </span>
                </div>
                <div class="row">
                    <div class="enter-the-information">
                        <span>Enter the information you entered while registering</span>
                    </div>
                </div>
                <div class="row">
                    <label for="email" class="login-label">Email</label>
                    <input class="login-input" type="email" id="email" name="email">
                </div>
                <div class="row">
                    <label for="password" class="login-label">Password</label>
                    <input class="login-input" type="password" id="password" name="password">
                </div>
                <div class="row">
                    <button class="login" onclick="login($('#email').val(), $('#password').val())">Login</button>
                </div>
            </div>
        </div>
    </div> `
    }
}

const BrandUI = {
    brand: function () {
        return `<div class="introduction-section brand">  
        <div class="row">
            <div class="col-sm">
                <div class="image-section brand">
                    <div class="row">
                        <div class="col-sm">
                            <span class="intro-imgs brand"></span>
                        </div>
                    </div>
                </div>
                <div class="hero-topic cover">
                    <span>
                        Welcome to the API Documentation Builder!
                    </span>
                </div>
                <div class="description cover">
                    <span>
                        The API Documentation Builder is your all-in-one solution for creating comprehensive API documentation. Whether you're a developer, project manager, or technical writer, this tool simplifies the process and enhances collaboration.
                    </span>
                </div>
                <div class="row">
                    <div class="description brand">
                        <p class="title">Key Features:</p>
                        <ul>
                            <li>Efficient conversion of Word or Excel documents to structured JSON code.</li>
                            <li>Customizable UI components for a branded and user-friendly experience.</li>
                            <li>Collaborative workflow, allowing teams to work seamlessly together.</li>
                            <li>Real-time updates ensure your documentation stays up to date.</li>
                        </ul>
                        <p>
                            Start building a better documentation experience today! Upload your document and watch as the API Documentation Builder transforms it into a professional website.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    }
}
const IntroUI = {
    into: function () {
            return `<div class="introduction-section">        
            <div class="main-heading">
                <span>Introduction</span>
            </div>
            <div class="description">
                GenAPI REST API is a web (http/https) service. Any third-party application can get engaged with documentation process.
            </div>
            <div class="image-section">
                <div class="row">
                    <div class="col-sm">
                        <span class="bg-image-02"></span>
                    </div>
                </div>
            </div>  
            <div class="explanation-section">
                <hr>
            </div>
        </div>`
    }
}

const AppendixUI = {
    appendix: function () {
            return `<div class="introduction-section">        
            <div class="main-heading">
                <span>Appendix</span>
            </div>
            <div class="explanation-section">
                <div class="sub-heading">
                    User Preference System Object Formats
                </div>
                    <hr>
                <div class="appendix-section">
                    <div class="description intro">
                        <p class="title">Date Formats</p>
                    </div>
                    <div class="row">
                        <div class="parameter-table intro">
                            <table id="customers">
                                <tr>
                                    <th>Code</th>
                                    <th>Type</th>
                                    <th>Exmple</th>
                                </tr>
                                <tr>
                                    <td>Y/M/D</td>
                                    <td>String</td>
                                    <td>2018/11/02 (Y/M/D)</td>
                                </tr>
                                <tr>
                                    <td>D/M/Y</td>
                                    <td>String</td>
                                    <td>02/11/2018 (D/M/Y)</td>
                                </tr>
                                <tr>
                                    <td>n d, Y</td>
                                    <td>String</td>
                                    <td>Nov 2, 2018 (Mon Day, Year)</td>
                                </tr>
                                <tr>
                                    <td>d-N-Y</td>
                                    <td>String</td>
                                    <td>2-November-2018 (D-Month-Year)</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="appendix-section">
                    <div class="description intro">
                        <p class="title">Time Formats</p>
                    </div>
                    <div class="row">
                        <div class="parameter-table intro">
                            <table id="customers">
                                <tr>
                                    <th>Code</th>
                                    <th>Type</th>
                                    <th>Exmple</th>
                                </tr>
                                <tr>
                                    <td>24</td>
                                    <td>String</td>
                                    <td>24</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>String</td>
                                    <td>12</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="appendix-section">
                    <div class="description intro">
                        <p class="title">Currency Formats</p>
                    </div>
                    <div class="row">
                        <div class="parameter-table intro">
                            <table id="customers">
                                <tr>
                                    <th>Code</th>
                                    <th>Type</th>
                                    <th>Exmple</th>
                                </tr>
                                <tr>
                                    <td>3:2:,:.</td>
                                    <td>String</td>
                                    <td>123,456.78</td>
                                </tr>
                                <tr>
                                    <td>3,2:2:,:.</td>
                                    <td>String</td>
                                    <td>1,23,456.78</td>
                                </tr>
                                <tr>
                                    <td>3:2:.:,</td>
                                    <td>String</td>
                                    <td>123.456,78</td>
                                </tr>
                                <tr>
                                    <td>3:3:,:.</td>
                                    <td>String</td>
                                    <td>123,456.780</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="appendix-section">
                    <div class="description intro">
                        <p class="title">Language</p>
                    </div>
                    <div class="row">
                        <div class="parameter-table intro">
                            <table id="customers">
                                <tr>
                                    <th>Code</th>
                                    <th>Type</th>
                                    <th>Exmple</th>
                                </tr>
                                <tr>
                                    <td>hu</td>
                                    <td>String</td>
                                    <td>Hungarian</td>
                                </tr>
                                <tr>
                                    <td>ar-sa</td>
                                    <td>String</td>
                                    <td>Arabic - Saudi Arabia</td>
                                </tr>
                                <tr>
                                    <td>fr</td>
                                    <td>String</td>
                                    <td>French</td>
                                </tr>
                                <tr>
                                    <td>en</td>
                                    <td>String</td>
                                    <td>English</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="description">
                        <p class="title">Note:</p>
                        <p>
                            <span id="apiDescription">Above list contains the Languages, which support Language translation currently. When you pass the ‘Language’ when creating a user, make sure that the language is enabled in GenAPI System app’s account configuration.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>`
    }
}

const PopupUI = {
    page: function () {
        return `<div class="popup-section">
            <div class="popup-page">
                <div class="row popup" id="header-section">
                    <div class="popup-col-sm">
                        <span class="popup-title"></span>
                    </div>
                    <div class="popup-col-sm">
                        <div class="fit-width-column-right">
                            <span class="popup-close-button" onclick="closePopupPage()">X</span>
                        </div>
                    </div>
                </div>
                <div id="popup-content" class='popup-content popup'></div>
            </div>            
        </div>`
    },
}


const ContentUI = {
    modeButton: function () {
        return `
            <div class="row">
                <label class="switch">
                    <input type="checkbox" onclick="switchMode()" ${showTableMode?'checked':''}>
                    <span class="slider round ${showTableMode?'table': 'compact'}"></span>
                </label>
                <div class="enable-table-view">
                    <p>Enable Table View</p>
                </div>
            </div>
        `
    },
    columnWrapper: function (content) {
        return `
            <div class="column">
                ${content}
            </div>
        `
    },
    appTitle: function (appName) {
        return `
            <div class="application-name">
                <span>
                    ${appName}
                </span>
            </div>
        `
    },
    apiTitle: function apiTitle(code, title) {
        return `
        <div class="main-heading">
            <span>
               ${code} ${title}
            </span>
        </div>
        `
    },
    httpMethod: function (method) {
        return `  <div class="http-method ${method.toLowerCase()}">
            <span>
                ${method}
            </span>
        </div>`
    },
    description: function (description) {
        return `  <div class="row">
        <div class="description">
            <p class="title">Description:</p>
            <p>
                <span id="apiDescription">${description}
                </span>
            </p>
        </div>
    </div>`
    },
    descriptionArea: function (http_method, path, description) {
        return `<div class="explanation-section">
            ${this.description(description)}
            <div class="row">
                ${this.httpMethod(http_method)}
            </div>
            <div class="row">
                <div class="path-topic">
                    <span>Path</span>
                </div>
                <div class="path-url">
                    <span>${path}</span>
                </div>
            </div>
        </div>`
    }
}

const ParamUI = {
    tableView: function (param) {
        const { parameter_name, data_type, description, mandatory, example, references, applicable_value, default_value } = param
        return `<div class="table-view ${showTableMode ? "active" : ""}">
            <div class="parameter-name">
                <span>${parameter_name}</span>
            </div>
            <div class="parameter-table">
                <table>
                    ${!isEmpty(mandatory) ? this.paramRow('IsMandatory', this.getMandatoryValue(mandatory)) : ""}
                    ${!isEmpty(data_type) ? this.paramRow('Data Type', data_type) : ""}
                    ${!isEmpty(description) ? this.paramRow('Description', description) : ""}
                    ${!isEmpty(default_value) ? this.paramRow('Default Value', default_value) : ""}
                    ${!isEmpty(applicable_value) ? this.paramRow('Applicable Values', applicable_value) : ""}
                    ${!isEmpty(example) ? this.paramRow('Example', example) : ""}
                    ${!isEmpty(references) ? this.paramRow('References', this.getReferences(references)) : ""}
                </table>
            </div>
        </div>`
    },
    getReferences: function (links) {
        if (isEmpty(links)) return ``
        let linksHTML = ``
        try {
            for (let { title, app_code, api_code } of links) {
                linksHTML += `<a class="references-link" href="#" onclick="openLinkPopup(this,'${app_code}','${api_code}', event)">${title}</a>`
            }
        } catch {
            console.error("Invalid format for parameter references")
        }
        return linksHTML;
    },
    getMandatoryValue: function (mandatory) {
        const description = mandatory["description"] != undefined && mandatory["description"] != null && mandatory["description"] != "";
        return `${mandatory.status ? "Yes" : "No"} ${description ? `,${mandatory["description"]}` : ""}`
    },
    paramRow: function (title, value) {
        return `
            <tr>
                <th>${title}</th>
                <td>${value}</td>
            </tr>
        `
    },
    paramWrap: function (tableView, compactView) {
        return `
            <div class="param-wrap">
                ${tableView}
                ${compactView}
            </div> 
        `
    },
    compactView: function (param) {
        const { parameter_name, data_type, description, mandatory, example, references, default_value, applicable_value } = param
        return `
            <div class="parameter-default-view  ${showTableMode ? "" : "active"}">
            <div class="row">
                <div class="col-sm">
                    <div class="fit-width-column">
                        <div class="parameter-name">
                            <span>${parameter_name}</span>
                        </div>
                    </div>
                    ${this.mandatoryCompat(mandatory)}
                </div>
                <div class="col-sm">
                    ${this.dataType(data_type)}
                    ${this.defaultValue(default_value)}
                </div>
            </div>
            <div class="param-data-column">
                    ${this.mandatoryCompatCondition(mandatory)}
                    ${this.compactDescription(description)}
                    ${this.compactExample(example)}
                    ${this.compactApplicableValue(applicable_value)}
                    <div class="parameter-references">
                        ${this.getReferences(references)}
                    </div>
            </div>
        </div>
        `
    },
    dataType: function (data_type) {
        if (data_type != undefined) {
            return `<div class="fit-width-column-right">
                <div class="data-type">
                    <span>${data_type}</span>
                </div>
            </div>
            `
        }
        return ``
    },
    compactExample: function (example) {
        if (!isEmpty(example)) {
            return `<div class="parameter-example">
                    <p>Example : ${example}</p>
                </div>
            `
        }
        return ``
    },
    compactApplicableValue: function (applicable_value) {
        if (!isEmpty(applicable_value)) {
            return `<div class="parameter-example">
                    <p>Applicable Values : ${applicable_value}</p>
                </div>
            `
        }
        return ``
    },
    compactDescription: function (description) {
        if (!isEmpty(description)) {
            return `<div class="parameter-description">
                    <p>${description}</p>
                </div>
            `
        }
        return ``
    },
    defaultValue: function (defaultValue) {
        if (!isEmpty(defaultValue)) {
            return ` <div class="fit-width-column-right">
            <div class="default-value-section">
                <span>Default Value: <span>${defaultValue}</span></span>
            </div>
        </div>
            `
        }
        return ``
    },
    mandatoryCompatCondition: function (mandatory) {
        const hasDescription = mandatory !== undefined && !isEmpty(mandatory['description']);
        if (hasDescription) {
            return ` <div class="fit-width-column-right">
            <div class="default-value-section">
                <span>${mandatory["status"] ? "Mandatory" : "Optional"}, <span>${mandatory["description"]}</span></span>
            </div>
        </div>
            `
        }
        return ``
    },
    mandatoryCompat: function (mandatory) {
        const hasDescription = mandatory !== undefined && !isEmpty(mandatory['description']);
        return `<div class="fit-width-column">
            <div class="required-field">
                <span>${mandatory !== undefined && mandatory["status"] ? "Yes" : hasDescription ? "No" :""} ${hasDescription ? `, conditionally` : ""}</span>
            </div>
        </div>`
    },
    section: function (paramSection) {
        const { title, parameters } = paramSection
        let paramsHTML = ``
        for (let parameter of parameters) {
            paramsHTML += this.paramWrap(
                this.tableView(parameter),
                this.compactView(parameter)
            )
        }
        return `
        <div class="header-section">
            <div class="row">
                <div class="col-sm">
                    <div class="sub-heading">
                        <span>${title}</span>
                    </div>
                </div>
            </div>
            <hr>        
            ${paramsHTML}    
        </div>
        `
    }

}

const ErrorUI = {
    section: function (errors) {
        let errorsHTML = ``
        for (let error of errors) {
            errorsHTML += this.error(error)
        }
        return `
            <div class="error-handling">
                <div class="row">
                    <div class="sub-heading">
                        <span>Error Responses</span>
                    </div>
                </div>
                <hr>
                ${errorsHTML}
            </div>
        `
    },
    error: function (errorData) {
        const { error_code, error_response_type, error_category, error_response_params, examples } = errorData;
        let errorFieldHTML = ``
        return `
        <div class="error-response">
            <div class="row">
                <div class="col-sm">
                    <div class="error-category">
                        <span>${error_category}</span>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="fit-width-column-right">
                        <div class="http-code">
                            <span>${error_code}</span>
                        </div>
                    </div>
                    <div class="fit-width-column-right">
                        <div class="error-type">
                            <span>${error_response_type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                ${this.errorResponseDefinition(error_response_params)}
                ${this.errorExamples(examples)}
            </div>
        </div>
        `
    },
    errorResponseDefinition: function (response) {
        let paramsHTML = ``
        if (isNotEmpty(response)) {
            for (let param of response) {
                if (typeof param === 'string') {
                    paramsHTML += `<span>${param}</span>`
                } else {
                    const { param_name, param_value } = param
                    paramsHTML += this.errorParamRow(param_name, param_value)
                }
            }
        }
        return `
        <div class="error-table">
            <table>
                ${paramsHTML}
            </table>
        </div>
        `
    },
    errorExamples: function (errorExamples) {
        let errorHTML = ``
        for (let errorExample of errorExamples) {
            errorHTML += `
                <div class="error-example-section">
                <div class="row">
                    <div class="error-example-topic">
                        <span>
                            Example
                        </span>
                    </div>
                </div>
                <div class="row">
                    <div class="error-example">
                        <span>
                            ${JSON.stringify(errorExample)}
                        </span>
                    </div>
                </div>
            </div>
            `
        }
        return errorHTML
    },
    errorParamRow: function (title, value) {
        return `
        <tr>
            <th>${title}</th>
            <td>${value}</td>
        </tr>`
    }
}

const ResponseUI = {
    // Parsing AppCode and ApiCode to load Curl Popup Page
    section: function (response, curl, app_code, api_code) {
        const { response_code, response_object_type, response_data: { header, body }, example_response } = response
        let paramsHTML = ''
        if (!isEmpty(header)) {
            paramsHTML += ParamUI.section(header)
        }
        if (!isEmpty(body)) {
            paramsHTML += ParamUI.section(body)
        }
        return `
            <div class="header-section">
                ${this.curlSection(curl,app_code,api_code)}        
                ${this.resultSection(response_code, example_response, response_object_type)}        
                ${paramsHTML}    
            </div>
        `
    },
    curlSection: function (curl,app_code,api_code) {
        return ` <div class="api-call-section">
                    <div class="api-call-topic">
                        <div class="row">
                            <div class="col-sm">
                                <span>Call</span>
                            </div>
                            <div class="col-sm">
                                <div class="fit-width-column-right">
                                    <div class="copy-icon" title="Click to Copy API Call" onclick="copyCurl('${app_code}','${api_code}')">
                                        <span class="common-svg copy-white-svg"></span>
                                    </div>
                                </div>
                                <div class="fit-width-column-right">
                                    <div class="build-icon" title="Click to Build API Call" onclick="openAPICallBuildPopup(this,'${app_code}','${api_code}')">
                                        <span class="common-svg hammer-icon"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="api-call">
                        <div class="row">
                            <span class="textarea-code">${curl}</span>
                        </div>
                    </div>
                </div>`
    },
    resultSection: function (statusCode, result, responseObjectType) {
        return `  <div class="response-section">    
            <div class="response-topic-section">
                <div class="row">
                    <div class="col-sm">
                        <div class="response-topic">
                            <span>
                                Response
                            </span>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="fit-width-column-right">
                            <div class="response-code">
                                <span>
                                    ${statusCode}
                                </span>
                            </div>
                        </div>
                        <div class="fit-width-column-right">
                            <div class="response-object-type">
                                <span>
                                    ${responseObjectType}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="response">
                <div class="row">
                    <span class="textarea-code">
                        ${isEmpty(result)?`No Example Provided`:JSON.stringify(result)}
                    </span>
                </div>
            </div>
        </div>`
    },


}

const UserRoleUI = {
    section: function (userRoles) {
        let userRoleHTML = ``
        for (let userRole of userRoles) {
            userRoleHTML += this.userRoleCard(userRole)
        }
        return `
        <div class="header-section">
            <div class="row">
                <div class="col-sm">
                    <div class="sub-heading">
                        <span>User Roles</span>
                    </div>
                </div>
            </div>
            <hr> 
            <div class="row">
                <div class="description">
                    ${userRoleHTML}
                </div> 
            </div>   
        </div>
        `
    },
    userRoleCard: function (userRole) {
        return `
            <div class="user-role">
            ${userRole}
        </div>
        `
    }
}

const BuilderUI= {
    buildParamSection:function(section_id,section){
        if (isNotEmpty(section)) {
            const {title,parameters} =section
            let  paramsHTML = ''
            for (let param of parameters){
                paramsHTML += `
                <div class="popup-parameter-view">
                    <div class="row">
                        <div class="col-sm">
                            <div class="parameter-name-label">
                                <span>${param["parameter_name"]}</span>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="fit-width-column-right">
                                ${this.getParamButton(section_id,param)}
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
            return `<div class="build-popup-section">
                <div class="sub-heading">
                    <span>${title}</span>
                </div>
                <hr>
                <div class="parameter-list">
                    ${paramsHTML}            
                </div>
            </div>`
        }
        else{
            return ``
        }
    },
    getParamButton:function(section_id,param){
        const {parameter_name,mandatory} = param
        if(!isEmpty(mandatory) && !isEmpty(mandatory['status']) && mandatory['status'] && isEmpty(mandatory['description'])){
            curlBuilder.addParams(section_id,parameter_name,true);
            return `<div class="parameter-button mandatory">
                <span>Mandatory</span>
            </div>`
        }
        if(curlBuilder.containsParam(section_id,parameter_name)){
            return `<div class="parameter-button remove" onclick="curlBuilder.addParams('${section_id}','${parameter_name}')">
                <span>Remove</span>
            </div>`
        }else{
            return `<div class="parameter-button add" onclick="curlBuilder.addParams('${section_id}','${parameter_name}')">
                <span>Add</span>
            </div>`
        }
    },
    showPreview:function(curl){
        return `
            <div class="popup-api-call-section">
                <div class="api-call-topic">
                    <div class="row">
                        <div class="col-sm">
                            <span>Call</span>
                        </div>
                        <div class="col-sm">
                            <div class="fit-width-column-right">
                                <div class="copy-icon" title="Click to Copy" onclick="curlBuilder.copyCurl()">
                                    <i class="fa fa-copy"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="api-call">
                    <div class="row">
                        <span class="textarea-code">${curl}</span>
                    </div>
                </div>
            </div>
        `
    },
    getBuilderPage:function(app,api){
        const {api_name,api_code} = api
        curlBuilder.currentAPI = api
        return `
            <div class="popup-row">
                <div class="col-sm popup">
                    <div class="popup-left">
                        <div class="popup-row">
                            <div class="application-name">
                                <span>
                                    ${app['app_name']}
                                </span>
                            </div>
                        </div>
                        <div class="popup-row">
                            <div class="main-heading">
                                <span>
                                ${api_code} ${api_name}
                                </span>
                            </div>
                        </div>
                        <div class="popup-row">
                            <div class="variables">
                                <div class="row variable">
                                    <label for="baseurl" class="labelwidth">Base URL:</label>
                                    <input class="input-area" type="text" id="baseurl" name="baseurl" oninput="curlBuilder.setBaseURL(event)">
                                </div>
                                <div class="row variable">
                                    <label for="apikey" class="labelwidth">API Key:</label>
                                    <input class="input-area" type="text" id="apikey" name="apikey" oninput="curlBuilder.setAPIKey(event)">
                                </div>
                            </div>
                        </div>
                        <div class="param_pallet" id="param_pallet">
                        </div>
                    </div>
                </div>
                <div class="col-sm popup">
                    <div class="popup-right"  id="preview_pallet">
                    </div>
                </div>
            </div>
        `
    },
    getParamPallet:function(app,api){
        return `
            ${this.buildParamSection(ParamSectionIDs.header,api['header'])}
            ${this.buildParamSection(ParamSectionIDs.payload,api['payload'])}
            ${this.buildParamSection(ParamSectionIDs.query_string,api['query_string'])}
        `
    },
    getPreviewPallet:function(){
        return this.showPreview(curlBuilder.curl)
    }
}
