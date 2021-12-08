const USER_ID = "";
const API_TOKEN = "";
const AUTHOR_ID = "8b819da9-81e7-42e4-992e-cd1a9c3a823b";
const SCRIPT_NAME = "AutoHeal";
const HEADERS = {
  "x-client" : AUTHOR_ID + "-" + SCRIPT_NAME,
  "x-api-user" : USER_ID,
  "x-api-key" : API_TOKEN,
}

const doPost = (e) => {
  var dataContents = JSON.parse(e.postData.contents);
  var damage = dataContents.chat.info.bossDamage;
  if (damage > 0.0){
      heal();
  }
  return HtmlService.createHtmlOutput();
};

function heal(){
  var params = {
    "method" : "post", 
    "headers" : HEADERS
  }
  var url = "https://habitica.com/api/v3/user/class/cast/healAll"
  UrlFetchApp.fetch(url, params);
}
