let selectedAppCode = 'intro'
let showTableMode = false;
let currentApp = '';
let currentAPI = '';
let currentPopupApp = '';
let currentPopupAPI = '';

function initPage(){
    loadAuthentication()
    login(username, password);
}

function loadAuthentication(){
    $('#login_page').html(LoginUI.page())
}

function login(username, password) {
    // Simulated logic for demonstration purposes
    if (username === "demo" && password === "demo123") {
        $('#login_page').html(''); // Clear the login page
        $('#sidebar').show(); // Show the sidebar
        $('#content').show(); // Show the content
        buildSideBar();
        loadAPI("brand", "");
        injectPopupFrame();
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}

function injectPopupFrame(){
    $('#popup_page').html(PopupUI.page())
}

function buildSideBar(){
    validateAppsJSON(apps)
    let appLinks = ``
    for(const {app_name,app_code,apis} of apps){
        let appTitle =SideBarUI.appTitle(app_name)
        let apiLinks = '';
        for(const {api_name, api_code} of apis){
            apiLinks+=SideBarUI.apiLink(api_name, api_code)
        }
        appLinks += SideBarUI.appLink(appTitle+SideBarUI.apiLinkWrap(apiLinks),app_code)
    }
    $('#sidebar').html(`
        ${SideBarUI.logo()}
        ${SideBarUI.title()}
        ${SideBarUI.brand()}
        ${SideBarUI.introduction()}
        ${SideBarUI.appSectionDivider()}
        ${appLinks}
        ${SideBarUI.appSectionDivider()}
        ${SideBarUI.appendix()}
    `)
    registerSidebarEvents()
}

function registerSidebarEvents(){
    $('.sidebar-main').click(function(e){
        if (!$(this).hasClass('active')) {
            $('.sidebar-main').removeClass('active');
            $('.app-link').removeClass('active');
            $(this).addClass('active');
            $(this).closest('.app-link').addClass('active');
            const appCode = $(this).data('app-code');
            if(appCode !== 'intro' && appCode !== 'brand' && appCode !== 'appendix')return
            loadAPI(appCode,"");
        }
        else {
            $(this).removeClass('active');
            $(this).closest('.app-link').removeClass('active');
        }
    })
    $('.sidebar-subtopic').click(function(e){
        $('.sidebar-subtopic').removeClass('active');
        $(this).addClass('active');
        const appCode = $(this).closest(".app-link").data('app-code');
        const apiCode = $(this).data('api-code');
        loadAPI(appCode,apiCode);
    })
} 

function loadAPI(appCode,apiCode){
    currentApp=appCode.toString();
    currentAPI=apiCode.toString();
    loadAPIByID(currentApp,currentAPI,'content')
}


function loadReferencePopup(appCode,apiCode){
    currentPopupApp=appCode.toString();
    currentPopupAPI=apiCode.toString();
    loadAPIByID(currentPopupApp,currentPopupAPI,'popup-content')
}

function loadAPIByID(appCode,apiCode,id){
    if(appCode=='brand'){
        $(`#${id}`).html(BrandUI.brand())
        return;
    }
    if(appCode=='intro'){
        $(`#${id}`).html(IntroUI.into())
        return;
    }
    if(appCode=='appendix'){
        $(`#${id}`).html(AppendixUI.appendix())
        return;
    }
    let [app,api] = getApiDefinition(appCode,apiCode)
    $(`#${id}`).html(buildAPIContent(app,api));
    if(id==='popup-content')return;
    $(window).scrollTop(0)
}

function getApiDefinition(appCode,apiCode){
    let api = null;
    let app = null;
    for(const appData of apps){
        const  {app_code,apis}  =appData;
        if(app_code!==appCode)continue;
        app=appData;
        for(const apiData of apis){
            if(apiData['api_code']===apiCode){
                api = apiData
                break
            }
            if(api!==null){
                break
            }
        }
    }
    return [app,api]
}

function switchMode(){
    showTableMode=!showTableMode;
    if($('.popup-section').hasClass('active')){
        loadReferencePopup(currentPopupApp,currentPopupAPI)
    }else{
        loadAPI(currentApp,currentAPI)
    }
}

function copyCurl(appCode,apiCode){
    for(const appData of apps){
        const  {app_code,apis}  =appData;
        if(app_code!==appCode)continue;
        for(const apiData of apis){
            if(apiData['api_code']===apiCode && isNotEmpty(apiData['curl'])){
                navigator.clipboard.writeText(apiData['curl'])
            }
        }
    }
}

function buildAPIContent(app,api){
    const  {app_name,app_code} = app; 
    const {api_name,
        api_description,
        api_code,
        curl,
        http_method,
        path,
        path_params,
        header,
        payload,
        query_string,
        user_roles,
        response,
        error_handling
    } = api; 
    let leftColumn = ``
    let rightColumn = ``
    leftColumn += ContentUI.modeButton()
    leftColumn += ContentUI.appTitle(app_name)
    leftColumn += ContentUI.apiTitle(api_code,api_name)
    leftColumn += ContentUI.descriptionArea(http_method,path,api_description)
    if(!isEmpty(path_params)){
        leftColumn += ParamUI.section(path_params)
    }
    if(!isEmpty(header)){
        leftColumn += ParamUI.section(header)
    }
    if(!isEmpty(query_string)){
        leftColumn += ParamUI.section(query_string)
    }
    if(!isEmpty(payload)){
        leftColumn += ParamUI.section(payload)
    }
    if(!isEmpty(user_roles)){
        leftColumn += UserRoleUI.section(user_roles)
    }
    if(!isEmpty(response)){
        rightColumn += ResponseUI.section(response,curl,app_code,api_code)
    }
    if(!isEmpty(error_handling)){
        rightColumn += ErrorUI.section(error_handling)
    }
    
    return `
        ${ContentUI.columnWrapper(leftColumn)}
        ${ContentUI.columnWrapper(rightColumn)}
    `
}

function openLinkPopup(e,appCode,apiCode,event) {
    event.preventDefault();
    loadReferencePopup(appCode,apiCode)
    setPopupTitle('API Reference')
    openPopupPage();
}

function openPopupPage(){
    $('.popup-section').addClass('active')
}

function setPopupTitle(title){
    $('.popup-section .popup-title').text(title)
}

function closePopupPage(){
    $('.popup-section').removeClass('active')
    curlBuilder.resetCurlBuilder()
}

function openAPICallBuildPopup(e,appCode,apiCode){
    currentPopupApp=appCode
    currentPopupAPI=apiCode
    loadBuilder(appCode,apiCode)
    setPopupTitle('Build API')
    openPopupPage();
    curlBuilder.getBaseURL();
    curlBuilder.getAPIKey();
}

const ParamSectionIDs={
    "path_params":"path_params",
    "header":"header",
    "payload":"payload",
    "query_string":"query_string",
}

const curlBuilder = {
    curl:``,
    currentAPI:{},
    usedParams:{
        "path_params":[],
        "header":[],
        "payload":[],
        "query_string":[],
    },
    resetCurlBuilder:function(){
        this.curl = ``
        this.currentAPI = {}
        this.usedParams = {
            "path_params":[],
            "header":[],
            "payload":[],
            "query_string":[],
        }
    },
    setCurl:function(){
        let baseUrl = `{{baseURL}}`;
        if (isNotEmpty(localStorage.getItem("baseUrl"))) {
            baseUrl = `${localStorage.getItem("baseUrl")}`
        }
        this.curl = `curl -X ${this.currentAPI.http_method} ${baseUrl}/vis${this.currentAPI.path}${curlBuilder.buildCurlbySection("query_string")} ${this.buildCurlbySection("header")} ${this.buildCurlbySection("payload")}`
    },
    getParamDefaultValue:function(section,paramName){
        const sectionParams = this.currentAPI[section].parameters
        let val = "{value}"
        const apiKey = localStorage.getItem("apiKey")
        for (let param of sectionParams){
            if (paramName==="Authorization") {
                val = `APIKEY {SC:#####}`
                if (isNotEmpty(apiKey)) {
                    val = `APIKEY ${apiKey}`
                    break
                }
                break
            }
            if (param.parameter_name===paramName && param.default_value) {
                val = `${param.default_value}`
                break
            }
        }
        return val
    },
    buildCurlbySection:function(sectionName){
        let curlSection = ``
        const section = this.usedParams[sectionName]
        if (section.length>0){
            switch (sectionName) {
                case "query_string":
                    const queryStringParams = section.map(param => `${param}=${this.getParamDefaultValue(sectionName, param)}`);
                    curlSection = `?${queryStringParams.join('&')}`;
                    break
                case "header":
                    curlSection = section.map(param => `-H "${param}: ${this.getParamDefaultValue(sectionName, param)}"`).join(' ');
                    break
                case "payload":
                    const payloadParams = section.map(param => `"${param}": "${this.getParamDefaultValue(sectionName, param)}"`);
                    curlSection = `--data '{ ${payloadParams.join(', ')} }'`;
                    break
            }
        }
        return curlSection
    },
    addParams:function(section_id,param_name,IsMandatory){
        let section = this.usedParams[section_id];
        if(section.includes(param_name)){
            if(!IsMandatory){
                this.usedParams[section_id] = section.filter((e)=>e!==param_name)
            }
        }else{
            section.push(param_name)
            this.usedParams[section_id]=section;
        }
        if(!IsMandatory){
            refreshBuilder();
        }
    },
    containsParam:function(section_id,param_name){
        return this.usedParams[section_id].includes(param_name)
    },
    copyCurl:function(){
        navigator.clipboard.writeText(this.curl);
    },
    setBaseURL:function(event){
        localStorage.setItem("baseUrl", event.target.value);
        refreshBuilder();
    },
    getBaseURL:function(){
        document.getElementById("baseurl").value = localStorage.getItem("baseUrl");
    },
    setAPIKey:function(event){
        localStorage.setItem("apiKey", event.target.value);
        refreshBuilder();
    },
    getAPIKey:function(){
        document.getElementById("apikey").value = localStorage.getItem("apiKey");
    }
}

function loadBuilder(appCode,apiCode){
    const [app,api] = getApiDefinition(appCode,apiCode)
    $(`#popup-content`).html(BuilderUI.getBuilderPage(app,api));
    $(`#param_pallet`).html(BuilderUI.getParamPallet(app,api));
    curlBuilder.setCurl()
    $(`#preview_pallet`).html(BuilderUI.getPreviewPallet());
}
function refreshBuilder(){
    const [app,api] = getApiDefinition(currentPopupApp,currentPopupAPI)
    $(`#param_pallet`).html(BuilderUI.getParamPallet(app,api));
    curlBuilder.setCurl()
    $(`#preview_pallet`).html(BuilderUI.getPreviewPallet());
}