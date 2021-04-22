(function(window) {
    window.env = window.env || {};
  
    // Environment variables
    window["env"]["baseUrl"] = "${API_URL}";
    window["env"]["loginType"] = "${LOGIN_TYPE}";
    window["env"]["showMarkAsComplete"] = "${MARK_AS_COMPLETE}";
  })(this);